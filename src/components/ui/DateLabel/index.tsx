import type { HTMLAttributes } from 'react';

import clsx from 'clsx';
import { format as dateFormat } from 'date-fns';
type Props = {
  format: string;
  date: Date;
} & HTMLAttributes<HTMLTimeElement>;
const defaultStyle = 'text-text-medium-grey';
export const DateLabel: React.FC<Props> = ({
  format,
  date,
  className,
  ...props
}) => {
  const dateLabelStyle = clsx(defaultStyle, className);
  return (
    <time dateTime={date.toISOString()} className={dateLabelStyle} {...props}>
      {dateFormat(date, format)}
    </time>
  );
};
