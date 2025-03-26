"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ROUTE_CONST } from '../_constants/routeConstants'
import MobileOffcanvas from './MobileOffcanvas'
import { useSidebar } from '../_hooks/useSidebar'

interface HeaderProps {
  isHomepage? : boolean
}

const Header : React.FC<HeaderProps> = ({isHomepage}) => {
  const {handleFrontSidebar} = useSidebar()
  return (
    <>
      <div className={`${isHomepage ? 'absolute top-0 left-0' : ''} w-full py-4 lg:py-7 bg-theme18`}>
        <div className="mx-auto px-5 sm:px-10 md:px-20 flex items-center justify-between gap-2 sm:gap-4">
          <Link href={'/'}>
            <Image width={184} height={41} src={ "/img/logo_white.png"} className={`h-[1.375rem] sm:h-8 max-sm:w-[6.125rem] lg:h-10 object-contain ${isHomepage ? '' : 'brightness-0'}`} alt="refresh icon"/>
          </Link>
          <div className={`hidden lg:flex gap-10 items-center font-poppins ${isHomepage ? "!text-white" : '!text-black lg:!text-theme3'}`}>
            <Link className={`text-sm font-medium ${isHomepage ? "!text-white" : '!text-theme3'}`} href={'/'}>Home</Link>
            <div className={`text-sm font-medium flex items-center gap-2 relative !no-underline group cursor-pointer ${isHomepage ? "!text-white" : '!text-theme3'}`}>
              Server Side Tracking
              <Image width={14} height={14} src={"/img/dropdownIcon.png"} className="size-3 object-contain brightness-[1000]" alt="refresh icon"/>
              <div className="absolute p-3 rounded-lg bg-white w-fit left-0 top-full hidden group-hover:block shadow">
                <ul>
                  <li>
                    <Link href={'/'} className='!text-theme3 text-nowrap !no-underline px-3 py-2 rounded-md hover:bg-slate-100 flex'>Google Ads Server Side Tracking</Link>
                  </li>
                  <li>
                    <Link href={'/'} className='!text-theme3 text-nowrap !no-underline px-3 py-2 rounded-md hover:bg-slate-100 flex'>Facebook Server Side Tracking</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`text-sm font-medium flex items-center gap-2 relative !no-underline group cursor-pointer ${isHomepage ? "!text-white" : '!text-theme3'}`}>
              Solutions
              <Image width={14} height={14} src={"/img/dropdownIcon.png"} className="size-3 object-contain brightness-[1000]" alt="refresh icon"/>
              <div className="absolute p-3 rounded-lg bg-white shadow w-fit left-0 top-full hidden group-hover:block">
                <ul>
                  <li>
                    <Link href={'/'} className='!text-theme3 text-nowrap !no-underline px-3 py-2 rounded-md hover:bg-slate-100 flex'>For Marketers</Link>
                  </li>
                  <li>
                    <Link href={'/'} className='!text-theme3 text-nowrap !no-underline px-3 py-2 rounded-md hover:bg-slate-100 flex'>For Agencies</Link>
                  </li>
                  <li>
                    <Link href={'/'} className='!text-theme3 text-nowrap !no-underline px-3 py-2 rounded-md hover:bg-slate-100 flex'>For Developers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link className={`text-sm font-medium ${isHomepage ? "!text-white" : '!text-theme3'}`} href={'/'}>Plans</Link>
            <Link className={`text-sm font-medium ${isHomepage ? "!text-white" : '!text-theme3'}`} href={'/'}>About Us</Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href={ROUTE_CONST.LOGIN} className={`flex text-xs lg:text-sm font-medium ${isHomepage ? "!text-white" : '!text-black lg:!text-theme3'} px-2 font-poppins !no-underline `}>Log in</Link>
            <Link href={ROUTE_CONST.LOGIN} className={`flex lg:hidden text-xs lg:text-sm font-medium ${isHomepage ? "!text-white" : '!text-black lg:!text-theme3'} px-2 font-poppins !no-underline `}>Start</Link>
            <Link href={ROUTE_CONST.LOGIN} className={`h-10 sm:h-12 font-poppins hidden lg:flex items-center justify-center gap-1 sm:gap-2 text-xs lg:text-sm font-semibold rounded-full px-3 sm:px-6 !no-underline  ${isHomepage ? '!text-theme3 bg-white' : '!text-white bg-theme12'}`}>
              Start Free Trial
              <Image width={20} height={20} src={"/img/loginIcon.png"} className={`size-4 sm:size-5 object-contain ${isHomepage ? "" : 'brightness-[1000]'}`} alt="refresh icon"/>
            </Link>
            <button className='lg:hidden' onClick={handleFrontSidebar}>
              <Image
                width={20}
                height={20}
                loading="lazy"
                quality={90}
                alt="logo"
                src={"/img/menu.png"}
                className={`size-5 object-contain ${isHomepage ? 'invert' : ''}`}
              ></Image>
            </button>
          </div>
        </div>
      </div>
      <MobileOffcanvas />
    </>
  )
}

export default Header