import Image from 'next/image'
import React from 'react'

const Installation = () => {
  return (
    <>
        <div className="p-6 bg-white rounded-xl border border-theme6 mt-6 text-sm font-normal text-theme9">
          <div className="text-lg font-semibold text-theme14 mb-1">Installation, it’s easy!</div>
          <div className="mb-3"> it&#39;s time to install Tracklution tracking pixels to your website. It’s super simple: The installation happens just like installing any other tracking pixels.</div>
          <div className="mb-5">
            This is a necessary step for Tracklution to be able to capture events in your website and thus pass them on to your selected data destinations, such as Meta, Google Ads or Google Analytics.
          </div>
          <div className="flex gap-3">
            <button className='h-10 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4'>
              Copy Link to Instructions
              <Image width={15} height={15} src={"/img/copyIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
            </button>
            <button className='ml-1.5 h-10 flex items-center justify-center text-sm font-semibold border border-theme8 text-theme5 gap-2 rounded-lg px-4 shadow-[0px_1px_2px_0px_#1018280D]'>
              Send Instructions to Co-worker
              <Image width={15} height={15} src={"/img/uploadIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain brightness-0" alt="refresh icon"/>
            </button>
          </div>
        </div>
    </>
  )
}

export default Installation