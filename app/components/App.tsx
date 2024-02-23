import { Header } from './Header';
import { AppCard } from './apps/AppCard';
import styles from './App.module.scss';
import { App } from '../types/app';
import { apps } from '../../apps';

export function App() {
  return (
    <div className={styles.app}>
      <Header>Hiya!</Header>
      {apps.length > 0 && (
        <div className={styles.apps}>
          {apps.map((app, index) => (
            <AppCard key={index} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
