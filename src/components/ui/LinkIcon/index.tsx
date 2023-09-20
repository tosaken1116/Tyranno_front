import Image from 'next/image';
import Link from 'next/link';

import type { ImageProps } from 'next/image';
import type { LinkProps } from 'next/link';

type Props = {
  linkProps: LinkProps;
  imageProps: ImageProps;
  className?: string;
};

export const LinkIcon: React.FC<Props> = ({
  linkProps,
  imageProps: { alt, ...imageProps },
  className,
}) => (
  <Link {...linkProps} className={className}>
    <Image alt={alt} {...imageProps} />
  </Link>
);
