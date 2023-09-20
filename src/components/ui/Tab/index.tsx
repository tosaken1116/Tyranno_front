import type { Dispatch, ReactElement, SetStateAction } from 'react';

import { cva } from 'class-variance-authority';
import clsx from 'clsx';

type Props = {
  setTab: Dispatch<SetStateAction<string>>;
  selected: string;
  children: ReactElement<{ title: string }>[];
  containerStyle?: string;
  selectStyle?: string;
  unSelectStyle?: string;
};
const defaultStyle = 'py-2 px-4';
export const Tab: React.FC<Props> = ({
  setTab,
  children,
  selected,
  containerStyle,
  selectStyle,
  unSelectStyle,
}) => {
  const tabStyle = cva(clsx(defaultStyle, containerStyle), {
    variants: {
      selected: {
        true: clsx(
          'text-gold-light border-b-2 border-deep-red-main',
          selectStyle
        ),
        false: clsx('text-gold-main', unSelectStyle),
      },
    },
  });
  return (
    <div>
      <div className="flex ">
        {children.map((child) => (
          <button
            key={child.props.title}
            className={tabStyle({ selected: child.props.title === selected })}
            onClick={(): void => setTab(child.props.title)}
          >
            {child}
          </button>
        ))}
      </div>
    </div>
  );
};
