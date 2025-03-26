"use client"
import Image from 'next/image'
import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useMediaQuery } from '@/app/_hooks/useMediaQuery'

const Integrations = () => {
  const isLgScreen = useMediaQuery('1024px')

  return (
    <>
      <div className="bg-theme30 bg-[url(/img/integrationShape.png)] bg-no-repeat bg-[top_6.125rem_right_2.75rem]" style={{backgroundSize : "60%"}}>
        <div className="mx-auto px-5 sm:px-10 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <div className="pt-7 lg:pt-[4.8125rem] text-white text-2xl lg:text-[3rem] font-bold lg:leading-[3.625rem]">Easily embed on <br className='hidden lg:block' />
              Integrations</div>
              <div className="text-sm lg:text-lg text-white font-normal mt-3 lg:mt-6">Utilise these and many other Conversion APIs without <br  className='hidden lg:block'/>
              writing a single line of code.</div>
              <Image
                width={435}
                height={547}
                loading="lazy"
                quality={90}
                alt="logo"
                src={"/img/integrationGirl.png"}
                className='w-3/5 object-contain mt-auto hidden lg:block'
              ></Image>
            </div>
            <div className="pt-2 pb-7 lg:pt-[4.8125rem]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                <div className="hidden lg:flex">
                  <Swiper
                    direction={'vertical'}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={28}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 4,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                    }}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={5000}
                    className="mySwiper !pl-14 h-[38.75rem] w-full [&_.swiper-wrapper]:!ease-linear"
                  >
                    {
                      [1,2,3, 4, 5, 6,7]?.map(item => (
                        <SwiperSlide key={`aaa-${item}`} className='flex'>
                          <div className="bg-white p-5 rounded-lg h-full flex flex-col items-center justify-center w-full">
                            <Image
                              width={30}
                              height={30}
                              loading="lazy"
                              quality={90}
                              alt="logo"
                              src={"/img/googleAds.png"}
                              className='h-[1.875rem] object-contain'
                            ></Image>
                            <div className="text-base text-theme14 font-poppins font-medium mt-1.5 mb-5">Google Ads</div>
                            <button className='flex items-center justify-center gap-1 bg-theme12 rounded-lg text-xs font-semibold font-poppins text-white h-[2.125rem] w-full mb-3.5 shadow-[0px_5.09px_5.09px_0px_#2D86FF61]'>
                              Get Started
                              <Image
                                width={10}
                                height={10}
                                loading="lazy"
                                quality={90}
                                alt="logo"
                                src={"/img/whiteArrowIcon.png"}
                                className='size-2.5 object-contain'
                              ></Image>
                            </button>
                            <div className="text-xs text-theme14 font-poppins font-medium">Request a demo</div>
                          </div>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </div>
                <div className="lg:pt-20">
                  <Swiper
                    direction={!isLgScreen ? 'vertical' : 'horizontal'}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={28}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      400: {
                        slidesPerView: 1.2,
                      },
                      500: {
                        slidesPerView: 1.5,
                      },
                      650: {
                        slidesPerView: 2,
                      },
                      750: {
                        slidesPerView: 2.5,
                      },
                      1024: {
                        slidesPerView: 2.8,
                      },
                    }}
                    autoplay={{
                      delay: 0,
                      disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={5000}
                    className="mySwiper !pr-14 lg:h-[36.25rem] w-full [&_.swiper-wrapper]:!ease-linear [&_.swiper-pagination]:max-lg:hidden [&_.swiper-pagination]:absolute [&_.swiper-pagination]:top-1/2 [&_.swiper-pagination]:-right-0 [&_.swiper-pagination]:-translate-y-1/2 [&_.swiper-pagination]:z-[40] [&_.swiper-pagination-bullet]:size-3 [&_.swiper-pagination-bullet]:flex [&_.swiper-pagination-bullet]:mb-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-theme31] [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300 [&_.swiper-pagination-bullet]:ease-in-out [&_.swiper-pagination-bullet-active]:!h-14 [&_.swiper-pagination-bullet-active]:!bg-theme12"
                  >
                    {
                      [1,2,3, 4,]?.map(item => (
                        <SwiperSlide key={`aaa-${item}`} className='flex'>
                          <div className="bg-white p-5 rounded-lg h-full flex flex-col items-center justify-center w-full">
                            <Image
                              width={30}
                              height={30}
                              loading="lazy"
                              quality={90}
                              alt="logo"
                              src={"/img/googleAds.png"}
                              className='h-[1.875rem] object-contain'
                            ></Image>
                            <div className="text-base text-theme14 font-poppins font-medium mt-1.5 mb-5">Google Ads</div>
                            <button className='flex items-center justify-center gap-1 bg-theme12 rounded-lg text-xs font-semibold font-poppins text-white h-[2.125rem] w-full mb-3.5 shadow-[0px_5.09px_5.09px_0px_#2D86FF61]'>
                              Get Started
                              <Image
                                width={10}
                                height={10}
                                loading="lazy"
                                quality={90}
                                alt="logo"
                                src={"/img/whiteArrowIcon.png"}
                                className='size-2.5 object-contain'
                              ></Image>
                            </button>
                            <div className="text-xs text-theme14 font-poppins font-medium">Request a demo</div>
                          </div>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Integrations