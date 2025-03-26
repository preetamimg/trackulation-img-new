import Image from 'next/image'
import React from 'react'

const Tracking = () => {
  return (
    <div className="mb-12">
      <div className="mx-auto px-5 sm:px-10 md:px-20">
        <div className="text-center text-xl lg:text-[2rem] font-bold text-theme12 lg:leading-[3.5rem] font-barlow">Tracking pixels on steroids</div>
        <div className="text-center text-2xl lg:text-[3rem] font-bold text-theme3 lg:leading-[3.5625rem] font-barlow">Server-Side Tracking with a Simple Pixel Setup</div>
        <div className="text-center text-sm lg:text-lg font-normal text-theme3 font-poppins mt-3 lg:mt-6 max-w-[46.25rem] mx-auto">Enable 1st-party cookies, server-side tracking and Conversion APIs of ad platforms with a simple tracking pixel setup that every digital marketer is familiar with.</div>
          <Image
            width={1240}
            height={390}
            loading="lazy"
            quality={90}
            alt="logo"
            src={"/img/trust.png"}
            className='w-full h-auto hidden lg:flex'
          ></Image>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                      [1,2,3]?.map(item => (
                        <div key={`result-${item}`}>
                          <div className="lg:pr-20">
                            <div className="text-[1.375rem] text-theme3 font-barlow font-bold mt-[1.0625rem]">Drive traffic to your site</div>
                            <ul>
                              <li className='flex text-sm font-normal text-theme3 font-poppins gap-3 mt-5'>
                                <Image
                                  width={20}
                                  height={20}
                                  loading="lazy"
                                  quality={90}
                                  alt="logo"
                                  src={"/img/verified.png"}
                                  className='size-[1.125rem] object-contain'
                                ></Image>
                                Get started with Tracklution by installing a simple tracking script on your site
                              </li>
                              <li className='flex text-sm font-normal text-theme3 font-poppins gap-3 mt-5'>
                                <Image
                                  width={20}
                                  height={20}
                                  loading="lazy"
                                  quality={90}
                                  alt="logo"
                                  src={"/img/verified.png"}
                                  className='size-[1.125rem] object-contain'
                                ></Image>
                                Activate new ad platforms with just a few clicks
                              </li>
                              <li className='flex text-sm font-normal text-theme3 font-poppins gap-3 mt-5'>
                                <Image
                                  width={20}
                                  height={20}
                                  loading="lazy"
                                  quality={90}
                                  alt="logo"
                                  src={"/img/verified.png"}
                                  className='size-[1.125rem] object-contain'
                                ></Image>
                                No recurring tracking pixels, no API building, no server management = saved developer resources
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                      ))
                    }
                  </div>
      </div>
    </div>
  )
}

export default Tracking