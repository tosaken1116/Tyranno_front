import type { HTMLAttributes } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode[] | React.ReactNode;
  direction?: 'row' | 'column';
  justifyContent?:
    | 'flexStart'
    | 'center'
    | 'flexEnd'
    | 'spaceBetween'
    | 'spaceAround'
    | 'spaceEvenly';
  alignItems?: 'flexStart' | 'center' | 'flexEnd' | 'stretch' | 'baseline';
  spacing: 4 | 8 | 12 | 16;
} & HTMLAttributes<HTMLDivElement>;
const defaultStyle = 'flex';
export const Stack: React.FC<Props> = ({
  children,
  className,
  direction = 'row',
  justifyContent = 'flexStart',
  alignItems = 'flexStart',
  spacing = 4,
  ...props
}) => {
  const stackStyle = cva(clsx(defaultStyle, className), {
    variants: {
      direction: { row: 'flex-row', column: 'flex-col' },
      spacing: {
        4: 'gap-4',
        8: 'gap-8',
        12: 'gap-12',
        16: 'gap-16',
      },
      alignItems: {
        flexStart: 'items-start',
        center: 'items-center',
        flexEnd: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline',
      },
      justifyContent: {
        flexStart: 'justify-start',
        center: 'justify-center',
        flexEnd: 'justify-end',
        spaceBetween: 'justify-between',
        spaceAround: 'justify-around',
        spaceEvenly: 'justify-evenly',
      },
    },
  });
  return (
    <div
      className={stackStyle({ direction, spacing, alignItems, justifyContent })}
      {...props}
    >
      {children}
    </div>
  );
};
