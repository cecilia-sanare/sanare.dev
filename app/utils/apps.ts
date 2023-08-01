import { App } from '../types/app';
import { AppStatus } from '../types/status';
import { groupBy } from './group';

export function groupAppsByStatus(apps: App[]): Record<AppStatus, App[]> {
  return groupBy(apps, 'status');
}
