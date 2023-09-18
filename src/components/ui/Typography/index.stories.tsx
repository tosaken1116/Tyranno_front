import { Typography } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'body1',
    children: 'typography',
  },
};

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'h1',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'h2',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'h3',
  },
};

export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'h4',
  },
};

export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'h5',
  },
};

export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'h6',
  },
};

export const Strong: Story = {
  args: {
    variant: 'strong',
    children: 'strong',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'body1',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'body2',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'caption',
  },
};
