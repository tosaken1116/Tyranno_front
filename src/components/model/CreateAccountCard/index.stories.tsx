import { CreateAccountCardPresentation } from './presentations';
import { CreateAccountCardErrorPresentation } from './presentations/error';
import { CreateAccountCardLoadingPresentation } from './presentations/loading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CreateAccountCardPresentation> = {
  title: 'CreateAccountCard',
  component: CreateAccountCardPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CreateAccountCardPresentation>;

export const Default: Story = {
  args: {},
};

export const Error: Story = {
  render: () => <CreateAccountCardErrorPresentation errorText="error text" />,
};
export const Loading: Story = {
  render: () => <CreateAccountCardLoadingPresentation />,
};
