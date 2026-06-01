#!/usr/bin/env npx tsx
// Creates a new DSF documentation version.
//
// Usage:  npx tsx docs/src/.vuepress/scripts/create-version.ts <new-version>
// Example: npx tsx docs/src/.vuepress/scripts/create-version.ts 2.2.0
//
// What it does:
//   1. Copies the current latest version folder to operations/v<new-version>/
//   2. Updates releases.ts: adds new entry to allVersions, updates latestVersion,
//      adds a releases entry with TODO digests
//   3. Updates the latest symlink to point to v<new-version>/
//   4. Runs fetch-versioned-release-notes.ts if a GitHub release exists

import { cpSync, existsSync, readFileSync, writeFileSync, unlinkSync, symlinkSync, realpathSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OPERATIONS_DIR = resolve(__dirname, '../../operations');
const RELEASES_FILE = resolve(__dirname, '../data/releases.ts');

function die(msg: string): never {
  console.error(`Error: ${msg}`);
  process.exit(1);
}

function parseVersion(v: string): [number, number, number] {
  const m = v.match(/^(\d+)\.(\d+)\.(\d+)$/);
  if (!m) die(`Invalid version format: "${v}". Expected X.Y.Z`);
  return [parseInt(m![1]), parseInt(m![2]), parseInt(m![3])];
}

function main() {
  const newVersion = process.argv[2];
  if (!newVersion) die('Usage: npx tsx create-version.ts <new-version>\n  Example: npx tsx create-version.ts 2.2.0');

  parseVersion(newVersion); // validate format

  const newDir = resolve(OPERATIONS_DIR, `v${newVersion}`);
  if (existsSync(newDir)) die(`Directory ${newDir} already exists.`);

  // --- 1. Determine current latest and copy ---
  const latestLink = resolve(OPERATIONS_DIR, 'latest');
  const currentLatestDir = realpathSync(latestLink);
  const currentLatestVersion = currentLatestDir.match(/v(\d+\.\d+\.\d+)$/)?.[1];
  if (!currentLatestVersion) die(`Could not determine current latest version from symlink: ${currentLatestDir}`);

  console.log(`Copying v${currentLatestVersion}/ → v${newVersion}/...`);
  cpSync(currentLatestDir, newDir, { recursive: true });

  // --- 2. Update releases.ts ---
  console.log('Updating releases.ts...');
  let src = readFileSync(RELEASES_FILE, 'utf-8');

  // Determine sidebar key from previous latest
  const prevSidebarMatch = src.match(new RegExp(`\\{\\s*tag:\\s*'${currentLatestVersion}'\\s*,\\s*sidebar:\\s*'([^']+)'`));
  const sidebarKey = prevSidebarMatch?.[1] ?? 'v2_latest';

  // Add new entry at the top of allVersions
  const allVersionsMarker = 'export const allVersions: VersionEntry[] = [';
  const newEntry = `  { tag: '${newVersion}', sidebar: '${sidebarKey}' },`;
  src = src.replace(allVersionsMarker, `${allVersionsMarker}\n${newEntry}`);

  // Update latestVersion
  src = src.replace(
    /export const latestVersion = '[^']+';/,
    `export const latestVersion = '${newVersion}';`
  );

  // Add releases entry with TODO digests (if major >= 2)
  const [major] = parseVersion(newVersion);
  if (major >= 2) {
    const releasesClosingBrace = /^};$/m;
    const newRelease = `  '${newVersion}': {
    tag: '${newVersion}',
    previousTag: '${currentLatestVersion}',
    images: {
      fhir:       { digest: 'sha256:TODO' },
      fhir_proxy: { digest: 'sha256:TODO' },
      bpe:        { digest: 'sha256:TODO' },
      bpe_proxy:  { digest: 'sha256:TODO' },
    },
  },\n`;
    src = src.replace(releasesClosingBrace, `${newRelease}};`);
  }

  writeFileSync(RELEASES_FILE, src, 'utf-8');

  // --- 3. Update latest symlink ---
  console.log(`Updating latest symlink → v${newVersion}/...`);
  unlinkSync(latestLink);
  symlinkSync(`v${newVersion}`, latestLink);

  // --- 4. Fetch release notes (if release exists) ---
  const fetchScript = resolve(__dirname, '../sidebar/fetch-versioned-release-notes.ts');
  if (existsSync(fetchScript)) {
    console.log('Fetching release notes...');
    try {
      execSync(`npx tsx "${fetchScript}"`, { stdio: 'inherit' });
    } catch {
      console.log('(Release notes fetch had warnings — may not exist on GitHub yet)');
    }
  }

  // --- Done ---
  console.log(`\n✓ Version ${newVersion} created successfully.\n`);
  console.log('Remaining manual steps:');
  console.log(`  1. Update image digests in releases.ts (replace sha256:TODO)`);
  console.log(`  2. Review/edit release-specific content in operations/v${newVersion}/`);
  console.log(`     (release-notes.md, upgrade-from-*.md if upgrade steps differ)`);
  console.log(`  3. Run: cd docs && npm run docs:build`);
}

main();
