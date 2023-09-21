import { ReplyFormPresentation  } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ReplyFormPresentation> = {
  title: 'ReplyForm',
  component: ReplyFormPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ReplyFormPresentation>;

export const Default: Story = {
  args: {},
};
