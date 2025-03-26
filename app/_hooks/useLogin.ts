"use client"
import { FormikHelpers, useFormik } from 'formik';
import loginValidationSchema from '../_validationSchema/loginSchema';
import { signIn, useSession } from "next-auth/react"
import { useEffect, useState } from 'react';
import { ROUTE_CONST } from '../_constants/routeConstants';
import { useRouter } from 'next/navigation';
import { AUTH_TOKEN } from '../_constants';
import { toast } from 'react-toastify';
import { useProfile } from './useProfile';
import { AxiosError } from 'axios';
import { Session } from "next-auth";

interface CustomSession extends Session {
  accessToken?: string ;
}

const useLogin = () => {

  const [runSession, setRunSession] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {data: session}  = useSession()
  const router = useRouter()
  const {authkey, setAuthKey} = useProfile()

  const initialValues = {
    email: "",
    password: "",
  };

  interface loginValues {
      email : string,
      password: string
  }

    const onSubmit = async (values : loginValues, { setSubmitting } : FormikHelpers<loginValues>) : Promise<void> => {
      try {
        setIsLoading(true)
        authLogin(values)
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMessage = error.response?.data?.message || "An error occurred";
          toast.error(errorMessage);
        } else {
          toast.error("An unexpected error occurred");
        }
        setIsLoading(false)
      } finally {
        setSubmitting(false);
      }
    };

  const authLogin = async ({email, password}: loginValues): Promise<void>  => {
    try {
      const res = await signIn("Credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if(res?.status === 200){
        toast.success( "Login successful!");
        setRunSession(true)
      }
      if (res?.error) {
        toast.error(res?.error);
      } 
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  };

  useEffect(()=> {
    if(session && runSession) {
      const customSession = session as CustomSession;
      const accessToken = customSession?.accessToken ?? "";
      localStorage.setItem(AUTH_TOKEN,accessToken)
      setAuthKey(accessToken)
      document.cookie = `${AUTH_TOKEN}=${accessToken}; path=/;`;
      router.push(ROUTE_CONST.DASHBOARD);
      setRunSession(false)
    }
  }, [session, runSession])//eslint-disable-line

  useEffect(()=> {
    if(session && authkey) {
      router.push(ROUTE_CONST.DASHBOARD);
    }
  }, [session, authkey])//eslint-disable-line

  const handleGoogleLogin = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void>  => {
    e.preventDefault();
    try {
      const res = await signIn("google", {callbackUrl : '/dashboard', redirect : false});
      if(res?.ok){
        toast.success( "Login successful!");
        setRunSession(true)
      }
      if (res?.error) {
        toast.error(res?.error);
      } 
    } catch (error) {
      console.log('error', error);
    }
  };




 // Initialize Formik with initial values, validation schema, and submit handler.
  const formik = useFormik({
    initialValues,
    validationSchema: loginValidationSchema,
    onSubmit,
  });

  return {formik, session, showPassword, setShowPassword, handleGoogleLogin, isLoading};
}

export default useLogin