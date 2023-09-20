import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import {
  GoogleAuthProvider,
  RecaptchaVerifier,
  linkWithPhoneNumber,
  signInWithPopup,
} from 'firebase/auth';

import type { ConfirmationResult, User } from 'firebase/auth';

import { auth } from '@/libs/firebase';

export type ProgressNumbers = 1 | 2 | 3;
type IUseCreateAccountCard = {
  handleCodeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePhoneNumberChange: Dispatch<
    SetStateAction<{ phoneNumber: string; countryCode: string }>
  >;
  phoneNumberValue: { phoneNumber: string; countryCode: string };
  sendSMSCode: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  verifyCode: () => Promise<void>;
  authProgress: ProgressNumbers;
  totalProgress: number;
  isLoading: boolean;
  errorText: string;
};

export const useCreateAccountCard = (): IUseCreateAccountCard => {
  const [phoneNumberValue, setPhoneNumberValue] = useState({
    phoneNumber: '+81',
    countryCode: '',
  });
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult>();
  const [authProgress, setAuthProgress] = useState<ProgressNumbers>(1);
  const [googleUser, setGoogleUser] = useState<User>();
  const provider = new GoogleAuthProvider();

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCode(event.target.value);
  };

  const signInWithGoogle = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await signInWithPopup(auth, provider);
      setIsLoading(false);
      if (auth.currentUser == null) {
        setErrorText('Google認証に失敗しました');
        return;
      }
      setGoogleUser(auth.currentUser);
      setAuthProgress(2);
    } catch (error) {
      setErrorText('Google認証に失敗しました');
    }
    setIsLoading(false);
  };

  const sendSMSCode = async (): Promise<void> => {
    const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
    try {
      if (googleUser == undefined) {
        return;
      }
      const confirmation = await linkWithPhoneNumber(
        googleUser,
        `${phoneNumberValue.countryCode} ${phoneNumberValue.phoneNumber}`,
        appVerifier
      );
      setConfirmationResult(confirmation);
      setAuthProgress(3);
    } catch (error) {
      setErrorText('SMSコードの送信に失敗しました');
    }
  };

  const verifyCode = async (): Promise<void> => {
    setIsLoading(true);
    try {
      if (confirmationResult == undefined) {
        return;
      }
      await confirmationResult.confirm(code);
    } catch (error) {
      console.error('電話番号認証に失敗しました:', error);
    }
    setIsLoading(false);
  };

  return {
    handleCodeChange,
    phoneNumberValue,
    handlePhoneNumberChange: setPhoneNumberValue,
    sendSMSCode,
    signInWithGoogle,
    verifyCode,
    authProgress,
    totalProgress: 3,
    isLoading,
    errorText,
  };
};
