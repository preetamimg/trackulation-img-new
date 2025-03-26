import Image from 'next/image'
import React from 'react'

const Step2 = () => {
  return (
    <>
      <div className="mt-[4.5rem] grid grid-cols-12 gap-8">
        <div className="col-span-2">
          <div className="text-lg font-semibold text-theme14 mb-1 leading-7">Step 2</div>
          <div className="text-sm font-bold text-theme1">DNS Settings for <br /> first-party data </div>
          <div className="text-sm font-normal text-theme1">(recommended)</div>
        </div>
        <div className="col-span-10">
          <div className="bg-theme4 border border-theme6 rounded-[0.625rem] p-8 text-theme9 font-medium text-sm leading-5">
            <div className="mb-8">Implement this CNAME in your website DNS settings. This will enable scripts to be loaded from your domain and the use of First Party Cookies. This is not a required step, but definitely recommended to make the most out of your tracking setup.</div>
              <div className="rounded-lg border border-theme6 overflow-hidden">
                <div className="w-full overflow-x-auto ">
                  <table className='table w-full'>
                    <thead>
                      <tr>
                        <th className='py-3 px-6 bg-white text-xs font-medium text-theme9 text-left'>
                          <div className="flex items-center gap-3">
                            Type
                            <Image width={15} height={15} src={"/img/arrow-down.png"} className="h-3 w-3 object-contain cursor-pointer" alt="refresh icon"/>
                          </div>
                        </th>
                        <th className='py-3 px-6 bg-white text-xs font-medium text-theme9 text-left'>HOST</th>
                        <th className='py-3 px-6 bg-white text-xs font-medium text-theme9 text-left'>Points To</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        [1,2,3]?.map(item => (
                          <tr key={item}>
                            <td className='p-6 bg-white text-sm font-medium text-theme14 border-t border-theme6'>CNAME</td>
                            <td className='p-6 bg-white border-t border-theme6'>
                              <div className="gap-3 text-sm font-normal text-theme14 flex items-center">
                                tralut.app4download-om.fun
                                <Image width={15} height={15} src={"/img/copyIconBlue.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain cursor-pointer" alt="refresh icon"/>
                              </div>
                            </td>
                            <td className='p-6 bg-white border-t border-theme6'>
                              <div className="gap-3 text-sm font-normal text-theme14 flex items-center">
                                tracking.leadspark.io
                                <Image width={15} height={15} src={"/img/copyIconBlue.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain cursor-pointer" alt="refresh icon"/>
                              </div>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            <div className="mt-8 flex gap-3">
              <button className='h-10 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4 disabled:bg-theme25'>
                Verify DNS Installation
                <Image width={15} height={15} src={"/img/checkIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain brightness-[1000]" alt="refresh icon"/>
              </button>
            </div>
            <div className="mt-8 flex justify-end gap-3">
              <button className='ml-1.5 h-10 flex items-center justify-center text-sm font-semibold text-theme9 gap-2 rounded-lg px-4 shadow-[0px_1px_2px_0px_#1018280D]'>
                Complete Later
              </button>
              <button disabled className='h-10 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4 disabled:bg-theme25'>
                Next
                <Image width={15} height={15} src={"/img/whiteArrowIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step2