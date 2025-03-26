"use client"

import { ReactNode } from "react";
import Providers from "@/app/_providers/Providers";
import Sidebar from "@/app/_components/Sidebar";
import { usePathname } from "next/navigation";
import AdminHeader from "../_components/AdminHeader";

type AdminLayoutProps = {
  children: ReactNode;
};

export default function SuperAdminLayout({ children }: AdminLayoutProps) {
    const pathname = usePathname();
  return (
    <Providers>
      <div className="flex h-full w-full overflow-hidden">
        <Sidebar/>
        <div className={`content w-full lg:w-[calc(100%_-_17.5rem)] h-full overflow-hidden flex flex-col ${pathname?.includes('/dashboard/') ? 'bg-theme4' : 'bg-white'}`}>
          <AdminHeader/>
          <div className="h-full flex-1 overflow-y-auto">
            <div className="px-4 lg:px-8 py-5 lg:py-16">
              {children}
            </div>
          </div>
        </div>
      </div>
    </Providers>
  );
}
