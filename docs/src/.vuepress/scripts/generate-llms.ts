#!/usr/bin/env npx tsx
// Generates the llms.txt and llms-full.txt files in public/ from the curated
// index in llms-index.ts and the markdown documentation sources.
//
// Usage:  npx tsx docs/src/.vuepress/scripts/generate-llms.ts
//   or:   cd docs && npm run docs:generate-llms
//
// - llms.txt:      concise, sectioned index of links + descriptions (llmstxt.org)
// - llms-full.txt: the same pages with their full markdown content inlined
//
// What it does for the full-text file:
//   1. Maps each dsf.dev link to its markdown source (resolving /latest/ to the
//      current latestVersion and .html to the .md / README.md file)
//   2. Strips frontmatter and resolves {{release.*}} tokens exactly like the site
//      (reusing replaceReleaseTokens from the markdown plugin)
//   3. Emits "## <title>\nSource: <url>\n\n<content>" blocks
//
// External links and pages without a markdown source are kept in llms.txt but
// skipped in llms-full.txt; any skipped dsf.dev pages are reported at the end.

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { sections, fullExtra, intro, title, siteUrl, type LlmsPage } from './llms-index.js';
import { getReleaseFromPath, latestVersion } from '../data/releases.js';
import { replaceReleaseTokens } from '../markdown/releaseVarsPlugin.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(__dirname, '../..'); // docs/src
const PUBLIC = resolve(__dirname, '../public'); // docs/src/.vuepress/public

function isExternal(link: string): boolean {
  return /^https?:\/\//.test(link);
}

function fullUrl(link: string): string {
  return isExternal(link) ? link : `${siteUrl}/${link.replace(/^\//, '')}`;
}

function allPages(): LlmsPage[] {
  const pages: LlmsPage[] = [];
  for (const s of sections) {
    pages.push(...s.pages);
    for (const sub of s.subsections ?? []) pages.push(...sub.pages);
  }
  return pages;
}

// Map a dsf.dev-relative link to its markdown source path (relative to docs/src),
// or null if it is external or has no markdown file (route alias, blog, etc.).
function sourceRel(link: string): string | null {
  if (isExternal(link)) return null;
  let p = link.replace(/^\//, '').replace(/^operations\/latest\//, `operations/v${latestVersion}/`);
  p = p.replace(/\.html$/, '');
  const stem = p.replace(/\/$/, '');
  const candidates: string[] = [];
  if (!p.endsWith('/')) candidates.push(`${stem}.md`);
  candidates.push(`${stem}/README.md`, `${stem}/readme.md`, `${stem}/index.md`);
  for (const c of candidates) if (existsSync(resolve(SRC, c))) return c;
  return null;
}

function stripFrontmatter(md: string): string {
  if (!md.startsWith('---')) return md;
  const end = md.indexOf('\n---', 3);
  if (end === -1) return md;
  const newline = md.indexOf('\n', end + 1);
  return newline === -1 ? '' : md.slice(newline + 1);
}

function pageBody(rel: string): string {
  let md = readFileSync(resolve(SRC, rel), 'utf-8').replace(/\r\n/g, '\n');
  md = stripFrontmatter(md);
  const release = getReleaseFromPath('/' + rel);
  if (release) md = replaceReleaseTokens(md, release);
  return md.trim();
}

function buildIndex(): string {
  const out: string[] = [`# ${title}`, '', `> ${intro}`, ''];
  for (const s of sections) {
    out.push(`## ${s.heading}`, '');
    for (const p of s.pages) out.push(`- [${p.title}](${fullUrl(p.link)}): ${p.description}`);
    if (s.pages.length) out.push('');
    for (const sub of s.subsections ?? []) {
      out.push(`### ${sub.heading}`, '');
      for (const p of sub.pages) out.push(`- [${p.title}](${fullUrl(p.link)}): ${p.description}`);
      out.push('');
    }
  }
  return out.join('\n').replace(/\n+$/, '\n');
}

function buildFull(): { text: string; skipped: string[]; inlined: number } {
  const out: string[] = [`# ${title}`, '', `> ${intro}`, ''];
  const skipped: string[] = [];
  const seen = new Set<string>();
  let inlined = 0;
  for (const p of [...allPages(), ...fullExtra]) {
    const rel = sourceRel(p.link);
    if (!rel) {
      if (!isExternal(p.link)) skipped.push(p.link);
      continue;
    }
    if (seen.has(rel)) continue; // page already inlined via the index
    seen.add(rel);
    out.push('---', '', `## ${p.title}`, `Source: ${fullUrl(p.link)}`, '', pageBody(rel), '');
    inlined++;
  }
  return { text: out.join('\n').replace(/\n+$/, '\n'), skipped, inlined };
}

function main(): void {
  const check = process.argv.includes('--check');
  const index = buildIndex();
  const { text: full, skipped, inlined } = buildFull();
  const targets: [string, string][] = [
    [resolve(PUBLIC, 'llms.txt'), index],
    [resolve(PUBLIC, 'llms-full.txt'), full],
  ];

  if (check) {
    const stale = targets.filter(([path, content]) => {
      const current = existsSync(path) ? readFileSync(path, 'utf-8') : '';
      return current !== content;
    });
    if (stale.length) {
      console.error('✗ llms files are out of date. Run: npm run docs:generate-llms');
      for (const [path] of stale) console.error(`  - ${path.replace(`${SRC}/`, 'src/')}`);
      process.exit(1);
    }
    console.log('✓ llms.txt and llms-full.txt are up to date');
    return;
  }

  for (const [path, content] of targets) writeFileSync(path, content, 'utf-8');

  console.log(`✓ Wrote llms.txt (${allPages().length} links)`);
  console.log(`✓ Wrote llms-full.txt (${inlined} pages inlined, latest = v${latestVersion})`);
  if (skipped.length) {
    console.log(`\nNote: ${skipped.length} dsf.dev page(s) had no markdown source and were left out of llms-full.txt:`);
    for (const s of skipped) console.log(`  - ${s}`);
  }
}

main();
