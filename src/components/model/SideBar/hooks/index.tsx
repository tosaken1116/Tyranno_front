'use client';

import { usePathname } from 'next/navigation';

type IUseSideBar = {
  selected: string;
};

export const useSideBar = (): IUseSideBar => {
  const pathName = usePathname();
  return { selected: pathName };
};
