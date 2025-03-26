import React from 'react'
import Hero from './components/Hero'
import Setup from '@/app/_components/Setup'
import Cta from '../plans/components/Cta'
import PixelSetup from './components/PixelSetup'
import PlansComp from '../plans/components/PlansComp'
import Testimonials from '../plans/components/Testimonials'
import InstallTrackulation from './components/InstallTrackulation'
import Faq from '../home/components/Faq'
import TrackingSetup from './components/TrackingSetup'

const Marketers = () => {
  return (
    <>
      <Hero/>
      <Setup
        title="Bad news: Traditional tracking pixels are losing their grip"
        description='Majority of browsers are blocking third-party cookies by the end of 2024. All marketers need to look for alternatives to be able to track and optimize their digital advertising also going forward.'
        img="/img/setup1.png"
        background='#F2FCFF'
      />
      <Setup
        title="Good News: It can be fixed with a proper tracking setup"
        description="Trackling the weakening effect of third-party cookies has usually meant a lengthy and costly project of setting up serer-side tracking as a custom solution."
        img="/img/setup2.png"
        background='#ffffff'
        reverse={true}
      />
      <Setup
        title="...And that proper tracking setup doesn’t have to be difficult to set up!"
        description='Trackution enables you to use first-party cookies, server-side tracking and conversion APIs of multiple ad platforms - with a simple 5-minutes installation to your website.'
        img="/img/setup3.png"
        background='#F2FCFF'
      />
      <div className="bg-theme15"></div>
      <Cta/>
      <PixelSetup/>
      <PlansComp hasTitle={true}/>
      <Testimonials/>
      <InstallTrackulation/>
      <Faq/>
      <Cta title='Start using Tracklution today!'/>
      <TrackingSetup/>
    </>
  )
}

export default Marketers