import { Status } from './status';

export enum ParcelDist {
  NPM = 'npm',
}

export enum ParcelType {
  Library = 'library',
  Framework = 'framework',
  App = 'app',
}

type ParcelBase = {
  type: ParcelType;
  name: string;
  description: string;
  url?: string;
  repo: string;
  status: Status;
};

export type LibraryParcel = ParcelBase & {
  type: ParcelType.Library;
  parcel: string;
};

export type FrameworkParcel = ParcelBase & {
  type: ParcelType.Framework;
  imageUrl: string;
  parcel: string;
};

export type AppParcel = ParcelBase & {
  type: ParcelType.App;
  imageUrl: string;
};

export type Parcel = LibraryParcel | FrameworkParcel | AppParcel;

export function isPackage(parcel: Parcel): parcel is LibraryParcel | FrameworkParcel {
  return [ParcelType.Library, ParcelType.Framework].includes(parcel.type);
}

export function isImageParcel(parcel: Parcel): parcel is FrameworkParcel | AppParcel {
  return [ParcelType.Framework, ParcelType.App].includes(parcel.type);
}
