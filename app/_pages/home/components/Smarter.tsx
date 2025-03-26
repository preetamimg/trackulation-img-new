import Image from 'next/image'
import React from 'react'

const Smarter = () => {
  return (
    <>
      <div className="my-7 lg:my-20">
        <div className="mx-auto px-5 sm:px-10 md:px-20">
          <div className="text-center text-2xl lg:text-[3rem] font-bold text-theme3 lg:leading-[3.5625rem] font-barlow">Join 1,000+ companies that <br className='hidden lg:block'/>track smarter with Tracklution</div>
          <div className="text-center text-sm lg:text-lg font-normal text-theme3 font-poppins mt-3 lg:mt-6 max-w-[63.5625rem] mx-auto">We&#39;re solving tracking challenges across diverse industries and company sizes. Whether you&#39;re a small business, a large corporation or an agency, we offer tailored solutions to support your success at every stage of growth.</div>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-6">

            <div  className="flex flex-col items-center justify-center">
              <div className="size-16 sm:size-[5.25rem] rounded-xl flex items-center justify-center bg-theme12/10">
                <Image
                  width={40}
                  height={40}
                  loading="lazy"
                  quality={90}
                  alt="logo"
                  src={"/img/conversion_path.png"}
                  className='h-8 sm:h-10 object-contain'
                ></Image>
              </div>
              <div className="text-6xl sm:text-8xl font-extrabold text-theme12 font-barlow mt-3 sm:mt-10 text-center">+34.2%</div>
              <div className="text-sm lg:text-lg text-center mt-3 sm:mt-10 font-semibold font-poppins text-theme3">Additional conversions reported with <br />
              Tracklution on average.</div>
            </div>
            <div  className="flex flex-col items-center justify-center">
              <div className="size-16 sm:size-[5.25rem] rounded-xl flex items-center justify-center bg-theme12/10">
                <Image
                  width={40}
                  height={40}
                  loading="lazy"
                  quality={90}
                  alt="logo"
                  src={"/img/date_range.png"}
                  className='h-8 sm:h-10 object-contain'
                ></Image>
              </div>
              <div className="text-6xl sm:text-8xl font-extrabold text-theme12 font-barlow mt-3 sm:mt-10 text-center">70M+</div>
              <div className="text-sm lg:text-lg text-center mt-3 sm:mt-10 font-semibold font-poppins text-theme3">Events processed <br />
              every day</div>
            </div>
            <div  className="flex flex-col items-center justify-center">
              <div className="size-16 sm:size-[5.25rem] rounded-xl flex items-center justify-center bg-theme12/10">
                <Image
                  width={40}
                  height={40}
                  loading="lazy"
                  quality={90}
                  alt="logo"
                  src={"/img/call_missed_outgoing.png"}
                  className='h-8 sm:h-10 object-contain'
                ></Image>
              </div>
              <div className="text-6xl sm:text-8xl font-extrabold text-theme12 font-barlow mt-3 sm:mt-10 text-center">10B+$</div>
              <div className="text-sm lg:text-lg text-center mt-3 sm:mt-10 font-semibold font-poppins text-theme3">Total reported enhanced <br />
              conversions</div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Smarter