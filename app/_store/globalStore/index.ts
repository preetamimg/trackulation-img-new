import { createStore } from 'zustand/vanilla';
import { immer } from 'zustand/middleware/immer'
import { createDeleteModalSlice, deleteModalSlice } from './slices/deleteModalSlice';

export const createGlobalStore = ()=> {
  return createStore<deleteModalSlice>()(immer((...args)=> ({
    ...createDeleteModalSlice(...args)
  })))
}