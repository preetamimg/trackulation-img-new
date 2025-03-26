"use client"
import React, {ReactNode} from "react";
import SidebarContextProvider from "@/app/_context/sidebarContext";


type ProvidersProps = {
  children: ReactNode;
};


const FrontendProviders: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <SidebarContextProvider>
      {children}
    </SidebarContextProvider>
  );
};

export default FrontendProviders;