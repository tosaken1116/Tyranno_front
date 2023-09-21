'use client';

import { usePostCards } from './hooks';
import { PostCardsPresentation } from './presentations';
import { PostCardsEmptyPresentation } from './presentations/empty';
import { PostCardsErrorPresentation } from './presentations/error';
import { PostCardsLoadingPresentation } from './presentations/loading';

export const PostCards: React.FC = () => {
  const {
    posts,
    isError,
    isLoading,
    isEmpty,
    openPostDetail,
    clickFavoriteButton,
    clickReplyButton,
    clickRepostButton,
    clickShareButton,
  } = usePostCards();
  return (
    <>
      {isError && <PostCardsErrorPresentation />}
      {isLoading && <PostCardsEmptyPresentation />}
      {isEmpty && <PostCardsLoadingPresentation />}
      {posts != undefined && (
        <PostCardsPresentation
          posts={posts}
          openPostDetail={openPostDetail}
          clickFavoriteButton={clickFavoriteButton}
          clickReplyButton={clickReplyButton}
          clickRepostButton={clickRepostButton}
          clickShareButton={clickShareButton}
        />
      )}
    </>
  );
};
