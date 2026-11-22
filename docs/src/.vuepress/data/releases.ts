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
  '2.1.1': {
    tag: '2.1.1',
    previousTag: '2.1.0',
    images: {
      fhir:       { digest: 'sha256:708188c5f03224f4a5adf84ae2297c7161c86590d5b392eb7338a91e4fe7b5f3' },
      fhir_proxy: { digest: 'sha256:70792c0783b53a94a706ad671dae726e3a9b18bad1711042d700860edc544b36' },
      bpe:        { digest: 'sha256:cc88a676806e835b1b35ab7f1e5e231b537a10668b24bd8999180f6dc22b5513' },
      bpe_proxy:  { digest: 'sha256:cabedb0ed04191ae82d9d64ad141ee9ef2a3420daba777ca223700a61cad9285' },
    },
  },
  '2.1.2': {
    tag: '2.1.2',
    previousTag: '2.1.1',
    images: {
      fhir:       { digest: 'sha256:e73aaa26310800c09d19eea93a1c77bde73bf4b7f95239214fd3a820a1c86e40' },
      fhir_proxy: { digest: 'sha256:01f6a7cc28ad324a7764bcac02bf23344cb554a44df4ca294d91aba458bf8fbd' },
      bpe:        { digest: 'sha256:a900502e89f213d70745bde83c905c6ee5ca00528aff41ee75a2c9b5c8e9fbc8' },
      bpe_proxy:  { digest: 'sha256:17078749f3fb3d2d489250221b7f6cca480d02e041d71abf4857aff72c924ae6' },
    },
  },
  '2.1.3': {
    tag: '2.1.3',
    previousTag: '2.1.2',
    images: {
      fhir:       { digest: 'sha256:TODO' },
      fhir_proxy: { digest: 'sha256:TODO' },
      bpe:        { digest: 'sha256:TODO' },
      bpe_proxy:  { digest: 'sha256:TODO' },
    },
  },
};

// --- Version registry (single source of truth) ---
// Sidebar keys reference generator functions by name; mapped in theme.ts.
// Ordered newest-first.
export type SidebarKey = 'v2_latest' | 'v2_1_2' | 'v2_1_1' | 'v2_1_0' | 'v2_0_0' | 'v1_latest' | 'v1_gte_1_7' | 'v1_gte_1_5' | 'v1_gte_1_0';

export interface VersionEntry {
  tag: string;
  sidebar: SidebarKey;
}

export const allVersions: VersionEntry[] = [
  { tag: '2.1.3', sidebar: 'v2_latest' },
  { tag: '2.1.2', sidebar: 'v2_1_2' },
  { tag: '2.1.1', sidebar: 'v2_1_1' },
  { tag: '2.1.0', sidebar: 'v2_1_0' },
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

export const latestVersion = '2.1.3';

export function getReleaseFromPath(path: string): Release | undefined {
  const versionMatch = path.match(/(?:^|\/)operations\/v(\d+\.\d+\.\d+)\//);
  if (versionMatch) return releases[versionMatch[1]];
  if (/(?:^|\/)operations\/latest\//.test(path)) return releases[latestVersion];
  return undefined;
}

export function tagUnderscored(tag: string): string {
  return tag.replace(/\./g, '_');
}
