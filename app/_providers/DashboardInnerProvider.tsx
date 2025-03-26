"use client";

import React, { createContext, useContext, useMemo, ReactNode } from "react";
import { useStore } from "zustand";
import { createDashboardInnerStore } from "../_store/dashboardInnerStore";
import { processedDataSlice } from "../_store/dashboardInnerStore/slices/processedDataSlice";
import { connectorsSlice } from "../_store/dashboardInnerStore/slices/connectorsSlice";
import { newClientPermission } from "../_store/dashboardInnerStore/slices/clientPermissionSlice";
import { automationsSlice } from "../_store/dashboardInnerStore/slices/automationSlice";

export type DashboardInnerStoreApi = ReturnType<typeof createDashboardInnerStore>;

const DashboardInnerStoreContext = createContext<DashboardInnerStoreApi | null>(null);

interface DashboardInnerStoreProviderProps {
  children: ReactNode;
}

export const DashboardInnerStoreProvider: React.FC<DashboardInnerStoreProviderProps> = ({ children }) => {
  const store = useMemo(() => createDashboardInnerStore(), []);

  return (
    <DashboardInnerStoreContext.Provider value={store}>
      {children}
    </DashboardInnerStoreContext.Provider>
  );
};

export const useDashboardInnerStore = <T,>(selector: (store: processedDataSlice & connectorsSlice & newClientPermission & automationsSlice) => T): T => {
  const store = useContext(DashboardInnerStoreContext);

  if (!store) {
    throw new Error("❌ useDashboardInnerStore must be used within <DashboardInnerStoreProvider>");
  }

  return useStore(store, selector);
};