import React from 'react'
import Hero from './components/Hero'
import TrustedPartners from './components/Trusted'
import ResultFactor from './components/ResultFactor'
import Tracking from './components/Tracking'
import Integrations from './components/Integrations'
import Smarter from './components/Smarter'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'
import Faq from './components/Faq'

const Home = () => {
  return (
    <>
      <Hero/>
      <TrustedPartners/>
      <ResultFactor/>
      <Tracking/>
      <Integrations/>
      <Smarter/>
      <Testimonials/>
      <Cta/>
      <Faq isHomepage={true}/>
    </>
  )
}

export default Home