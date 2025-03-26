"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Banner from './components/Banner'
import useLogin from '@/app/_hooks/useLogin'

const Login = () => {
  const {formik, showPassword, isLoading, setShowPassword, handleGoogleLogin} = useLogin();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            <div className="font-semibold text-2xl sm:text-[2rem] text-theme20 font-poppins">Log in</div>
            <div className="text-sm sm:text-base text-theme9 font-normal font-poppins mt-3">Welcome back! Please enter your details.</div>
            <form className='mt-5 sm:mt-9' onSubmit={handleLogin}>
              <div className="">
                <div className="relative">
                  <input 
                    type="email"
                    name='email'
                    id='email'
                    value={formik?.values?.email || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    placeholder='Enter Your Email' 
                    className={`border border-theme8 h-12 sm:h-14 rounded-xl w-full text-sm sm:text-base font-semibold text-theme10 pl-12 sm:pl-14 !outline-none !shadow-none focus:border-theme1 ${formik.touched.email && formik.errors.email ? 'inputError' : ''}`}
                  />
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
                    name='password'
                    id='password'
                    value={formik?.values?.password || ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder='Enter Your Password' 
                    className={`border border-theme8 h-12 sm:h-14 rounded-xl w-full text-sm sm:text-base font-semibold text-theme10 pl-12 sm:pl-14 !outline-none !shadow-none focus:border-theme1 ${formik.touched.password && formik.errors.password ? 'inputError' : ''}`}
                  />
                  <Image width={20} height={20} src={"/img/vpn_key.png"} className="size-4 sm:size-5 object-contain absolute left-5 top-1/2 -translate-y-1/2" alt="refresh icon"/>
                    <Image onClick={()=> setShowPassword(!showPassword)} width={20} height={20} src={showPassword ? "/img/visibility_hide.png" : "/img/visibility.png"} className="size-4 sm:size-5 object-contain absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer" alt="refresh icon"/>
                </div>
                {formik.touched.password && formik.errors.password && (
                <div className="errorText">{formik.errors.password}</div>
              )}
              </div>
              <div className="flex items-center justify-between gap-1 sm:gap-3 mt-4 sm:mt-6">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="group/td">
                    <input type="checkbox" className='hidden peer'  id={`remember`}/>
                    <label htmlFor={`remember`} className='border border-theme8 size-4 sm:size-5 rounded sm:rounded-md flex items-center justify-center peer-checked:!border-theme1 peer-checked:bg-theme21 mx-auto'>
                        <Image
                          width={10}
                          height={10}
                          src={"/img/checkIcon.png"}
                          alt={"checkIcon"}
                          className='size-2.5 object-contain hidden group-has-[.peer:checked]/td:block'
                        />
                    </label>
                  </div>
                  <label htmlFor="remember" className='text-xs sm:text-sm text-theme10 font-poppins cursor-pointer'>Remember for 30 days</label>
                </div>
                <Link href={'/forget-password'} className='flex items-center gap-0 sm:gap-2 text-theme1 text-xs sm:text-sm font-poppins font-semibold'>
                  <Image width={16} height={16} src={"/img/lock.png"} className="size-4 object-contain hidden sm:flex" alt="refresh icon"/>
                  Forgot password?
                </Link>
              </div>
              <button type='submit' disabled={isLoading} className='text-white text-sm sm:text-base font-semibold bg-theme23 h-12 sm:h-14 flex items-center justify-center rounded-xl w-full mt-4 sm:mt-7 disabled:opacity-45'>
                {
                  isLoading ? 'Loading...' : 'Login'
                }
              </button>
            </form>
              <button type='button' onClick={handleGoogleLogin} className='text-theme5 gap-3 text-sm sm:text-base font-semibold border border-theme8 h-12 sm:h-14 flex items-center justify-center rounded-xl w-full mt-4 sm:mt-6'>
                <Image width={24} height={24} src={"/img/google.png"} className="size-4 sm:size-6 object-contain flex" alt="refresh icon"/>
                Sign in with Google
              </button>
              <div className="flex items-center justify-center gap-3 text-sm text-theme10 mt-3 sm:mt-4">
                Don’t have an account?
                <Link className='text-theme28 font-semibold' href={'/signup'}>Sign up</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Login