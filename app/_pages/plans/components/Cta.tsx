import React from 'react'

interface PageProps {
  title? : string
}

const Cta : React.FC<PageProps> = ({title}) => {
  return (
    <div className='bg-theme33 py-5 lg:py-20 flex flex-col justify-center items-center px-5 text-center'>
      <div className="text-white text-lg lg:text-[2.5rem] font-barlow font-bold">{title ? title : 'Don’t Waste Your Ad Budgets'}</div>
      <button className='text-xs lg:text-xl text-white font-poppins font-semibold bg-theme1 h-10 lg:h-[4.375rem] px-7 lg:px-24 rounded lg:rounded-xl mb-2 lg:mb-4 mt-6 lg:mt-16'>Get Tracklution Now</button>
      <div className="text-xs lg:text-lg text-white font-poppins font-normal">Free 30-day trial   No credit card needed</div>
    </div>
  )
}

export default Cta