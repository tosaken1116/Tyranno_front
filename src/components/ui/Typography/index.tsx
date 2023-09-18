import React from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'strong'
  | 'body1'
  | 'body2'
  | 'caption';

type Props = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};
const defaultStyle = 'text-black';
const variantClasses = {
  h1: 'text-4xl font-bold',
  h2: 'text-3xl font-bold',
  h3: 'text-2xl font-bold',
  h4: 'text-xl font-bold',
  h5: 'text-lg font-bold',
  h6: 'text-base font-bold',
  strong: 'font-semibold',
  body1: 'text-base',
  body2: 'text-sm',
  caption: 'text-xs',
};
export const Typography: React.FC<Props> = ({
  variant = 'body1',
  className,
  children,
}) => {
  const typographyStyle = cva(clsx(defaultStyle, className), {
    variants: {
      variant: variantClasses,
    },
  });

  const Tag =
    variant === 'strong'
      ? 'span'
      : variant === 'body1' || variant === 'body2'
      ? 'p'
      : variant;

  return <Tag className={typographyStyle({ variant })}>{children}</Tag>;
};
