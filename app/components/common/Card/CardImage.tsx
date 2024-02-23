import styles from './CardImage.module.scss';

export type CardImageProps = {
  src: string;
};

export function CardImage({ src }: CardImageProps) {
  return (
    <div
      className={styles.image}
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  );
}
