"use client"
import React, {ReactNode} from "react";
import AuthUserContextProvider from "./AuthProvider";
import SidebarContextProvider from "@/app/_context/sidebarContext";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { GlobalStoreProvider } from "./GlobalProvider";

type ProvidersProps = {
  children: ReactNode;
};

const queryClient = new QueryClient()

const Providers: React.FC<ProvidersProps> = ({ children }) => {

  return (
    <>
    <QueryClientProvider client={queryClient}>
          <SidebarContextProvider>
            <AuthUserContextProvider>
              <GlobalStoreProvider>
                {children}
              </GlobalStoreProvider>
            </AuthUserContextProvider>
          </SidebarContextProvider>
    </QueryClientProvider>
    </>
  );
};

export default Providers;