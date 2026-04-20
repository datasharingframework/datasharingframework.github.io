export interface ReleaseImage {
  digest?: string;
}

export interface Release {
  tag: string;
  previousTag?: string;
  images: {
    fhir: ReleaseImage;
    fhir_proxy: ReleaseImage;
    bpe: ReleaseImage;
    bpe_proxy: ReleaseImage;
  };
}

export const releases: Record<string, Release> = {
  '2.1.0': {
    tag: '2.1.0',
    previousTag: '2.0.2',
    images: {
      fhir:       { digest: 'sha256:71599af143f0262a7265aa2bc4ea5a9660f11de6248a053e060b5667070203fd' },
      fhir_proxy: { digest: 'sha256:9f11a3580c970314532f5951808be6fe72f1de7d53348e625d2dd0c95bcf1d96' },
      bpe:        { digest: 'sha256:3ee7ef0ac201fc3776273fbfc2569bdc4edf724a2bb9f1b4a889eb7e13ff4049' },
      bpe_proxy:  { digest: 'sha256:c67da4a1720ea75a383764db2bf25619fe70f57773b1069029f5b49588eb1ecc' },
    },
  },
};

// --- Version registry (single source of truth) ---
// Sidebar keys reference generator functions by name; mapped in theme.ts.
// Ordered newest-first.
export type SidebarKey = 'v2_latest' | 'v2_0_0' | 'v1_latest' | 'v1_gte_1_7' | 'v1_gte_1_5' | 'v1_gte_1_0';

export interface VersionEntry {
  tag: string;
  sidebar: SidebarKey;
}

export const allVersions: VersionEntry[] = [
  { tag: '2.1.0', sidebar: 'v2_latest' },
  { tag: '2.0.2', sidebar: 'v2_0_0' },
  { tag: '2.0.1', sidebar: 'v2_0_0' },
  { tag: '2.0.0', sidebar: 'v2_0_0' },
  { tag: '1.9.0', sidebar: 'v1_latest' },
  { tag: '1.8.0', sidebar: 'v1_gte_1_7' },
  { tag: '1.7.1', sidebar: 'v1_gte_1_7' },
  { tag: '1.7.0', sidebar: 'v1_gte_1_7' },
  { tag: '1.6.0', sidebar: 'v1_gte_1_5' },
  { tag: '1.5.2', sidebar: 'v1_gte_1_5' },
  { tag: '1.5.1', sidebar: 'v1_gte_1_5' },
  { tag: '1.5.0', sidebar: 'v1_gte_1_5' },
  { tag: '1.4.0', sidebar: 'v1_gte_1_0' },
  { tag: '1.3.2', sidebar: 'v1_gte_1_0' },
  { tag: '1.3.1', sidebar: 'v1_gte_1_0' },
  { tag: '1.3.0', sidebar: 'v1_gte_1_0' },
  { tag: '1.2.0', sidebar: 'v1_gte_1_0' },
  { tag: '1.1.0', sidebar: 'v1_gte_1_0' },
  { tag: '1.0.0', sidebar: 'v1_gte_1_0' },
];

export const latestVersion = '2.1.0';

export function getReleaseFromPath(path: string): Release | undefined {
  const versionMatch = path.match(/(?:^|\/)operations\/v(\d+\.\d+\.\d+)\//);
  if (versionMatch) return releases[versionMatch[1]];
  if (/(?:^|\/)operations\/latest\//.test(path)) return releases[latestVersion];
  return undefined;
}

export function tagUnderscored(tag: string): string {
  return tag.replace(/\./g, '_');
}
