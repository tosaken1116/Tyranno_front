import { LeaderDots } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LeaderDots> = {
  title: 'LeaderDots',
  component: LeaderDots,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LeaderDots>;

export const Default: Story = {
  args: {},
  render: () => (
    <LeaderDots>
      <button>item1</button>
      <button>item2</button>
    </LeaderDots>
  ),
};
