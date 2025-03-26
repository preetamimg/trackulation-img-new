"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useSidebar } from '../_hooks/useSidebar'

const MobileOffcanvas = () => {
  const {showFrontSidebar, handleFrontSidebar} = useSidebar()
  return (
    <>
      <div className={`fixed top-0 left-0 h-dvh overflow-hidden w-80 bg-white flex flex-col z-20 transition-all duration-300 ease-in-out  ${showFrontSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="headerr p-3 flex items-center justify-between">
          <Link href={'/'}>
            <Image width={184} height={41} src={ "/img/logo_white.png"} className={`h-[1.375rem] w-[6.125rem] object-contain brightness-0 flex`} alt="refresh icon"/>
          </Link>
          <button onClick={handleFrontSidebar}>
            <Image width={20} height={20} src={ "/img/closeIcon.png"} className={`size-3 object-contain brightness-0 flex`} alt="refresh icon"/>
          </button>
        </div>
        <div className="h-full flex-1 overflow-y-auto p-3">
        <div className={`flex flex-col gap-4 font-poppins`}>
            <Link className={`text-sm font-medium`} href={'/'}>Home</Link>
            <div className={`text-sm font-medium flex flex-col gap-2 relative !no-underline group/ssr cursor-pointer`}>
              <input type="checkbox" className='peer hidden' id='ssr' />
              <label htmlFor="ssr" className='flex flex-col'>
                <div className="flex items-center justify-between">
                  Server Side Tracking
                  <Image width={14} height={14} src={"/img/dropdownIcon.png"} className="size-3.5 object-contain flex" alt="refresh icon"/>
                </div>
                <div className=" hidden group-has-[.peer:checked]/ssr:!block">
                  <ul>
                    <li>
                      <Link href={'/'} className='px-3 py-2.5 flex'>Google Ads Server Side Tracking</Link>
                    </li>
                    <li>
                      <Link href={'/'} className='px-3 py-2.5 flex'>Facebook Server Side Tracking</Link>
                    </li>
                  </ul>
                </div>
              </label>
            </div>
            <div className={`text-sm font-medium flex flex-col gap-2 relative !no-underline group/solution cursor-pointer`}>
              <input type="checkbox" className='peer hidden' id='solution' />
              <label htmlFor="solution" className='flex flex-col'>
                <div className="flex items-center justify-between">
                  Solution
                  <Image width={14} height={14} src={"/img/dropdownIcon.png"} className="size-3.5 object-contain flex" alt="refresh icon"/>
                </div>
                <div className=" hidden group-has-[.peer:checked]/solution:!block">
                  <ul>
                    <li>
                      <Link href={'/'} className='px-3 py-2.5 flex'>For Marketers</Link>
                    </li>
                    <li>
                      <Link href={'/'} className='px-3 py-2.5 flex'>For Agencies</Link>
                    </li>
                    <li>
                      <Link href={'/'} className='px-3 py-2.5 flex'>For Developers</Link>
                    </li>
                  </ul>
                </div>
              </label>
            </div>
            <Link className={`text-sm font-medium `} href={'/'}>Plans</Link>
            <Link className={`text-sm font-medium `} href={'/'}>About Us</Link>
          </div>
        </div>
      </div>
      <div onClick={handleFrontSidebar} className={`fixed top-0 left-0 h-dvh w-dvw bg-black/45 z-10 ${showFrontSidebar ? '' : 'hidden'}`}></div>
    </>
  )
}

export default MobileOffcanvas