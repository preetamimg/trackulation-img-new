"use client"

import DatePicker from '@/app/_components/ui/DatePicker'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/_components/ui/Select'
import StatusPill from '@/app/_components/ui/StatusPill'
import { eventData } from '@/app/_constants/processedData'
import { useDashboardInnerStore } from '@/app/_providers/DashboardInnerProvider'
import Image from 'next/image'
import React from 'react'


const ProcessedData = () => {
  const {selectedItem, setSelectedIten, dateRange, setDateRange} = useDashboardInnerStore(state => state)
  return (
    <>
      <div className="flex items-center justify-between mt-6">
        <div className="text-lg font-semibold text-theme14">Processed Data</div>
        <button className='h-10 w-10 flex items-center justify-center'>
          <Image width={20} height={20} src={"/img/refresh-ccw-05.png"} className="h-5 w-5 object-contain" alt="refresh icon"/>
        </button>
      </div>
      <div className="bg-white border border-theme6 shadow-[0px_1px_3px_0px_#1018281A] rounded-xl mt-4">
        <div className="px-6 py-5 border-b border-theme6">
          <div className="flex flex-wrap  gap-4">
            <div className="max-sm:w-full">
              <div className="relative">
                <Image width={15} height={15} src={"/img/searchIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain absolute top-1/2 left-4 -translate-y-1/2" alt="search icon"/>
                <input 
                  // value={searchQuery} 
                  // onChange={(e)=> setSearchQuery(e.target.value)}
                  type="text" 
                  className='w-full h-10 rounded-lg border border-theme8 pl-10 placeholder:text-theme13 placeholder:font-normal ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50' 
                  placeholder='Event Name' 
                />
              </div>
            </div>
            <div className="flex-1">
              <Select>
                <SelectTrigger className='h-10 rounded-lg border-theme8 shadow-[0px_1px_2px_0px_#1018280D] outline-theme1 text-sm px-3'>
                  <SelectValue placeholder="Connector"/>
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
            <div className="flex-1">
              <Select>
                <SelectTrigger className='h-10 rounded-lg border-theme8 shadow-[0px_1px_2px_0px_#1018280D] outline-theme1 text-sm px-3'>
                  <SelectValue placeholder="Source"/>
                </SelectTrigger>
                <SelectContent className='bg-white'>
                  {
                    ['Facebook ', 'Google Ads', 'GA4', 'TikTok', 'Snapchat', 'LinkedIn', 'Microsoft Ads']?.map(item => (
                      <SelectItem key={item} value={item}>{item}</SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
            </div>
            <div className="">
              <DatePicker
                dateRange={dateRange}
                setDateRange={setDateRange}
              />
            </div>
            <div className="">
              <div className="flex items-center gap-4">
                <button className='h-10 w-10 flex items-center justify-center'>
                  <Image width={20} height={20} src={"/img/flagIcon.png"} className="h-5 w-5 object-contain" alt="refresh icon"/>
                </button>
                <button className='h-10 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4'>
                  Apply Filters
                </button>
                <button className='h-10 w-10 flex items-center justify-center'>
                  <Image width={20} height={20} src={"/img/closeIcon.png"} className="h-4 w-4 object-contain" alt="refresh icon"/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="">
              <Select>
                <SelectTrigger className='h-10 rounded-lg border-theme8 shadow-[0px_1px_2px_0px_#1018280D] outline-theme1 text-sm px-3'>
                  <SelectValue placeholder="Filter Property"/>
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
            <div className="">
              <div className="relative">
                <Image width={15} height={15} src={"/img/searchIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain absolute top-1/2 left-4 -translate-y-1/2" alt="search icon"/>
                <input 
                  // value={searchQuery} 
                  // onChange={(e)=> setSearchQuery(e.target.value)}
                  type="text" 
                  className='w-full h-10 rounded-lg border border-theme8 pl-10 placeholder:text-theme13 placeholder:font-normal ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50' 
                  placeholder='Filter Results...' 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-x-auto">
          <table className="w-full border-separate border-spacing-0"style={{boxShadow: '0px 1px 2px 0px #1018280F'}}>
            <thead>
              <tr className="h-11 ">
                <th className="px-6 py-3 bg-theme4 border-t border-theme6 border-b border-l">
                  <div className="flex items-center gap-2 justify-center">
                    <div className="text-xs text-nowrap font-medium text-theme9 flex items-center text-center gap-2">
                      Connectors
                    </div>
                  </div>
                </th>
                <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b">
                  <div className="flex items-center gap-2">
                    Contact Information
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
                  Timestamp
                </th>
                <th className="px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-nowrap font-medium text-theme9 flex items-center gap-2 text-start">
                      Source
                    </div>
                  </div>
                </th>
                <th className="text-xs text-nowrap text-start font-medium text-theme9 px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                  Latest URL
                </th>
                <th className='bg-theme4 border-t border-theme6 border-b'>
                  <div className="text-xs text-nowrap font-medium text-theme9 text-start px-6 py-3 ">
                    Events 
                  </div>
                </th>
                <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b border-r">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4]?.map((item, index) => (
                <React.Fragment key={item}>
                  <tr>
                    <td className="border-b border-l border-theme6">
                      <div onClick={()=> setSelectedIten(index)} className="px-6 py-4  text-sm text-theme9 font-medium flex items-center ">
                        <div className="size-4 flex items-center justify-center mx-auto cursor-pointer">
                          <Image
                            width={16}
                            height={16}
                            src={"/img/dropdownIcon.png"}
                            alt={"Avatar"}
                            className={`transition-all ease-in-out duration-300 ${selectedItem === index ? 'rotate-180' : ''}`}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-theme6 ">
                      <div className="flex items-center">
                          <div className="text-sm font-medium text-theme14 text-nowrap">
                          Guest #3848472
                          </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-theme6 text-sm">
                      <div className="text-sm font-medium text-theme14 text-nowrap">
                        14:20 / 10.10.
                      </div>
                      <div className="text-sm text-theme9 text-nowrap">
                        7 minutes ago
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-theme6 text-sm"></td>
                    <td className="px-6 py-4 border-b border-theme6 text-sm">
                      <div className="text-sm font-medium text-theme14 text-nowrap">
                        /subscribe
                      </div>
                      <div className="text-sm text-theme9 text-nowrap">
                        23.134.91.251
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                      <div className="flex">
                        <div className="flex items-center gap-5 relative">
                          {
                            eventData?.map((el, index) => (
                              <div key={`round-${index}`} className={`relative z-10 size-4 rounded-full text-[0.625rem] font-semibold text-theme1 flex items-center justify-center ${el?.item ? 'bg-theme21' : 'bg-theme4'}`}>
                                {el?.item ? el?.item : <span className={`block size-1.5 rounded-full ${el?.value ? 'bg-theme1' : 'bg-theme6'}`}/>}
                                {el?.value ? <span className='flex items-center justify-center absolute text-xs font-medium text-theme1 bg-theme21 h-[1.125rem] w-7 rounded-full left-1/2 -translate-x-1/2 -top-5'>{el?.value}</span> : ''}
                              </div>
                            ))
                          }
                          {
                            eventData?.length > 1 ? 
                              <div className="absolute h-0.5 w-[calc(100%_-_6px)] left-1/2 top-1/2 -translate-x-1/2 z-0 -translate-y-1/2 bg-theme4"></div>
                            : ''
                          }
                        </div>
                      </div>
                    </td>
                    <td className="group/td px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                      <div className="flex items-center justify-center gap-2">
                          <Image
                            width={20}
                            height={20}
                            src={"/img/flagIcon.png"}
                            alt={"Avatar"}
                            className='size-5 object-contain'
                          />
                      </div>
                    </td>
                  </tr>
                    {
                      selectedItem === index ? 
                        <tr>
                          <td colSpan={7} className='px-4 py-2.5 bg-theme4'>
                            <div className="flex flex-col gap-2.5">
                              {
                                [11, 22]?.map(el => (
                                <div key={el} className="px-6 py-4 bg-white rounded-xl border border-theme6 shadow-[0px_1px_3px_0px_#1018281A]">
                                  <table className='w-full'>
                                    <tbody>
                                      <tr>
                                        <td className='text-sm font-semibold text-theme14 lg:min-w-28'>PageView</td>
                                        <td>
                                          <div className="text-sm font-semibold text-theme14">12:35:39 / 22.10.2024 <span className='text-xs font-normal text-theme14'>12:37:39 TE311581666</span></div>
                                          <div className="text-xs font-medium text-theme13">https://om.uaecontencscthub.com/subscribe?token=facebook-om&sub=D-2091</div>
                                        </td>
                                        <td>
                                          <StatusPill status={'pending'}/>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                                ))
                              }
                            </div>
                          </td>
                        </tr>
                      : ''
                    }

                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ProcessedData