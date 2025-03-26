// @ts-nocheck

import { createStore } from 'zustand/vanilla';
import { immer } from 'zustand/middleware/immer'
import { createProcressedDataSlice, processedDataSlice } from './slices/processedDataSlice';
import { createConnectorsSlice, connectorsSlice } from './slices/connectorsSlice';
import { createNewClientPermission, newClientPermission } from './slices/clientPermissionSlice';
import { createAutomationSlice, automationsSlice } from './slices/automationSlice';

export const createDashboardInnerStore = ()=> {
  return createStore<processedDataSlice & connectorsSlice & newClientPermission & automationsSlice>()(immer((...args)=> ({
    ...createProcressedDataSlice(...args),
    ...createConnectorsSlice(...args),
    ...createNewClientPermission(...args),
    ...createAutomationSlice(...args)
  })))
}
