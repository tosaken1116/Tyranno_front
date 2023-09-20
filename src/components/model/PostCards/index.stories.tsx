import { PostCardsPresentation } from './presentations';
import { PostCardsEmptyPresentation } from './presentations/empty';
import { PostCardsErrorPresentation } from './presentations/error';
import { Card } from './presentations/item/card';
import { PostCardsLoadingPresentation } from './presentations/loading';

import type { Post } from '@/gen/schemas/protos/v1/post_pb';
import type { User } from '@/gen/schemas/protos/v1/user_pb';
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

const user1: User = {
  displayId: 'cat',
  name: 'cat',
  icon: 'https://avatars.githubusercontent.com/u/65708479?v=4',
  profile: 'cat',
  createdAt: '2022/03/05 12:32:42',
  updatedAt: '2022/03/05 12:32:42',
  followNumber: 0,
  followerNumber: 0,
} as User;

const user2: User = {
  displayId: 'cat',
  name: 'cat',
  icon: 'https://avatars.githubusercontent.com/u/65708479?v=4',
  profile: 'cat',
  createdAt: '2022/03/05 12:32:42',
  updatedAt: '2022/03/05 12:32:42',
  followNumber: 0,
  followerNumber: 0,
} as User;

const user3: User = {
  displayId: 'cat',
  name: 'cat',
  icon: 'https://avatars.githubusercontent.com/u/65708479?v=4',
  profile: 'cat',
  createdAt: '2022/03/05 12:32:42',
  updatedAt: '2022/03/05 12:32:42',
  followNumber: 0,
  followerNumber: 0,
} as User;

const post1: Post = {
  id: BigInt(1),
  text: 'cat',
  user: user1,
  favoriteNumber: 0,
  publishedAt: '2022/03/05 12:32:42',
  createdAt: '2022/03/05 12:32:42',
  updatedAt: '2022/03/05 12:32:42',
} as Post;

const post2: Post = {
  id: BigInt(2),
  text: 'cat',
  user: user2,
  favoriteNumber: 0,
  publishedAt: '2022/03/05 12:32:42',
  createdAt: '2022/03/05 12:32:42',
  updatedAt: '2022/03/05 12:32:42',
} as Post;

const post3: Post = {
  id: BigInt(3),
  text: 'cat',
  user: user3,
  favoriteNumber: 0,
  publishedAt: '2022/03/05 12:32:42',
  createdAt: '2022/03/05 12:32:42',
  updatedAt: '2022/03/05 12:32:42',
} as Post;

const posts: Post[] = [post1, post2, post3];

export const Default: Story = {
  render: () => (
    <div className="w-[600px] h-screen bg-custom-dark-light">
      <PostCardsPresentation {...{ posts: posts }} />
    </div>
  ),
};

export const OneCard: Story = {
  render: () => (
    <Card
      {...{
        userName: 'cat',
        userDisplayId: '@cat',
        userIcon: 'https://avatars.githubusercontent.com/u/65708479?v=4',
        publishedAt: '2023/05/23 12:23:43',
        postText:
          'ハッカソン鯖でのeveryoneメンション事件の件に関してみなさんに謝罪いたします。\nこの度は誤ってeveryoneにnotionリンクを誤爆してしまし、誠に申し訳ございませんでした。今後このようなことがないよう再発防止に努めてまいります。',
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
