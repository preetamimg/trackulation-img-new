"use client"
import { useDashboardInnerStore } from '@/app/_providers/DashboardInnerProvider'
import Image from 'next/image'
import React from 'react'
import { Toggle } from 'rsuite'

const EditConnectorsModal = () => {
  const {showEditModal, setShowEditModal} = useDashboardInnerStore(state => state)
  return (
    <>
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[21.75rem] bg-white rounded-xl border border-theme6 p-6 shadow-[0px_1px_3px_0px_#1018281A] z-50 ${showEditModal ? '' : 'hidden'}`}>
        <div className="size-10 min-w-10 flex items-center justify-center rounded-full bg-theme7 mb-6">
          <Image
            width={20}
            height={20}
            src={'/img/googleAnalytics.png'}
            alt={"Avatar"}
            className='size-5 object-contain'
          />
        </div>
        <input 
          type="text" 
          placeholder='Meta Pixel ID'
          className='h-10 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3'
        />
        <input 
          type="text" 
          placeholder='Meta Access Token'
          className='h-10 mt-4 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3'
        />
        <div className="flex items-center justify-between mt-2">
          <div className="">
          <Toggle size="md">Live</Toggle>
          </div>
          <div className="flex items-center gap-3 max-md:justify-end max-md:w-full">
            <button onClick={() => setShowEditModal(false)} className='h-10 flex items-center justify-center text-sm font-semibold bg-theme21 text-theme1 gap-2 rounded-lg px-4'>
              <Image width={15} height={15} src={"/img/saveIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
              Save
            </button>
            <button onClick={() => setShowEditModal(false)} className='h-10 w-10 flex items-center justify-center'>
              <Image width={20} height={20} src={"/img/closeIcon.png"} className="h-3.5 w-3.5 object-contain" alt="refresh icon"/>
            </button>
          </div>
        </div>

      </div>
      <div onClick={() => setShowEditModal(false)} className={`fixed top-0 left-0 h-dvh w-full bg-black/40 z-30 ${showEditModal ? '' : 'hidden'}`}></div>
    </>
  )
}

export default EditConnectorsModal