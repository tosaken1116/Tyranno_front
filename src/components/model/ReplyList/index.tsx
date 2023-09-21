'use client';

import { useReplyList } from './hooks';
import { ReplyListPresentation } from './presentations';
import { ReplyListEmptyPresentation } from './presentations/empty';
import { ReplyListErrorPresentation } from './presentations/error';
import { ReplyListLoadingPresentation } from './presentations/loading';

export const ReplyList: React.FC = () => {
  const {
    replies,
    isError,
    isLoading,
    isEmpty,
    openPostDetail,
    clickFavoriteButton,
    clickReplyButton,
    clickRepostButton,
    clickShareButton,
  } = useReplyList();
  return (
    <>
      {isError && <ReplyListErrorPresentation />}
      {isLoading && <ReplyListLoadingPresentation />}
      {isEmpty && <ReplyListEmptyPresentation />}
      <ReplyListPresentation
        replies={replies}
        openPostDetail={openPostDetail}
        clickFavoriteButton={clickFavoriteButton}
        clickReplyButton={clickReplyButton}
        clickRepostButton={clickRepostButton}
        clickShareButton={clickShareButton}
      />
    </>
  );
};
