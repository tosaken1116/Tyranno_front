import { Cracker } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Cracker> = {
  title: 'Cracker',
  component: Cracker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Cracker>;

export const Default: Story = {
  args: {},
};
