import type { ChangeEvent, MouseEvent } from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/Button';

type Props = {
  userIcon: string;
  text: string;
  error?: boolean;
  changeText: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  clickPostButton: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const ReplyFormPresentation: React.FC<Props> = ({
  userIcon,
  text,
  changeText,
  clickPostButton,
}) => (
  <div className="w-full flex items-center gap-3 px-0 py-5 drop-shadow-2xl">
    <div className="w-12 h-12 overflow-hidden rounded-full shrink-0">
      <Image
        src={userIcon}
        width={100}
        height={100}
        alt="ユーザーアイコン"
        className="w-12 h-12"
      />
    </div>
    <textarea
      value={text}
      name="投稿入力フォーム"
      id="post-form"
      rows={2}
      className="outline-none resize-none w-full bg-custom-dark-light text-lg px-2 py-1 rounded-medium border border-custom-dark-light focus:border-gold-main"
      onChange={changeText}
    />
    <div className="shrink-0">
      <Button onClick={clickPostButton} disabled={text.length < 1}>
        投稿
      </Button>
    </div>
  </div>
);
