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

export const PostFormPresentation: React.FC<Props> = ({
  userIcon,
  text,
  error = '',
  changeText,
  clickPostButton,
}) => (
  <div className="w-full flex items-start gap-3 px-5 py-5">
    <div className="w-12 h-12 overflow-hidden rounded-full">
      <Image
        src={userIcon}
        width={100}
        height={100}
        alt="ユーザーアイコン"
        className="w-full h-full"
      />
    </div>
    <div className="flex flex-col items-end gap-1">
      <textarea
        value={text}
        name="投稿入力フォーム"
        id="post-form"
        cols={30}
        rows={5}
        className="outline-none resize-none w-full bg-custom-dark-light text-lg px-2 py-1 rounded-medium border border-custom-dark-light focus:border-gold-main"
        onChange={changeText}
      />
      <div className="flex gap-3 items-center">
        {error ? (
          <span className="text-error-main">投稿に失敗しました</span>
        ) : null}
        <span className="text-gold-main">{text.length}</span>
        <Button onClick={clickPostButton} disabled={text.length < 1}>
          投稿
        </Button>
      </div>
    </div>
  </div>
);
