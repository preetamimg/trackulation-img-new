import Image from 'next/image'
import React from 'react'

const ResultFactor = () => {
  return (
    <div className="py-7 lg:my-20">
      <div className="mx-auto px-5 sm:px-10 md:px-20 mb-8">
        <div className="mb-7 lg:mb-12 font-barlow text-theme3 font-bold text-3xl lg:text-[3rem] text-center lg:leading-[3.625rem]">You’ll 2x your results with Factors. Here’s how.</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {
            [1,2,3]?.map(item => (
              <div key={`result-${item}`}>
                <div className="bg-theme32 p-8">
                  <div className="inline-flex items-center justify-center gap-2.5 font-barlow text-sm font-medium text-theme3 bg-white p-3 rounded-lg">
                    <Image
                      width={20}
                      height={20}
                      loading="lazy"
                      quality={90}
                      alt="logo"
                      src={"/img/targetIcon.png"}
                    ></Image>
                    Intent Capture
                  </div>
                  <div className="text-2xl text-theme3 font-barlow font-bold mt-[1.0625rem]">Capture intent signals <br className='hidden lg:block'/> in one place</div>
                  <ul>
                    <li className='flex text-sm font-normal text-theme3 font-poppins gap-3 mt-5'>
                      <Image
                        width={20}
                        height={20}
                        loading="lazy"
                        quality={90}
                        alt="logo"
                        src={"/img/verified.png"}
                        className='size-[1.125rem] object-contain'
                      ></Image>
                      Identify up to 64% of your website traffic with IP lookup
                    </li>
                    <li className='flex text-sm font-normal text-theme3 font-poppins gap-3 mt-5'>
                      <Image
                        width={20}
                        height={20}
                        loading="lazy"
                        quality={90}
                        alt="logo"
                        src={"/img/verified.png"}
                        className='size-[1.125rem] object-contain'
                      ></Image>
                      Capture intent signals from website, CRM, MAP, LinkedIn & G2
                    </li>
                    <li className='flex text-sm font-normal text-theme3 font-poppins gap-3 mt-5'>
                      <Image
                        width={20}
                        height={20}
                        loading="lazy"
                        quality={90}
                        alt="logo"
                        src={"/img/verified.png"}
                        className='size-[1.125rem] object-contain'
                      ></Image>
                      Import intent data from Gartner, TrustRadius & more 
                    </li>
                  </ul>
                </div>
              </div>
              
            ))
          }
        </div>
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
    </div>
  )
}

export default ResultFactor