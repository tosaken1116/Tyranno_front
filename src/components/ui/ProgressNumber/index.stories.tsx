import { ProgressNumber } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProgressNumber> = {
  title: 'ProgressNumber',
  component: ProgressNumber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProgressNumber>;

export const Default: Story = {
  args: {
    selectedNum: 1,
    totalNum: 5,
  },
};
