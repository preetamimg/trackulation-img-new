"use client"
import Image from 'next/image'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/_components/ui/Select'
import { useDashboardInnerStore } from '@/app/_providers/DashboardInnerProvider'

const BlockAutomationModal = () => {
  const {showBlockModal, setShowBlockModal} = useDashboardInnerStore(state => state)

  return (
    <>
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%_-_1.875rem)] sm:w-[33.5rem] bg-white rounded-xl border border-theme6 p-6 shadow-[0px_1px_3px_0px_#1018281A] z-50 ${showBlockModal ? '' : 'hidden'}`}>
        <div className="text-base text-theme14 font-medium">Block Automation</div>
        <div className="text-sm font-normal text-theme9 mb-4">Block Events from firing based on automation settings.</div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
          <Select>
            <SelectTrigger className='h-11 rounded-lg border-theme8 shadow-[0px_1px_2px_0px_#1018280D] outline-theme1 text-sm px-3'>
              <SelectValue placeholder="Block Prepaid Phone Numbers"/>
            </SelectTrigger>
            <SelectContent className='bg-white'>
              {
                ['option1', 'option2']?.map(item => (
                  <SelectItem key={item} value={item}>{item}</SelectItem>
                ))
              }
            </SelectContent>
          </Select>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <div className="flex items-center gap-3 max-md:justify-end max-md:w-full">
            <button onClick={() => setShowBlockModal(false)} className='h-10 flex items-center justify-center text-sm font-semibold bg-theme21 text-theme1 gap-2 rounded-lg px-4'>
              <Image width={15} height={15} src={"/img/saveIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
              Create
            </button>
            <button onClick={() => setShowBlockModal(false)} className='h-10 w-10 flex items-center justify-center'>
              <Image width={20} height={20} src={"/img/closeIcon.png"} className="h-3.5 w-3.5 object-contain" alt="refresh icon"/>
            </button>
          </div>
        </div>
      </div>
      <div onClick={() => setShowBlockModal(false)} className={`fixed top-0 left-0 h-dvh w-full bg-black/40 z-30 ${showBlockModal ? '' : 'hidden'}`}></div>
    </>
  )
}

export default BlockAutomationModal