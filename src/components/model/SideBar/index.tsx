'use client';

import { useSideBar } from './hooks';
import { SideBarPresentation } from './presentations';

export const SideBar: React.FC = () => {
  const { selected } = useSideBar();

  return <SideBarPresentation selected={selected} />;
};
