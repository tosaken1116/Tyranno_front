import { useMutation, useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import type { Post } from '@/gen/schemas/protos/v1/post_pb';

import {
  deleteFavorite,
  getPost,
} from '@/gen/schemas/protos/v1/post-PostService_connectquery';
import { createFavorite } from '@/gen/schemas/protos/v1/post-PostService_connectquery';

type UseGetDetail = {
  post: Post | undefined;
  isError: boolean;
  isLoading: boolean;
  isEmpty: boolean;
  createFavorite: (postId: number) => Promise<void>;
  deleteFavorite: (postId: number) => Promise<void>;
};

export const useGetDetail = (): UseGetDetail => {
  const searchParam = useSearchParams();
  const id = Number(searchParam.get('post_id'));
  console.log(id);
  const { data, isError, isLoading } = useQuery(
    getPost.useQuery(
      { id: id },
      {
        callOptions: {
          headers: [
            ['AuthProvider', 'origin'],
            [
              'Authorization',
              typeof window !== 'undefined'
                ? `Bearer ${localStorage.getItem('jwtToken')}`
                : '',
            ],
          ],
        },
      }
    )
  );

  // create favorite

  const createMutation = useMutation(
    createFavorite.useMutation({
      callOptions: {
        headers: [
          ['AuthProvider', 'origin'],
          [
            'Authorization',
            typeof window !== 'undefined'
              ? `Bearer ${localStorage.getItem('jwtToken')}`
              : '',
          ],
        ],
      },
    })
  );

  const createFavo = async (postId: number): Promise<void> => {
    await createMutation.mutateAsync({
      favoriteAt: postId,
    });
  };

  const deleteMutation = useMutation(
    deleteFavorite.useMutation({
      callOptions: {
        headers: [
          ['AuthProvider', 'origin'],
          [
            'Authorization',
            typeof window !== 'undefined'
              ? `Bearer ${localStorage.getItem('jwtToken')}`
              : '',
          ],
        ],
      },
    })
  );

  const deleteFavo = async (postId: number): Promise<void> => {
    await deleteMutation.mutateAsync({
      favoriteAt: postId,
    });
  };

  return {
    post: data?.post,
    isError,
    isLoading: isLoading && !isError,
    isEmpty: searchParam.get('post_id') == null,
    createFavorite: createFavo,
    deleteFavorite: deleteFavo,
  };
};
