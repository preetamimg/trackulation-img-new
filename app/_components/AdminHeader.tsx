"use client"
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { ROUTE_CONST } from '../_constants/routeConstants';
import { useSidebar } from '../_hooks/useSidebar';

const AdminHeader = () => {
  const { setShowSidebar } = useSidebar();
  return (
    <>
      <div className="header flex items-center justify-between p-4 lg:hidden">
        <Link href={ROUTE_CONST.HOME}>
          <Image
            width={142}
            height={32}
            loading="lazy"
            quality={90}
            alt="logo"
            src={"/img/logo.png"}
            className="h-auto"
          ></Image>
        </Link>
        <button onClick={()=> setShowSidebar(true)}>
          <Image
            width={20}
            height={20}
            loading="lazy"
            quality={90}
            alt="logo"
            src={"/img/menu.png"}
            className="size-5 object-contain"
          ></Image>
        </button>
      </div>
    </>
  )
}

export default AdminHeader