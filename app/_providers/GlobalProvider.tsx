"use client";

import React, { createContext, useContext, useMemo, ReactNode } from "react";
import { useStore } from "zustand";
import { createGlobalStore } from "../_store/globalStore";
import { deleteModalSlice } from "../_store/globalStore/slices/deleteModalSlice";

export type GlobalStoreApi = ReturnType<typeof createGlobalStore>;

const GlobalStoreContext = createContext<GlobalStoreApi | null>(null);

interface GlobalStoreProviderProps {
  children: ReactNode;
}

export const GlobalStoreProvider: React.FC<GlobalStoreProviderProps> = ({ children }) => {
  const store = useMemo(() => createGlobalStore(), []);

  return (
    <GlobalStoreContext.Provider value={store}>
      {children}
    </GlobalStoreContext.Provider>
  );
};

export const useGlobalStore = <T,>(selector: (store: deleteModalSlice) => T): T => {
  const store = useContext(GlobalStoreContext);

  if (!store) {
    throw new Error("❌ useGlobalStore must be used within <GlobalStoreProvider>");
  }

  return useStore(store, selector);
};