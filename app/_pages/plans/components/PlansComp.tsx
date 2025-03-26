"use client"
import Loader from '@/app/_components/Loader'
import NoData from '@/app/_components/NoData'
import useGlobal from '@/app/_hooks/useGlobal'
import Image from 'next/image'
import React from 'react'
import { Toggle } from 'rsuite'

interface PageProps {
  hasTitle? : true
}

const PlansComp : React.FC<PageProps> = ({hasTitle}) => {
  const {userPlans, planLoading} = useGlobal({isFetchPlans : true})

  return (
    <>
      <div className={`w-full mx-auto px-5 sm:px-10 md:px-20 bg-no-repeat bg-contain ${!planLoading ? 'lg:bg-[url(/img/wave_bg.png)]' : ''}`} style={{backgroundPosition : 'top 6.25rem left 0'}}>
        <div className={`flex pb-5 lg:pb-9 ${hasTitle ? 'justify-between max-lg:flex-col' : 'justify-center lg:justify-end'}`}>
          {
            hasTitle ? <>
            <div className="a">
              <div className="text-lg lg:text-[2.5rem] font-bold font-barlow lg:text-theme3 mb-3 lg:mb-5">Level Up Your Tracking Game</div>
              <div className="text-sm lg:text-lg font-poppins font-normal lg:leading-8 text-theme3 max-lg:mb-5">Better Tracking for better results and higher revenue. <br className='hidden lg:block'/> 
              Start using Tracklution Today!</div>
            </div>
            </> : ''
          }
          <div className="flex items-center !text-sm lg:!text-xl font-poppins gap-3.5">
            <div className="cursor-pointer">Monthly </div>
            <Toggle defaultChecked>
              <span className="!text-sm lg:!text-xl font-poppins ps-1 text-black">
                Yearly
              </span>
            </Toggle>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-5 lg:pt-9 items-center">
          {
            !planLoading ? userPlans?.length ? userPlans?.map(item => (
              <div key={item?.planName} className="bg-white px-4 lg:px-8 py-5 lg:py-14 rounded-xl shadow-[0_1px_4px_rgba(0,0,0,0.15)] lg:shadow-[0_4px_4px_rgba(0,0,0,0.15)] relative [&_.buyBtn]:first:bg-white [&_.buyBtn]:first:text-black [&_.buyBtn]:first:border [&_.buyBtn]:first:border-theme27 [&_.buyBtn]:last:bg-theme1">
                {
                  typeof item?.imageUrl === 'string' ? 
                      <Image
                        src={item?.imageUrl}
                        alt='icon'
                        width={70}
                        height={70}
                        className='size-[4.375rem] object-contain absolute top-5 right-5 hidden lg:flex'
                      />
                  : ''
                }
                {
                  item?.popular ? 
                    <div className="text-theme34 font-medium font-barlow text-xs lg:text-sm bg-theme35 h-8 flex items-center justify-center px-3 w-fit rounded-md mb-3 lg:mb-6">POPULAR</div>
                  : ''
                }
                <div className="text-base lg:text-2xl font-semibold font-barlow text-theme1 mb-1.5 lg:mb-5">{item?.planName}</div>
                <div className="text-base lg:text-2xl font-poppins text-black font-medium mb-3 lg:mb-6">{item?.monthlyPrice} <span className='text-sm lg:text-lg font-normal text-theme3'>$/mo excl.</span>VAT</div>
                <div className="text-xs lg:text-sm font-normal text-theme3 font-poppins mb-4 lg:mb-8">Save up to {item?.discount}% with a yearly subscription!</div>
                <ul>
                    <li className='flex items-center gap-3.5 text-xs font-normal font-poppins mb-3 lg:mb-4'>
                      <Image
                        src={"/img/blue_check.png"}
                        alt='icon'
                        width={24}
                        height={24}
                      />
                      Choose {item?.userAccessLimit} Connection
                    </li>
                    <li className='flex items-center gap-3.5 text-xs font-normal font-poppins mb-3 lg:mb-4'>
                      <Image
                        src={"/img/blue_check.png"}
                        alt='icon'
                        width={24}
                        height={24}
                      />
                      {item?.websiteAccessLimit} Website{item?.websiteAccessLimit?.length > 1 ? 's' : ''}, {item?.userAccessLimit} User{item?.userAccessLimit?.length > 1 ? 's' : ''}
                    </li>
                    {
                      item?.conversions ? 
                        <li className='flex items-center gap-3.5 text-xs font-normal font-poppins mb-3 lg:mb-4'>
                          <Image
                            src={"/img/blue_check.png"}
                            alt='icon'
                            width={24}
                            height={24}
                          />
                          Micro Conversions
                        </li>
                      : ''
                    }
                  {
                    item?.addons?.map((item)=> (
                      <li key={`li-${item?.id}`} className='flex items-center gap-3.5 text-xs font-normal font-poppins mb-3 lg:mb-4'>
                        <Image
                          src={"/img/blue_check.png"}
                          alt='icon'
                          width={24}
                          height={24}
                        />
                        {item?.value}
                      </li>
                    ))
                  }
                </ul>
                <button className='text-xs lg:text-sm font-poppins font-medium text-white h-9 lg:h-[3.125rem] bg-theme36] rounded lg:rounded-lg w-full mt-3 lg:mt-7 buyBtn'>Start Now</button>
                <div className="text-xs text-center font-poppins text-theme3 font-normal mt-2.5">Free 30-day trial   No credit card required</div>
              </div>
            )) : <div className="col-span-3"><NoData/></div> : <div className="col-span-3"><Loader/></div>
          }
        </div>
        <div className="max-lg:mt-6 mt-8 text-base lg:text-2xl font-barlow font-semibold mb-4 lg:mb-6">Additional Features</div>
        <div className="text-sm lg:text-xl font-normal font-poppins flex items-center max-sm:justify-between text-theme3 mb-3 lg:mb-4">
          <span className='flex w-3/5 sm:w-[23.125rem]'>Extra User</span>
          <span>23₹ /month</span>
        </div>
        <div className="text-sm lg:text-xl font-normal font-poppins flex items-center max-sm:justify-between text-theme3 mb-3 lg:mb-4">
          <span className='flex w-3/5 sm:w-[23.125rem]'>Extra Connector  </span>
          <span>23₹ /month</span>
        </div>
        <div className="text-sm lg:text-xl font-normal font-poppins flex items-center max-sm:justify-between text-theme3 mb-3 lg:mb-4">
          <span className='flex w-3/5 sm:w-[23.125rem]'>
            <span>Extra Tracking Container <span className='lg:text-lg text-theme3/45'>(Website)</span></span>
          </span>
          <span>23₹ /month</span>
        </div>
      </div>
    </>
  )
}

export default PlansComp