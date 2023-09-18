import { UnderBarLink } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UnderBarLink> = {
  title: 'UnderBarLink',
  component: UnderBarLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => <UnderBarLink {...args}>example</UnderBarLink>,
};

export default meta;
type Story = StoryObj<typeof UnderBarLink>;

export const Default: Story = {
  args: {
    href: 'https://example.com',
    children: 'example',
  },
};
