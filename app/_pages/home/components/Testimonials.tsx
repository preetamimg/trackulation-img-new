"use client"

import Image from 'next/image'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Testimonials = () => {
  return (
    <>
      <div className="mb-12">
        <div className="mx-auto px-5 sm:px-10 md:px-20">
          <div className="grid grid-cols-12">
            <div className="hidden lg:flex col-span-12 md:col-span-3">
              <Image
                width={357}
                height={296}
                loading="lazy"
                quality={90}
                alt="logo"
                src={"/img/testimonial.png"}
                className='w-full object-contain'
              ></Image>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="lg:w-4/5">
                <Swiper 
                  modules={[Navigation]}
                  navigation={{
                    prevEl: '.testPrev',
                    nextEl: '.testNext',
                    }}
                >
                  {
                    [1,2,3]?.map(item => (
                      <SwiperSlide key={`testimonial-${item}`}>
                        <div className="flex gap-4">
                          <Image
                            width={45}
                            height={29}
                            loading="lazy"
                            quality={90}
                            alt="logo"
                            src={"/img/quotes.png"}
                            className='h-7 object-contain'
                          ></Image>
                          <div className="a">
                            <div className="text-base lg:text-lg font-medium font-poppins text-theme3">With the simplified tailor-made CRM app development, the future of the company’s sales funnel is bound to shoot up with better customer engagement and automated tracking methods. Can’t find the right reasons to kickstart the CRM app development? Wait, it’s almost there!</div>
                            <div className="text-base lg:text-xl font-semibold font-poppins text-theme3 mt-4 flex items-center gap-4">
                              <span className='flex size-1.5 bg-theme3 rounded-full'></span>
                              Anil Sachdeva  | CEO | Tracathon
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
                <div className="flex items-center gap-11 mt-8 pl-12">
                  <button className="testPrev size-8 flex items-center justify-center disabled:brightness-0">
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
                  <button className="testNext size-8 flex items-center justify-center disabled:brightness-0">
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
