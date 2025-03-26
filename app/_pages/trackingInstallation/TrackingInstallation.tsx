import { ROUTE_CONST } from '@/app/_constants/routeConstants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Installation from './components/Installation'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'

const TrackingInstallation = () => {
  return (
    <>
        <Link
          href={`${ROUTE_CONST.DASHBOARD}/id`}
          className="flex items-center gap-3 hover:no-underline"
        >
          <div className="">
            <Image
              width={18}
              height={18}
              loading="lazy"
              quality={90}
              alt="logo"
              src={"/img/headerArrow.png"}
            ></Image>
          </div>
          <div className="text-sm text-theme1 font-semibold">
            Back
          </div>
        </Link>
        <div className="flex justify-between items-center flex-wrap gap-3 mt-6">
          <div className="text-2xl md:text-3xl font-semibold text-theme14 ">mobile-123fun.com</div>
          <div className="flex items-center gap-3 max-md:justify-end max-md:w-full">
            <button className='h-10 w-10 flex items-center justify-center'>
              <Image width={20} height={20} src={"/img/refresh-ccw-05.png"} className="h-5 w-5 object-contain" alt="refresh icon"/>
            </button>
            <button className='ml-1.5 h-10 flex items-center justify-center text-sm font-semibold border border-theme8 text-theme5 gap-2 rounded-lg px-4 shadow-[0px_1px_2px_0px_#1018280D]'>
              <Image width={15} height={15} src={"/img/dropdownIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain brightness-0 rotate-180" alt="refresh icon"/>
              Tracking Installation
            </button>
          </div>
        </div>
        <div className="text-sm font-normal text-theme9 leading-5 mt-1.5">Tracking Container</div>
        <Installation/>
        <Step1/>
        <Step2/>
        <Step3/>
    </>
  )
}

export default TrackingInstallation