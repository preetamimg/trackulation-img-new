"use client"
import Loader from '@/app/_components/Loader'
import NoData from '@/app/_components/NoData'
import useUsers from '@/app/_hooks/useUsers'
import { useAdminUsersStore } from '@/app/_providers/AdminUserProvider'
import moment from 'moment'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const bgColors = ["bg-green-200", "bg-emerald-200", "bg-cyan-200", "bg-sky-200", "bg-rose-200", "bg-pink-200", "bg-violet-200", "bg-lime-200", "bg-orange-200", "bg-red-200"]

const Users = () => {
  const {userList, userListLoading} = useUsers()
  const {currentPage, totalPages, handlePrev, handleNext} = useAdminUsersStore(state => state)
  const router = useRouter()
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="text-2xl md:text-3xl font-semibold text-theme14 ">Users</div>
      </div>
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
                  Created At
                </div>
              </th>
              {/* <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b">
                Email Verified
              </th> */}
              <th className="px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                <div className="flex items-center gap-2">
                  <div className="text-xs text-nowrap font-medium text-theme9 flex items-center gap-2 text-start">
                    Type
                  </div>
                </div>
              </th>
              <th className="text-xs text-nowrap text-left font-medium text-theme9 px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                Tracking Containers
              </th>
              <th className='bg-theme4 border-t border-theme6 border-b  rounded-tr-lg'></th>
            </tr>
          </thead>
          <tbody>
            {userListLoading ? 
              <tr>
                <td colSpan={9}>
                  <Loader/>
                </td>
              </tr>
            : userList?.length ? userList?.map((item) => (
                <tr key={item?.id}>
                  <td className="px-6 py-4 border-b border-theme6 ">
                    <div className="flex items-center">
                      <div className="size-10 flex items-center justify-center">
                        {
                          item?.image ?
                            <Image
                              width={40}
                              height={40}
                              src={`${item?.image}`}
                              alt={"Avatar"}
                            />
                            : <div className={`uppercase size-full flex items-center justify-center rounded-full font-semibold ${bgColors[Math.floor(Math.random() * bgColors.length)]}`}>{item?.name?.charAt(0)}</div>
                        }
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-theme14 text-nowrap">
                          {item?.name}
                        </div>
                        <div className="text-sm text-theme9 text-nowrap">
                          {item?.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                    {moment?.(item?.createdAt).format("DD MMM YYYY")}
                  </td>
                  {/* <td className="px-6 py-4 border-b border-theme6 text-sm">
                    <StatusPill type={item?.emailVerified}/>
                  </td> */}
                  <td className="px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                      {item?.socialIdType ? item?.socialIdType : 'EMAIL'}
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                      --
                  </td>
                  <td className="px-6 py-4 border-b border-theme6 text-sm text-theme9 text-nowrap text-left">
                      <button onClick={()=> router.push(`users/${item?.id}`)} className='text-theme1 font-semibold'>View</button>
                  </td>
                </tr>
            )) : <tr>
            <td colSpan={9}>
              <NoData/>
            </td>
          </tr>}
          </tbody>
          {
            userList?.length ? 
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

export default Users