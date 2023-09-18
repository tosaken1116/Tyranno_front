import { LabelIcon } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LabelIcon> = {
  title: 'LabelIcon',
  component: LabelIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LabelIcon>;

export const Default: Story = {
  args: {
    icon: '🙂',
    selectedIcon: '🙃',
    children: 'face',
  },
};

export const Selected: Story = {
  args: {
    icon: '🙂',
    selectedIcon: '🙃',
    children: 'face',
    selected: true,
  },
};

export const NotSelected: Story = {
  args: {
    icon: '🙂',
    selectedIcon: '🙃',
    children: 'face',
    selected: false,
  },
};
