import { Sources } from '../types/source';

type SourceFormatter = (slug: string) => string;

export const SourceFormatters: Record<Sources, SourceFormatter> = {
  [Sources.BitBucket]: (slug) => {
    return `https://bitbucket.org/${slug}`;
  },
  [Sources.GitHub]: (slug) => {
    return `https://github.com/${slug}`;
  },
  [Sources.Gitlab]: (slug) => {
    return `https://gitlab.com/${slug}`;
  },
};
