import { Card } from './item/card';

import type { Post } from '@/gen/schemas/protos/v1/post_pb';

import { Divider } from '@/components/ui/Divider';

type Props = {
  posts: Post[];
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

export const PostCardsPresentation: React.FC<Props> = ({
  posts,
  clickReplyButton,
  clickFavoriteButton,
  openPostDetail,
  clickRepostButton,
  clickShareButton,
}) => (
  <div className="w-full h-full">
    {posts.map((item) => (
      <div key={Number(item.id)}>
        <Card
          id={Number(item.id)}
          userName={item.user!.name}
          userDisplayId={item.user!.displayId}
          userIcon={item.user!.icon}
          publishedAt={item.publishedAt}
          postText={item.text}
          favoriteNumber={item.favoriteNumber}
          replyNumber={item.replyNumber}
          isAlreadyFavorite
          isAlreadyReply={false}
          openPostDetail={openPostDetail}
          clickFavoriteButton={clickFavoriteButton}
          clickReplyButton={clickReplyButton}
          clickRepostButton={clickRepostButton}
          clickShareButton={clickShareButton}
          className="px-3 pt-4 pb-1"
        />
        <Divider
          direction="horizontal"
          className="bg-custom-dark-main bg-opacity-40 h-[1px]"
        />
      </div>
    ))}
  </div>
);
