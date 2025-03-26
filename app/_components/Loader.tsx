import React from 'react'

const Loader = () => {
  return (
    <>
    <div className="flex items-center justify-center py-20">
        <div className='w-[7.625rem] h-[1.375rem] rounded-[1.25rem] text-theme1 border-2 border-solid relative before:absolute before:m-[0.125rem] before:inset-[0_100%_0_0] before:rounded-[inherit] before:bg-[currentColor] before:animate-loader-expand'></div> 
    </div>
    </>
  )
}

export default Loader