import { usePostCards } from './hooks';
import { PostCardsPresentation } from './presentations';
import { PostCardsEmptyPresentation } from './presentations/empty';
import { PostCardsErrorPresentation } from './presentations/error';
import { Card } from './presentations/item/card';
import { PostCardsLoadingPresentation } from './presentations/loading';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PostCardsPresentation> = {
  title: 'PostCards',
  component: PostCardsPresentation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PostCardsPresentation>;

export const Default: Story = {
  render: function Comp() {
    const {
      posts,
      openPostDetail,
      clickFavoriteButton,
      clickReplyButton,
      clickRepostButton,
      clickShareButton,
    } = usePostCards();
    return (
      <div className="w-[600px] h-screen bg-custom-dark-light">
        <PostCardsPresentation
          {...{
            posts: posts!,
            openPostDetail: openPostDetail,
            clickFavoriteButton: clickFavoriteButton,
            clickReplyButton: clickReplyButton,
            clickRepostButton: clickRepostButton,
            clickShareButton: clickShareButton,
          }}
        />
      </div>
    );
  },
};

export const OneCard: Story = {
  render: function Comp() {
    const {
      openPostDetail,
      clickFavoriteButton,
      clickReplyButton,
      clickRepostButton,
      clickShareButton,
    } = usePostCards();
    return (
      <Card
        {...{
          id: 1,
          userName: 'cat',
          userDisplayId: '@cat',
          userIcon: 'https://avatars.githubusercontent.com/u/65708479?v=4',
          publishedAt: '2023/05/23 12:23:43',
          postText:
            'ハッカソン鯖でのeveryoneメンション事件の件に関してみなさんに謝罪いたします。\nこの度は誤ってeveryoneにnotionリンクを誤爆してしまし、誠に申し訳ございませんでした。今後このようなことがないよう再発防止に努めてまいります。',
          favoriteNumber: 0,
          replyNumber: 0,
          isAlreadyFavorite: true,
          isAlreadyReply: false,
          openPostDetail: openPostDetail,
          clickFavoriteButton: clickFavoriteButton,
          clickReplyButton: clickReplyButton,
          clickRepostButton: clickRepostButton,
          clickShareButton: clickShareButton,
        }}
      />
    );
  },
};

export const Empty: Story = {
  render: () => (
    <div className="bg-black w-[600px] h-[200px]">
      <PostCardsEmptyPresentation />
    </div>
  ),
};
export const Error: Story = {
  render: () => (
    <div className="bg-black w-[600px] h-[200px]">
      <PostCardsErrorPresentation />
    </div>
  ),
};
export const Loading: Story = {
  render: () => (
    <div className="bg-black w-[600px] h-[200px]">
      <PostCardsLoadingPresentation />
    </div>
  ),
};
