"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SolutionLinks = () => {
  const pathname = usePathname()
  return (
    <>
      <div className="flex items-center gap-16 justify-center max-md:gap-2 flex-wrap">
        <div className="lg:hidden flex items-center justify-center min-w-2.5 size-2.5 rounded-full bg-theme3">
          <div className="flex bg-theme11 min-w-1 size-1"></div>
        </div>
        <Link className={` text-sm lg:text-lg text-nowrap font-poppins hover:text-theme1 !no-underline ${pathname === "/marketers" ? 'lg:font-semibold text-black pointer-events-none' : 'text-theme3'}`} href={'/marketers'}>For Marketers</Link>
        <div className="hidden lg:flex items-center justify-center min-w-4 size-4 rounded-full bg-theme3">
          <div className="flex bg-theme11 min-w-1.5 size-1.5"></div>
        </div>
        <Link className={` text-sm lg:text-lg text-nowrap font-poppins hover:text-theme1 !no-underline max-lg:px-3 ${pathname === "/" ? 'lg:font-semibold text-black' : 'text-theme3'}`} href={'/'}>For Agencies</Link>
        <div className="hidden lg:flex items-center justify-center min-w-4 size-4 rounded-full bg-theme3">
          <div className="flex bg-theme11 min-w-1.5 size-1.5"></div>
        </div>
        <Link className={` text-sm lg:text-lg text-nowrap font-poppins hover:text-theme1 !no-underline ${pathname === "/" ? 'lg:font-semibold text-black' : 'text-theme3'}`} href={'/'}>For Developers</Link>
      </div>
    </>
  )
}

export default SolutionLinks