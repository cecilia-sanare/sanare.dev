import { AppStatus } from '../../../types/status';
import { IconType } from 'react-icons';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import { PiSunHorizonBold } from 'react-icons/pi';
import { useReadOnlyCachedState } from '../../../hooks/use-cached-state';
import { Tooltip } from '../Tooltip';
import { Themes } from '../../../types/themes';
import { ThemeIcon } from '../ThemeIcon';

export type CardStatusProps = {
  status: AppStatus;
};

const STATUS_ICON: Record<AppStatus, IconType> = {
  [AppStatus.SUNSET]: PiSunHorizonBold,
  [AppStatus.COMPLETED]: FaCheckCircle,
  [AppStatus.IN_DEVELOPMENT]: FaCode,
};

const STATUS_TITLE: Record<AppStatus, string> = {
  [AppStatus.SUNSET]: 'Sunset',
  [AppStatus.COMPLETED]: 'Completed',
  [AppStatus.IN_DEVELOPMENT]: 'In Development',
};

const STATUS_THEME: Record<AppStatus, Themes> = {
  [AppStatus.SUNSET]: Themes.DISABLED,
  [AppStatus.COMPLETED]: Themes.SUCCESS,
  [AppStatus.IN_DEVELOPMENT]: Themes.WARNING,
};

export function CardStatus({ status }: CardStatusProps) {
  const [icon, theme, title] = useReadOnlyCachedState(() => {
    return [STATUS_ICON[status], STATUS_THEME[status], STATUS_TITLE[status]];
  }, [status]);

  return (
    <Tooltip tooltip={title} theme={theme}>
      <ThemeIcon icon={icon} theme={theme} size={36} />
    </Tooltip>
  );
}
