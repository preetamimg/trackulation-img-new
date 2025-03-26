import React from 'react'

const Cta = () => {
  return (
    <>
      <div className="px-5 sm:px-10 md:px-20 py-5  lg:py-20 text-white text-center bg-theme30">
        <div className="text-lg lg:text-[3rem] lg:leading-[3.5rem] font-semibold lg:font-bold font-barlow">Get more from your ad spend</div>
        <div className="text-sm lg:text-lg font-poppins font-normal max-w-[64.75rem] mt-1.5 lg:mt-4 mb-6 lg:mb-9 mx-auto">Better data helps Meta’s algorithms learn faster and optimize better - that means lower costs per conversion and better ad performance for you.</div>
        <button className="text-xs lg:text-2xl font-semibold font-poppins bg-theme1 h-10 lg:h-20 flex items-center justify-center rounded lg:rounded-xl px-12 lg:px-32 mx-auto">Get Tracklution Now</button>
        <div className="text-xs lg:text-lg font-poppins font-normal mt-2 lg:mt-4">Free 30-day trial | No credit card needed</div>
        <div className="text-xs lg:text-xl font-poppins font-bold mt-3 lg:mt-9">Request a demo</div>
      </div>
    </>
  )
}

export default Cta