// @ts-nocheck

import { createStore } from 'zustand/vanilla';
import { immer } from 'zustand/middleware/immer'
import { createNewCompanySlice, newCompanySlice } from './slices/newCompanySlice';
import { createNewTrackingContainerSlice, trackingContainerSliceType } from './slices/newTrackingContainerSlice';

export const createDashboardStore = ()=> {
  return createStore<newCompanySlice & trackingContainerSliceType>()(immer((...args)=> ({
    ...createNewCompanySlice(...args),
    ...createNewTrackingContainerSlice(...args)
  })))
}