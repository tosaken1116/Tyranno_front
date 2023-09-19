import type { ChangeEvent } from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Stack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';

export type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  verifyCode: () => void;
};
export const SmsCodeInput: React.FC<Props> = ({ onChange, verifyCode }) => (
  <div className="h-full w-full p-4 flex flex-col gap-4 text-end">
    <Stack direction="column" spacing={4} className="items-center mb-4">
      <Typography variant="h2" className="text-white">
        ワンタイムパスワードを入力
      </Typography>
      <Typography variant="body2" className="text-white">
        そろそろ疲れてきた？
      </Typography>
    </Stack>
    <Input onChange={onChange} label="ワンタイムコード" />
    <div>
      <Button onClick={(): void => verifyCode()}>コードを送信</Button>
    </div>
  </div>
);
