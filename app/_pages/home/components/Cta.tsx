import Image from 'next/image'
import React from 'react'

const Cta = () => {
  return (
    <>
      <div className="bg-theme30">
        <div className="mx-auto px-5 sm:px-10 md:px-20">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-8 py-8 lg:py-16">
              <div className="text-xl lg:text-[2rem] font-bold text-white font-barlow mb-2 lg:mb-6">Stop Wasting Your Ad Budget</div>
              <div className="text-2xl lg:text-[3rem] font-bold text-white font-barlow">Start Tracking Smarter Today</div>
              <div className="flex gap-3 lg:gap-7 lg:items-center my-5 lg:mt-12 lg:mb-8 flex-col sm:flex-row">
                <button className='text-sm lg:text-xl text-white font-medium flex items-center gap-2 h-10 lg:h-16 rounded-xl lg:rounded-2xl px-5 lg:px-8 bg-theme12 max-sm:w-fit'>
                  Get Tracklution Now
                  <Image
                    width={20}
                    height={20}
                    loading="lazy"
                    quality={90}
                    alt="logo"
                    src={"/img/drag_click.png"}
                    className='h-5 object-contain brightness-[1000]'
                  ></Image>
                </button>
                <button className='text-base lg:text-xl text-white font-medium underline max-sm:w-fit'>Request a demo</button>
              </div>
              <div className="text-sm lg:text-base font-poppins font-normal text-white">No Credit Card Required</div>
            </div>
            <div className="hidden lg:flex col-span-4 pt-5">
                            <Image
                              width={357}
                              height={296}
                              loading="lazy"
                              quality={90}
                              alt="logo"
                              src={"/img/cta.png"}
                              className='w-[90%] object-contain'
                            ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cta