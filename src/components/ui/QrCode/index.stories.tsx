import { QrCode } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof QrCode> = {
  title: 'QrCode',
  component: QrCode,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof QrCode>;

export const Default: Story = {
  args: {},
};
