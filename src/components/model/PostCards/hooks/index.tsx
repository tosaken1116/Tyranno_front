import { useMutation, useQuery } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import type { Post } from '@/gen/schemas/protos/v1/post_pb';

import {
  createFavorite,
  deleteFavorite,
  getPosts,
} from '@/gen/schemas/protos/v1/post-PostService_connectquery';

type IUsePostCards = {
  posts: Post[] | undefined;
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  updatePosts: () => Promise<void>;
  openPostDetail: ({
    paramKey,
    paramValue,
  }: {
    paramKey: string;
    paramValue: string;
  }) => void;
  clickReplyButton: ({
    paramKey,
    paramValue,
  }: {
    paramKey: string;
    paramValue: string;
  }) => void;
  clickFavoriteButton: (
    id: number,
    isAlreadyFavorite: boolean
  ) => Promise<void>;
  clickRepostButton: (id: number) => void;
  clickShareButton: () => void;
};
export const usePostCards = (): IUsePostCards => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { data, isError, isLoading, refetch } = useQuery(
    getPosts.useQuery(
      {},
      {
        callOptions: {
          headers: [
            ['AuthProvider', 'origin'],
            ['Authorization', `Bearer ${localStorage.getItem('jwtToken')}`],
          ],
        },
      }
    )
  );
  const { mutateAsync: favorite } = useMutation(createFavorite.useMutation());
  const { mutateAsync: disFavorite } = useMutation(
    deleteFavorite.useMutation({
      callOptions: {
        headers: [
          ['AuthProvider', 'origin'],
          ['Authorization', `Bearer ${localStorage.getItem('jwtToken')}`],
        ],
      },
    })
  );
  const updatePosts = async (): Promise<void> => {
    await refetch();
  };

  const openPostDetail = ({
    paramKey,
    paramValue,
  }: {
    paramKey: string;
    paramValue: string;
  }): void => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    current.set(paramKey, paramValue);

    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  };
  const clickReplyButton = ({
    paramKey,
    paramValue,
  }: {
    paramKey: string;
    paramValue: string;
  }): void => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

    current.set('reply', 'true');
    current.set(paramKey, paramValue);

    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`${pathname}${query}`);
  };
  const clickFavoriteButton = async (
    id: number,
    isAlreadyFavorite: boolean
  ): Promise<void> => {
    if (isAlreadyFavorite) {
      void disFavorite({ favoriteAt: id });
      void (await refetch());
      return;
    }
    void favorite({ favoriteAt: id });
    void (await refetch());
  };
  const clickRepostButton = (id: number): void => {
    console.log(id);
    return;
  };
  const clickShareButton = (): void => {
    console.log('');
  };
  return {
    posts: data?.posts,
    updatePosts,
    isError: isError && !isLoading,
    isLoading: isLoading && !isError,
    isEmpty: data?.posts?.length === 0 && !isLoading && !isError,
    openPostDetail,
    clickReplyButton,
    clickFavoriteButton,
    clickRepostButton,
    clickShareButton,
  };
};
