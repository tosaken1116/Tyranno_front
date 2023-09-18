import { DateLabel } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DateLabel> = {
  title: 'DateLabel',
  component: DateLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DateLabel>;

export const Default: Story = {
  args: {
    date: new Date(),
    format: 'yyyy/MM/dd HH:mm:ss',
  },
};

export const YYYYMMdd: Story = {
  args: {
    date: new Date(),
    format: 'yyyy/MM/dd',
  },
};

export const YYYYMM: Story = {
  args: {
    date: new Date(),
    format: 'yyyy/MM',
  },
};

export const MMdd: Story = {
  args: {
    date: new Date(),
    format: 'MM/dd',
  },
};

export const Md: Story = {
  args: {
    date: new Date(),
    format: 'M/d',
  },
};

export const HHmmss: Story = {
  args: {
    date: new Date(),
    format: 'hh:mm:ss',
  },
};
