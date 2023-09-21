import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import { createPost } from '@/gen/schemas/protos/v1/post-PostService_connectquery';

export const useReplyForm = (): {
  postText: string;
  setPostText: Dispatch<SetStateAction<string>>;
  sendPost: () => Promise<void>;
} => {
  const [postText, setPostText] = useState<string>('');
  const searchParam = useSearchParams();

  const postId = searchParam.get('post_id');

  const createMutation = useMutation(
    createPost.useMutation({
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
  const sendPost = async (): Promise<void> => {
    await createMutation.mutateAsync(
      postId !== '' && postId !== null
        ? {
            text: postText,
            replyAt: Number(postId),
          }
        : {
            text: postText,
          },
      {
        onSuccess: () => {
          setPostText('');
        },
      }
    );
  };

  return { postText, setPostText, sendPost };
};
