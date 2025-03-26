"use client"

import { codeString6, codeString7, codeString8, codeString9 } from '@/app/_constants/trackingCode';
import { useInstallationStore } from '@/app/_providers/TrackingInstallationProvider';
import Image from 'next/image'
import React, { useRef } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Step3 = () => {
    const {activeAccordian, setActiveAccordian} = useInstallationStore(state => state)
    const accordianThirdRef = useRef<HTMLDivElement>(null);
    const accordianFourthRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="mt-[4.5rem] grid grid-cols-12 gap-8">
        <div className="col-span-2">
          <div className="text-lg font-semibold text-theme14 mb-1 leading-7">Step 3</div>
          <div className="text-sm font-bold text-theme1">Webhook</div>
          <div className="text-sm font-normal text-theme1">(optional)</div>
        </div>
        <div className="col-span-10">
          <div className="bg-theme4 border border-theme6 rounded-[0.625rem] p-8 text-theme9 font-medium text-sm leading-5">
            <div className="mb-3.5">
              Webhook provides a seamless and efficient way to bring additional tracking data to Tracklution, such as offline conversions and enhancing conversion data. Whether it&#39;s obtaining insights from sources that may not be directly linked to the website or safeguarding sensitive information, you can import it from various external systems, including CRM, booking systems, billing systems, ERP, and calling systems.
            </div>
            <div className="border border-theme25 rounded-xl bg-theme26 p-4 mt-8">
              <div className="flex items-center gap-3 cursor-pointer"  onClick={()=> setActiveAccordian("acc3")}>
                <Image width={15} height={15} src={"/img/infoIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
                <div className="flex-1 text-sm font-semibold text-theme1">Registering events with Webhook</div>
                <Image width={15} height={15} src={"/img/dropdownIconBlue.png"} className={`h-[0.9375rem] w-[0.9375rem] object-contain transition-all ease-in-out duration-300 ${activeAccordian === "acc3" ? '' : 'rotate-180'}`}alt="refresh icon"/>
              </div>
              <div
                  ref={accordianThirdRef}
                  style={{
                    height: activeAccordian === "acc3" ? `${accordianThirdRef.current?.scrollHeight}px` : "0px",
                    opacity: activeAccordian === "acc3" ? 1 : 0,
                  }}
                  className="text-theme1 text-sm font-normal leading-5 px-7 transition-all ease-in-out duration-300 overflow-hidden">
                <div className="mb-3.5  mt-1">
                  Record events that happen outside of your website (“offline conversions”). These conversion events could be for example phone calls, purchases made in brick-and-mortar shops, bookings made in a booking system, validated leads in a CRM system, and so forth. This is also the way to go if you wish to send in Purchase events with profit margin data instead of pure revenue data.
                </div>
                <div className="mb-3 5">
                  Events sent via webhook can be matched to web sessions if matching data is available.
                </div>
                <div className="mb-3.5  font-semibold">
                    GET Example
                </div>
                <div className="[&_pre]:!rounded-lg [&_pre]:!text-[1.4rem] my-8">
                  <SyntaxHighlighter language="javascript" style={dracula}>
                    {codeString6}
                  </SyntaxHighlighter>
                </div>
                <div className="mb-3.5  font-semibold">
                POST Example
                </div>
                <div className="[&_pre]:!rounded-lg [&_pre]:!text-[1.4rem] my-8">
                  <SyntaxHighlighter language="javascript" style={dracula}>
                    {codeString7}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
            <div className="border border-theme25 rounded-xl bg-theme26 p-4 mt-8">
              <div className="flex items-center gap-3 cursor-pointer"  onClick={()=> setActiveAccordian("acc4")}>
                <Image width={15} height={15} src={"/img/infoIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
                <div className="flex-1 text-sm font-semibold text-theme1">Enrich existing data with Webhook</div>
                <Image width={15} height={15} src={"/img/dropdownIconBlue.png"} className={`h-[0.9375rem] w-[0.9375rem] object-contain transition-all ease-in-out duration-300 ${activeAccordian === "acc4" ? '' : 'rotate-180'}`} alt="refresh icon"/>
              </div>
              <div 
                ref={accordianFourthRef}
                style={{
                  height: activeAccordian === "acc4" ? `${accordianFourthRef.current?.scrollHeight}px` : "0px",
                  opacity: activeAccordian === "acc4" ? 1 : 0,
                }}
                className="text-theme1 text-sm font-normal leading-5 px-7 transition-all ease-in-out duration-300 overflow-hidden">
                <div className="mb-3.5  mt-1">
                  Enhance existing web conversion data from sources that may not be directly linked to the website or safeguard sensitive information that you don&#39:t want to be available to anyone via the browser.
                </div>
                <div className="mb-3 5">
                  Enriching could mean additional contact information or for example setting value for Purchase event in case the value is not available on the web (e.g. recording profit data instead of revenue data).
                </div>
                <div className="mb-3.5  font-semibold">
                  Example of ContactInfo pixel fired when purchase happens
                </div>
                <div className="[&_pre]:!rounded-lg [&_pre]:!text-[1.4rem] my-8">
                  <SyntaxHighlighter language="javascript" style={dracula}>
                    {codeString8}
                  </SyntaxHighlighter>
                </div>
                <div className="mb-3.5  font-semibold">
                  Example for webhook POST request when purchase happens
                </div>
                <div className="[&_pre]:!rounded-lg [&_pre]:!text-[1.4rem] my-8">
                  <SyntaxHighlighter language="javascript" style={dracula}>
                    {codeString9}
                  </SyntaxHighlighter>
                </div>
                <div className="">To enrich existing data successfully, Tracklution has to be able to match webhook data with existing session data.</div>
              </div>
            </div>
            <div className="mt-8 flex justify-end gap-3">
              <button className='ml-1.5 h-10 flex items-center justify-center text-sm font-semibold text-theme9 gap-2 rounded-lg px-4 shadow-[0px_1px_2px_0px_#1018280D]'>
                Skip this Step
                <Image width={15} height={15} src={"/img/arrow-down.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain -rotate-90" alt="refresh icon"/>
              </button>
              <button className='h-10 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4'>
                Complete
                <Image width={15} height={15} src={"/img/checkIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain brightness-[1000]" alt="refresh icon"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step3