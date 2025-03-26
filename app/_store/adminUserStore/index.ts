
import { createStore } from 'zustand/vanilla';
import { immer } from 'zustand/middleware/immer'
import { createAdminUserSlice, userSliceProps } from './slices/adminUserSlice';

export const createAdminUserStore = ()=> {
  return createStore<userSliceProps>()(immer((...args)=> ({
    ...createAdminUserSlice(...args),
  })))
}