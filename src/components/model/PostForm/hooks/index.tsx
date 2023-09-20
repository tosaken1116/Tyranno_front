import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import { createPost } from '@/gen/schemas/protos/v1/post-PostService_connectquery';

export const usePostForm = (): {
  postText: string;
  setPostText: Dispatch<SetStateAction<string>>;
  sendPost: () => Promise<void>;
} => {
  const [postText, setPostText] = useState<string>('');

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
      {
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
