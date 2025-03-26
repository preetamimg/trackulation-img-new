import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import { postAPI } from '../_services/apiInstance';
import { useMutation } from '@tanstack/react-query';
import useRegister from './useRegister';
import { useRouter } from 'next/navigation';

interface userProps {
  name : string,
  email : string,
  password : string
}

const useVerifyOtp = () => {
  const {resendOtp, resetTimer} = useRegister()
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null));
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [user, setUser] = useState<userProps>()
  const [timer, setTimer] = useState<number>(60)
  const router = useRouter()

  
    const verifyOtp = async (otpValue : string) => {

      try {
        const response = await postAPI('api/user/verify', {otp : otpValue , ...user})
        return response
      } catch (error) {
        console.log('error', error)
      }
    }
    
    const mutation = useMutation({
      mutationFn: verifyOtp,
      onSuccess: (data) => {
        if(data?.data?.success) {
          toast.success(data?.data?.message);
          localStorage.removeItem('register_user')
          router.push('/login')
        } else {
          toast.error(data?.data?.message)
        }
        setIsLoading(false);
      },
      onError: (error) => {
        toast.error(error?.message || "Registration failed. Please try again.");
      },
    });


    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      if (isNaN(Number(e.target.value))) {
        return
      }
      const updatedOtp = [...otp];
      updatedOtp[index] = e.target.value;
      setOtp(updatedOtp);
  
      if (e.target.value !== "" && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };
  

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (event.key === "Enter") {
        const otpValue = otp.join("");
        if (otpValue.length !== 6) {
          toast.error("OTP Field can't be empty")
          return
        }
        setIsLoading(true)
        // handleOtpVerification(event)
        const form = event.currentTarget.form as HTMLFormElement;
        if (form) {
          form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
        }
      }
      if (event.key === "Backspace" && index > 0 && event.currentTarget.value === "") {
        inputRefs.current[index - 1]?.focus();
      }
    };

    const handleOtpVerification = async (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const otpValue = otp.join("");
        if(otpValue?.length === 6 ) {
          setIsLoading(true)
          setError(false)
          mutation.mutate(otpValue);

        } else {
          setError(true)
        }
      } catch (error) {
        console.log('error', error)
      }
    }

    const handleResendOtp = async (e : React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!user) {
        console.error("User is undefined. Cannot resend OTP.");
        return;
      }
      const res = await resendOtp(user)
      console.log('res', res)
    }

    useEffect(() => {
      if (typeof window !== "undefined") {
        const storedUser = localStorage.getItem("register_user");
  
        if (storedUser) {
          try {
            const userDetail: userProps = JSON.parse(storedUser);
            setUser(userDetail);
          } catch (error) {
            console.error("Error parsing user data:", error);
          }
        }
      }
    }, []);
  
    useEffect(() => {
      inputRefs.current[0]?.focus();
    }, []);

    useEffect(() => {
      if (timer > 0) {
        const countdown = setInterval(() => {
          setTimer(timer - 1);
        }, 1000);
        return () => clearInterval(countdown);
      }
    }, [timer]);

    useEffect(()=> {
      setTimer(60)
    }, [resetTimer])

    return {otp, inputRefs, isLoading, error, timer, setTimer, user, handleOtpChange, handleKeyDown, handleOtpVerification, handleResendOtp}
}

export default useVerifyOtp