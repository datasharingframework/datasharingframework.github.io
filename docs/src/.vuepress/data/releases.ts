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
      fhir:       { digest: 'sha256:TODO' },
      fhir_proxy: { digest: 'sha256:TODO' },
      bpe:        { digest: 'sha256:2087a12f2cc8386a019bc9706f8bcfdcd5ee9e12da07ca2bd5f09aaaba8133d7' },
      bpe_proxy:  { digest: 'sha256:TODO' },
    },
  },
};

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
