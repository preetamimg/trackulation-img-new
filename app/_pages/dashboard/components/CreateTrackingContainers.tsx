"use client"
import React, { useRef } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/_components/ui/Select'
import Image from 'next/image'
import { useDashboardStore } from '@/app/_providers/DashboardProvider'
import useCompany from '@/app/_hooks/useCompany'
import useGlobal from '@/app/_hooks/useGlobal'
import { FormikProps } from 'formik'
import { trackingContainerFormValues } from '@/app/_store/dashboardStore/slices/newTrackingContainerSlice'

interface PageProps {
  formik : FormikProps<trackingContainerFormValues>
}


const CreateTrackingContainers : React.FC<PageProps> = ({formik}) => {
  const {showCreateNew} = useDashboardStore((state) => state);
  const contentRef = useRef<HTMLDivElement>(null);
  const {companyList} = useCompany()
  const {currencyList, countryList, timezoneList} = useGlobal({isFetchCurrency : showCreateNew, isFetchCountry : showCreateNew, isFetchTimezones : showCreateNew})

  return (
    <>
      <div 
        ref={contentRef}
        style={{
          height: showCreateNew ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: showCreateNew ? 1 : 0,
        }}
          className={`transition-all duration-500 linear overflow-hidden`}>
            <form onSubmit={formik.handleSubmit} className="mt-6 rounded-lg pt-5 px-6 pb-6 border border-theme6">
              <div className="text-lg font-semibold text-theme14 leading-7">Create Tracking Container</div>
              <div className="text-sm font-normal text-theme9 mb-6">Default values can always be overridden when firing an Event.</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Company</div>
                  <Select value={formik.values.companyId} name='companyId' onValueChange={(value) => formik.setFieldValue("companyId", value)}>
                    <SelectTrigger className='h-11 rounded-lg border-theme8 shadow-[0px_1px_2px_0px_#1018280D] outline-theme1 text-sm px-3'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      { 
                        companyList?.length ? companyList?.map(item => (
                          <SelectItem key={item?.id} value={String(item?.id)}>{item?.companyName}</SelectItem>
                        )) : ''
                      }
                    </SelectContent>
                  </Select>
                  {
                    formik.touched.companyId && formik.errors.companyId && <div className="errorText">{formik.errors.companyId}</div>
                  }
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Default Currency</div>
                  <Select value={formik.values.currency} name='currency' onValueChange={(value) => formik.setFieldValue("currency", value)}>
                    <SelectTrigger className='h-11 rounded-lg border-theme8 shadow-[0px_1px_2px_0px_#1018280D] outline-theme1 text-sm px-3'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      {
                        currencyList?.length && currencyList?.map(item => (
                          <SelectItem key={item?.code} value={item?.code}>{item?.code} - {item?.name}</SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                  {
                    formik.touched.currency && formik.errors.currency && <div className="errorText">{formik.errors.currency}</div>
                  }
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Website Name</div>
                    <input {...formik.getFieldProps('companyWebsiteName')} type="text" className='h-11 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3'/>
                    {
                    formik.touched.companyWebsiteName && formik.errors.companyWebsiteName && <div className="errorText">{formik.errors.companyWebsiteName}</div>
                  }
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Default Country</div>
                  <Select value={formik.values.countryId} name='countryId' onValueChange={(value) => formik.setFieldValue("countryId", value)}>
                    <SelectTrigger className='h-11 rounded-lg border-theme8 shadow-[0px_1px_2px_0px_#1018280D] outline-theme1 text-sm px-3'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      {
                        countryList?.length && countryList?.map(item => (
                          <SelectItem key={item?.code} value={item?.code}>{item?.name}</SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                  {
                    formik.touched.countryId && formik.errors.countryId && <div className="errorText">{formik.errors.countryId}</div>
                  }
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Website URL</div>
                  <input {...formik.getFieldProps('companyWebsite')} type="text" className='h-11 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3'/>
                  {
                    formik.touched.companyWebsite && formik.errors.companyWebsite && <div className="errorText">{formik.errors.companyWebsite}</div>
                  }
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Default Timezone</div>
                  <Select value={formik.values.timezone} name='timezone' onValueChange={(value) => formik.setFieldValue("timezone", value)}>
                    <SelectTrigger className='h-11 rounded-lg border-theme8 shadow-[0px_1px_2px_0px_#1018280D]'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      {
                        timezoneList?.length ? timezoneList?.map(item => (
                          <SelectItem key={item} value={item}>{item}</SelectItem>
                        )) : ''
                      }
                    </SelectContent>
                  </Select>
                  {
                    formik.touched.timezone && formik.errors.timezone && <div className="errorText">{formik.errors.timezone}</div>
                  }
                </div>
              </div>
              <div className="flex items-center justify-end mt-4 gap-3">
                <button type='button' className='h-10 flex items-center justify-center text-sm font-semibold border border-theme8 text-theme5 gap-2 rounded-lg px-4 shadow-[0px_1px_2px_0px_#1018280D]'>
                  Cancel
                </button>
                <button type='submit' className='h-10 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4'>
                  <Image width={15} height={15} src={"/img/boxIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain brightness-[100]" alt="refresh icon"/>
                  Create
                </button>
              </div>
            </form>
      </div>
    </>
  )
}

export default CreateTrackingContainers