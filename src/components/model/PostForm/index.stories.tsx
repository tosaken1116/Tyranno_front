import { useState } from 'react';

import { PostFormPresentation } from './presentations';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostFormPresentation> = {
  title: 'PostForm',
  component: PostFormPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PostFormPresentation>;

export const Default: Story = {
  render: function Comp() {
    const [text, setText] = useState<string>('');
    return (
      <div className="bg-custom-dark-light">
        <PostFormPresentation
          userIcon="https://avatars.githubusercontent.com/u/65708479?v=4"
          text={text}
          changeText={(event): void => {
            setText(event.target.value);
            console.log(text);
          }}
          clickPostButton={(): void => {
            console.log(text);
          }}
        />
      </div>
    );
  },
};
