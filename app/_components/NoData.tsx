import React from 'react'
import Image from 'next/image'

function NoData() {
  return (
    <>
      <div className='w-full py-20 flex justify-center flex-col items-center'>
        <Image width={76} height={76} loading='lazy' quality={90} alt='logo' src={"/img/notificationIcon.png"}></Image>
        <div className='p-[1.875rem] text-center text-sm text-theme9'>
          <div>Nothing to show here.</div>
          <div>Any new updates you get will show up here.</div>
        </div>
      </div>
    </>
  )
}

export default NoData