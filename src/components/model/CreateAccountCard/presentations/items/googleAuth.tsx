import React from 'react';

import { Button } from '@/components/ui/Button';
import { Stack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';

export type Props = {
  signInWithGoogle: () => void;
};
export const GoogleAuth: React.FC<Props> = ({ signInWithGoogle }) => (
  <div className="h-full w-full p-4 text-center">
    <Stack direction="column" spacing={4} className="items-center mb-4">
      <Typography variant="h2" className="text-white">
        Googleアカウントでログイン
      </Typography>
      <Typography variant="body2" className="text-white">
        Googleアカウントしか使えないなんてなんて不便...
      </Typography>
    </Stack>
    <Button
      className="text-2xl px-8 py-4"
      onClick={(): void => signInWithGoogle()}
    >
      Googleでログイン
    </Button>
  </div>
);
