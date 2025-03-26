import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div className="px-5 sm:px-10 md:px-20 py-8  lg:py-24">
      <div className="text-lg lg:text-[3rem] lg:leading-[3.5rem] mb-6 mx-auto max-w-[64.8125rem] text-theme3 font-bold font-barlow lg:text-center">How does Tracklution’s server-side tracking work for Facebook ads?</div>
      <div className="text-sm lg:text-lg font-poppins font-normal text-theme3 mb-3 lg:mb-6">Tracklution sends your conversion data directly to Facebook through Meta&#39;s Conversion API, without having to rely on traditional client-side tracking. When someone converts on your website - whether through standard events or custom events - Tracklution securely processes that data server-side and delivers it straight to Facebook&#39;s Events Manager through their API.</div>
      <div className="text-sm lg:text-lg font-poppins font-normal text-theme3 mb-3 lg:mb-6">This pure server-to-server approach means you get reliable conversion tracking that&#39;s immune to iOS 14 limitations, ad blockers, and the deprecation of third-party cookies. Whether you&#39;re collecting conversion data from eCommerce, such as Shopify purchases, form submissions, messaging interactions, pageviews, or offline conversions from your CRM, the data flows directly to Facebook for better ad optimization and attribution.</div>
      <div className="text-sm lg:text-lg font-poppins font-normal text-theme3 mb-3 lg:mb-6">No separate Meta Pixel installations, no custom JavaScript, no new data layer configurations nor Google Tag Manager server container needed – just connect your website and Facebook ad account to Tracklution and your events start flowing. Our solution automatically handles event IDs, deduplication, test events, and data sources while ensuring first-party data collection for privacy compliance. You can even track user data from multiple data sources and combine online conversions with offline customer data for complete visibility in your Facebook Ads campaigns.</div>
      <Image
        width={666}
        height={692}
        loading="lazy"
        quality={90}
        alt="logo"
        src={"/img/work.png"}
        className='max-w-80 lg:max-w-[41.625rem] w-full h-auto object-contain mt-6 lg:mx-auto'
      ></Image>
    </div>
  )
}

export default Work