import { AppStatus } from './status';

export type App = {
  name: string;
  image: string;
  description?: string;
  url?: string;
  repo: string;
  status: AppStatus;
};
