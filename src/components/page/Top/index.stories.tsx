import { Screen as Top } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Top> = {
  title: 'Top',
  component: Top,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Top>;

export const Default: Story = {
  args: {},
};