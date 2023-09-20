import { DateToDiffLabel } from './logic';

type Prop = {
  lang: 'ja' | 'en';
  date: Date;
  now?: Date;
};
export const DateDiffLabel: React.FC<Prop> = ({ lang, date, now }) => {
  const nowDate = now ?? new Date();
  return (
    <time dateTime={date.toISOString()}>
      {DateToDiffLabel(date, nowDate, lang)}{' '}
    </time>
  );
};
