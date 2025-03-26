import Image from 'next/image'
import React from 'react'

const InstallTrackulation = () => {
  return (
    <div className='px-5 sm:px-10 md:px-20 bg-[url(/img/installBg.png)] bg-no-repeat bg-cover py-5 lg:py-20'>
      <div className="text-white lg:text-center font-barlow font-bold text-lg lg:text-[2.5rem] mb-4 lg:mb-9">3 Simple Steps to Install Tracklution on any Website</div>
      <div className="text-white/85 lg:text-white font-barlow text-lg lg:text-[2rem] font-bold">Step 1</div>
      <div className="text-white/85 lg:text-white pt-2 pb-2 lg:pb-14 pl-7 lg:pl-9 ml-5 lg:ml-8 max-w-[65.625rem] border-l border-white/85 lg:border-white">
        <div className="text-sm lg:text-2xl font-barlow font-bold mb-2.5 lg:mb-4">Enable 1st-Party Cookies</div>
        <div className="text-xs lg:text-lg font-poppins font-normal">Do a simple CNAME addition in the domain’s DNS setting to enable tracking with 1st-party cookies. This step is optional, yet highly recommended.</div>
      </div>
      <div className="text-white/85 lg:text-white font-barlow text-lg lg:text-[2rem] font-bold">Step 2</div>
      <div className="text-white/85 lg:text-white pt-2 pb-2 lg:pb-14 pl-7 lg:pl-9 ml-5 lg:ml-8 max-w-[65.625rem] border-l border-white/85 lg:border-white">
        <div className="text-sm lg:text-2xl font-barlow font-bold mb-2.5 lg:mb-4">Install Tracking Pixels</div>
        <div className="text-xs lg:text-lg font-poppins font-normal">Do a simple CNAME addition in the domain’s DNS setting to enable tracking with 1st-party cookies. This step is optional, yet highly recommended.</div>
      </div>
      <div className="text-white/85 lg:text-white font-barlow text-lg lg:text-[2rem] font-bold">Step 3</div>
      <div className="text-white/85 lg:text-white pt-2 pb-2 lg:pb-14 pl-7 lg:pl-9 ml-5 lg:ml-8 max-w-[65.625rem] border-l border-white/85 lg:border-white">
        <div className="text-sm lg:text-2xl font-barlow font-bold mb-2.5 lg:mb-4">Connect Ad Platforms</div>
        <div className="text-xs lg:text-lg font-poppins font-normal">Do a simple CNAME addition in the domain’s DNS setting to enable tracking with 1st-party cookies. This step is optional, yet highly recommended.</div>
      </div>
      <Image
        src={'/img/finish.png'}
        alt='icon'
        width={36}
        height={36}
        className='size-9 object-contain mt-1.5 ml-2 lg:ml-5'
      />
      <button className="text-xs lg:text-xl text-white font-poppins font-semibold bg-theme1 h-10 lg:h-[4.375rem] px-7 lg:px-24 rounded lg:rounded-xl mt-4 sm:-mt-9 mx-auto flex items-center">Read More About How It Works</button>
    </div>
  )
}

export default InstallTrackulation