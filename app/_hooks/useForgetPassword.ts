"use client"
import { FormikHelpers, useFormik } from 'formik'
import { forgetPasswordValidationSchema } from '../_validationSchema/forgetPasswordSchema'
import { postAPI } from '../_services/apiInstance'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface initValue {
email?: string
} 


const useForgetPassword = () => {
  const router = useRouter()
  const [resetTimer, setResetTimer] = useState<boolean>(false)


  const initialValues : initValue = {
    email : ''
  }

  const sendOtp = async (values : initValue) => {
    try {
      const response = await postAPI('/api/user/forgotPassword/email', values)
      if(response?.data?.success) {
        localStorage.setItem('forget_user', JSON.stringify(values));
        setResetTimer(!resetTimer)
      }
      return response
    } catch (error) {
      console.log(error)
    }
  }

  const mutation = useMutation({
    mutationFn : sendOtp,
        onSuccess: (data) => {
          if(data?.data?.success) {
            toast.success(data?.data?.message);
            router.push('/verify-forget-password')
          } else {
            toast.error(data?.data?.message);
          }
        },
        onError: (error) => {
          toast.error(error?.message || "Failed. Please try again.");
        },
  })

  const onSubmit = async (values : initValue, {setSubmitting} : FormikHelpers<initValue>) : Promise<void> => {
    try {
      mutation.mutate(values);
      setSubmitting(false)
    } catch (error) {
      console.log(error)
    }
  }

  const resendOtp = (values : initValue)=> {
    mutation.mutate(values);
  }

  const formik = useFormik({
    initialValues,
    validationSchema : forgetPasswordValidationSchema,
    onSubmit
  })

  return {formik, resetTimer, isLoading: mutation.isPending, resendOtp}
}


export default useForgetPassword