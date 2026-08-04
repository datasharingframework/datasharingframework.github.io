#!/usr/bin/env npx tsx
// Fetches GitHub release notes for DSF versions and writes them as Markdown
// files into the corresponding operations/v<tag>/ directories.
//
// Usage:  npx tsx fetch-versioned-release-notes.ts 2.1.0 [2.1.1 ...]
//         npx tsx fetch-versioned-release-notes.ts --all
// Docs:   https://wiki.gecko.hs-heilbronn.de/doc/dokumentation-release-notes-script-45Ex3hoxjB
//
// --all regenerates every version and overwrites edits made to a release-notes.md
// after it was generated, so pass explicit versions unless that is intended.

import { writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { allVersions } from '../data/releases.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const REPO_OWNER = 'datasharingframework';
const REPO_NAME = 'dsf';
const OUTPUT_BASE = resolve(__dirname, '../../operations');

interface GitHubRelease {
  tag_name: string;
  name: string;
  body: string;
}

async function fetchRelease(version: string): Promise<GitHubRelease | null> {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/tags/${version}`;
  const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
  // optional, only needed to avoid the rate limit for unauthenticated requests
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const res = await fetch(url, { headers });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  return res.json() as Promise<GitHubRelease>;
}

// Rewriting must skip code, otherwise config samples and image digests
// (ghcr.io/...@sha256:...) get mangled.
const CODE_SEGMENT = /(```[\s\S]*?```|~~~[\s\S]*?~~~|`[^`\n]+`)/;
// Inside links and bare URLs, #123 and @name are part of the target, not a reference.
const LINK_SEGMENT = /(\[[^\]]*\]\([^)]*\)|<[^>\s]+>|https?:\/\/\S+)/;

// split() keeps the captured separators at the odd indices, so only the even
// ones are handed to the callback
function mapUnmatched(text: string, separator: RegExp, fn: (part: string) => string): string {
  return text.split(separator).map((part, i) => (i % 2 === 0 ? fn(part) : part)).join('');
}

function normalize(body: string): string {
  return body
    // the GitHub API returns CRLF, every other file in this repo uses LF
    .replace(/\r\n/g, '\n')
    // drop a single trailing space but keep 2+, those are markdown hard breaks
    .replace(/[^\S\n]+$/gm, (spaces) => (spaces.length > 1 ? spaces : ''))
    .trimEnd();
}

// Link targets pointing at our own site must be relative, otherwise VuePress
// treats them as external links and cannot check or route them. Only https
// targets are rewritten, http://dsf.dev/fhir/... are FHIR canonical URLs.
function relativizeSiteLinks(body: string): string {
  return mapUnmatched(body, CODE_SEGMENT, (text) =>
    text.replace(/\]\(https:\/\/(?:www\.)?dsf\.dev(\/[^)]*)\)/g, ']($1)')
  );
}

function linkify(body: string): string {
  return mapUnmatched(body, CODE_SEGMENT, (text) =>
    mapUnmatched(text, LINK_SEGMENT, (plain) =>
      plain
        // #123 to GitHub issue link
        .replace(/(^|[^\w&#])#(\d+)\b/g, `$1[#$2](https://github.com/${REPO_OWNER}/${REPO_NAME}/issues/$2)`)
        // @username to GitHub user link, a leading word character means it is an email address
        .replace(/(^|[^\w.@/-])@([A-Za-z\d](?:-?[A-Za-z\d]){0,38})\b/g, '$1[@$2](https://github.com/$2)')
    )
  );
}

function usage(): never {
  console.error('Usage: npx tsx fetch-versioned-release-notes.ts <version>... | --all');
  console.error('  Example: npx tsx fetch-versioned-release-notes.ts 2.1.0');
  process.exit(1);
}

async function main() {
  const args = process.argv.slice(2);
  const versions = args.includes('--all')
    ? allVersions.map(({ tag }) => `v${tag}`)
    : args.map((arg) => (arg.startsWith('v') ? arg : `v${arg}`));

  if (versions.length === 0) usage();

  for (const version of versions) {
    const versionDir = resolve(OUTPUT_BASE, version);
    if (!existsSync(versionDir)) {
      console.log(`Directory ${versionDir} does not exist. Skipping ${version}.`);
      process.exitCode = 1;
      continue;
    }

    const release = await fetchRelease(version);
    if (!release) {
      console.log(`No release found for version ${version}`);
      process.exitCode = 1;
      continue;
    }

    const body = linkify(relativizeSiteLinks(normalize(release.body ?? '')));

    const content = `---
title: Release Notes (${version})
icon: note
---

## [Release Notes for ${version}](https://github.com/${REPO_OWNER}/${REPO_NAME}/releases/tag/${version})

::: tip Release Notes
You can access all release notes on our [GitHub](https://github.com/datasharingframework/dsf/releases).
:::

### ${release.name}
${body}
`;

    const outputFile = resolve(versionDir, 'release-notes.md');
    writeFileSync(outputFile, content, 'utf-8');
    console.log(`Release notes for version ${version} saved to ${outputFile}`);
  }

  console.log('Process completed.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
