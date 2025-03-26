import Image from 'next/image'
import React from 'react'

const compareData = [
  {
    title : 'Accuracy',
    trackulation : {
      icon : null,
      text : 'Up to 100%'
    },
    tracking : {
      icon : null,
      text : '40 - 70%'
    },
    server : {
      icon : null,
      text : 'Up to 100%'
    },
  },
  {
    title : 'Installation time',
    trackulation : {
      icon : '/img/check_box.png',
      text : '5 minutes'
    },
    tracking : {
      icon : '/img/check_box.png',
      text : '5-30 minutes'
    },
    server : {
      icon : '/img/yellow_info.png',
      text : 'Hundreds of hours'
    },
  },
  {
    title : 'Bypassing Tracking Limitations',
    trackulation : {
      icon : '/img/check_box.png',
      text : 'Yes'
    },
    tracking : {
      icon : '/img/yellow_check_box.png',
      text : 'No'
    },
    server : {
      icon : '/img/check_box.png',
      text : 'Yes'
    },
  },
  {
    title : 'Manages CAPI updates automatically',
    trackulation : {
      icon : '/img/check_box.png',
      text : 'Yes'
    },
    tracking : {
      icon : '/img/yellow_check_box.png',
      text : 'No'
    },
    server : {
      icon : '/img/yellow_check_box.png',
      text : 'No'
    },
  },
  {
    title : 'Track without managing your own servers',
    trackulation : {
      icon : '/img/check_box.png',
      text : 'Yes'
    },
    tracking : {
      icon : null,
      text : '-'
    },
    server : {
      icon : '/img/yellow_check_box.png',
      text : 'No'
    },
  },
  {
    title : 'Data Layer Setup',
    trackulation : {
      icon : '/img/check_box.png',
      text : 'Automatic'
    },
    tracking : {
      icon : '/img/yellow_check_box.png',
      text : 'Automatic or Manual'
    },
    server : {
      icon : '/img/yellow_check_box.png',
      text : 'Manual '
    },
  },
  {
    title : 'Shopify App',
    trackulation : {
      icon : '/img/check_box.png',
      text : 'Yes'
    },
    tracking : {
      icon : '/img/yellow_check_box.png',
      text : 'No'
    },
    server : {
      icon : '/img/yellow_check_box.png',
      text : 'No'
    },
  },
  {
    title : 'Cost',
    trackulation : {
      icon : null,
      text : 'Start at 79/m (First 30 days for free!)'
    },
    tracking : {
      icon : null,
      text : '-'
    },
    server : {
      icon : null,
      text : 'Start at 79/m + working hour'
    },
  },
]

const Compare = () => {
  return (
    <div className='px-5 sm:px-10 md:px-20 py-8  lg:py-24'>
      <div className="text-lg lg:text-[3rem] lg:!leading-[3.5rem] font-barlow font-bold text-theme3 lg:text-center max-w-[70.25rem] mx-auto mb-3 lg:mb-4">Compare tracking options for your business</div>
      <div className="text-xs lg:text-lg font-poppins font-normal text-theme3 lg:text-center max-w-[70.25rem] mx-auto">Forget tracking headaches and simplify your tracking with Tracklution’s server-side tracking solution. No more juggling multiple plugins, tweaking scripts, or dealing with unreliable tracking. We ensure your tracking runs smoothly around the clock, so you never miss another conversion</div>
      <div className="border border-theme38 rounded-[1.25rem] overflow-hidden mt-6 lg:mt-16 ">
        <div className="flex w-full">
          <div className="w-[30%] p-8 bg-theme15 hidden lg:block"></div>
          <div className="w-1/3 lg:w-1/5 p-3 lg:py-4 lg:px-14">
            <div className="text-sm lg:text-xl font-poppins font-semibold text-black max-lg:text-center ">Tracklution</div>
            <div className="flex items-center max-lg:justify-center gap-2 text-xs lg:text-base font-normal font-poppins text-theme3">
              Basic Setup
              <Image width={20} height={20} src={"/img/infoIcon.png"} className="size-3 lg:size-5 object-contain" alt="refresh icon"/>
            </div>
          </div>
          <div className="w-1/3 lg:w-[30%] p-3 lg:py-4 lg:px-14">
            <div className="text-sm lg:text-xl font-poppins font-semibold text-black max-lg:text-center">Tracking Pixels</div>
            <div className="flex items-center max-lg:justify-center gap-2 text-xs lg:text-base font-normal font-poppins text-theme3">
              Browser-Side
              <Image width={20} height={20} src={"/img/infoIcon.png"} className="size-3 lg:size-5 object-contain" alt="refresh icon"/>
            </div>
          </div>
          <div className="w-1/3 lg:w-1/5 p-3 lg:py-4 lg:px-14">
            <div className="text-sm lg:text-xl font-poppins font-semibold text-black max-lg:text-center">Server-Side GTM</div>
            <div className="flex items-center max-lg:justify-center gap-2 text-xs lg:text-base font-normal font-poppins text-theme3">
              Google-Cloud
              <Image width={20} height={20} src={"/img/infoIcon.png"} className="size-3 lg:size-5 object-contain" alt="refresh icon"/>
            </div>
          </div>
        </div>
        {
          compareData?.map(item => (
            <div key={item?.title} className="flex border-t border-dashed border-theme38 flex-wrap">
                <div className="w-full lg:w-[30%] p-3 lg:p-8 bg-theme15 text-xs lg:text-xl font-semibold font-poppins text-theme3 max-lg:text-center">
                  {item?.title}
                </div>
                <div className="w-1/3 lg:w-1/5 p-3 lg:py-4 lg:px-14">
                  <div className="flex items-center max-lg:justify-center gap-2 h-full text-xs lg:text-lg font-normal font-poppins text-black">
                    {
                      item?.trackulation.icon ? 
                      <Image width={20} height={20} src={item?.trackulation.icon} className="h-5 w-5 object-contain" alt="refresh icon"/>
                      : ''
                    }
                    {item?.trackulation?.text}
                  </div>
                </div>
                <div className="w-1/3 lg:w-[30%] p-3 lg:py-4 lg:px-14">
                  <div className="flex items-center max-lg:justify-center gap-2 h-full text-xs lg:text-lg font-normal font-poppins text-black">
                    {
                      item?.tracking.icon ? 
                      <Image width={20} height={20} src={item?.tracking.icon} className="h-5 w-5 object-contain" alt="refresh icon"/>
                      : ''
                    }
                    {item?.tracking?.text}
                  </div>
                </div>
                <div className="w-1/3 lg:w-1/5 p-3 lg:py-4 lg:px-14">
                  <div className="flex items-center max-lg:justify-center gap-2 h-full text-xs lg:text-lg font-normal font-poppins text-black">
                    {
                      item?.server.icon ? 
                      <Image width={20} height={20} src={item?.server.icon} className="h-5 w-5 object-contain" alt="refresh icon"/>
                      : ''
                    }
                    {item?.server?.text}
                  </div>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Compare