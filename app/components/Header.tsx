import styles from './Header.module.scss';
import image from '../../images/favicon-96.png';
import { ReactNode } from 'react';

export type HeaderProps = {
  children: ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div>{children}</div>
      <img className={styles.icon} src={image} />
    </div>
  );
}
