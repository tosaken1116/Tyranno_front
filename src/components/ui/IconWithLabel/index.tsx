import { cva } from 'class-variance-authority';
import clsx from 'clsx';

type Props = {
  selected?: boolean;
  label?: string;
  icon: React.ReactNode;
  selectedIcon?: React.ReactNode;
  size?: 's' | 'm' | 'l';
  className?: string;
};
export const IconWithLabel: React.FC<Props> = ({
  selected = false,
  label,
  icon,
  selectedIcon,
  size = 'm',
  className,
}) => {
  const iconWithLabelStyle = cva(clsx(className), {
    variants: {
      size: {
        s: 'text-xs',
        m: 'text-base',
        l: 'text-xl',
      },
    },
  });
  return (
    <div className="flex gap-2">
      <p className={iconWithLabelStyle({ size })}>
        {selected ? selectedIcon : icon}
      </p>
      {label && <p className={iconWithLabelStyle({ size })}>{label}</p>}
    </div>
  );
};
