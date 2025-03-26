"use client"
import Image from 'next/image'
import React from 'react'
import PlansTable from './components/PlansTable'
import CreateNewPlan from './components/CreateNewPlan'
import { useAdminPlanStore } from '@/app/_providers/AdminPlansProvider'
import usePlans from '@/app/_hooks/usePlans'

const AdminPlans = () => {
    const {setShowCreateNew, setSelectedPlan, showCreateNew} = useAdminPlanStore((state) => state);
    const {isLoading, plans} = usePlans();
  
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="text-2xl md:text-3xl font-semibold text-theme14 ">Your Plans</div>
      </div>
      <div className="flex items-center w-full flex-wrap -mx-1.5 mt-8">
        {
          !isLoading ? plans?.length ? plans?.map(item => (
            <div key={String(item?.id)} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-1.5">
              <div className="bg-theme22 rounded-xl p-4 flex gap-4 items-center">
                <div className="size-10 min-w-10 bg-theme19 rounded-full flex items-center justify-center">
                  {
                      typeof item?.imageUrl === 'string' &&
                      <Image width={20} height={20} src={item?.imageUrl} className="h-5 w-5 object-contain" alt="refresh icon"/>
                  }
                </div>
                <div className="flex-1 text-sm font-medium text-theme14">{item?.planName}</div>
                <Image onClick={()=> {
                  setSelectedPlan(item)
                  setShowCreateNew(true)
                  }} width={20} height={20} src={"/img/editIcon.png"} className="h-5 w-5 object-contain cursor-pointer" alt="refresh icon"/>
              </div>
            </div>
          )) : '' : ''
        }
        <button
          onClick={() => setShowCreateNew(!showCreateNew)} 
          className='ml-1.5 mt-1.5 h-10 flex items-center justify-center text-sm font-semibold border border-theme8 text-theme5 gap-2 rounded-lg px-4 shadow-[0px_1px_2px_0px_#1018280D]'>
          <Image width={15} height={15} src={"/img/plusIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain brightness-0" alt="refresh icon"/>
          New Plan
        </button>
      </div>
      <CreateNewPlan/>
      <PlansTable/>
    </>
  )
}

export default AdminPlans