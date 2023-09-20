import { Button } from '@/components/ui/Button';
import { QrCode } from '@/components/ui/QrCode';
import { Stack } from '@/components/ui/Stack';
import { Typography } from '@/components/ui/Typography';

type Props = {
  url: string;
  handleQrComplete: () => void;
};
export const QRCode: React.FC<Props> = ({ url, handleQrComplete }) => (
  <div className="h-full w-full p-4 flex flex-col gap-4 text-end">
    <Stack direction="column" spacing={4} className="items-center mb-4">
      <Typography variant="h2" className="text-white">
        QRコードを読み込んでください
      </Typography>
      <Typography variant="body2" className="text-white">
        スマホ出すのめんどくさいね
      </Typography>
    </Stack>
    <QrCode url={url} />
    <div>
      <Button onClick={(): void => handleQrComplete()}>次へ</Button>
    </div>
  </div>
);
