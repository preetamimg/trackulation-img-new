  import { StaticImport } from 'next/dist/shared/lib/get-img-props'
  import Image from 'next/image'
  import React from 'react'

  interface PageProps {
    background? : string
    title? : string
    description? : string
    img? : string | StaticImport | undefined
    reverse? : boolean
  }

  const Setup : React.FC<PageProps> = ({title, description, img, reverse, background}) => {
    return (
      <div className={`${reverse ? '' : 'py-8'} lg:py-20 px-5 sm:px-10 md:px-20 max-lg:bg-white bg-[${background}]`}>
        <div className="grid grid-cols-12 lg:gap-16 gap-3">
          <div className={`col-span-12 lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
            <div className="text-lg lg:text-[3rem] font-barlow font-bold lg:leading-[3.5rem] mb-4 lg:text-theme3 lg:mt-14">{title}</div>
            <div className="text-theme3 text-sm lg:text-lg font-normal font-poppins ">{description}</div>
          </div>
          <div className={`col-span-12 lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
          {img && (
            <Image
              width={1423}
              height={619}
              loading="lazy"
              quality={90}
              alt="logo"
              src={img}
              className="w-full h-auto object-contain max-lg:max-w-[13.75rem] mx-auto flex"
            />
          )}
          </div>
        </div>
      </div>
    )
  }

  export default Setup