import { Divider } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Divider> = {
  title: 'Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => (
    <div className="w-[512px] h-[512px]">
      <Divider {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
};
