import classNames from 'classnames';
import styles from './CardImage.module.scss';

export type CardImageProps = {
  aspectRatio?: string;
  className?: string;
  src: string;
};

export function CardImage({ aspectRatio, className, src }: CardImageProps) {
  return (
    <div
      className={classNames(styles.image, className)}
      style={{
        aspectRatio: aspectRatio ?? '2/1',
        backgroundImage: `url(${src})`,
      }}
    />
  );
}