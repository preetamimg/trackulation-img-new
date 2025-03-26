import SolutionLinks from '@/app/_components/SolutionLinks'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='mx-auto px-5 sm:px-10 md:px-20 py-7 lg:py-20'>
      <SolutionLinks/>
      <div className="max-w-[58rem] lg:text-center mx-auto pt-6 lg:pt-16 text-xl !leading-[1.75rem]  lg:text-[3rem] font-bold font-barlow lg:!leading-[3.75rem] lg:text-theme3">Best Possible tracking for your digital ads with simple installation</div>
      <div className="max-w-[52.875rem] lg:text-center mx-auto pt-4 text-theme3 text-sm lg:text-xl font-medium font-poppins lg:leading-[2.125rem]">Start using Server-Side Tracking, First-Party Cookies and Conversion APIs of multiple ad platforms in a matter of minutes. Long gone are the days when all this required a massive IT project.</div>
      <button className='bg-theme1 text-white px-5 lg:px-[4.625rem] h-10 lg:h-[4.75rem] flex items-center justify-center rounded lg:rounded-xl text-xs lg:text-xl font-semibold font-poppins lg:mx-auto mt-6'>Get Tracklution Today</button>
    </div>
          <Image
            width={1423}
            height={619}
            loading="lazy"
            quality={90}
            alt="logo"
            src={"/img/result.png"}
            className='w-full h-auto'
          ></Image>
    </>

  )
}

export default Hero