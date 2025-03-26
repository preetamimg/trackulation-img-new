"use client"
import Image from 'next/image'
import React from 'react'


const Events = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-6">
        <div className="text-lg font-semibold text-theme14">Standard and Custom Events</div>
        <button className='h-10 w-10 flex items-center justify-center'>
          <Image width={20} height={20} src={"/img/refresh-ccw-05.png"} className="h-5 w-5 object-contain" alt="refresh icon"/>
        </button>
      </div>
      <div className="text-sm font-normal text-theme9">You can use name <span className='text-theme1 cursor-pointer font-semibold'>block</span> to block the event from being sent to a Connector.</div>
      <div className="bg-white border border-theme6 shadow-[0px_1px_3px_0px_#1018281A] rounded-xl mt-4">
        <div className="flex flex-col overflow-x-auto">
          <table className="w-full border-separate border-spacing-0"style={{boxShadow: '0px 1px 2px 0px #1018280F'}}>
            <thead>
              <tr className="h-11 ">
                <th className="px-6 py-3 bg-theme4 border-t border-theme6 border-b border-l">
                  <div className="flex items-center gap-2 justify-start">
                    <div className="text-xs text-nowrap font-medium text-theme9 flex items-center text-center gap-2">
                      Event Name
                    </div>
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
                  <div className="flex items-center gap-2">
                    Count Today
                  </div>
                </th>
                <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b">
                  Count Last 7d
                </th>
                <th className="px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-nowrap font-medium text-theme9 flex items-center gap-2 text-start">
                    Facebook
                    </div>
                  </div>
                </th>
                <th className="text-xs text-nowrap text-start font-medium text-theme9 px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                  TiktTok
                </th>
                <th className="text-xs text-nowrap text-start font-medium text-theme9 px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                  Snapchat
                </th>
                <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b border-r">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7]?.map((item) => (
                <React.Fragment key={item}>
                  <tr>
                    <td className="px-6 py-5 border-b border-theme6 text-sm">
                      <div className="text-sm font-medium text-theme14 text-nowrap">
                        PageView
                      </div>
                    </td>
                    <td className="px-6 py-5 border-b border-theme6 text-sm">
                      <div className="text-sm font-medium text-theme9 text-nowrap">
                        -
                      </div>
                    </td>
                    <td className="px-6 py-5 border-b border-theme6 text-sm">
                      <div className="text-sm font-medium text-theme9 text-nowrap">
                        1306
                      </div>
                    </td>
                    <td className="px-6 py-5 border-b border-theme6 text-sm">
                      <div className="text-sm font-medium text-theme14 text-nowrap">
                        PageView
                      </div>
                    </td>
                    <td className="px-6 py-5 border-b border-theme6 text-sm">
                      <div className="text-sm font-medium text-theme14 text-nowrap">
                        PageView
                      </div>
                    </td>
                    <td className="px-6 py-5 border-b border-theme6 text-sm">
                      <div className="text-sm font-medium text-theme14 text-nowrap">
                        PageView
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

export default Events