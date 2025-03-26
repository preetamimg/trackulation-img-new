"use client"
import Loader from '@/app/_components/Loader'
import NoData from '@/app/_components/NoData'
import { ROUTE_CONST } from '@/app/_constants/routeConstants'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import moment from "moment"
import { useProfile } from '@/app/_hooks/useProfile'
import { useDashboardStore } from '@/app/_providers/DashboardProvider'
import { trackingContainerFormValues } from '@/app/_store/dashboardStore/slices/newTrackingContainerSlice'

interface PageProps {
  trackingContainersList : trackingContainerFormValues[]
  trackingContainerLoading : boolean
}

const TrackingContainersTable : React.FC<PageProps> = ({trackingContainersList, trackingContainerLoading}) => {
  const router = useRouter()
  const {totalPages, handleNext, handlePrev, currentPage} = useDashboardStore(state => state)
  const {userData} = useProfile();
  return (
    <>
      <div className="mt-8 flex flex-col overflow-x-auto">
        <table className="w-full border-separate border-spacing-0"style={{boxShadow: '0px 1px 2px 0px #1018280F'}}>
          <thead>
            <tr className="h-11 ">
              <th className="px-6 py-3 rounded-tl-lg bg-theme4 border-t border-theme6 border-b border-l">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-nowrap font-medium text-theme9 flex items-center gap-2">
                      ID
                  </div>
                </div>
              </th>
              <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b">
                <div className="flex items-center gap-2">
                  Name
                  <span
                    // onClick={() => setSortSerial()}
                    className="cursor-pointer"
                  >
                    <Image
                      width={9}
                      height={9}
                      src={"/img/arrow-down.png"}
                      alt={"arrow-down"}
                      className='size-2.5 object-contain'
                    />
                  </span>
                </div>
              </th>
              <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b">
                Created
              </th>
              <th className="px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-nowrap font-medium text-theme9 flex items-center gap-2 text-start">
                    Company
                  </div>
                </div>
              </th>
              <th className="text-xs text-nowrap text-center font-medium text-theme9 px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                Connectores
              </th>
              <th className='bg-theme4 border-t border-theme6 border-b'>
                <div className="text-xs text-nowrap font-medium text-theme9 text-center px-6 py-3 ">
                  Activity
                </div>
              </th>
              <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b border-r rounded-tr-lg">
                
              </th>
            </tr>
          </thead>
          <tbody>
            {!trackingContainerLoading ? trackingContainersList?.length ? trackingContainersList?.map((item) => (
                <tr key={item?.id}>
                  <td className="border-b border-l border-theme6">
                    <div className="px-6 py-4  text-sm text-theme9 font-medium flex items-center ">
                      {item?.trackingCode}
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 ">
                    <div className="flex items-center">
                      <div className="size-10 flex items-center justify-center">
                        <Image
                          width={40}
                          height={40}
                          src={"/img/catalog.png"}
                          alt={"Avatar"}
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-theme14 text-nowrap">
                          {item?.companyWebsite}
                        </div>
                        <div className="text-sm text-theme9 text-nowrap">
                          {item?.companyWebsite}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                    {moment(item?.createdAt).format("DD MMMM YYYY")}
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 text-sm">
                    <div className="text-sm font-medium text-theme14 text-nowrap">
                      {item?.company?.companyName}
                    </div>
                    <div className="text-sm text-theme9 text-nowrap">
                      {userData?.user?.email}
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                    <div className="flex items-center justify-center gap-2">
                        <Image
                          width={20}
                          height={20}
                          src={"/img/facebook.png"}
                          alt={"Avatar"}
                          className='size-5 object-contain'
                        />
                    </div>
                  </td>
                  <td className="group/td px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                    <input type="checkbox" className='hidden peer'  id={`input-${item?.id}`}/>
                    <label htmlFor={`input-${item?.id}`} className='border border-theme8 size-5 rounded-md flex items-center justify-center peer-checked:!border-theme1 peer-checked:bg-theme21 mx-auto'>
                        <Image
                          width={10}
                          height={10}
                          src={"/img/checkIcon.png"}
                          alt={"checkIcon"}
                          className='size-2.5 object-contain hidden group-has-[.peer:checked]/td:block'
                        />
                    </label>
                  </td>
                  <td className="px-6 py-4 border-b border-r border-theme6 text-sm  text-nowrap text-left">
                    <div className="text-theme1 cursor-pointer font-semibold" onClick={()=> router.push(`${ROUTE_CONST.DASHBOARD}/${item?.id}`)}>
                      View
                    </div>
                  </td>
                </tr> 
            )): <tr><td className='border border-theme6' colSpan={7}><NoData/></td></tr> : <tr><td className='border border-theme6' colSpan={7}><Loader/></td></tr>}
          </tbody>
          {
            trackingContainersList?.length ? 
              <tfoot>
                <tr>
                  <td colSpan={3} className="border-b border-l border-theme6 rounded-bl-lg">
                    <div className="px-6 py-4  text-sm text-theme5 font-medium flex items-center ">
                      Page {currentPage} of {totalPages}
                    </div>
                  </td>
                  <td colSpan={4} className="border-b border-r border-theme6 pe-6 py-4 rounded-br-lg">
                    <div className="flex items-center justify-end gap-3">
                      <button onClick={() => handlePrev()} disabled={currentPage === 1} className='h-9 border border-theme8 rounded-lg px-3.5 text-sm font-semibold text-theme5 shadow-[0px_1px_2px_0px_#1018280D] disabled:opacity-45'>Previous</button>
                      <button onClick={() => handleNext(totalPages)} disabled={currentPage === totalPages} className='h-9 border border-theme8 rounded-lg px-3.5 text-sm font-semibold text-theme5 shadow-[0px_1px_2px_0px_#1018280D] disabled:opacity-45'>Next</button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            : ''
          }
        </table>
      </div>
    </>
  )
}

export default TrackingContainersTable