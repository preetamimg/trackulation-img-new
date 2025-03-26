"use client"

import { ReactNode } from "react";
import Footer from "../_components/Footer";
import { usePathname } from "next/navigation";
import Header from "../_components/Header";
import FrontendProviders from "../_providers/FrontendProviders";

type FrontendLayoutProps = {
  children: ReactNode;
};

export default function FrontendLayout({ children }: FrontendLayoutProps) {
  const pathname = usePathname()
  return (
    <>
      <FrontendProviders>
        <div className="h-full w-full overflow-y-auto frontEndLayoutWrapper">
          {
            pathname === "/" ? '' : <Header/>
          }
          {children}
          <Footer/>
        </div>
      </FrontendProviders>
    </>
  );
}
