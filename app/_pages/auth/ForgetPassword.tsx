"use client"
import useForgetPassword from '@/app/_hooks/useForgetPassword'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ForgetPassword = () => {
  const {formik, isLoading} = useForgetPassword()
  return (
    <>
      <div className="mx-auto px-5 sm:px-10 md:px-20 h-full">
        <div className="grid grid-cols-12 lg:grid-cols-7 xl:grid-cols-9 h-full items-center">
          <div className="col-span-2 hidden lg:flex">
            <Image width={285} height={354} src={"/img/forget_password1.png"} className="w-full h-auto object-contain" alt="refresh icon"/>
          </div>
          <div className="col-span-1 hidden xl:flex"></div>
          <div className="col-span-12 lg:col-span-3 h-full">
          <div className="max-w-[31.625rem] mx-auto md:p-7 h-full flex flex-col justify-center">
            <Image width={416} height={93} src={"/img/logo_white.png"} className="w-full h-12 lg:h-24 object-contain brightness-0" alt="refresh icon"/>
            <div className="font-semibold text-2xl lg:text-[2rem] text-theme20 font-poppins text-center mt-3 md:mt-6">Reset Password</div>
            <form className='mt-8' onSubmit={formik.handleSubmit}>
              <div className="">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder='Enter Your Email' 
                    {...formik.getFieldProps('email')}
                    className={`border border-theme8 h-14 rounded-xl w-full text-base font-semibold text-theme10 pl-14 !outline-none !shadow-none focus:border-theme1 ${formik.touched.email && formik.errors.email ? 'inputError' : ''}`}/>
                  <Image width={20} height={20} src={"/img/mail.png"} className="size-5 object-contain absolute left-5 top-1/2 -translate-y-1/2" alt="refresh icon"/>
                </div>
                {formik.touched.email && formik.errors.email && (
                <div className="errorText">{formik.errors.email}</div>
              )}
              </div>
              <button type='submit' disabled={isLoading} className='text-white text-base font-semibold bg-theme23 h-14 flex items-center justify-center rounded-xl w-full mt-7 disabled:opacity-45'>
                {
                  isLoading ? 'Loading...' : 'Send Reset Link'
                }
              </button>
            </form>
              <div className="flex items-center justify-center gap-3 text-sm text-theme10 mt-4">
                <Link className='text-theme28 font-semibold' href={'/login'}>Back to Login</Link>
              </div>
          </div>
        </div>
        <div className="col-span-1 hidden xl:flex"></div>
          <div className="col-span-2 hidden lg:flex">
            <Image width={285} height={354} src={"/img/forget_password2.png"} className="w-full h-auto object-contain" alt="refresh icon"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword