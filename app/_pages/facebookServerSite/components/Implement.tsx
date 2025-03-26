import Image from 'next/image'
import React from 'react'

const Implement = () => {
  return (
    <>
      <div className="px-5 sm:px-10 md:px-20 pb-8  lg:py-24">
        <div className="text-lg lg:text-[3rem] lg:leading-[3.5rem] font-bold font-barlow lg:text-center max-w-[52.375rem] mx-auto text-theme3">How to implement accurate conversion for Facebook in 15 minutes</div>
        <div className="text-xs lg:text-lg font-poppins font-normal text-theme3 lg:text-center mt-3 lg:mt-4">Most people take longer choosing what to watch on Netflix than setting up Tracklution for Meta ads.</div>
        <div className="text-sm lg:text-[2rem] font-barlow font-semibold lg:font-bold text-theme3 mt-6 lg:mt-16">Step1</div>
        <div className="pl-7 lg:pl-[4.375rem] ml-3.5 lg:ml-10 border-theme1 border-l pt-2 lg:pt-12 pb-6 lg:pb-10">
          <div className="text-sm lg:text-2xl font-bold font-barlow text-theme3">Enable first-party data</div>
          <div className="text-xs lg:text-lg font-poppins text-theme3 font-normal mb-3 lg:mb-6">4 Minutes</div>
          <div className="text-xs lg:text-lg font-poppins text-theme3 font-normal">Unlike third-party scripts and cookies, Tracklution gathers first-party data, bypassing iOS restrictions, ad blockers, and other tracking limitations. Our users typically see their conversion reporting go from 40-70% to 100% accuracy.</div>
          <div className="text-sm lg:text-2xl font-bold font-barlow text-theme3 mt-4 lg:mt-6 hidden lg:block">Where do you want to install Tracklution?</div>
          <div className="relative mt-4 max-w-[42.75rem]">
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
        <div className="text-sm lg:text-[2rem] font-barlow font-semibold lg:font-bold text-theme3">Step2</div>
        <div className="pl-7 lg:pl-[4.375rem] ml-3.5 lg:ml-10 border-theme1 border-l pt-2 lg:pt-12 pb-6 lg:pb-10">
          <div className="text-sm lg:text-2xl font-bold font-barlow text-theme3">Install your Tracklution pixel</div>
          <div className="text-xs lg:text-lg font-poppins text-theme3 font-normal mb-3 lg:mb-6">4 Minutes</div>
          <div className="text-xs lg:text-lg font-poppins text-theme3 font-normal">Install Tracklution pixels just as you would install any tracking pixel. You can also deliver conversions to Tracklution via webhook if that&#39;s your jam. We parse and hash the data and deliver it to ad platforms. Too easy.</div>
        </div>
        <div className="text-sm lg:text-[2rem] font-barlow font-semibold lg:font-bold text-theme3">Step3</div>
        <div className="pl-7 lg:pl-[4.375rem] ml-3.5 lg:ml-10 border-theme1 border-l pt-2 lg:pt-12 pb-6 lg:pb-10">
          <div className="text-sm lg:text-2xl font-bold font-barlow text-theme3">Connect your ad platforms</div>
          <div className="text-xs lg:text-lg font-poppins text-theme3 font-normal mb-3 lg:mb-6">4 Minutes</div>
          <div className="text-xs lg:text-lg font-poppins text-theme3 font-normal">Next you want to ensure your accurate conversion data is sent back to your marketing algorithms. With Tracklution, you get the benefit of an optimal tracking setup and seamless Conversion API integrations with multiple ad platforms, all without needing to write a single line of code.</div>
          <div className="text-xs lg:text-lg font-poppins text-theme3 font-normal mt-4">We’re not your regular attribution platform – we&#39;re a cool attribution platform. We pass the accurate data back to ad platforms to let their marketing algorithms do their magic for you.</div>
        </div>
        <div className="text-[2rem] font-barlow font-bold text-theme3">
          <Image
            width={36}
            height={36}
            loading="lazy"
            quality={90}
            alt="logo"
            src={"/img/finish.png"}
            className='size-7 lg:size-9 object-contain mt-2 ml-1 lg:ml-5'
          ></Image>
        </div>
        <div className="pl-7 lg:pl-[4.375rem] ml-3.5 lg:ml-10">
          <div className="text-sm lg:text-2xl font-bold font-barlow text-theme3 -mt-8">All done! Welcome to the new standard of conversion tracking.</div>
        </div>
      </div>
    </>
  )
}

export default Implement