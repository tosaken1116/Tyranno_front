import type { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { cva } from 'class-variance-authority';

import { AppVerification } from './items/appVerification';
import { GoogleAuth } from './items/googleAuth';
import { PhoneNumberInput } from './items/phoneNumberInput';
import { QRCode } from './items/qrCode';
import { SmsCodeInput } from './items/smsCodeInput';

import type { ProgressNumbers } from '../hooks';

type Props = {
  handleCodeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleVerifyTokenChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePhoneNumberChange: Dispatch<
    SetStateAction<{ phoneNumber: string; countryCode: string }>
  >;
  phoneNumberValue: { phoneNumber: string; countryCode: string };
  sendSMSCode: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  verifyCode: () => Promise<void>;
  handleQrComplete: () => void;
  verifyAppCode: () => Promise<void>;
  authProgress: ProgressNumbers;
  authenticationCodeUrl: string;
};

export const CreateAccountCardPresentation: React.FC<Props> = ({
  handleCodeChange,
  handleVerifyTokenChange,
  handlePhoneNumberChange,
  phoneNumberValue,
  signInWithGoogle,
  sendSMSCode,
  verifyCode,
  verifyAppCode,
  handleQrComplete,
  authProgress,
  authenticationCodeUrl,
}) => {
  const authStyle = cva(
    'transition-all top-1/2 -translate-y-1/2 absolute w-[480px]',
    {
      variants: {
        progress: {
          past: '-translate-x-full',
          in: 'translate-x-0',
          future: 'translate-x-full',
        },
      },
    }
  );

  return (
    <div className="relative overflow-hidden w-[480px] h-[300px]">
      <div
        className={authStyle({ progress: authProgress == 1 ? 'in' : 'past' })}
      >
        <GoogleAuth
          signInWithGoogle={(): void => {
            void signInWithGoogle();
          }}
        />
      </div>
      <div
        className={authStyle({
          progress:
            authProgress == 2 ? 'in' : authProgress > 2 ? 'past' : 'future',
        })}
      >
        <PhoneNumberInput
          onChange={handlePhoneNumberChange}
          sendSMSCode={(): void => {
            void sendSMSCode();
          }}
          value={phoneNumberValue}
        />
      </div>
      <div
        className={authStyle({
          progress:
            authProgress == 3 ? 'in' : authProgress > 3 ? 'past' : 'future',
        })}
      >
        <SmsCodeInput
          onChange={handleCodeChange}
          verifyCode={(): void => {
            void verifyCode();
          }}
        />
      </div>
      <div
        className={authStyle({
          progress:
            authProgress == 4 ? 'in' : authProgress > 4 ? 'past' : 'future',
        })}
      >
        <QRCode
          url={authenticationCodeUrl}
          handleQrComplete={handleQrComplete}
        />
      </div>
      <div
        className={authStyle({
          progress: authProgress == 5 ? 'in' : 'past',
        })}
      >
        <AppVerification
          onChange={handleVerifyTokenChange}
          verifyAppCode={(): void => {
            void verifyAppCode();
          }}
        />
      </div>
    </div>
  );
};
