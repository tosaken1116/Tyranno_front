'use client';
import { useEffect, useState } from 'react';

import { useReplyForm } from './hooks';
import { ReplyFormPresentation } from './presentations';

type Props = {
  userIcon: string;
};

export const ReplyForm: React.FC<Props> = ({ userIcon }) => {
  const { postText, setPostText, sendPost } = useReplyForm();

  const [error, setError] = useState<boolean>(false);

  const clickPostButtonHandler = (): void => {
    sendPost().catch((e) => {
      setError(true);
      console.error(e);
    });
  };

  useEffect(() => {
    setError(false);
  }, [postText]);

  return (
    <>
      <ReplyFormPresentation
        userIcon={userIcon}
        text={postText}
        error={error}
        changeText={(event): void => {
          setPostText(event.target.value);
        }}
        clickPostButton={clickPostButtonHandler}
      />
    </>
  );
};
