import { ReplyListPresentation } from './presentations';
import { ReplyListEmptyPresentation } from './presentations/empty';
import { ReplyListErrorPresentation } from './presentations/error';
import { ReplyListLoadingPresentation } from './presentations/loading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ReplyListPresentation> = {
  title: 'ReplyList',
  component: ReplyListPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ReplyListPresentation>;

export const Default: Story = {
  args: {},
};

export const Empty: Story = {
  render: () => <ReplyListEmptyPresentation />,
};
export const Error: Story = {
  render: () => <ReplyListErrorPresentation />,
};
export const Loading: Story = {
  render: () => <ReplyListLoadingPresentation />,
};
