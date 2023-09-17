import { Button } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: (args) => (
    <div className="bg-black p-4">
      <Button {...args}>{args.children}</Button>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    disabled: true,
  },
};

export const Text: Story = {
  args: {
    children: 'button',
    variant: 'text',
  },
};

export const TextRounded: Story = {
  args: {
    children: 'button',
    variant: 'text',
    rounded: true,
  },
};

export const Outlined: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
  },
};

export const OutlinedRounded: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    rounded: true,
  },
};

export const ContainedRounded: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    rounded: true,
  },
};

export const Contained: Story = {
  args: {
    children: 'button',
    variant: 'contained',
  },
};
