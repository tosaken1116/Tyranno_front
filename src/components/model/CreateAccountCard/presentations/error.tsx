import { Typography } from '@/components/ui/Typography';

export const CreateAccountCardErrorPresentation: React.FC<{
  errorText: string;
}> = ({ errorText }) => (
  <div className="text-center flex gap-8 flex-col">
    <Typography variant="h1" className="text-[64px]">
      🐈
    </Typography>
    <Typography variant="strong" className="text-2xl">
      {errorText}
    </Typography>
  </div>
);
