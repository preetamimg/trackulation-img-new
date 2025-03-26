"use client"
import React, { useRef } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/_components/ui/Select'
import Image from 'next/image'
import { useAdminPlanStore } from '@/app/_providers/AdminPlansProvider'
import usePlans from '@/app/_hooks/usePlans'

const CreateNewPlan : React.FC = () => {
  const {showCreateNew, addOns, handleAddMore, handleDelete, handleChange, selectedPlan} = useAdminPlanStore((state) => state);
  const contentRef = useRef<HTMLDivElement>(null);
  const {formik} = usePlans();

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
              <div className="text-lg font-semibold text-theme14 leading-7 mb-6">{selectedPlan?.planName ? 'Edit' : 'Create New'} Plan</div>
              {/* <div className="text-sm font-normal text-theme9 mb-6">Default values can always be overridden when firing an Event.</div> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-6 items-end">
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Plan Name <span className='text-red-500'>*</span></div>
                    <input 
                      type="text" 
                      {...formik.getFieldProps('planName')}
                      className='h-11 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3'/>
                        {formik.touched.planName && formik.errors.planName && (
                          <div className="errorText">{formik.errors.planName}</div>
                        )}
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Plan Icon <span className='text-red-500'>*</span></div>
                    <input 
                      type="file" 
                      name='imageUrl'
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.currentTarget.files?.[0];
                        if (file) {
                          formik.setFieldValue("imageUrl", file);
                        }
                      }}
                      className='h-11 py-2 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3 file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-theme1 hover:file:bg-sky-100'/>
                      {formik.touched.imageUrl && formik.errors.imageUrl && (
                          <div className="errorText">{formik.errors.imageUrl}</div>
                        )}
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Popular <span className='text-red-500'>*</span></div>
                  <Select value={formik.values.popular} name='popular' onValueChange={(value)=> formik.setFieldValue("popular", value)}>
                    <SelectTrigger className='h-11 rounded-lg border-theme8 shadow-[0px_1px_2px_0px_#1018280D] outline-theme1 text-sm px-3'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value={'true'}>Yes</SelectItem>
                      <SelectItem value={'false'}>No</SelectItem>
                    </SelectContent>
                  </Select>
                  {formik.touched.popular && formik.errors.popular && (
                          <div className="errorText">{formik.errors.popular}</div>
                        )}
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Monthly Price <span className='text-red-500'>*</span></div>
                    <input {...formik.getFieldProps('monthlyPrice')} type="text" className='h-11 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3'/>
                    {formik.touched.monthlyPrice && formik.errors.monthlyPrice && (
                          <div className="errorText">{formik.errors.monthlyPrice}</div>
                        )}
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Yearly Price <span className='text-red-500'>*</span></div>
                    <input {...formik.getFieldProps('yearlyPrice')} type="text" className='h-11 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3'/>
                    {formik.touched.yearlyPrice && formik.errors.yearlyPrice && (
                          <div className="errorText">{formik.errors.yearlyPrice}</div>
                        )}
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Discount</div>
                    <input {...formik.getFieldProps('discount')} type="text" className='h-11 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3'/>
                    {formik.touched.discount && formik.errors.discount && (
                          <div className="errorText">{formik.errors.discount}</div>
                        )}
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">No. of Users <span className='text-red-500'>*</span></div>
                    <input {...formik.getFieldProps('userAccessLimit')} type="text" className='h-11 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3'/>
                    {formik.touched.userAccessLimit && formik.errors.userAccessLimit && (
                          <div className="errorText">{formik.errors.userAccessLimit}</div>
                        )}
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">No. of Websites <span className='text-red-500'>*</span></div>
                    <input {...formik.getFieldProps('websiteAccessLimit')} type="text" className='h-11 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3'/>
                    {formik.touched.websiteAccessLimit && formik.errors.websiteAccessLimit && (
                          <div className="errorText">{formik.errors.websiteAccessLimit}</div>
                        )}
                </div>
                <div className="">
                  <div className="text-sm font-medium text-theme5 mb-1.5">Conversion <span className='text-red-500'>*</span></div>
                  <Select value={formik.values.conversions} name='conversions' onValueChange={(value)=> formik.setFieldValue("conversions", value)}>
                    <SelectTrigger className='h-11 rounded-lg border-theme8 shadow-[0px_1px_2px_0px_#1018280D] outline-theme1 text-sm px-3'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                      <SelectItem value={'true'}>Yes</SelectItem>
                      <SelectItem value={'false'}>No</SelectItem>
                    </SelectContent>
                  </Select>
                  {formik.touched.conversions && formik.errors.conversions && (
                          <div className="errorText">{formik.errors.conversions}</div>
                        )}
                </div>
                {
                  addOns?.length ? 
                    addOns?.map((item, index) => (
                      <div key={item?.id} className="">
                        <div className={`text-sm font-medium text-theme5 mb-1.5 ${index === 0 ? '' : 'hidden'}`}>Other Specifications</div>
                        <div className="relative">
                          <input 
                            value={item?.value}
                            onChange={(e)=> handleChange(item?.id, e.target.value)}
                            type="text" 
                            className='h-11 rounded-lg w-full border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-sm px-3'/>
                            {
                              addOns?.length > 1 ? 
                                <button onClick={() => handleDelete(item?.id)} className='group absolute top-1 right-1 size-9 hover:bg-red-500 rounded-md flex items-center justify-center'>
                                  <Image width={15} height={15} src={"/img/deleteIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain group-hover:brightness-[100]" alt="refresh icon"/>
                                </button>
                              : ''
                            }
                        </div>
                      </div>
                    ))
                  : ''
                }
                <div className="">
                  <button type='button' onClick={handleAddMore} className='h-10 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4'>
                    <Image width={15} height={15} src={"/img/boxIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain brightness-[100]" alt="refresh icon"/>
                    Add More
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-end mt-4 gap-3">
                <button type='button' className='h-10 flex items-center justify-center text-sm font-semibold border border-theme8 text-theme5 gap-2 rounded-lg px-4 shadow-[0px_1px_2px_0px_#1018280D]'>
                  Cancel
                </button>
                <button type='submit' disabled={formik.isSubmitting} className='h-10 flex items-center justify-center text-sm font-semibold bg-theme1 text-white gap-2 rounded-lg px-4 disabled:opacity-45'>
                  <Image width={15} height={15} src={"/img/boxIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain brightness-[100]" alt="refresh icon"/>
                  {
                    formik.isSubmitting ? 'Loading...' : selectedPlan?.planName ? 'Edit' : 'Create'
                  }
                  
                </button>
              </div>
            </form>
      </div>
    </>
  )
}

export default CreateNewPlan