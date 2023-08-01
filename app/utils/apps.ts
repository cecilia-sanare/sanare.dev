import { App } from '../types/app';
import { Status } from '../types/status';
import { groupBy } from './group';

export function groupAppsByStatus(apps: App[]): Record<Status, App[]> {
  return groupBy(apps, 'status');
}
