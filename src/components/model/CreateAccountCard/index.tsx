'use client';
import { useCreateAccountCard } from './hooks';
import { CreateAccountCardPresentation } from './presentations';
import { CreateAccountCardErrorPresentation } from './presentations/error';
import { CreateAccountCardLoadingPresentation } from './presentations/loading';

import { ProgressNumber } from '@/components/ui/ProgressNumber';

export const CreateAccountCard: React.FC = () => {
  const {
    handleCodeChange,
    handleVerifyTokenChange,
    handlePhoneNumberChange,
    phoneNumberValue,
    verifyCode,
    sendSMSCode,
    signInWithGoogle,
    authProgress,
    handleQrComplete,
    verifyAppCode,
    totalProgress,
    isLoading,
    errorText,
    authenticationCodeUrl,
  } = useCreateAccountCard();
  return (
    <div className="bg-gold-dark relative flex flex-col items-center rounded-large p-8 w-[640px] ">
      <div className="content-center">
        <ProgressNumber totalNum={totalProgress} selectedNum={authProgress} />
      </div>
      <CreateAccountCardPresentation
        handleCodeChange={handleCodeChange}
        handleVerifyTokenChange={handleVerifyTokenChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
        phoneNumberValue={phoneNumberValue}
        verifyCode={verifyCode}
        sendSMSCode={sendSMSCode}
        verifyAppCode={verifyAppCode}
        signInWithGoogle={signInWithGoogle}
        authProgress={authProgress}
        authenticationCodeUrl={authenticationCodeUrl}
        handleQrComplete={handleQrComplete}
      />
      {errorText && (
        <>
          <div className="bg-[#00000033] w-[640px] h-[480px] absolute top-0 z-0" />
          <div className="absolute top-1/2 z-10">
            <CreateAccountCardErrorPresentation errorText={errorText} />
          </div>
        </>
      )}
      {isLoading && (
        <>
          <div className="bg-[#00000033] w-[640px] h-[480px] absolute top-0 z-0" />
          <div className="absolute top-1/2 z-100">
            <CreateAccountCardLoadingPresentation />
          </div>
        </>
      )}
    </div>
  );
};
