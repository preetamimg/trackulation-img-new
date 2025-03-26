"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

const SocialImages = ['brand01', 'brand02', 'brand03','brand04', 'brand01', 'brand02', 'brand03','brand04', 'brand01', 'brand02', 'brand03','brand04',]

const TrustedPartners = () => {
  return (
    <>
      <div className="mx-auto px-5 sm:px-10 md:px-20 pt-6 font-barlow">
        <div className="text-2xl lg:text-[2rem] font-bold text-theme3 lg:leading-[3.5rem] text-center max-w-[90%] mx-auto">
          Trusted by 500+ high-growth B2B teams
        </div>
        <div className="w-full overflow-hidden mt-2 lg:mt-6">
            <Swiper 
              className="mySwiper [&_.swiper-wrapper]:!ease-linear"
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={5000}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                500: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 55,
                },
              }}
            >
              {
                SocialImages?.map((item, index) => (
                    <SwiperSlide key={`${item}-social-${index}`} className=''>
                      <div className="flex justify-center w-full">
                        <Image className='h-16 max-lg:w-full lg:h-[5.625rem] w-auto object-contain' width={300} height={90} loading='lazy' quality={90} alt='videoBanner' src={`/img/${item}.png`}/>
                      </div>
                    </SwiperSlide>
                ))
              }
            </Swiper>
        </div>
      </div>
    </>
  )
}

export default TrustedPartners