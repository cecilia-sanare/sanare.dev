import { ParcelDist } from '../types/parcel';

type ParcelFormatter = (slug: string) => string;
type ParcelLinks = {
  url: ParcelFormatter;
};

export const PARCEL_LINKS: Record<ParcelDist, ParcelLinks> = {
  [ParcelDist.NPM]: {
    url: (slug) => {
      return `https://npmjs.com/${slug}`;
    },
  },
};
