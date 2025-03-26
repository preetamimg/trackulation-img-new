"use client"
import useForgetPasswordVerifyOtp from '@/app/_hooks/useForgetPasswordVerifyOtp'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const VerifyForgetPassword = () => {
  const {otp, handleOtpChange, handleKeyDown, inputRefs, error, timer, showPassword, setShowPassword, handleResendOtp, isLoading, password, setPassword, handleOtpVerification} = useForgetPasswordVerifyOtp()
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
            <form className='mt-8' onSubmit={(e)=> handleOtpVerification(e)}>
            <div className="">
                <div className="relative grid grid-cols-6 gap-3 sm:gap-4">
                    {otp.map((digit, index) => (
                      <input
                        type="tel"
                        inputMode="numeric" 
                        pattern="[0-9]*"
                        className={`border border-theme8 max-sm:aspect-square max-sm:max-h-14 aspect-square rounded-xl w-full text-sm sm:text-base font-semibold text-theme10 px-2 text-center !outline-none !shadow-none focus:border-theme1 ${error ? 'inputErro' : ''}`}
                        key={index}
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(e, index)}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                        // ref={(ref) => (inputRefs.current[index] = ref)}
                        ref={(ref) => {
                          inputRefs.current[index] = ref;
                        }}
                      />
                    ))}
                </div>
                {error?.otp && (
                  <div className="errorText">Please enter vaild OTP</div>
                )}
              </div>
              <div className="mt-7">
                <div className="relative">
                  <input 
                    type={showPassword ? 'text' : "password"} 
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='Enter New Password' 
                    className='border border-theme8 h-14 rounded-xl w-full text-base font-semibold text-theme10 pl-14 !outline-none !shadow-none focus:border-theme1'/>
                    <Image width={20} height={20} src={"/img/vpn_key.png"} className="size-4 sm:size-5 object-contain absolute left-5 top-1/2 -translate-y-1/2" alt="refresh icon"/>
                    <Image onClick={()=> setShowPassword(!showPassword)} width={20} height={20} src={showPassword ? "/img/visibility_hide.png" : "/img/visibility.png"} className="size-4 sm:size-5 object-contain absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer" alt="refresh icon"/>
                </div>
                {error?.password && (
                  <div className="errorText">Please enter vaild password</div>
                )}
              </div>
              <div className="flex gap-4 items-center mt-4 sm:mt-7">
                {
                  timer !== 0 ?
                  <div className="text-sm sm:text-base text-theme9 font-normal font-poppins flex items-center">
                    Resend code via Email (
                    <span className='text-red-500 ps-1 w-6'>
                      {timer}
                    </span>)
                  </div> : 
                  <button disabled={timer !== 0} onClick={handleResendOtp} className='text-theme23 text-base font-poppins font-semibold disabled:opacity-45'>Resend OTP</button>
                }
            </div>
              <button type='submit' disabled={isLoading} className='text-white text-base font-semibold bg-theme23 h-14 flex items-center justify-center rounded-xl w-full mt-7 disabled:opacity-45'>
                {
                  isLoading ? 'Loading...' : 'Verify & Continue'
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

export default VerifyForgetPassword