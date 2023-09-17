import type { ButtonHTMLAttributes } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  variant?: 'outlined' | 'contained' | 'text';
  rounded?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
const defaultStyle = 'transition ease-in-out duration-300 py-1 px-3 ';
export const Button: React.FC<Props> = ({
  children,
  variant = 'contained',
  rounded = true,
  startIcon,
  endIcon,
  className,
  disabled,
  ...props
}) => {
  const buttonStyle = cva(clsx(defaultStyle, className), {
    variants: {
      variant: {
        outlined:
          'hover:bg-deep-red-light hover:border-deep-red-main border-2 border-deep-red-light',
        contained:
          'bg-deep-red-main hover:bg-deep-red-dark hover:border-deep-red-main border-2 border-deep-red-light',
        text: 'hover:bg-deep-red-light',
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-sm',
      },
      disabled: {
        true: 'bg-gray-600 hover:bg-gray-600 border-none',
      },
    },
  });
  return (
    <button
      className={buttonStyle({ variant, rounded, disabled })}
      {...props}
      disabled={disabled}
    >
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};
