import { cva } from 'class-variance-authority';
import clsx from 'clsx';

type Props = {
  label?: string;
  icon: React.ReactNode;
  size?: 's' | 'm' | 'l';
  className?: string;
};
export const IconWithLabel: React.FC<Props> = ({
  label,
  icon,
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
      <p className={iconWithLabelStyle({ size })}>{icon}</p>
      {label && <p className={iconWithLabelStyle({ size })}>{label}</p>}
    </div>
  );
};
