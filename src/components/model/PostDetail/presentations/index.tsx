import { faHeart as reHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUpFromBracket,
  faCommentDots,
  faHeart,
  faRepeat,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';

import { DateLabel } from '@/components/ui/DateLabel';
import { Divider } from '@/components/ui/Divider';
import { IconWithLabel } from '@/components/ui/IconWithLabel';
import { LinkIcon } from '@/components/ui/LinkIcon';

type Props = {
  userName: string;
  userDisplayId: string;
  userIcon: string;
  publishedAt: string;
  postText: string;
  favoriteNumber: number;
  replyNumber: number;
  isAlreadyFavorite?: boolean;
  isAlreadyReply?: boolean;
  clickReplyButton: () => void;
  clickFavoriteButton: () => void;
  clickRepostButton: () => void;
  clickShareButton: () => void;
  className?: string;
};
export const PostDetailPresentation: React.FC<Props> = ({
  userName,
  userIcon,
  userDisplayId,
  publishedAt,
  postText,
  favoriteNumber,
  replyNumber,
  isAlreadyFavorite = false,
  isAlreadyReply = false,
  clickReplyButton,
  clickFavoriteButton,
  clickRepostButton,
  clickShareButton,
  className = '',
}) => (
  <div className={clsx('w-full flex gap-2', className)}>
    <LinkIcon
      imageProps={{
        src: userIcon,
        width: 100,
        height: 100,
        alt: 'user icon',
        className: 'w-full h-full',
      }}
      linkProps={{
        href: `/users/${userDisplayId}`,
      }}
      className="rounded-full overflow-hidden flex-shrink-0 w-9 h-9"
    />
    <div className="w-full">
      <div className="flex flex-col items-start gap-1 text-base text-gold-dark">
        <Link
          href={`/user/${userDisplayId}`}
          className="text-2xl font-semibold text-gold-light"
        >
          {userName}
        </Link>
        <span className="text-gold-dark">{`@${userDisplayId}`}</span>
      </div>
      <div className="text-gold-main mb-3 mt-1 w-full text-start text-lg">
        {postText}
      </div>
      <div className="flex items-start mb-3">
        <DateLabel
          lang="ja"
          date={new Date(publishedAt)}
          format="yyyy/MM/dd hh:mm"
        />
      </div>
      <Divider
        direction="horizontal"
        className="bg-custom-dark-main bg-opacity-40 h-[1px]"
      />
      <div className="flex justify-between items-center text-deep-red-light select-none px-5 py-2">
        <IconWithLabel
          icon={
            <FontAwesomeIcon
              icon={faCommentDots}
              size="lg"
              className="cursor-pointer p-1 rounded-medium hover:bg-deep-red-dark"
              onClick={clickReplyButton}
            />
          }
        />
        <IconWithLabel
          selected={isAlreadyReply}
          icon={
            <FontAwesomeIcon
              icon={faRepeat}
              size="lg"
              className="cursor-pointer p-1 rounded-medium hover:bg-deep-red-dark"
              onClick={clickRepostButton}
            />
          }
          selectedIcon={
            <FontAwesomeIcon
              icon={faRepeat}
              size="lg"
              className="cursor-pointer bg-deep-red-dark p-1 rounded-medium"
              onClick={clickRepostButton}
            />
          }
          label={String(replyNumber)}
        />

        <IconWithLabel
          selected={isAlreadyFavorite}
          icon={
            <FontAwesomeIcon
              icon={reHeart}
              size="lg"
              className="cursor-pointer p-1 rounded-medium hover:bg-deep-red-dark"
              onClick={clickFavoriteButton}
            />
          }
          selectedIcon={
            <FontAwesomeIcon
              icon={faHeart}
              size="lg"
              className="cursor-pointer p-1 rounded-medium hover:bg-deep-red-dark"
              onClick={clickFavoriteButton}
            />
          }
          label={String(favoriteNumber)}
        />

        <FontAwesomeIcon
          icon={faArrowUpFromBracket}
          size="lg"
          className="cursor-pointer p-1 rounded-medium hover:bg-deep-red-dark"
          onClick={clickShareButton}
        />
      </div>
      <Divider
        direction="horizontal"
        className="bg-custom-dark-main bg-opacity-40 h-[1px]"
      />
    </div>
  </div>
);
