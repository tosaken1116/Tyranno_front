'use client';

import { useEffect, useState } from 'react';

import { useGetDetail } from './hooks';
import { PostDetailPresentation } from './presentations';
import { PostDetailErrorPresentation } from './presentations/error';
import { PostDetailLoadingPresentation } from './presentations/loading';

export const PostDetail: React.FC = () => {
  const { post, isError, isLoading, createFavorite, deleteFavorite } =
    useGetDetail();

  const isFavorite = post?.isFavorited ?? false;
  const [newFavorite, setNewFavorite] = useState<boolean>(false);

  useEffect(() => {
    setNewFavorite(isFavorite);
  }, [isFavorite]);

  const clickReplyButton = (): void => {};
  const clickFavoriteButton = (): void => {
    newFavorite
      ? deleteFavorite(post?.id ?? -1)
          .then(() => setNewFavorite(false))
          .catch((e) => console.error(e))
      : createFavorite(post?.id ?? -1)
          .then(() => setNewFavorite(true))
          .catch((e) => console.error(e));
  };
  const clickRepostButton = (): void => {};
  const clickShareButton = (): void => {};

  if (isLoading) return <PostDetailLoadingPresentation />;
  if (isError) return <PostDetailErrorPresentation />;
  return (
    <PostDetailPresentation
      userName={post?.user?.name ?? ''}
      userIcon={post?.user?.icon ?? ''}
      userDisplayId={post?.user?.displayId ?? ''}
      publishedAt={post?.publishedAt ?? ''}
      postText={post?.text ?? ''}
      favoriteNumber={
        (post?.favoriteNumber ?? 0) +
        (newFavorite && !isFavorite ? 1 : !newFavorite && isFavorite ? -1 : 0)
      }
      replyNumber={post?.replyNumber ?? 0}
      isAlreadyFavorite={newFavorite}
      clickReplyButton={clickReplyButton}
      clickFavoriteButton={clickFavoriteButton}
      clickRepostButton={clickRepostButton}
      clickShareButton={clickShareButton}
    />
  );
};
