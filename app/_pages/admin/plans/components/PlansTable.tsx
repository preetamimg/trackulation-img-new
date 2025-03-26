"use client"
import DeleteModal from '@/app/_components/DeleteModal'
import Loader from '@/app/_components/Loader'
import NoData from '@/app/_components/NoData'
import StatusPill from '@/app/_components/ui/StatusPill'
import usePlans from '@/app/_hooks/usePlans'
import { useGlobalStore } from '@/app/_providers/GlobalProvider'
import Image from 'next/image'
import React from 'react'

const PlansTable = () => {
  const {isLoading, plans, handleDeletePlan, selectedId, setSelectedId} = usePlans()
  const {setShowDeleteModal} = useGlobalStore(state => state)
  return (
    <>
      <div className="mt-8 flex flex-col overflow-x-auto border border-theme6 rounded-lg">
        <table className="w-full border-separate border-spacing-0"style={{boxShadow: '0px 1px 2px 0px #1018280F'}}>
          <thead>
            <tr className="h-11 ">
              <th className="px-6 py-3 rounded-tl-lg bg-theme4 border-t border-theme6 border-b">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-nowrap font-medium text-theme9 flex items-center gap-2">
                      Name
                  </div>
                </div>
              </th>
              <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b">
                <div className="flex items-center gap-2">
                  Popular
                </div>
              </th>
              <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b">
                Conversion
              </th>
              <th className="px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-nowrap font-medium text-theme9 flex items-center gap-2 text-start">
                    Monthly Price
                  </div>
                </div>
              </th>
              <th className="text-xs text-nowrap text-left font-medium text-theme9 px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                Yearly Price
              </th>
              <th className='bg-theme4 border-t border-theme6 border-b'>
                <div className="text-xs text-nowrap font-medium text-theme9 text-left px-6 py-3 ">
                  Discount
                </div>
              </th>
              <th className='bg-theme4 border-t border-theme6 border-b'>
                <div className="text-xs text-nowrap font-medium text-theme9 text-left px-6 py-3 ">
                  Users
                </div>
              </th>
              <th className='bg-theme4 border-t border-theme6 border-b'>
                <div className="text-xs text-nowrap font-medium text-theme9 text-left px-6 py-3 ">
                  Websites
                </div>
              </th>
              <th className='bg-theme4 border-t border-theme6 border-b  rounded-tr-l'>
                
                <div className="text-xs text-nowrap font-medium text-theme9 text-left px-6 py-3 ">
                  Others
                </div>
              </th>
              <th className='bg-theme4 border-t border-theme6 border-b  rounded-tr-lg'></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? 
              <tr>
                <td colSpan={9}>
                  <Loader/>
                </td>
              </tr>
            : plans?.length ? plans?.map((item) => (
                <tr key={item?.planName}>
                  <td className="px-6 py-4 border-b border-theme6 ">
                    <div className="flex items-center">
                      <div className="size-10 flex items-center justify-center">
                        {
                          item?.imageUrl &&
                            <Image
                              width={40}
                              height={40}
                              src={`${item?.imageUrl}`}
                              alt={"Avatar"}
                            />
                        }
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-theme14 text-nowrap">
                          {item?.planName}
                        </div>
                        <div className="text-sm text-theme9 text-nowrap">
                          {/* mobile-123fun.com */}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                    <StatusPill type={item?.popular}/>
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 text-sm">
                    <StatusPill type={item?.conversions}/>
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                      {item?.monthlyPrice}
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                    {item?.yearlyPrice}
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                    {item?.discount}
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                    {item?.userAccessLimit}
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                    {item?.websiteAccessLimit}
                  </td>
                  <td className="px-6 py-4 border-b  border-theme6 text-sm text-theme9 text-nowrap text-left">
                    <div className="flex items-center gap-2 flex-wrap min-w-96">
                      {item?.addons?.length ? 
                      item?.addons?.map(item => (
                        <div key={item?.id} className="text-xs bg-theme7 text-theme5 px-1.5 py-1 font-medium rounded-full ">
                          {item?.value}
                        </div>
                      ))
                      : ''}
                    </div>
                  </td>
                  <td className='px-6 py-4 border-b  border-theme6 text-sm text-theme9 text-nowrap text-left'>
                    <button 
                      onClick={() => {
                        setShowDeleteModal()
                        setSelectedId(String(item?.id))
                      }}
                      className='group size-9 hover:bg-red-500 rounded-md flex items-center justify-center'>
                      <Image width={15} height={15} src={"/img/deleteIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain group-hover:brightness-[100]" alt="refresh icon"/>
                    </button>
                  </td>
                </tr>
            )) : <tr>
            <td colSpan={9}>
              <NoData/>
            </td>
          </tr>}
          </tbody>
        </table>
      </div>
      <DeleteModal deleteEvent={()=> handleDeletePlan(String(selectedId))}/>
    </>
  )
}

export default PlansTable