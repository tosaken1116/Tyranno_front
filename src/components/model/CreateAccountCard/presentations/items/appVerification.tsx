import type { ChangeEvent } from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Stack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  verifyAppCode: () => void;
};
export const AppVerification: React.FC<Props> = ({
  onChange,
  verifyAppCode,
}) => (
  <div className="h-full w-full p-4 flex flex-col gap-4 text-end">
    <Stack direction="column" spacing={4} className="items-center mb-4">
      <Typography variant="h2" className="text-white">
        認証コードを入力
      </Typography>
      <Typography variant="body2" className="text-white">
        これで終わりだよ！
      </Typography>
    </Stack>
    <Input onChange={onChange} label="認証コード" />
    <div>
      <Button onClick={(): void => verifyAppCode()}>コードを送信</Button>
    </div>
  </div>
);
