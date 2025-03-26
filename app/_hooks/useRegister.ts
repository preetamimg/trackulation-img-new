import { FormikHelpers, useFormik } from 'formik'
import registerValidationSchema from '../_validationSchema/registerSchema'
import {postAPI} from './../_services/apiInstance'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface registerValues {
  name : string,
  email : string,
  password: string
}


const useRegister = () => {
  const router = useRouter()
  const [resetTimer, setResetTimer] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const initialValues : registerValues = {
    name : '',
    email : '',
    password : '',
  }

  const registerUser = async (values : registerValues) => {
    try {
      const response = await postAPI('api/user/register' , values)
      if(response?.data?.success) {
        localStorage.setItem('register_user', JSON.stringify(values));
        setResetTimer(!resetTimer)
      }
      return response
    } catch (error) {
      console.log('error', error)
    }
  }

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      if(data?.data?.success) {
        toast.success(data?.data?.message);
        router.push('/verify-otp')
      } else {
        toast.error(data?.data?.message);
      }
    },
    onError: (error) => {
      toast.error(error?.message || "Registration failed. Please try again.");
    },
  });
  
  const onSubmit = async (values : registerValues, { setSubmitting } : FormikHelpers<registerValues>) : Promise<void> => {
    try {
      mutation.mutate(values);
      setSubmitting(false);
    } catch (error) {
      console.log(error)
    }
  }

  const resendOtp = (values : registerValues)=> {
    mutation.mutate(values);
  }

  const formik = useFormik({
    initialValues,
    validationSchema : registerValidationSchema,
    onSubmit
  })

  return { formik, isLoading: mutation.isPending, resendOtp, showPassword, setShowPassword, resetTimer }
}

export default useRegister