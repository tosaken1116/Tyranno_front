import { cva } from 'class-variance-authority';
import clsx from 'clsx';

type Props = {
  selected?: boolean;
  children: React.ReactNode;
  icon: React.ReactNode;
  selectedIcon: React.ReactNode;
  className?: string;
};
const defaultStyle = 'text-xl flex gap-4';
export const LabelIcon: React.FC<Props> = ({
  selected = false,
  children,
  icon,
  selectedIcon,
  className,
}) => {
  const LabelIconStyle = cva(clsx(defaultStyle, className), {
    variants: {
      selected: {
        true: 'text-gold-light font-bold',
        false: 'text-gold-dark font-semibold',
      },
    },
  });
  return (
    <div className={LabelIconStyle({ selected })}>
      {selected ? <p>{selectedIcon}</p> : <p>{icon}</p>}
      {children}
    </div>
  );
};
