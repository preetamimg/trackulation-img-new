"use client";

import React, { createContext, useContext, useMemo, ReactNode } from "react";
import { useStore } from "zustand";
import { newAccordianSlice } from "../_store/trackingInstallationStore/slices/accordianSlice";
import { createAccordianStore } from "../_store/trackingInstallationStore";

export type TrackingInstallationtoreApi = ReturnType<typeof createAccordianStore>;

const TrackingInstallationStoreContext = createContext<TrackingInstallationtoreApi | null>(null);

interface TrackingInstallationStoreProviderProps {
  children: ReactNode;
}

export const TrackingInstallationStoreProvider: React.FC<TrackingInstallationStoreProviderProps> = ({ children }) => {
  const store = useMemo(() => createAccordianStore(), []);

  return (
    <TrackingInstallationStoreContext.Provider value={store}>
      {children}
    </TrackingInstallationStoreContext.Provider>
  );
};

export const useInstallationStore = <T,>(selector: (store: newAccordianSlice) => T): T => {
  const store = useContext(TrackingInstallationStoreContext);

  if (!store) {
    throw new Error("❌ useInstallationStore must be used within <TrackingInstallationStoreProvider>");
  }

  return useStore(store, selector);
};