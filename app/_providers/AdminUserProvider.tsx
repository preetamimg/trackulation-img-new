"use client";

import React, { createContext, useContext, useMemo, ReactNode } from "react";
import { useStore } from "zustand";
import { createAdminUserStore } from "../_store/adminUserStore";
import { userSliceProps } from "../_store/adminUserStore/slices/adminUserSlice";

export type AdminUsersStoreApi = ReturnType<typeof createAdminUserStore>;

const AdminUsersStoreContext = createContext<AdminUsersStoreApi | null>(null);

interface AdminUsersStoreProviderProps {
  children: ReactNode;
}

export const AdminUsersStoreProvider: React.FC<AdminUsersStoreProviderProps> = ({ children }) => {
  const store = useMemo(() => createAdminUserStore(), []);

  return (
    <AdminUsersStoreContext.Provider value={store}>
      {children}
    </AdminUsersStoreContext.Provider>
  );
};

export const useAdminUsersStore = <T,>(selector: (store: userSliceProps) => T): T => {
  const store = useContext(AdminUsersStoreContext);

  if (!store) {
    throw new Error("❌ useAdminUsersStore must be used within <AdminUsersStoreProvider>");
  }

  return useStore(store, selector);
};