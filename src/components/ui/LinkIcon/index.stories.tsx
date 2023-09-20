import { LinkIcon } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LinkIcon> = {
  title: 'LinkIcon',
  component: LinkIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LinkIcon>;

export const Default: Story = {
  args: {
    imageProps: {
      src: 'https://avatars.githubusercontent.com/u/65708479?v=4',
      width: 100,
      height: 100,
      alt: 'user icon',
      className: 'w-full h-full',
    },
    linkProps: {
      href: '/users/@cat',
    },
    className: 'rounded-full overflow-hidden flex-shrink-0 w-9 h-9',
  },
};
