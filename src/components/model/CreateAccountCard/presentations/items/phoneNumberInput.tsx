import type { Dispatch, SetStateAction } from 'react';

import { Button } from '@/components/ui/Button';
import { Stack } from '@/components/ui/Stack';
import TelNumInput from '@/components/ui/TelNumInput';
import { Typography } from '@/components/ui/Typography';

export type Props = {
  onChange: Dispatch<
    SetStateAction<{ phoneNumber: string; countryCode: string }>
  >;
  value: { phoneNumber: string; countryCode: string };
  sendSMSCode: () => void;
};
export const PhoneNumberInput: React.FC<Props> = ({
  onChange,
  sendSMSCode,
  value,
}) => (
  <div className="h-full w-full p-4 flex flex-col gap-4 text-end">
    <Stack direction="column" spacing={4} className="items-center mb-4">
      <Typography variant="h2" className="text-white">
        電話番号を入力
      </Typography>
      <Typography variant="body2" className="text-white">
        アメリカ想定してないでしょ
      </Typography>
    </Stack>
    <TelNumInput setState={onChange} value={value} />
    <div>
      <Button onClick={(): void => sendSMSCode()}>コードを送信</Button>
    </div>
    <div id="recaptcha-container" />
  </div>
);
