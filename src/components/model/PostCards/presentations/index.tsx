import { Card } from './item/card';

import type { Post } from '@/gen/schemas/protos/v1/post_pb';

import { Divider } from '@/components/ui/Divider';

type Props = {
  posts: Post[];
};

export const PostCardsPresentation: React.FC<Props> = ({ posts }) => (
  <div className="w-full h-full">
    {posts.map((item) => (
      <div key={Number(item.id)}>
        <Card
          userName={item.user!.name}
          userDisplayId={item.user!.displayId}
          userIcon={item.user!.icon}
          publishedAt={item.publishedAt}
          postText={item.text}
          isAlreadyFavorite
          isAlreadyReply={false}
          openPostDetail={(): void => {
            console.log('click post card');
          }}
          clickFavoriteButton={(): void => {
            console.log('clickFavoriteButton');
          }}
          clickReplyButton={(): void => {
            console.log('clickReplyButton');
          }}
          clickRepostButton={(): void => {
            console.log('clickRepostButton');
          }}
          clickShareButton={(): void => {
            console.log('clickShareButton');
          }}
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
