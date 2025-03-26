"use client"
import Image from 'next/image'
import React from 'react'
import InsertAutomationModal from './InsertAutomationModal'
import { useDashboardInnerStore } from '@/app/_providers/DashboardInnerProvider'
import BlockAutomationModal from './BlockAutomationModal'


const Automations = () => {
    const {setShowInsertModal, setShowBlockModal} = useDashboardInnerStore(state => state)
  
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-theme14 mt-6">Automations</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        <div className="bg-white p-6 rounded-xl border border-theme6 shadow-[0px_1px_3px_0px_#1018281A]">
          <div className="text-base text-theme14 font-medium mb-1">Insert Automation</div>
          <div className="text-sm text-theme9 font-normal mb-7">Fire new Events based on automation settings.</div>
          <button onClick={()=> setShowInsertModal(true)} className='h-9 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4'>
            <Image width={15} height={15} src={"/img/plusIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
            New
          </button>
        </div>
        <div className="bg-white p-6 rounded-xl border border-theme6 shadow-[0px_1px_3px_0px_#1018281A]">
          <div className="text-base text-theme14 font-medium mb-1">Block Automation</div>
          <div className="text-sm text-theme9 font-normal mb-7">Block Events from firing based on automation settings.</div>
          <button onClick={()=> setShowBlockModal(true)} className='h-9 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4'>
            <Image width={15} height={15} src={"/img/plusIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
            New
          </button>
        </div>
      </div>
      <InsertAutomationModal/>
      <BlockAutomationModal/>
    </>
  )
}

export default Automations