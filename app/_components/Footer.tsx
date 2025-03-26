import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-theme17 pt-8 lg:pt-[3.75rem] pb-11'>
      <div className="mx-auto px-5 sm:px-10 md:px-20">
        <div className="text-center text-2xl lg:text-[1.875rem] text-white font-semibold mb-1">Let’s get started on something great</div>
        <div className="text-center text-base lg:text-xl text-theme6 font-poppins font-normal">Join over 4,000+ startups already growing with OptiTrack.</div>
        <div className="w-fit flex items-center mt-6 sm:mt-12 gap-3 mx-auto flex-wrap justify-center">
          <button className="hoverBtn secondaryHoverBtn sm:text-base text-sm font-semibold text-theme5 py-3 px-5 rounded-lg bg-white border border-theme8 shadow-[0px_1px_2px_0px_#1018280D]">Talk to an expert</button>
          <button className="hoverBtn primaryHoverBtn sm:text-base text-sm bg-theme1 font-semibold text-white py-3 px-5 rounded-lg border border-theme1 shadow-[0px_1px_2px_0px_#1018280D]">Get Started</button>
        </div>
        <div className="grid grid-cols-12 gap-4 lg:gap-10 mt-11 items-center">
          <div className="col-span-12 md:col-span-5">
            <Image
              width={300}
              height={67}
              loading="lazy"
              quality={90}
              alt="logo"
              src={"/img/logo_white.png"}
              className='h-10 lg:h-16 w-auto object-contain'
            ></Image>
            <div className="text-sm lg:text-lg text-white font-poppins font-normal mt-3.5 w-full">Server-Side Tracking, First-Party Cookies and 
              Conversion APIs for any website with easy installation. 
              Simple yet powerful tracking tool for digital advertising.
            </div>
            <Image
              width={344}
              height={45}
              loading="lazy"
              quality={90}
              alt="logo"
              src={"/img/footerStar.png"}
              className='h-8 sm:h-11 max-lg:w-auto mt-3 lg:mt-5 object-contain'
            ></Image>
          </div>
          <div className="col-span-12 md:col-span-2">
            <div className="text-white font-barlow font-bold text-base lg:text-xl mb-1.5 lg:mb-3">Basics</div>
            <Link className='text-white font-poppins text-sm lg:text-lg font-normal hover:text-white flex mb-1' href={'/'}>Home</Link>
            <Link className='text-white font-poppins text-sm lg:text-lg font-normal hover:text-white flex mb-1' href={'/'}>Plans</Link>
            <Link className='text-white font-poppins text-sm lg:text-lg font-normal hover:text-white flex' href={'/'}>About Us</Link>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="text-white font-barlow font-bold text-base lg:text-xl mb-1.5 lg:mb-3">Server Side Tracking</div>
            <Link className='text-white font-poppins text-sm lg:text-lg font-normal hover:text-white flex mb-1' href={'/'}>Google Ads Server Side Tracking</Link>
            <Link className='text-white font-poppins text-sm lg:text-lg font-normal hover:text-white flex' href={'/'}>Facebook Server Side Tracking</Link>
            <Link className='text-white font-poppins text-sm lg:text-lg font-normal hover:text-white flex invisible' href={'/'}>Facebook Server Side Tracking</Link>
          </div>
          <div className="col-span-12 md:col-span-2">
            <div className="text-white font-barlow font-bold text-base lg:text-xl mb-1.5 lg:mb-3">Solutions</div>
            <Link className='text-white font-poppins text-sm lg:text-lg font-normal hover:text-white flex mb-1' href={'/'}>For Marketers</Link>
            <Link className='text-white font-poppins text-sm lg:text-lg font-normal hover:text-white flex mb-1' href={'/'}>For Agencies</Link>
            <Link className='text-white font-poppins text-sm lg:text-lg font-normal hover:text-white flex' href={'/'}>For Developers</Link>
          </div>
        </div>
        <div className="flex md:items-center md:justify-between mt-1 md:mt-9 flex-wrap flex-col md:flex-row">
          <div className="text-white font-poppins text-sm lg:text-lg font-normal mt-8 md:mt-0 order-2 md:order-1 max-md:text-center">Tracklution Oy 2025. All rights reserved.</div>
          <div className="flex lg:items-center gap-1 lg:gap-5 flex-col md:flex-row items-start order-1 md:order-2">
            <Link className='text-white font-poppins text-sm lg:text-lg font-normal hover:text-white flex w-fit' href={'/'}>Terms & Conditions</Link>
            <Link className='text-white font-poppins text-sm lg:text-lg font-normal hover:text-white flex w-fit' href={'/'}>DPA</Link>
            <Link className='text-white font-poppins text-sm lg:text-lg font-normal hover:text-white flex w-fit' href={'/'}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer