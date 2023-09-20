import type { HTMLAttributes } from 'react';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { Stack } from '../Stack';

import { COLORS } from '@/constants/colors';

type Props = {
  totalNum: number;
  selectedNum: number;
} & HTMLAttributes<HTMLParagraphElement>;
const defaultStyle =
  'bg-white font-bold flex justify-center text-white items-center rounded-full w-12 h-12';
export const ProgressNumber: React.FC<Props> = ({
  totalNum,
  selectedNum,
  className,
}) => {
  if (selectedNum > totalNum || selectedNum < 1) {
    throw new Error('selectedNum > totalNum');
  }
  const progressNumberStyle = clsx(defaultStyle, className);

  return (
    <Stack direction="row" spacing={4} className="items-center">
      {Array.from({ length: totalNum }).map((_, i) => (
        <div key={i}>
          <p
            style={{
              backgroundColor:
                i + 1 == selectedNum ? COLORS.DEEP_RED.MAIN : COLORS.BLACK.MAIN,
            }}
            className={progressNumberStyle}
          >
            {i + 1}
          </p>
          {i + 1 != totalNum && (
            <FontAwesomeIcon
              icon={faArrowRight}
              size="xl"
              className="text-custom-dark-light"
            />
          )}
        </div>
      ))}
    </Stack>
  );
};
