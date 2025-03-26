"use client"

import Image from 'next/image'
import React from 'react'
import CreateTrackingContainers from './components/CreateTrackingContainers'
import TrackingContainersTable from './components/TrackingContainersTable'
import { useDashboardStore } from '@/app/_providers/DashboardProvider'
import CreateNewCompany from './components/CreateNewCompany'
import useCompany from '@/app/_hooks/useCompany'
import useTrackingContainer from '@/app/_hooks/useTrackingContainer'
import { useParams } from 'next/navigation'


const Dashboard = () => {
  const params = useParams()?.id
  const {setShowCreateNew, setShowNewCompany, setSelectedCompany, resetSelectedCompany} = useDashboardStore((state) => state);
  const {companyList, companyListLoading} = useCompany()
  const {trackingContainersList, trackingContainerLoading, formik} = useTrackingContainer()

  console.log('params', params)

  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="text-2xl md:text-3xl font-semibold text-theme14 ">Your Tracking Containers</div>
        <div className="relative max-md:w-full">
          <Image width={15} height={15} src={"/img/searchIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain absolute top-1/2 left-4 -translate-y-1/2" alt="search icon"/>
          <input 
            type="text" 
            className='w-full h-11 rounded-lg border border-theme8 pl-10 placeholder:text-theme13 placeholder:font-normal ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50' 
            placeholder='Search' 
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-3 lg:mt-8 flex-wrap gap-3">
        <div className="flex border border-theme8 rounded-lg overflow-hidden max-md:w-full">
          <div className="h-10 w-1/2 md:w-[6.375rem] flex items-center justify-center text-sm font-semibold text-theme17 cursor-pointer border-r border-theme8 bg-theme4">Home</div>
          <div className="h-10 w-1/2 md:w-[6.375rem] flex items-center justify-center text-sm font-semibold text-theme17 cursor-pointer">Tracking</div>
        </div>
        {
          params ? '' :
          <div className="flex items-center gap-3 max-md:justify-end max-md:w-full">
            <button className='h-10 w-10 flex items-center justify-center'>
              <Image width={20} height={20} src={"/img/refresh-ccw-05.png"} className="h-5 w-5 object-contain" alt="refresh icon"/>
            </button>
            <button onClick={setShowCreateNew} className='h-10 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4'>
              <Image width={15} height={15} src={"/img/plusIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
              New Tracking Container
            </button>
          </div>
        }
      </div>
      <div className="flex items-center w-full flex-wrap -mx-1.5 mt-8">
        {
          !companyListLoading ? companyList?.length ? companyList?.map(item => (
            <div key={item?.id} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-1.5">
              <div className="bg-theme22 rounded-xl p-4 flex gap-4 items-center">
                <div className="size-10 min-w-10 bg-theme19 rounded-full flex items-center justify-center">
                  <Image width={20} height={20} src={"/img/boxIcon.png"} className="h-5 w-5 object-contain" alt="refresh icon"/>
                </div>
                <div className="flex-1 text-sm font-medium text-theme14">{item?.companyName}</div>
                {
                  params ? '' :
                  <Image onClick={() => {
                    setShowNewCompany(true)
                    setSelectedCompany(item)
                    }} width={20} height={20} src={"/img/editIcon.png"} className="h-5 w-5 object-contain cursor-pointer" alt="refresh icon"/>
                }
              </div>
            </div>
          )) : '' : ''
        }
        {
          params ? '' :
          <button onClick={()=>{
            resetSelectedCompany()
            setShowNewCompany(true)
          }} className='ml-1.5 h-10 flex items-center justify-center text-sm font-semibold border border-theme8 text-theme5 gap-2 rounded-lg px-4 shadow-[0px_1px_2px_0px_#1018280D]'>
            <Image width={15} height={15} src={"/img/plusIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain brightness-0" alt="refresh icon"/>
            New Company
          </button>
        }
      </div>
      <CreateNewCompany/>
      <CreateTrackingContainers formik={formik}/>
      <TrackingContainersTable trackingContainersList={trackingContainersList} trackingContainerLoading={trackingContainerLoading}/>
    </>
  )
}

export default Dashboard