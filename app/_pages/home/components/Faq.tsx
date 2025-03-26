import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface PageProps {
  isHomepage? : boolean
}

const Faq : React.FC<PageProps> = ({isHomepage})=> {
  return (
    <>
    <section>
        <div className='mx-auto px-5 sm:px-10 lg:px-20 pt-8 sm:pt-16 pb-8'>
          {
            isHomepage ? 
            <p className='text-base text-theme1 leading-[1.5rem] font-semibold font-barlow'>Support</p>
            : ''
          }
          <p className={`font-semibold text-xl lg:text-4xl lg:leading-[2.75rem] font-barlow ${isHomepage ? "text-theme14" : "text-theme3 !font-bold lg:text-[2.5rem]"}`}>Frequently asked questions</p>
          <p className='lg:w-2/3 w-full pt-3 lg:leading-[1.875rem] text-sm leading-[1.125rem] lg:text-xl text-theme9 font-poppins max-lg:m-0'>Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please <span className='lg:text-[1.25rem] font-normal underline'>
            <Link href="" className='text-theme9 hover:text-theme9'>chat to our friendly team.</Link>
            </span></p>

            <div className="grid lg:grid-cols-2 gap-8 mt-4 lg:mt-12 items-center">
              <div className='gap-y-4 lg:gap-y-10 flex flex-col order-2 lg:order-1'>
                <div className='flex  items-start gap-2.5'>
                <div className='size-8 lg:size-[3rem] flex-shrink-0 rounded-full bg-theme24 flex justify-center p-[0.375rem]  items-center'>
                  <div className='*:size-[1.5rem] p-1 *:object-contain size-full flex justify-center items-center rounded-full bg-theme1/20'>
                  <Image width={1000} height={100} loading='lazy' quality={90} src="/img/heart.png" alt="arrow-right" >
                  </Image>
                  </div>

                </div>
                <div className='lg:mt-2'>
                  <p className={`${isHomepage ? "" : "text-theme3"} text-base lg:text-xl font-semibold leading-[1.25rem] font-barlow`}>Is there a free trial available?</p>
                  <p className='text-sm lg:text-base font-normal text-theme9 lg:pt-2 font-poppins max-lg:mt-1'>Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.</p>
                </div>
                </div>
                
                <div className='flex items-start gap-2.5'>
                <div className='size-8 lg:size-[3rem] flex-shrink-0 rounded-full bg-theme24 flex justify-center p-[0.375rem]  items-center'>
                  <div className='*:size-[1.5rem] p-1 *:object-contain size-full flex justify-center items-center rounded-full bg-theme1/20'>
                  <Image width={1000} height={100} loading='lazy' quality={90} src="/img/switch.png" alt="arrow-right" >
                  </Image>
                  </div>

                </div>
                <div className='lg:mt-2'>
                  <p className={`${isHomepage ? "" : "text-theme3"} text-base lg:text-xl font-semibold leading-[1.25rem] font-barlow`}>Can I change my plan later?</p>
                  <p className='text-sm lg:text-base font-normal text-theme9 lg:pt-2 font-poppins max-lg:mt-1'>Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.</p>
                </div>
                </div>
                
                <div className='flex items-start gap-2.5'>
                <div className='size-8 lg:size-[3rem] flex-shrink-0 rounded-full bg-theme24 flex justify-center p-[0.375rem]  items-center'>
                  <div className='*:size-[1.5rem] p-1 *:object-contain size-full flex justify-center items-center rounded-full bg-theme1/20'>
                  <Image width={1000} height={100} loading='lazy' quality={90} src="/img/circle.png" alt="arrow-right" >
                  </Image>
                  </div>

                </div>
                <div className='lg:mt-2'>
                  <p className={`${isHomepage ? "" : "text-theme3"} text-base lg:text-xl font-semibold leading-[1.25rem] font-barlow`}>What is your cancellation policy?</p>
                  <p className='text-sm lg:text-base font-normal text-theme9 lg:pt-2 font-poppins max-lg:mt-1'>We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.</p>
                </div>
                </div>
                
                <div className='flex items-start gap-2.5'>
                <div className='size-8 lg:size-[3rem] flex-shrink-0 rounded-full bg-theme24 flex justify-center p-[0.375rem]  items-center'>
                  <div className='*:size-[1.5rem] p-1 *:object-contain size-full flex justify-center items-center rounded-full bg-theme1/20'>
                  <Image width={1000} height={100} loading='lazy' quality={90} src="/img/file-05.png" alt="arrow-right" >
                  </Image>
                  </div>

                </div>
                <div className='lg:mt-2'>
                  <p className={`${isHomepage ? "" : "text-theme3"} text-base lg:text-xl font-semibold leading-[1.25rem] font-barlow`}>Can other info be added to an invoice?</p>
                  <p className='text-sm lg:text-base font-normal text-theme9 lg:pt-2 font-poppins max-lg:mt-1'>At the moment, the only way to add additional information to invoices is to add the information to the workspace&#39;s name.</p>
                </div>
                </div>

              </div>


              <div className='order-1 lg:order-2 hidden lg:flex items-end justify-end'>
              <div className={`${isHomepage ? 'w-full' : 'w-full lg:w-4/5'}   *:w-full *:h-full`}>
              <Image width={1000} height={100} loading='lazy' quality={90} src={isHomepage ? "/img/faq.png" : "/img/faq1.png"} alt="arrow-right" >
              </Image>
            </div>
              </div>

            </div>

        </div>
      </section>

    </>
  )
    
}

export default Faq