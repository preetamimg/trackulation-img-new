import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Banner = () => {
  return (
    <>
      <div className="bg-theme23 h-full w-full bg-[url(/img/login-bg.png)] bg-no-repeat bg-[top_0_left_60%] lg:pl-8 xl:pl-20 hidden lg:flex flex-col justify-center" style={{backgroundSize : '12.375rem'}}>
          <Link href={'/'}>
            <Image width={184} height={41} src={"/img/logo_white.png"} className="h-10 w-44 object-contain" alt="refresh icon"/>
          </Link>
          <div className="w-[26.875rem]">
            <Image width={48} height={48} src={"/img/loginStar.png"} className="h-12 w-12 object-contain ml-auto" alt="refresh icon"/>
          </div>
          <div className="text-white text-[3rem] font-bold w-[26.875rem]">Start Your Smart <br />
          Tracking Journey!</div>
          <Image width={48} height={48} src={"/img/loginStar2.png"} className="h-12 w-12 object-contain" alt="refresh icon"/>
          <Image width={450} height={187} src={"/img/loginIcons.png"} className="h-[11.6875rem] w-auto object-contain mr-auto mt-16 -ml-3" alt="refresh icon"/>
      </div>
    </>
  )
}

export default Banner