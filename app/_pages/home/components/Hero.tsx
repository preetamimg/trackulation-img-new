import Header from '@/app/_components/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="relative">
      <Header isHomepage={true}/>
      <div className="lg:h-dvh bg-theme23 w-full pt-20 lg:pt-0">
        <div className="mx-auto px-5 sm:px-10 md:px-20 h-full">
          <div className="h-full grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 py-6 lg:py-0">
              <div className="text-4xl lg:text-[3.5rem] font-bold text-white lg:leading-[4.2rem] font-barlow max-lg:text-center">Achieve Your All Goals <br className='hidden xl:block'/> with Smart Conversion <br className='hidden xl:block'/> Tracking</div>
              <button className='mt-5 lg:mt-12 mb-5 lg:mb-7 h-12 lg:h-16 font-poppins bg-white flex items-center justify-center gap-2 text-base lg:text-xl font-semibold text-theme3 rounded-xl lg:rounded-2xl px-5 lg:px-8 max-lg:mx-auto'>
                Get Tracklution Now
                <Image width={20} height={20} src={"/img/drag_click.png"} className="size-[1.375rem] object-contain" alt="refresh icon"/>
              </button>
              <div className="text-sm lg:text-lg font-normal text-white font-poppins max-lg:text-center">Still in doubt?</div>
              <Link className='font-poppins text-sm lg:text-lg font-medium underline !text-white max-lg:text-center block' href={'/'}>Request a demo</Link>
            </div>
            <div className="order-1 lg:order-2 py-6 lg:py-0">
              <Image
                width={568}
                height={485}
                src={'/img/heroBanner.png'}
                alt='hero'
                className='w-full h-auto object-contain max-xl:max-w-[37.5rem] max-lg:mx-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero