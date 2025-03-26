"use client"
import { ROUTE_CONST } from '@/app/_constants/routeConstants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Connectors from './components/Connectors'
import ProcessedData from './components/ProcessedData'
import WebhookImports from './components/WebhookImports'
import Events from './components/Events'
import ClientPermission from './components/ClientPermission'
import Automations from './components/Automations'
import { useRouter } from 'next/navigation'

const DashboardInner = () => {
  const router = useRouter()
  return (
    <>
        <Link
          href={ROUTE_CONST.DASHBOARD}
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
            <button onClick={()=> router.push(ROUTE_CONST.TRACKING_INSTALLATION)} className='h-10 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4'>
              <Image width={15} height={15} src={"/img/plusIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
              New Tracking Container
            </button>
          </div>
        </div>
        <div className="text-base font-normal text-theme9 mt-1.5">Tracking Container</div>
        <div className="p-6 bg-white rounded-xl border border-theme6 mt-6 text-sm font-normal text-theme9">Install Tracking to your webpage and setup Connectors to your traffic sources. Processed Data will be shown below.</div>
        <div className="flex items-center w-full flex-wrap -mx-1.5 mt-8">
          <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-1.5">
            <div className="bg-theme22 border border-theme6 rounded-xl p-4 flex gap-4 items-center">
              <div className="size-10 min-w-10 bg-theme19 rounded-full flex items-center justify-center">
                <Image width={20} height={20} src={"/img/boxIcon.png"} className="h-5 w-5 object-contain" alt="refresh icon"/>
              </div>
              <div className="flex-1 text-sm font-medium text-theme14">mobile-123fun.com</div>
              <Image width={20} height={20} src={"/img/editIcon.png"} className="h-5 w-5 object-contain" alt="refresh icon"/>
            </div>
          </div>
        </div>
        <Connectors/>
        <ProcessedData/>
        <WebhookImports/>
        <Automations/>
        <Events/>
        <ClientPermission/>
    </>
  )
}

export default DashboardInner