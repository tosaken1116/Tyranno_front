import type { MouseEvent } from 'react';

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

import { DateDiffLabel } from '@/components/ui/DateDiffLabel';
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
  openPostDetail: () => void;
  clickReplyButton: () => void;
  clickFavoriteButton: () => void;
  clickRepostButton: () => void;
  clickShareButton: () => void;
  className?: string;
};
export const Card: React.FC<Props> = ({
  userName,
  userDisplayId,
  userIcon,
  publishedAt,
  postText,
  favoriteNumber,
  replyNumber,
  isAlreadyFavorite = false,
  isAlreadyReply = false,
  clickReplyButton,
  clickFavoriteButton,
  openPostDetail,
  clickRepostButton,
  clickShareButton,
  className = '',
}) => {
  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    const target = event.target as HTMLButtonElement;
    if (target.nodeName === 'DIV' || target.nodeName === 'BUTTON') {
      openPostDetail();
    }
  };

  return (
    <button
      className={clsx('w-full flex gap-2', className)}
      onClick={onClickHandler}
    >
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
        <div className="flex items-center gap-1 text-base text-gold-dark">
          <Link
            href={`/user/${userDisplayId}`}
            className="text-lg font-semibold text-gold-light"
          >
            {userName}
          </Link>
          <span className="text-gold-dark">{`@${userDisplayId}`}</span>
          <span className="text-gold-dark">・</span>
          <DateDiffLabel
            lang="ja"
            date={new Date(publishedAt)}
            now={new Date()}
          />
        </div>
        <div className="text-gold-main mb-3 mt-1 w-full text-start">
          {postText}
        </div>
        <div className="flex justify-between items-center text-deep-red-light select-none">
          <IconWithLabel
            icon={
              <FontAwesomeIcon
                icon={faCommentDots}
                size="sm"
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
                size="sm"
                className="cursor-pointer p-1 rounded-medium hover:bg-deep-red-dark"
                onClick={clickRepostButton}
              />
            }
            selectedIcon={
              <FontAwesomeIcon
                icon={faRepeat}
                size="sm"
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
                size="sm"
                className="cursor-pointer p-1 rounded-medium hover:bg-deep-red-dark"
                onClick={clickFavoriteButton}
              />
            }
            selectedIcon={
              <FontAwesomeIcon
                icon={faHeart}
                size="sm"
                className="cursor-pointer p-1 rounded-medium hover:bg-deep-red-dark"
                onClick={clickFavoriteButton}
              />
            }
            label={String(favoriteNumber)}
          />

          <FontAwesomeIcon
            icon={faArrowUpFromBracket}
            size="sm"
            className="cursor-pointer p-1 rounded-medium hover:bg-deep-red-dark"
            onClick={clickShareButton}
          />
        </div>
      </div>
    </button>
  );
};
