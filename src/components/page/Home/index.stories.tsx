import { Screen as Home } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Home> = {
  title: 'Home',
  component: Home,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {
  args: {},
};