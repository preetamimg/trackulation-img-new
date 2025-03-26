import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <>
      <div className="px-5 sm:px-10 md:px-20 pb-8  lg:py-24">
        <div className="text-lg lg:text-[3rem] lg:!leading-[3.5rem] font-barlow font-bold text-theme3 lg:text-center max-w-[54.5rem] mx-auto mb-3 lg:mb-4">Websites using Tracklution for Facebook Ads track 34.2% more conversions</div>
        <div className="text-xs lg:text-lg font-poppins font-normal text-theme3 lg:text-center">Adblockers, cookie deprecation, iOS updates, and artificial conversion modeling in ad platforms can reduce data accuracy to as low as 40%. Tracklution&#39;s server-side tracking connector for Meta ensures 100% accurate, real-time data delivery to Meta and other ad platforms. This guarantees top-notch attribution, even in a post-cookie tracking era.</div>
        <div className="mt-6 lg:mt-10">
          <table className='w-full'>
            <thead>
              <tr>
                <th className='max-w-[9.625rem] lg:max-w-[35.3125rem] text-xs lg:text-2xl font-barlow font-bold text-theme3 text-left py-3 lg:py-6 px-2'>Features</th>
                <th className='text-xs lg:text-2xl font-barlow font-bold text-theme3 py-3 lg:py-6 px-2'>Traditional pixel <br /> based tracking</th>
                <th className='text-xs lg:text-2xl font-barlow font-bold text-theme1 py-3 lg:py-6 px-2'>Server-side tracking <br /> with Tracklution</th>
              </tr>
            </thead>
            <tbody>
              {
                [
                  "98%data accuracy",
                  "Tracking server-side (Meta Conversion API, Google Ads API, etc.)",
                  "Collects 1st party data and utilizes 1st party cookies",
                  "Bypasses iOS 14.5+ tracking preventions, ad blockers and other browser-side tracking restrictions",
                  "Compatible with Shopify’s upcoming conversion tracking updates (checkout extensibility, headless, upcoming tracking changes)",
                  "Improves site loading speed, user experience and SEO as tracking is handled server-side",
                  "Accurate data only, no artificial conversion modelling"
                ]?.map((item, index)=> (
                  <tr key={`feature-${index}`}>
                    <td className=' max-w-[9.625rem] lg:max-w-[35.3125rem] text-[0.625rem] lg:text-xl text-theme3 font-medium font-poppins py-3 lg:py-6 px-2 border-b border-theme29'>
                      <div className="max-w-[9.625rem] lg:max-w-[35.3125rem]">{item}</div>
                    </td>
                    <td className='py-3 lg:py-6 px-2 border-b border-theme29 text-center'>
                      <div className="flex justify-center">
                        <Image
                          width={40}
                          height={40}
                          loading="lazy"
                          quality={90}
                          alt="logo"
                          src={"/img/check_box.png"}
                          className='size-4 lg:size-10 object-contain'
                        ></Image>
                      </div>
                    </td>
                    <td className='py-3 lg:py-6 px-2 border-b border-theme29 text-center'>
                      <div className="flex justify-center">
                        <Image
                          width={40}
                          height={40}
                          loading="lazy"
                          quality={90}
                          alt="logo"
                          src={"/img/disabled_by_default.png"}
                          className='size-4 lg:size-10 object-contain'
                        ></Image>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Features