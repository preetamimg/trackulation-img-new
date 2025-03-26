"use client"

import React from 'react'
import Banner from './components/Banner'
import useVerifyOtp from '@/app/_hooks/useVerifyOtp'

const VerifyOtp = () => {
    const { otp, inputRefs, isLoading, error, timer, handleOtpChange, handleKeyDown, handleOtpVerification, handleResendOtp } = useVerifyOtp();


  return (
    <>
    <div className="h-full overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        <Banner/>
        <div className="h-full">
          <div className="max-w-[31.625rem] mx-auto p-6 sm:p-7 h-full flex flex-col justify-center">
            <div className="font-semibold text-2xl sm:text-[2rem] text-theme20 font-poppins">Verify OTP</div>
            <div className="text-sm sm:text-base text-theme9 font-normal font-poppins mt-3">Enter the 6 digit code we have sent on your E-mail to verify your new account.</div>
            <form className='mt-5 sm:mt-9' onSubmit={(e)=> handleOtpVerification(e)}>
              <div className="">
                <div className="relative grid grid-cols-6 gap-3 sm:gap-6">
                    {otp.map((digit, index) => (
                      <input
                        type="tel"
                        inputMode="numeric" 
                        pattern="[0-9]*"
                        className='border border-theme8 max-sm:aspect-square max-sm:max-h-14 h-auto sm:h-14 rounded-xl w-full text-sm sm:text-base font-semibold text-theme10 px-2 text-center !outline-none !shadow-none focus:border-theme1'
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
                {error && (
                  <div className="errorText">Please enter vaild OTP</div>
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
              <button type='submit' disabled={isLoading} className='text-white text-sm sm:text-base font-semibold bg-theme23 h-12 sm:h-14 flex items-center justify-center rounded-xl w-full mt-4 sm:mt-7 disabled:opacity-45'>
                {
                  isLoading ? 'Loading...' : 'Verify & Continue'
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default VerifyOtp