import Image from 'next/image'
import React from 'react'

const data = [
  {
    icon : '/img/database.png',
    text : "Get better data for your Facebook ads with first-party tracking and Meta's Conversion API"
  },
  {
    icon : '/img/monitoring.png',
    text : "+34.2% more conversions tracked with Tracklution compared to regular Meta Pixel"
  },
  {
    icon : '/img/acute.png',
    text : "Effortless 15-minute no-code setup with our Facebook connector. No credit card needed!"
  }
]
const Hero = () => {
  return (
    <div className='px-5 sm:px-10 md:px-20 py-8 lg:py-24'>
      <div className="flex items-center justify-between">
        <div className="hidden lg:flex">
          <Image
            width={124}
            height={402}
            loading="lazy"
            quality={90}
            alt="logo"
            src={"/img/facebook_hero_1.png"}
            className='w-full object-contain'
          ></Image>
        </div>
        <div className="flex-1">
          <div className="flex-flex-col text-center">
            <div className="hidden mx-auto size-[5.8125rem] shadow-[0px_0px_25px_rgba(0,0,0,0.12)] rounded-2xl lg:flex items-center justify-center mb-7">
              <Image
                width={46}
                height={46}
                loading="lazy"
                quality={90}
                alt="logo"
                src={"/img/facebook.png"}
                className='size-11 object-contain'
              ></Image>
            </div>
            <div className="text-base lg:text-[2rem] font-barlow font-bold text-theme1 lg:leading-[3.5rem]"> Get <span className='font-extrabold'>100%</span> Accurate</div>
            <div className="text-xl lg:text-[3.375rem] text-theme3 font-barlow font-extrabold lg:!leading-[56px]">Facebook  Server-Side Tracking</div>
            <div className="text-sm lg:text-2xl font-medium lg:font-bold font-barlow text-theme3 mt-3 lg:mt-7">Enter your website to start your
              <span className='text-sm lg:text-[2rem] font-medium lg:font-extrabold text-theme1 pl-2'>30 Days Free Trial!</span>
            </div>
            <div className="relative mt-6 max-w-[42.75rem] mx-auto">
              <Image
                width={24}
                height={24}
                loading="lazy"
                quality={90}
                alt="logo"
                src={"/img/language.png"}
                className='size-3 lg:size-6 object-contain absolute top-1/2 -translate-y-1/2 left-2.5 lg:left-7'
              ></Image>
              <input className='h-10 lg:h-[5.25rem] w-full border border-theme3 text-xs lg:text-2xl font-normal font-poppins rounded-lg lg:rounded-xl pl-8 lg:pl-20 placeholder:text-theme3' placeholder='e.g www.traultion.com' type="text" />
              <button className='bg-theme1 text-white h-[1.625rem] lg:h-16 px-4 lg:px-8 text-xs lg:text-xl font-semibold font-poppins rounded lg:rounded-xl absolute top-1/2 -translate-y-1/2 right-2'>
                Start
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
          <Image
            width={124}
            height={402}
            loading="lazy"
            quality={90}
            alt="logo"
            src={"/img/facebook_hero_2.png"}
            className='w-full object-contain'
          ></Image>
        </div>
      </div>
      <div className="flex gap-2 justify-center mt-4 lg:hidden">
        {
          ["microsoft", "googleAds", "facebook", "googleAnalytics", "linkdin"]?.map(item => (
            <div key={item} className="size-8 bg-white rounded-md shadow-[0px_0px_25px_rgba(0,0,0,0.12)] flex items-center justify-center">
              <Image
                width={16}
                height={16}
                loading="lazy"
                quality={90}
                alt="logo"
                src={`/img/${item}.png`}
                className='size-4 object-contain flex mx-auto'
              ></Image>
            </div>
          ))
        }
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-28 mt-6 lg:mt-16">
        {
          data?.map((item, index) => (
            <div key={`hero-${index}`} className="max-lg:shadow-[0px_0.58px_7.81px_rgba(0,0,0,0.12)] max-lg:rounded-[0.625rem] max-lg:p-4 max-lg:flex max-lg:gap-3 lg:text-center">
              <Image
                width={36}
                height={36}
                loading="lazy"
                quality={90}
                alt="logo"
                src={item?.icon}
                className='size-6 lg:size-9 object-contain mb-3 flex mx-auto'
              ></Image>
              <div className="text-xs lg:text-sm text-theme3 font-poppins font-normal">{item?.text}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Hero