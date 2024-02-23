import { useReadOnlyCachedState } from '../../hooks/use-cached-state';
import { FrameworkParcel, LibraryParcel, ParcelDist } from '../../types/parcel';
import { PARCEL_LINKS } from '../../utils/parcel';
import styles from './ParcelBadges.module.scss';

export type ParcelBadgesProps = {
  parcel: LibraryParcel | FrameworkParcel;
};

export function ParcelBadges({ parcel }: ParcelBadgesProps) {
  const [versionUrl, downloadsUrl] = useReadOnlyCachedState(() => {
    const [type, slug] = parcel.parcel.split(':') as [ParcelDist, string];

    const links = PARCEL_LINKS[type];

    return [links.shields.version(slug), links.shields.download(slug)];
  }, [parcel]);

  return (
    <div className={styles.badges}>
      <img src={versionUrl} title="Version" />
      <img src={downloadsUrl} title="Downloads" />
    </div>
  );
}
