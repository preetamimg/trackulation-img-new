import Image from 'next/image'
import React  from 'react'

const PixelSetup = () => {

  return (
    <div className='px-5 sm:px-10 md:px-20 py-10 lg:py-20 text-theme3 lg:text-center'>
      <div className="text-sm lg:text-xl font-medium lg:font-bold font-poppins uppercase max-lg:text-theme1">BETTER TRACKING FOR BETTER RESULTS</div>
      <div className="text-lg lg:text-[2.5rem] font-bold font-barlow lg:leading-[3.5rem] mt-3 lg:mt-4 mb-3 lg:mb-6 max-w-[64.625rem] mx-auto">Server-Side Tracking with a Simple Pixel Setup</div>
      <div className="text-sm lg:text-lg font-poppins font-normal max-w-[64.625rem] mx-auto">With Tracklution, you can start using 1st-party Cookies, Server-Side Tracking and API connections to multiple Ad platform in your website with a simple tracking pixel setup that every digital marketer is familiar with.</div>
      <button className="text-xs lg:text-xl text-white font-poppins font-semibold bg-theme1 h-10 lg:h-[4.375rem] px-7 lg:px-24 rounded lg:rounded-xl mb-1 lg:mb-4 mt-6 lg:mt-9">Get Tracklution Now</button>
      <div className="text-[0.625rem] lg:text-lg font-poppins font-normal">Free 30-day trial   No credit card needed</div>
      <div className="flex items-center lg:justify-center gap-5 lg:gap-11 mt-2.5 lg:mt-4">
        {
          ["googleAds", "linkdin", "facebook", "tiktok"]?.map(item => (
            <Image
              key={item}
              width={38}
              height={38}
              loading="lazy"
              quality={90}
              alt="logo"
              src={`/img/${item}.png`}
              className='size-5 lg:size-8 flex object-contain'
            ></Image>
          ))
        }
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-16 max-w-[64.625rem] mx-auto justify-center items-center gap-4">
        {
          ["Easy Installation", "1st Party Cookies", "Server-Side Tracking", 
            "Offline Conversion Tracking",
            "Purchase Conversions",
            "Micro Conversions",
            "Build Automations",
            "Custom Audience",
            "Fast Support",
            "Well Documented",
            "GDPR Compliant",
            "Remarketing Lists",
            "Data Located in the EU",
            "Blocklist"
          ]?.map((item, index)=> (
            <div key={item} className="flex lg:flex-col items-center lg:justify-center gap-3 h-full lg:gap-4 p-3.5 max-lg:bg-theme15">
                <Image
                  width={38}
                  height={38}
                  loading="lazy"
                  quality={90}
                  alt="logo"
                  src={`/img/pixel_setup${index + 1}.png`}
                  className='size-6 lg:size-8 flex object-contain'
                ></Image>
              <div className="text-xs lg:text-base font-normal font-poppins">{item}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PixelSetup