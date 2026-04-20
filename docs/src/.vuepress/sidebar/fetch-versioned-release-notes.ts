#!/usr/bin/env npx tsx
// Fetches GitHub release notes for all versions in releases.ts and writes them
// as Markdown files into the corresponding operations/v<tag>/ directories.
//
// Usage:  npx tsx fetch-versioned-release-notes.ts
// Docs:   https://wiki.gecko.hs-heilbronn.de/doc/dokumentation-release-notes-script-45Ex3hoxjB

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

async function fetchAllReleases(): Promise<GitHubRelease[]> {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases?per_page=100`;
  console.log('Fetching all releases...');
  const res = await fetch(url, {
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  return res.json() as Promise<GitHubRelease[]>;
}

function linkify(body: string): string {
  // Convert #123 to GitHub issue link
  body = body.replace(/#(\d+)/g, `[#$1](https://github.com/${REPO_OWNER}/${REPO_NAME}/issues/$1)`);
  // Convert @username to GitHub user link
  body = body.replace(/@([a-zA-Z0-9_-]+)/g, '[@$1](https://github.com/$1)');
  return body;
}

async function main() {
  const releases = await fetchAllReleases();
  const releaseByTag = new Map(releases.map(r => [r.tag_name, r]));

  for (const { tag } of allVersions) {
    const version = `v${tag}`;
    const release = releaseByTag.get(version);

    if (!release) {
      console.log(`No release found for version ${version}`);
      continue;
    }

    const versionDir = resolve(OUTPUT_BASE, version);
    if (!existsSync(versionDir)) {
      console.log(`Directory ${versionDir} does not exist. Skipping ${version}.`);
      continue;
    }

    const outputFile = resolve(versionDir, 'release-notes.md');
    const body = linkify(release.body ?? '');

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

    writeFileSync(outputFile, content, 'utf-8');
    console.log(`Release notes for version ${version} saved to ${outputFile}`);
  }

  console.log('Process completed.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
