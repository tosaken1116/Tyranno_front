import Image from 'next/image';

import { ConnectClient } from '@/components/functional/ConnectClient';
import { CreateAccountCard } from '@/components/model/CreateAccountCard';
import { Stack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';
import { SERVICE_CONCEPT, SERVICE_DESCRIPTION } from '@/constants/service';
import { envGuard } from '@/libs/envGuard';

export const Screen: React.FC = () => (
  <div className="flex flex-row h-[100vh]">
    <div className="flex-1 bg-black w-1/2 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Typography variant="h2" className="text-white text-center">
          {SERVICE_CONCEPT}
        </Typography>
        <Typography variant="h4" className="text-white text-center">
          {SERVICE_DESCRIPTION}
        </Typography>
      </div>
      <Image
        src="/top.webp"
        alt="background image"
        fill
        className=" object-fill w-full -z-5 opacity-50"
      />
    </div>
    <div className="flex flex-col flex-1 self-center justify-center items-center gap-10">
      <Stack spacing={4} direction="column" className="items-center">
        <Typography variant="h1" className="  text-deep-red-light text-7xl">
          NNYD
        </Typography>
        <Typography variant="h4" className=" text-deep-red-light">
          認証認可唯我独尊
        </Typography>
      </Stack>
      <ConnectClient
        baseUrl={envGuard(
          process.env['NEXT_PUBLIC_BACKEND_URL'],
          'NEXT_PUBLIC_BACKEND_URL'
        )}
      >
        <CreateAccountCard />
      </ConnectClient>
    </div>
  </div>
);
