import SetupOption from '@/app/_components/SetupOption'
import React from 'react'

const TrackingSetup = () => {
  return (
    <>
      <div className="px-5 sm:px-10 md:px-20 py-8 lg:py-20 text-theme3">
        <div className="text-lg lg:text-[2.5rem] font-bold font-barlow">Ad Tracking Setup - <span className='text-theme1'>3 Options</span></div>
        <div className="text-sm lg:text-lg font-normal font-poppins mt-3 lg:mt-4">You have 3 options when setting up ads tracking on your webpage.</div>
        <SetupOption
          number='Option 1'
          title='Easy and Ineffective'
          description='This option worked before 2021 because ad platforms like Facebook and Google could collect all data they wanted from the browser. That is not the case anymore, so pixel-only setup is ineffective.'
          img='/img/step1.png'
          background='#F2FCFF'
        />
        <SetupOption
          number='Option 2'
          title='Difficult and Effective'
          description='For effective tracking setup you need to deliver all tracking data to ad platforms also via their Conversion APIs. This is the most important but also the difficult, time-consuming part.'
          img='/img/step2.png'
          background='#F2FCFF'
          reverse={true}
        />
        <SetupOption
          number='Option 3'
          title='Easy and Effective'
          description='Use Tracklution and we take care of the difficult, time-consuming part. You can use a simple pixel-only setup and still get all the benefits of having server-side tracking too. Install Tracklution once and it solves tracking for multiple ad platforms at once.'
          img='/img/step3.png'
          background='#F2FCFF'
        />
      </div>
    </>
  )
}

export default TrackingSetup