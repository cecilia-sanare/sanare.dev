import { ReactNode } from 'react';
import { Typography, TypographyTypes } from '../Typography';

export type CardHeaderProps = {
  children: ReactNode;
};

export function CardHeader({ children }: CardHeaderProps) {
  return <Typography type={TypographyTypes.H3}>{children}</Typography>;
}
