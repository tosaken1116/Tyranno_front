import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { StateCreator } from 'zustand';

export type User = {
  displayId: string;
  name: string;
  icon: string;
  profile: string;
};

type UserSlice = {
  user: User;
  setUser: (user: User) => void;
  initUser: () => void;
};

const InitUserData: User = {
  displayId: '',
  name: '',
  icon: '',
  profile: '',
};

type StoreState = UserSlice;

const createUsersSlice: StateCreator<
  UserSlice,
  [],
  [['zustand/devtools', never]],
  UserSlice
> = devtools((set) => ({
  user: InitUserData,
  setUser: (user: User) =>
    set((state: UserSlice) => ({ ...state, user: user })),
  initUser: () => set((state: UserSlice) => ({ ...state, user: InitUserData })),
}));

const useStore = create<StoreState>()((...a) => ({
  ...createUsersSlice(...a),
}));

export default useStore;
