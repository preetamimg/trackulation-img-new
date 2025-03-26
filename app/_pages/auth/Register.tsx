"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Banner from './components/Banner'
import useRegister from '../../_hooks/useRegister'
import useLogin from '@/app/_hooks/useLogin'

const Register = () => {
  const {formik, isLoading, showPassword, setShowPassword} = useRegister();
  const { handleGoogleLogin} = useLogin();

  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formik.handleSubmit()
  }

  return (
    <>
    <div className="h-full overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        <Banner/>
        <div className="h-full">
          <div className="max-w-[31.625rem] mx-auto p-6 sm:p-7 h-full flex flex-col justify-center">
          <div className="lg:hidden flex pb-5 items-center justify-center">
              <Link href={'/'}>
                <Image width={184} height={41} src={"/img/logo_white.png"} className="h-10 w-44 object-contain brightness-0" alt="refresh icon"/>
              </Link>
            </div>
            <div className="font-semibold text-2xl sm:text-[2rem] text-theme20 font-poppins">Sign Up</div>
            <div className="text-sm sm:text-base text-theme9 font-normal font-poppins mt-3">Please enter your details.</div>
            <form className='mt-5 sm:mt-9' onSubmit={handleSubmit}>
              <div className="">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder='Enter Your Full Name'
                    {...formik.getFieldProps('name')}
                    className={`border border-theme8 h-12 sm:h-14 rounded-xl w-full text-sm sm:text-base font-semibold text-theme10 pl-12 sm:pl-14 !outline-none !shadow-none focus:border-theme1 ${formik.touched.name && formik.errors.name ? 'inputError' : ''}`}
                  />
                  <Image width={20} height={20} src={"/img/person.png"} className="size-4 sm:size-5 object-contain absolute left-5 top-1/2 -translate-y-1/2" alt="refresh icon"/>
                </div>
                {formik.touched.name && formik.errors.name && (
                <div className="errorText">{formik.errors.name}</div>
              )}
              </div>
              <div className="mt-5 sm:mt-8">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder='Enter Your Email'
                    {...formik.getFieldProps('email')} 
                    className={`border border-theme8 h-12 sm:h-14 rounded-xl w-full text-sm sm:text-base font-semibold text-theme10 pl-12 sm:pl-14 !outline-none !shadow-none focus:border-theme1 ${formik.touched.email && formik.errors.email ? 'inputError' : ''}`}/>
                  <Image width={20} height={20} src={"/img/mail.png"} className="size-4 sm:size-5 object-contain absolute left-5 top-1/2 -translate-y-1/2" alt="refresh icon"/>
                </div>
                {formik.touched.email && formik.errors.email && (
                <div className="errorText">{formik.errors.email}</div>
              )}
              </div>
              <div className="mt-5 sm:mt-8">
                <div className="relative">
                  <input 
                    type={showPassword ? 'text' : "password"}  
                    placeholder='Enter Your Password'
                    {...formik.getFieldProps('password')} 
                    className={`border border-theme8 h-12 sm:h-14 rounded-xl w-full text-sm sm:text-base font-semibold text-theme10 pl-12 sm:pl-14 !outline-none !shadow-none focus:border-theme1 ${formik.touched.password && formik.errors.password ? 'inputError' : ''}`}/>
                  <Image width={20} height={20} src={"/img/vpn_key.png"} className="size-4 sm:size-5 object-contain absolute left-5 top-1/2 -translate-y-1/2" alt="refresh icon"/>
                  <Image onClick={()=> setShowPassword(!showPassword)} width={20} height={20} src={showPassword ? "/img/visibility_hide.png" : "/img/visibility.png"} className="size-4 sm:size-5 object-contain absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer" alt="refresh icon"/>
                </div>
                {formik.touched.password && formik.errors.password && (
                <div className="errorText">{formik.errors.password}</div>
              )}
              </div>
              <button type='submit' disabled={isLoading} className='text-white text-sm sm:text-base font-semibold bg-theme23 h-12 sm:h-14 flex items-center justify-center rounded-xl w-full mt-4 sm:mt-7 disabled:opacity-45'>
                {
                  isLoading ? 'Loading...' : 'Get Started'
                }
              </button>
            </form>
              <button type='submit' onClick={handleGoogleLogin} className='text-theme5 gap-3 text-sm sm:text-base font-semibold border border-theme8 h-12 sm:h-14 flex items-center justify-center rounded-xl w-full mt-4 sm:mt-6'>
                <Image width={24} height={24} src={"/img/google.png"} className="size-4 sm:size-6 object-contain flex" alt="refresh icon"/>
                Sign up with Google
              </button>
              <div className="flex items-center justify-center gap-3 text-sm text-theme10 mt-3 sm:mt-4">
                Already have an account?
                <Link className='text-theme28 font-semibold' href={'/login'}>Sign in</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Register