import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import { useMutation, useQuery } from '@tanstack/react-query';
import {
  GoogleAuthProvider,
  RecaptchaVerifier,
  linkWithPhoneNumber,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';

import type { ConfirmationResult, User } from 'firebase/auth';

import {
  generateTotpKey,
  signIn,
  verifyTotp,
} from '@/gen/schemas/protos/v1/auth-AuthService_connectquery';
import { createUser } from '@/gen/schemas/protos/v1/user-UserService_connectquery';
import { auth } from '@/libs/firebase';

export type ProgressNumbers = 1 | 2 | 3 | 4 | 5;
type IUseCreateAccountCard = {
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
  totalProgress: number;
  isLoading: boolean;
  errorText: string;
  authenticationCodeUrl: string;
};

export const useCreateAccountCard = (): IUseCreateAccountCard => {
  const router = useRouter();
  const [phoneNumberValue, setPhoneNumberValue] = useState({
    phoneNumber: '',
    countryCode: '+81',
  });
  const [code, setCode] = useState('');
  const [verifyToken, setVerifyToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult>();
  const [authProgress, setAuthProgress] = useState<ProgressNumbers>(1);
  const [googleUser, setGoogleUser] = useState<User>();
  const { mutateAsync } = useMutation(
    createUser.useMutation({
      callOptions: {
        headers: [
          ['AuthProvider', 'firebase'],
          [
            'Authorization',
            typeof window !== 'undefined'
              ? `Bearer ${localStorage.getItem('accessToken')}`
              : '',
          ],
        ],
      },
    })
  );
  const { mutateAsync: checkVerifyToken } = useMutation(
    verifyTotp.useMutation({
      callOptions: {
        headers: [
          ['AuthProvider', 'firebase'],
          [
            'Authorization',
            typeof window !== 'undefined'
              ? `Bearer ${localStorage.getItem('accessToken')}`
              : '',
          ],
        ],
      },
    })
  );

  const {
    data: signInResult,
    refetch,
    isError,
  } = useQuery(
    signIn.useQuery(
      {},
      {
        callOptions: {
          headers: [
            ['AuthProvider', 'firebase'],
            [
              'Authorization',
              typeof window !== 'undefined'
                ? `Bearer ${localStorage.getItem('accessToken')}`
                : '',
            ],
          ],
        },
      }
    )
    // {
    //   enabled: false,
    //   refetchInterval: 1000,
    //   retry: 10,
    //   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    // }
  );

  const { data, refetch: genTotpKey } = useQuery(
    // TODO:返り値の方が適切に設定されてないため
    generateTotpKey.useQuery(
      {
        firebaseId: googleUser?.uid ?? '',
      },
      {
        callOptions: {
          headers: [
            ['AuthProvider', 'firebase'],
            [
              'Authorization',
              typeof window !== 'undefined'
                ? `Bearer ${localStorage.getItem('accessToken')}`
                : '',
            ],
          ],
        },
      }
    )
    // { enabled: false, refetchInterval: 1000, retry: 1 }
  );
  const provider = new GoogleAuthProvider();

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCode(event.target.value);
  };

  const handleVerifyTokenChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setVerifyToken(event.target.value);
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
      localStorage.setItem(
        'accessToken',
        (await auth.currentUser.getIdToken()) ?? ''
      );

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
      const res = await confirmationResult.confirm(code);
      await mutateAsync(
        {
          icon: res.user.photoURL ?? '',
          displayId: res.user.uid ?? '',
          name: res.user.displayName ?? '',
        },
        {
          onSuccess: () => {
            setAuthProgress(4);
          },
          onError: () => {
            setErrorText('ユーザーの作成に失敗しました');
            return;
          },
        }
      );
      await genTotpKey();
    } catch (error) {
      console.error('電話番号認証に失敗しました:', error);
      setErrorText('電話番号認証に失敗しました');
    }
    setIsLoading(false);
  };
  const handleQrComplete = (): void => {
    setAuthProgress(5);
  };
  const verifyAppCode = async (): Promise<void> => {
    const { status } = await checkVerifyToken({
      token: verifyToken,
      firebaseId: googleUser?.uid ?? '',
    });
    if (!status) {
      setErrorText('認証に失敗しました');
      return;
    }
    await refetch();
    if (isError) {
      setErrorText('ログイン認証に失敗しました');
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (signInResult != undefined) {
      localStorage.setItem('jwtToken', signInResult.token);
      router.push('/home');
      return;
    }
    setErrorText('ログイン中にエラーが発生しました');
  };

  return {
    handleCodeChange,
    handleVerifyTokenChange,
    phoneNumberValue,
    handlePhoneNumberChange: setPhoneNumberValue,
    sendSMSCode,
    signInWithGoogle,
    verifyCode,
    handleQrComplete,
    verifyAppCode,
    authProgress,
    totalProgress: 5,
    isLoading,
    errorText,
    // TODO:型不明エラー
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    authenticationCodeUrl: data?.totpUrl ?? '',
  };
};
