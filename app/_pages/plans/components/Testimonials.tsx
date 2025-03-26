"use client"

import Image from 'next/image'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonials = () => {
  return (
    <>
      <div className="py-9 lg:py-40 relative ">
        <div className="mx-auto px-5 sm:px-10 md:px-20">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-12 md:col-span-7">
              <div className="lg:w-[90%]">
                <div className="text-lg lg:text-[2.5rem] font-barlow font-bold text-theme3 mb-3 lg:mb-6">What Our Customer Say</div>
                <Swiper 
                  modules={[Navigation]}
                  navigation={{
                    prevEl: '.testPrev1',
                    nextEl: '.testNext1',
                    }}
                >
                  {
                    [1,2,3]?.map(item => (
                      <SwiperSlide key={`testimonial-${item}`}>
                        <div className="flex gap-4">
                          <div className="a">
                            <div className="text-sm lg:text-lg !leading-6 lg:!leading-10 lg:font-medium font-poppins lg:text-theme3">
                            We started using tracklution, as building our own server-side tracking would have required lots of resources. after switching from basic pixel tracking to Tracklution’s server-side tracking, <span className='text-theme1'>we increased our conversion reporting accuracy by over 35%.</span> this means more and higher quality data attributed to our campaigns. i also love how quick and easy it is to set up new traffic channels under tracklution.
                            </div>
                            <div className="text-sm lg:text-xl font-semibold font-poppins text-theme3 mt-3.5 lg:mt-4 flex items-center gap-2 lg:gap-4">
                              <span className='flex size-3 bg-theme1 rounded-full'></span>
                              Heiman Safeen  <span className='text-xs lg:text-base text-theme37 font-normal pl-1.5 lg:pl-3'>Growth Officer</span>  
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
                <div className="hidden lg:flex items-center gap-11 mt-8">
                  <button className="testPrev1 size-8 flex items-center justify-center disabled:brightness-0">
                    <Image
                      width={16}
                      height={16}
                      loading="lazy"
                      quality={90}
                      alt="logo"
                      src={"/img/dropdownIconBlue.png"}
                      className='h-4 object-contain -rotate-90'
                    ></Image>
                  </button>
                  <button className="testNext1 size-8 flex items-center justify-center disabled:brightness-0">
                    <Image
                      width={16}
                      height={16}
                      loading="lazy"
                      quality={90}
                      alt="logo"
                      src={"/img/dropdownIconBlue.png"}
                      className='h-4 object-contain rotate-90'
                    ></Image>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex col-span-12 md:col-span-5 max-lg:mt-6">
              <Image
                width={357}
                height={296}
                loading="lazy"
                quality={90}
                alt="logo"
                src={"/img/testimonial2.png"}
                className='w-full object-contain'
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
