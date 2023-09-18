import type { HTMLAttributes } from 'react';

import clsx from 'clsx';

type Props = { label: string } & HTMLAttributes<HTMLInputElement>;
const defaultStyle =
  'border-2 border-gold-light rounded-medium p-2 text-xl focus:outline-0 text-text-soft-black';
export const Input: React.FC<Props> = ({ label, className, ...props }) => {
  const inputStyle = clsx(defaultStyle, className);
  return <input className={inputStyle} placeholder={label} {...props} />;
};
