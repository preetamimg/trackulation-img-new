"use client";

import React, { createContext, useContext, useMemo, ReactNode } from "react";
import { useStore } from "zustand";
import { createDashboardStore } from "../_store/dashboardStore";
import { newCompanySlice } from "../_store/dashboardStore/slices/newCompanySlice";
import { trackingContainerSliceType } from "../_store/dashboardStore/slices/newTrackingContainerSlice";

export type DashboardStoreApi = ReturnType<typeof createDashboardStore>;

const DashboardStoreContext = createContext<DashboardStoreApi | null>(null);

interface DashboardStoreProviderProps {
  children: ReactNode;
}

export const DashboardStoreProvider: React.FC<DashboardStoreProviderProps> = ({ children }) => {
  const store = useMemo(() => createDashboardStore(), []);

  return (
    <DashboardStoreContext.Provider value={store}>
      {children}
    </DashboardStoreContext.Provider>
  );
};

export const useDashboardStore = <T,>(selector: (store: newCompanySlice & trackingContainerSliceType) => T): T => {
  const store = useContext(DashboardStoreContext);

  if (!store) {
    throw new Error("❌ useDashboardStore must be used within <DashboardStoreProvider>");
  }

  return useStore(store, selector);
};