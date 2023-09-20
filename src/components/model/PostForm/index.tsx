'use client';
import { useEffect, useState } from 'react';

import { usePostForm } from './hooks';
import { PostFormPresentation } from './presentations';

type Props = {
  userIcon: string;
};

export const PostForm: React.FC<Props> = ({ userIcon }) => {
  const { postText, setPostText, sendPost } = usePostForm();

  const [error, setError] = useState<boolean>(false);

  const clickPostButtonHandler = (): void => {
    sendPost().catch((e) => {
      setError(true);
      console.log(e);
    });
  };

  useEffect(() => {
    setError(false);
  }, [postText]);

  return (
    <>
      <PostFormPresentation
        userIcon={userIcon}
        text={postText}
        error={error}
        changeText={(event): void => {
          setPostText(event.target.value);
          console.log(postText);
        }}
        clickPostButton={clickPostButtonHandler}
      />
    </>
  );
};
