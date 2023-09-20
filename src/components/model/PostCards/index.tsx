import { usePostCards } from './hooks';
import { PostCardsPresentation } from './presentations';
import { PostCardsEmptyPresentation } from './presentations/empty';
import { PostCardsErrorPresentation } from './presentations/error';
import { PostCardsLoadingPresentation } from './presentations/loading';

type Props = {
  openPostDetail: () => void;
  clickReplyButton: () => void;
  clickFavoriteButton: () => void;
  clickRepostButton: () => void;
  clickShareButton: () => void;
};

export const PostCards: React.FC<Props> = ({
  clickReplyButton,
  clickFavoriteButton,
  openPostDetail,
  clickRepostButton,
  clickShareButton,
}) => {
  const { posts } = usePostCards();
  return (
    <>
      this is PostCards component
      <PostCardsPresentation
        posts={posts}
        openPostDetail={openPostDetail}
        clickFavoriteButton={clickFavoriteButton}
        clickReplyButton={clickReplyButton}
        clickRepostButton={clickRepostButton}
        clickShareButton={clickShareButton}
      />
      <PostCardsEmptyPresentation />
      <PostCardsErrorPresentation />
      <PostCardsLoadingPresentation />
    </>
  );
};
