"use client"
import React, { useRef } from 'react'
import { companySize, companyTypes } from '@/app/_constants/selectOptions'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/_components/ui/Select'
import Image from 'next/image'
import { useDashboardStore } from '@/app/_providers/DashboardProvider'
import Link from 'next/link'
import useCompany from '@/app/_hooks/useCompany'


const CreateNewCompany : React.FC = () => {
  const {selectedCompany, showNewCompany, setShowNewCompany} = useDashboardStore((state) => state);
  const contentRef = useRef<HTMLDivElement>(null);
  const {formik} = useCompany()

  return (
    <>
      <div 
        ref={contentRef}
        style={{
          height: showNewCompany ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: showNewCompany ? 1 : 0,
        }}
          className={`transition-all duration-500 linear overflow-hidden`}>
            <form onSubmit={formik.handleSubmit} className="mt-6 rounded-lg pt-5 px-6 pb-6 border border-theme6">
              <div className="text-lg font-semibold text-theme14 leading-7">{selectedCompany?.companyName ? 'Edit' : 'Create New'} Company</div>
              <div className="text-sm font-normal text-theme9 mb-6">Default values can always be overridden when firing an Event.</div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-12">
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Company Name <span className='text-red-500'>*</span></div>
                    <input {...formik.getFieldProps('companyName')} type="text" className='h-11 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3'/>
                    {
                      formik.touched.companyName && formik.errors.companyName && <div className="errorText">{formik.errors.companyName}</div>
                    }
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Company Type <span className='text-red-500'>*</span></div>
                  <Select value={formik.values.companyType} name='companyType' onValueChange={(value) => formik.setFieldValue("companyType", value)}>
                    <SelectTrigger className='h-11 rounded-lg border-theme8 shadow-[0px_1px_2px_0px_#1018280D] outline-theme1 text-sm px-3'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      {
                        companyTypes?.map(item => (
                          <SelectItem key={item?.value} value={item?.value}>{item?.label}</SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                  {
                    formik.touched.companyType && formik.errors.companyType && <div className="errorText">{formik.errors.companyType}</div>
                  }
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Company Size <span className='text-red-500'>*</span></div>
                  <Select value={formik.values.companySize} name='companySize' onValueChange={(value) => formik.setFieldValue("companySize", value)}>
                    <SelectTrigger className='h-11 rounded-lg border-theme8 shadow-[0px_1px_2px_0px_#1018280D] outline-theme1 text-sm px-3'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      {
                        companySize?.map(item => (
                          <SelectItem key={item?.value} value={item?.value}>{item?.label}</SelectItem>
                        ))
                      }
                    </SelectContent>
                  </Select>
                  {
                    formik.touched.companySize && formik.errors.companySize && <div className="errorText">{formik.errors.companySize}</div>
                  }
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 gap-3">
                <div className="a">
                  <div className="flex gap-2 group/td">
                    <input {...formik.getFieldProps('companyTnc')} checked={formik.values.companyTnc} type="checkbox" className='hidden peer'  id={`terms`}/>
                    <label htmlFor={`terms`} className='border border-theme8 size-5 rounded-md flex items-center justify-center peer-checked:!border-theme1 peer-checked:bg-theme21 mx-auto'>
                        <Image
                          width={10}
                          height={10}
                          src={"/img/checkIcon.png"}
                          alt={"checkIcon"}
                          className='size-2.5 object-contain hidden group-has-[.peer:checked]/td:block'
                        />
                    </label>
                    <label htmlFor={`terms`} className="cursor-pointer">
                      I accept the <Link className='text-theme1' href={'/'}>Terms & Conditions</Link>, <Link className='text-theme1' href={'/'}>DPA</Link> and <Link className='text-theme1' href={'/'}>Privacy Policy</Link>.
                    </label>
                  </div>
                    {
                      formik.touched.companyTnc && formik.errors.companyTnc && <div className="errorText">{formik.errors.companyTnc}</div>
                    }
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setShowNewCompany(false)} type='button' className='h-10 flex items-center justify-center text-sm font-semibold border border-theme8 text-theme5 gap-2 rounded-lg px-4 shadow-[0px_1px_2px_0px_#1018280D]'>
                    Cancel
                  </button>
                  <button type='submit' className='h-10 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4'>
                    <Image width={15} height={15} src={"/img/boxIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain brightness-[100]" alt="refresh icon"/>
                    {selectedCompany?.companyName ? 'Edit' : 'Create'}
                  </button>
                </div>
              </div>
            </form>
      </div>
    </>
  )
}

export default CreateNewCompany