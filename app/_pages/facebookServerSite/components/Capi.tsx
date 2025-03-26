import Image from 'next/image'
import React from 'react'

const capiOptions = [
  {
    icon : '/img/googleAds.png',
    title : 'Google Ads',
    key : 'Google Ads API',
  },
  {
    icon : '/img/facebook.png',
    title : 'Facebook',
    key : ' Meta Conversion API',
  },
  {
    icon : '/img/tiktok.png',
    title : 'TikTok',
    key : ' TikTok Events API',
  },
  {
    icon : '/img/googleAnalytics.png',
    title : 'Google Analytics 4',
    key : ' GA4 Measurement Protocal',
  },
  {
    icon : '/img/linkdin.png',
    title : 'LinkedIn',
    key : ' LinkedIn Conversation API',
  },
  {
    icon : '/img/snapchat.png',
    title : 'Snapchat',
    key : ' Snapchat Conversation API',
  },
  {
    icon : '/img/instagram.png',
    title : 'Instagram',
    key : ' Meta Conversion Api',
  },
  {
    icon : '/img/microsoft.png',
    title : 'Microsoft Ads',
    key : ' Microsoft Ads',
  },
]

const Capi = () => {

  return (
    <div className='px-5 sm:px-10 md:px-20 pb-8  lg:py-24'>
      <div className="text-lg lg:text-[3rem] lg:leading-[3.5rem] font-bold font-barlow text-center text-theme3">Ready-made CAPI </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-16 mt-6 lg:mt-16">
        {
          capiOptions?.map(item => (
            <div key={item?.title} className="p-4 lg:p-8 bg-white shadow-[0px_0px_14px_rgba(0,0,0,0.12)] rounded-2xl relative">
              <div className="absolute top-4 left-4 text-theme1 border border-theme1 font-medium font-poppins text-[0.625rem] lg:text-xs h-5 lg:h-6 w-14 lg:w-[4.4375rem] flex items-center justify-center rounded-full">Popular</div>
              <div className="flex flex-col items-center justify-center text-center h-full">
                <Image
                  width={36}
                  height={36}
                  loading="lazy"
                  quality={90}
                  alt="logo"
                  src={item?.icon}
                  className='size-6 lg:size-12 object-contain mt-6 mb-4'
                ></Image>
                <div className="text-sm lg:text-xl font-semibold font-poppins text-theme3 mb-1.6">{item?.title}</div>
                <div className="text-xs lg:text-sm font-normal font-poppins text-theme3 flex-1 h-full">{item?.key}</div>
                <button className='bg-theme1 text-xs lg:text-base font-semibold font-poppins h-[1.725rem] lg:h-9 w-[4.4125rem] lg:w-[5.625rem] text-white rounded-full mt-6 '>Select</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Capi