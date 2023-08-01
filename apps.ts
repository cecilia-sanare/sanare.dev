import { App } from './app/types/app';
import { AppStatus } from './app/types/status';
import { sortBy } from './app/utils/sort';

const _apps: App[] = [
  {
    name: 'Flarie',
    image: 'https://repository-images.githubusercontent.com/659549026/891e12dd-c7f7-41d4-a689-c68ba76d1dee',
    description: 'A universal bot framework!~ 🔥',
    repo: 'github:rain-cafe/flarie',
    status: AppStatus.IN_DEVELOPMENT,
  },
  {
    name: 'Silvy',
    image: 'https://silvy.rains.cafe/silvy.png',
    description: 'An app for creating, sharing, and collaborating on strats for XIV',
    url: 'https://silvy.rains.cafe',
    repo: 'github:rain-cafe-xiv/silvy',
    status: AppStatus.IN_DEVELOPMENT,
  },
  {
    name: 'Salte Auth',
    image: 'https://repository-images.githubusercontent.com/70510237/9a5dca07-cab5-4b50-87b4-ad83f67776db',
    description: 'Authentication for the modern web!',
    repo: 'github:salte-auth/salte-auth',
    status: AppStatus.SUNSET,
  },
];

export const apps = sortBy(_apps, 'status');
