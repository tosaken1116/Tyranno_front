import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import type { Post } from '@/gen/schemas/protos/v1/post_pb';
import type { User } from '@/gen/schemas/protos/v1/user_pb';

export const usePostCards = (): {
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
  getPosts: () => void;
} => {
  const [posts, setPosts] = useState<Post[]>([]);

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

  const getPosts = (): void => {
    setPosts([post1, post2, post3]);
  };

  return { posts, setPosts, getPosts };
};
