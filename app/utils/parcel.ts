import { ParcelDist } from '../types/parcel';

type ParcelFormatter = (slug: string) => string;
type ParcelLinks = {
  url: ParcelFormatter;
  shields: {
    download: ParcelFormatter;
    version: ParcelFormatter;
  };
};

export const PARCEL_LINKS: Record<ParcelDist, ParcelLinks> = {
  [ParcelDist.NPM]: {
    url: (slug) => {
      return `https://npmjs.com/${slug}`;
    },
    shields: {
      download: (slug) => {
        return `https://img.shields.io/npm/dm/${slug}.svg?style=flat`;
      },
      version: (slug) => {
        return `https://img.shields.io/npm/v/${slug}.svg?style=flat`;
      },
    },
  },
};
