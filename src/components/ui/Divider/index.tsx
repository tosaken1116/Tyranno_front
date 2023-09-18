import type { HTMLAttributes } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

type Props = {
  direction: 'vertical' | 'horizontal';
} & HTMLAttributes<HTMLDivElement>;
const defaultStyle = 'bg-gold-main';
export const Divider: React.FC<Props> = ({
  direction,
  className,
  ...props
}) => {
  const divStyle = cva(clsx(defaultStyle, className), {
    variants: {
      direction: {
        horizontal: 'h-0.5 w-full',
        vertical: 'w-0.5 h-full',
      },
    },
  });
  return <div className={divStyle({ direction })} {...props} />;
};
