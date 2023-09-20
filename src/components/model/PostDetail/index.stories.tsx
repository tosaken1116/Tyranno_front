import { PostDetailPresentation } from './presentations';
import { PostDetailErrorPresentation } from './presentations/error';
import { PostDetailLoadingPresentation } from './presentations/loading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostDetailPresentation> = {
  title: 'PostDetail',
  component: PostDetailPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PostDetailPresentation>;

export const Default: Story = {
  render: () => (
    <PostDetailPresentation
      {...{
        userName: 'cat',
        userDisplayId: 'cat',
        userIcon: 'https://avatars.githubusercontent.com/u/65708479?v=4',
        publishedAt: '2023/05/23 12:23:43',
        postText:
          'ハッカソン鯖でのeveryoneメンション事件の件に関してみなさんに謝罪いたします。\nこの度は誤ってeveryoneにnotionリンクを誤爆してしまし、誠に申し訳ございませんでした。今後このようなことがないよう再発防止に努めてまいります。',
        favoriteNumber: 0,
        replyNumber: 0,
        isAlreadyFavorite: true,
        isAlreadyReply: false,
        openPostDetail: (): void => {
          console.log('click post card');
        },
        clickFavoriteButton: (): void => {
          console.log('clickFavoriteButton');
        },
        clickReplyButton: (): void => {
          console.log('clickReplyButton');
        },
        clickRepostButton: (): void => {
          console.log('clickRepostButton');
        },
        clickShareButton: (): void => {
          console.log('clickShareButton');
        },
      }}
    />
  ),
};

export const Error: Story = {
  render: () => <PostDetailErrorPresentation />,
};
export const Loading: Story = {
  render: () => <PostDetailLoadingPresentation />,
};
