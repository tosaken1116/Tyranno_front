import type { HTMLAttributes } from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import type { Url } from 'next/dist/shared/lib/router/router';
import type { LinkProps as NextLinkProps } from 'next/link';

type LinkProps = {
  href: Url;
  children: React.ReactNode;
} & NextLinkProps &
  HTMLAttributes<HTMLAnchorElement>;

type ButtonProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

type Props = LinkProps | ButtonProps;

const defaultStyle =
  'border-bottom px-2 py-1 border-gold-light underline text-gold-light';
export const UnderBarLink: React.FC<Props> = ({
  className,
  children,
  ...props
}) => {
  const underBarLinkStyle = clsx(defaultStyle, className);
  if ('href' in props) {
    return (
      <Link className={underBarLinkStyle} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={underBarLinkStyle} {...props}>
      {children}
    </button>
  );
};
