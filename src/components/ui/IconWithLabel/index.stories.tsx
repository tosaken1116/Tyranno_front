import { IconWithLabel } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconWithLabel> = {
  title: 'IconWithLabel',
  component: IconWithLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IconWithLabel>;

export const Default: Story = {
  args: {
    icon: <p>🙌</p>,
    label: 'text',
  },
};
