"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/_components/ui/Select'
import { useDashboardInnerStore } from '@/app/_providers/DashboardInnerProvider'
import Image from 'next/image'
import React, { useRef } from 'react'


const ClientPermission = () => {
    const {showClientPermission, setShowNewPermission} = useDashboardInnerStore((state) => state);
    const contentRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="flex items-center justify-between mt-6">
        <div className="text-lg font-semibold text-theme14">Client Permissions</div>
        <div className="flex items-center gap-3">
          <button className='h-10 w-10 flex items-center justify-center'>
            <Image width={20} height={20} src={"/img/refresh-ccw-05.png"} className="h-5 w-5 object-contain" alt="refresh icon"/>
          </button>
          <button onClick={()=> setShowNewPermission()} className='h-9 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4'>
            <Image width={15} height={15} src={"/img/plusIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
            New
          </button>
        </div>
      </div>
      <div 
      ref={contentRef}
        style={{
          height: showClientPermission ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: showClientPermission ? 1 : 0,
        }}
          className={`transition-all duration-500 linear overflow-hidden`}>
            <div className="mt-4 bg-white rounded-lg pt-5 px-6 pb-6 border border-theme6 shadow-[0px_1px_3px_0px_#1018281A]">
              <div className="text-base font-medium text-theme14 mb-4">New Client Permission</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4">
                <div className="">
                    <input type="text" placeholder='Email' className='h-11 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3'/>
                </div>
                <div className="">
                  <Select>
                    <SelectTrigger className='h-11 rounded-lg border-theme8 shadow-[0px_1px_2px_0px_#1018280D] outline-theme1 text-sm px-3'>
                      <SelectValue placeholder="Permission Type"/>
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
          <div className="flex items-center gap-3 mt-4 justify-end max-md:w-full">
            <button className='h-10 flex items-center justify-center text-sm font-semibold bg-theme21 text-theme1 gap-2 rounded-lg px-4'>
              <Image width={15} height={15} src={"/img/saveIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
              Save
            </button>
            <button onClick={()=> setShowNewPermission()} className='h-10 w-10 flex items-center justify-center'>
              <Image width={20} height={20} src={"/img/closeIcon.png"} className="h-3.5 w-3.5 object-contain" alt="refresh icon"/>
            </button>
          </div>
            </div>
      </div>
      <div className="bg-white border border-theme6 shadow-[0px_1px_3px_0px_#1018281A] rounded-xl mt-4">
        <div className="flex flex-col overflow-x-auto">
          <table className="w-full border-separate border-spacing-0"style={{boxShadow: '0px 1px 2px 0px #1018280F'}}>
            <thead>
              <tr className="h-11 ">
                <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b">
                  <div className="flex items-center gap-2">
                    Client
                  </div>
                </th>
                <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b">
                  User
                </th>
                <th className="px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-nowrap font-medium text-theme9 flex items-center gap-2 text-start">
                      Permission
                    </div>
                  </div>
                </th>
                <th className="text-xs text-nowrap text-start font-medium text-theme9 px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                  Created
                </th>
                <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b border-r">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2]?.map((item) => (
                <React.Fragment key={item}>
                  <tr>
                    <td className="px-6 py-5 border-b border-theme6 text-sm">
                      <div className="text-sm font-semibold text-theme14 text-nowrap">
                        App4download-om.fun
                      </div>
                    </td>
                    <td className="px-6 py-5 border-b border-theme6 text-sm">
                      <div className="text-xs font-medium text-theme13 text-nowrap">
                        john.smith@email.com
                      </div>
                    </td>
                    <td className="px-6 py-5 border-b border-theme6 text-sm">
                      <div className="flex">
                        <div className="text-xs font-medium text-theme1 h-[1.375rem] px-2 flex items-center justify-center bg-theme16 rounded-full">Admin</div>
                      </div>
                    </td>
                    <td className="px-6 py-5 border-b border-theme6 text-sm">
                      <div className="text-xs font-medium text-theme13 text-nowrap">
                        08.10.2024
                      </div>
                    </td>
                    <td className="px-6 py-5 border-b border-theme6 text-sm  text-nowrap text-left">
                      <div className="flex items-center justify-center gap-2 cursor-pointer">
                          <Image
                            width={20}
                            height={20}
                            src={"/img/editBlueIcon.png"}
                            alt={"Avatar"}
                            className='size-5 object-contain'
                          />
                          <div className="text-theme1 font-semibold">
                            Edit
                          </div>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ClientPermission