import { ReactNode } from 'react';
import styles from './CardHeader.module.scss';

export type CardHeaderProps = {
  children: ReactNode;
};

export function CardHeader({ children }: CardHeaderProps) {
  return <div className={styles.header}>{children}</div>;
}
