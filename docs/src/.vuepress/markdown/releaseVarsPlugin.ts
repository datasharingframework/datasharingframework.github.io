import type { PluginSimple } from 'markdown-it';
import { getReleaseFromPath, tagUnderscored, type Release } from '../data/releases.js';

const TOKEN_RE = /\{\{\s*release\.([a-zA-Z0-9_.]+)\s*\}\}/g;

export function replaceReleaseTokens(input: string, release: Release): string {
  return input.replace(TOKEN_RE, (match, key) => {
    const value = resolve(release, key);
    return value !== undefined ? value : match;
  });
}

function resolve(release: Release, key: string): string | undefined {
  if (key === 'tag') return release.tag;
  if (key === 'tagUnderscored') return tagUnderscored(release.tag);
  if (key === 'previousTag') return release.previousTag;
  if (key === 'previousTagUnderscored')
    return release.previousTag ? tagUnderscored(release.previousTag) : undefined;

  const imageMatch = key.match(/^image\.([a-z_]+)$/);
  if (imageMatch) {
    const name = imageMatch[1] as keyof Release['images'];
    if (release.images[name]) return `ghcr.io/datasharingframework/${name}:${release.tag}`;
  }
  const previousImageMatch = key.match(/^previousImage\.([a-z_]+)$/);
  if (previousImageMatch && release.previousTag) {
    const name = previousImageMatch[1] as keyof Release['images'];
    if (release.images[name]) return `ghcr.io/datasharingframework/${name}:${release.previousTag}`;
  }
  const digestMatch = key.match(/^digest\.([a-z_]+)$/);
  if (digestMatch) {
    const name = digestMatch[1] as keyof Release['images'];
    const digest = release.images[name]?.digest;
    if (!digest || /TODO/i.test(digest)) return '<digest>';
    return digest.replace(/^sha256:/, '');
  }
  return undefined;
}

export const releaseVarsPlugin: PluginSimple = (md) => {
  md.core.ruler.before('normalize', 'release-vars', (state) => {
    const env = state.env ?? {};
    const filePath: string = env.filePathRelative ?? env.filePath ?? '';
    if (!filePath) return;

    const release = getReleaseFromPath('/' + filePath.replace(/^\/+/, ''));
    if (!release) return;

    state.src = replaceReleaseTokens(state.src, release);
  });
};
