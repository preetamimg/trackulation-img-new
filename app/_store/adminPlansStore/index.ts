import { createStore } from 'zustand/vanilla';
import { immer } from 'zustand/middleware/immer'
import { createNewPlanSlice, newPlanSlice } from './slices/newPlanSlice';

export const createAdminPlanStore = ()=> {
  return createStore<newPlanSlice>()(immer((...args)=> ({
    ...createNewPlanSlice(...args)
  })))
}