"use client"
import { codeString1, codeString2, codeString3, codeString4 } from '@/app/_constants/trackingCode';
import { useInstallationStore } from '@/app/_providers/TrackingInstallationProvider'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codeString5 } from '../../../_constants/trackingCode';

const Step1 = () => {
  const {activeAccordian, setActiveAccordian} = useInstallationStore(state => state)
  const accordianOneRef = useRef<HTMLDivElement>(null);
  const accordianSecondRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="mt-[4.5rem] grid grid-cols-12 gap-8">
        <div className="col-span-2">
          <div className="text-lg font-semibold text-theme14 mb-1 leading-7">Step 1</div>
          <div className="text-sm font-bold text-theme1">Install Tracking Pixels</div>
          <div className="text-sm font-normal text-theme1">(required)</div>
        </div>
        <div className="col-span-10">
          <div className="bg-theme4 border border-theme6 rounded-[0.625rem] p-8 text-theme9 font-medium text-sm leading-5">
            <div className="font-semibold text-theme14 mb-3.5">1. Implement the main script</div>
            <div className="mb-3.5">
              To ensure optimal functionality, the main script must load on every page of your website prior to any event-specific scripts. For best practices, we advise embedding it within the &lt;head&gt; section across all pages.
            </div>
            <div className="">
              Installing through GTM? If you implement this script via a tag management system such as GTM, you can add it as a Custom HTML tag, just bear in mind that this script should be loaded in every page before any other Tracklution scripts.
            </div>
            <div className="[&_pre]:!rounded-lg [&_pre]:!text-[1.4rem] my-8">
              <SyntaxHighlighter language="javascript" style={dracula}>
                {codeString1}
              </SyntaxHighlighter>
            </div>
            <div className="mb-3.5 font-semibold text-theme14">
              2. Implement the event scripts
            </div>
            <div className="mb-3.5">
              Now we’re getting into action! These are the actual events you want to track on your website.
            </div>
            <div className="mb-3.5">
              Installing through GTM? Simply add the scripts as Custom HTML tags. Remember to adjust the tag settings to guarantee the main script loads before any event scripts.
            </div>
            <div className="mb-3.5 font-semibold text-theme14">
              Implement PageView
            </div>
            <div className="mb-3.5">
              With PageView implemented, Tracklution is able to capture incoming traffic with their URL tracking parameters, so that conversions can be reported back to ad platforms with their unique tracking ID such as click ID.
            </div>
            <div className="a">
              Add this script to be loaded on your site with every page view (e.g. inside the &lt;body&gt; section of the site code for every page view).
            </div>
            <div className="[&_pre]:!rounded-lg [&_pre]:!text-[1.4rem] my-8">
              <SyntaxHighlighter language="javascript" style={dracula}>
                {codeString2}
              </SyntaxHighlighter>
            </div>
            <div className="mb-3.5 font-semibold text-theme14">
              Implement Purchase event
            </div>
            <div className="mb-3.5">
              This enables you to track Purchases in your site. Make sure to replace the example content in the script (value and currency parameters) with the actual variables to catch the purchase information correctly, e.g. by utilising variables in GTM data layer.
            </div>
            <div className="[&_pre]:!rounded-lg [&_pre]:!text-[1.4rem] my-8">
              <SyntaxHighlighter language="javascript" style={dracula}>
                {codeString3}
              </SyntaxHighlighter>
            </div>
            <div className="mb-3.5 font-semibold text-theme14">
              Implementing any other standard or custom events
            </div>
            <div className="mb-3.5">
              You can use any events you wish, whether they are standard or customer events. Just change the event name in the script to match the event name you prefer using and install the script in the desired location or action on the site.
            </div>
            <div className="[&_pre]:!rounded-lg [&_pre]:!text-[1.4rem] my-8">
              <SyntaxHighlighter language="javascript" style={dracula}>
                {codeString4}
              </SyntaxHighlighter>
            </div>
            <div className="mb-3.5 font-semibold text-theme14">
              3. Implement Contact Info for catching contact information
            </div>
            <div className="">
              Embed this script within the &lt;body&gt; tag on pages where customer information is accessible. It&#39;s essential to substitute placeholder values with actual data, like email addresses or phone numbers, to accurately fill the ContactInfo tag with genuine contact details.
            </div>
            <div className="border border-theme25 rounded-xl bg-theme26 p-4 mt-8">
              <div className="flex items-center gap-3 cursor-pointer" onClick={()=> setActiveAccordian("acc1")}>
                <Image width={15} height={15} src={"/img/infoIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
                <div className="flex-1 text-sm font-semibold text-theme1">Why is this important?</div>
                <Image width={15} height={15} src={"/img/dropdownIconBlue.png"} className={`h-[0.9375rem] w-[0.9375rem] object-contain transition-all ease-in-out duration-300 ${activeAccordian === "acc1" ? '' : 'rotate-180'}`} alt="refresh icon"/>
              </div>
              
              <div         
                ref={accordianOneRef}
                style={{
                  height: activeAccordian === "acc1" ? `${accordianOneRef.current?.scrollHeight}px` : "0px",
                  opacity: activeAccordian === "acc1" ? 1 : 0,
                }}
                className="text-theme1 text-sm font-normal leading-5 px-7 transition-all ease-in-out duration-300 overflow-hidden">
                <div className="mb-3.5  mt-1">
                  Implementing these enhancements isn&#39;t strictly necessary but highly recommended to maximize your server-side tracking benefits. Here&#39;s why:
                </div>
                <div className="mb-3.5  font-semibold">
                  Enable Advanced Features
                </div>
                <div className="mb-3.5 ">
                  Unlock capabilities like Enhanced Conversions (Google Ads) and Advanced Matching (Meta). This includes cross-channel remarketing without relying on third-party cookies, capturing otherwise lost conversions (e.g., from missing click IDs), identifying returning users, and enhancing marketing campaign data for better performance.
                </div>
                <div className="mb-3.5  font-semibold">
                  Integrate External Data
                </div>
                <div className="mb-3.5 ">
                  Easily incorporate data from other systems, such as tracking offline conversions, through efficient matching via Webhook delivery to Tracklution.
                </div>
                <div className="mb-3.5  font-semibold">
                  Your Data Remains Yours
                </div>
                <div className="">
                  As a technology provider, we emphasize that your data is exclusively yours. Our access is strictly confined to what&#39;s necessary for delivering server-side tracking, without any claim to your data.
                </div>
              </div>
            </div>
            <div className="border border-theme25 rounded-xl bg-theme26 p-4 mt-8">
              <div onClick={()=> setActiveAccordian("acc2")} className="flex items-center gap-3 cursor-pointer">
                <Image width={15} height={15} src={"/img/infoIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
                <div className="flex-1 text-sm font-semibold text-theme1">How to implement this?</div>
                <Image width={15} height={15} src={"/img/dropdownIconBlue.png"} className={`h-[0.9375rem] w-[0.9375rem] object-contain transition-all ease-in-out duration-300 ${activeAccordian === "acc2" ? '' : 'rotate-180'}`} alt="refresh icon"/>
              </div>
              <div
                ref={accordianSecondRef}
                style={{
                  height: activeAccordian === "acc2" ? `${accordianSecondRef.current?.scrollHeight}px` : "0px",
                  opacity: activeAccordian === "acc2" ? 1 : 0,
                }}
                className="px-7 transition-all ease-in-out duration-300 overflow-hidden">
                  <div className="[&_pre]:!rounded-lg [&_pre]:!text-[1.4rem] my-8">
                    <SyntaxHighlighter language="javascript" style={dracula}>
                      {codeString5}
                    </SyntaxHighlighter>
                  </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end gap-3">
              <button className='ml-1.5 h-10 flex items-center justify-center text-sm font-semibold text-theme9 gap-2 rounded-lg px-4 shadow-[0px_1px_2px_0px_#1018280D]'>
                Complete Later
              </button>
              <button className='h-10 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4'>
                Next
                <Image width={15} height={15} src={"/img/whiteArrowIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain" alt="refresh icon"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Step1