"use client"
import Image from 'next/image'
import React from 'react'


const WebhookImports = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-6">
        <div className="text-lg font-semibold text-theme14">Webhook Imports</div>
      </div>
      <div className="bg-white border border-theme6 shadow-[0px_1px_3px_0px_#1018281A] rounded-xl mt-4">
        <div className="flex flex-col overflow-x-auto">
          <table className="w-full border-separate border-spacing-0"style={{boxShadow: '0px 1px 2px 0px #1018280F'}}>
            <thead>
              <tr className="h-11 ">
                <th className="px-6 py-3 bg-theme4 border-t border-theme6 border-b border-l">
                  <div className="flex items-center gap-2 justify-start">
                    <div className="text-xs text-nowrap font-medium text-theme9 flex items-center text-center gap-2">
                      Timestamp
                    </div>
                  </div>
                </th>
                <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b">
                  <div className="flex items-center gap-2">
                    Latest URL
                  </div>
                </th>
                <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b">
                  Type
                </th>
                <th className="px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                  <div className="flex items-center gap-2">
                    <div className="text-xs text-nowrap font-medium text-theme9 flex items-center gap-2 text-start">
                    Type
                    </div>
                  </div>
                </th>
                <th className="text-xs text-nowrap text-start font-medium text-theme9 px-6 py-3 bg-theme4 border-t border-theme6 border-b">
                  
                </th>
                <th className="text-xs text-nowrap font-medium text-theme9 px-6 py-3 text-start bg-theme4 border-t border-theme6 border-b border-r">
                  
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4]?.map((item) => (
                <React.Fragment key={item}>
                  <tr>
                    <td className="px-6 py-4 border-b border-theme6 text-sm">
                      <div className="text-sm font-medium text-theme14 text-nowrap">
                        14:20 / 10.10.2024.
                      </div>
                      <div className="text-sm text-theme9 text-nowrap">
                        7 minutes ago
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-theme6 text-sm">
                      <div className="text-sm font-medium text-theme14 text-nowrap">
                        john.smith@email.com
                      </div>
                      <div className="text-sm text-theme9 text-nowrap">
                        +050 12 345 67
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-theme6 text-xs">
                      <div className="flex items-center gap-4">
                        <div className="text-xs font-medium text-theme1 h-[1.375rem] px-2 flex items-center justify-center bg-theme16 rounded-full">Track</div>
                        <div className="text-xs font-medium text-theme1 h-[1.375rem] px-2 flex items-center justify-center bg-theme16 rounded-full">Purchase</div>
                        <div className="text-theme13">TE295531772</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-theme6 text-xs">
                      <div className="flex items-center gap-4">
                        <div className="text-xs font-medium text-theme1 h-[1.375rem] px-2 flex items-center justify-center bg-theme16 rounded-full">Success</div>
                        <div className="text-xs font-medium text-theme1 h-[1.375rem] px-2 flex items-center justify-center bg-theme16 rounded-full">100%</div>
                        <div className="text-theme13">01:12:26</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-b border-theme6 text-sm  text-nowrap text-left">
                      <div className="flex items-center justify-center gap-2 cursor-pointer">
                          <Image
                            width={20}
                            height={20}
                            src={"/img/eyeIcon.png"}
                            alt={"Avatar"}
                            className='size-5 object-contain'
                          />
                          <div className="text-theme1 font-semibold">
                            View
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
                </React.Fragment>
              ))}
            </tbody>
            <tfoot>
            <tr>
              <td colSpan={3} className="border-b border-l border-theme6 rounded-bl-lg">
                <div className="px-6 py-4  text-sm text-theme5 font-medium flex items-center ">
                  Page 1 of 10
                </div>
              </td>
              <td colSpan={4} className="border-b border-r border-theme6 pe-6 py-4 rounded-br-lg">
                <div className="flex items-center justify-end gap-3">
                  <button className='h-9 border border-theme8 rounded-lg px-3.5 text-sm font-semibold text-theme5 shadow-[0px_1px_2px_0px_#1018280D]'>Previous</button>
                  <button className='h-9 border border-theme8 rounded-lg px-3.5 text-sm font-semibold text-theme5 shadow-[0px_1px_2px_0px_#1018280D]'>Next</button>
                </div>
              </td>
            </tr>
          </tfoot>
          </table>
        </div>
      </div>
    </>
  )
}

export default WebhookImports