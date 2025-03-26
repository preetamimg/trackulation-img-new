"use client";

import React, { createContext, useContext, useMemo, ReactNode } from "react";
import { useStore } from "zustand";
import { newPlanSlice } from "../_store/adminPlansStore/slices/newPlanSlice";
import { createAdminPlanStore } from "../_store/adminPlansStore";

export type AdminPlanStoreApi = ReturnType<typeof createAdminPlanStore>;

const AdminPlanStoreContext = createContext<AdminPlanStoreApi | null>(null);

interface AdminPlansStoreProviderProps {
  children: ReactNode;
}

export const AdminPlanStoreProvider: React.FC<AdminPlansStoreProviderProps> = ({ children }) => {
  const store = useMemo(() => createAdminPlanStore(), []);

  return (
    <AdminPlanStoreContext.Provider value={store}>
      {children}
    </AdminPlanStoreContext.Provider>
  );
};

export const useAdminPlanStore = <T,>(selector: (store: newPlanSlice) => T): T => {
  const store = useContext(AdminPlanStoreContext);

  if (!store) {
    throw new Error("❌ useAdminPlanStore must be used within <AdminPlanStoreProvider>");
  }

  return useStore(store, selector);
};