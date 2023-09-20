'use client';

import { QRCodeCanvas } from 'qrcode.react';

interface Props {
  url: string;
}

export const QrCode: React.FC<Props> = ({ url }) => {
  if (!url) {
    return <>...generating</>;
  }
  return (
    <QRCodeCanvas
      value={url}
      size={128}
      bgColor="#FFFFFF"
      fgColor="#000000"
      level="L"
      includeMargin={false}
      imageSettings={{
        src: '',
        x: 24,
        y: 24,
        height: 128,
        width: 128,
        excavate: true,
      }}
    />
  );
};
