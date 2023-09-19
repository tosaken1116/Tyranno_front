import { SIDEBAR_ITEMS } from '../constant';

import { LabelIcon } from '@/components/ui/LabelIcon';

type Props = {
  selected: string;
};
export const SideBarPresentation: React.FC<Props> = ({ selected }) => (
  <div>
    <ul>
      {SIDEBAR_ITEMS.map(({ children, path, ...labelProps }) => (
        <li key={path} className="p-4">
          <LabelIcon
            selected={selected == path}
            className="gap-16"
            {...labelProps}
          >
            {children}
          </LabelIcon>
        </li>
      ))}
    </ul>
  </div>
);
