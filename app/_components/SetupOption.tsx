import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

interface PageProps {
  background? : string
  title? : string
  description? : string
  img? : string | StaticImport | undefined
  reverse? : boolean
  number : string
}

const SetupOption : React.FC<PageProps> = ({title, description, img, reverse, number}) => {
  return (
    <div className={`lg:py-20 ${!reverse ? `` : ''}`}>
      <div className="grid grid-cols-12 lg:gap-16">
        <div className={`col-span-12 lg:col-span-6 mt-6 lg:mt-0 ${reverse ? 'lg:order-2' : ''}`}>
          <div className="text-base lg:text-[2rem] font-bold font-barlow mb-3 lg:mb-4">{number}</div>
          <div className={`max-lg:bg-none lg:bg-theme15 lg:pt-4 lg:pb-28 max-lg:pl-11 ${reverse ? 'lg:shadow-[-300px_0px_0px_#F2FCFF_,_600px_0px_0px_0px_#F2FCFF]' : 'lg:shadow-[-600px_0px_0px_#F2FCFF_,_300px_0px_0px_0px_#F2FCFF]'}`}>
            <div className="text-base lg:text-2xl font-barlow font-bold pb-3 lg:pb-4 text-theme3">{title}</div>
            <div className="text-theme3 text-sm lg:text-lg font-normal font-poppins ">{description}</div>
          </div>
        </div>
        <div className={`col-span-12 lg:col-span-6 relative z-10 max-lg:mt-4 ${reverse ? 'lg:order-1' : ''}`}>
          {
            img && 
            <Image
              width={1423}
              height={619}
              loading="lazy"
              quality={90}
              alt="logo"
              src={img}
              className='w-full h-auto object-contain max-lg:max-w-[16.75rem] mx-auto flex'
            ></Image>
          }
        </div>
      </div>
    </div>
  )
}

export default SetupOption