import { createStore } from 'zustand/vanilla';
import { immer } from 'zustand/middleware/immer'
import { createAccordianSlice, newAccordianSlice } from './slices/accordianSlice';

export const createAccordianStore = ()=> {
  return createStore<newAccordianSlice>()(immer((...args)=> ({
    ...createAccordianSlice(...args)
  })))
}