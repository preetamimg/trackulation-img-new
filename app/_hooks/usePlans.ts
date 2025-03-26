import { useFormik } from 'formik'
import { useAdminPlanStore } from '../_providers/AdminPlansProvider'
import { PlanFormValues, PlanWithAddOns } from '../_store/adminPlansStore/slices/newPlanSlice'
import planValidationSchema from '../_validationSchema/planSchema'
import { deleteAPIAuth, formDataAuth, getAPIAuth, PutFormDataAuth } from '../_services/apiInstance'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'

const usePlans = () => {
  const {formValues, addOns, resetAddons, selectedPlan, updateFormValues, setAddOns, setShowCreateNew, resetSelectedPlan} = useAdminPlanStore((state) => state)
  const [selectedId, setSelectedId] = useState<string>('') 
  const queryClient = useQueryClient()


  useEffect(()=> {
    const {addons} = selectedPlan;
    updateFormValues(selectedPlan)
    setAddOns(addons)
  }, [selectedPlan]) // eslint-disable-line

  // delete api for plans
  const deletePlan = async (id : string) => {
    try {
      const res = await deleteAPIAuth(`api/plan?id=${id}`)
      return res
    } catch (error) {
      console.log('error', error)
    }
  }

  // get api for plans

  const fetchPlans = async (): Promise<PlanWithAddOns[]>=> {
    try {
      const res = await getAPIAuth('api/plan')
      return res?.data?.plans || []
    } catch (error) {
      console.log('error', error)
      return []
    }
  }
  

  const {data: plans = [], isLoading} = useQuery({
    queryKey : ["plans"],
    queryFn : fetchPlans,
  })

  // post api for plans
  const handleUsePlans = async (values : PlanFormValues) => {

    const formData = new FormData();

    formData.append("planName", values?.planName)
    formData.append("popular", values?.popular)
    formData.append("discount", values?.discount !== null ? values?.discount?.toString() : "0" )
    formData.append("monthlyPrice", values?.monthlyPrice !== null ? values?.monthlyPrice?.toString() : "0")
    formData.append("yearlyPrice", values?.yearlyPrice !== null ? values?.yearlyPrice?.toString() : "0")
    formData.append("userAccessLimit", values?.userAccessLimit)
    formData.append("websiteAccessLimit", values?.websiteAccessLimit)
    formData.append("conversions", values?.conversions)

    addOns?.forEach((addon, index) => {
      formData.append(`addOns[${index}]`, addon?.value);
    });

    if(selectedPlan?.planName) {
      if (selectedPlan?.id) {
        formData.append('id', selectedPlan.id);
      }
      if(values?.imageUrl instanceof File) {
        formData.append("imageUrl", values?.imageUrl)
      } else {
        formData.append("imageUrl", '')
      }
    } else {
      formData.append("imageUrl", values?.imageUrl)
    }

    try {
      if(selectedPlan?.planName) {
        const res = await PutFormDataAuth('api/plan', formData)
        return res
      } else {
        const res = await formDataAuth('api/plan', formData)
        return res
      }

    } catch (error) {
      console.log('err', error)
    }
  }

  const mutation = useMutation({
    mutationFn : handleUsePlans,
    onSuccess : (data) => {
      if(data?.data?.success) {
        toast.success(data?.data?.message);
        queryClient.invalidateQueries({ queryKey: ["plans"] })
        formik.resetForm();
        resetAddons()
        resetSelectedPlan()
        setShowCreateNew(false)
      } else {
        toast.error(data?.data?.message);
      }
    },
    onError : (error) => {
      toast.error(error?.message || "Something wrong happened");
    }
  })

  const deleteMutation = useMutation({
    mutationFn : deletePlan,
    onSuccess : (data) => {
      toast.success(data?.data?.message);
      queryClient.invalidateQueries({ queryKey: ["plans"] })
    },
    onError : (error) => {
      toast.error(error?.message || "Something wrong happened");
    }
  })

  const handleDeletePlan = (id: string)=> {
    deleteMutation.mutate(id)
  }

  const onSubmit = async (values : PlanFormValues)=> {
    mutation.mutate(values)
  }

  const formik = useFormik({
    initialValues : formValues,
    validationSchema : planValidationSchema,
    enableReinitialize : true,
    onSubmit
  })

  return {formik, isLoading, plans, handleDeletePlan, selectedId, setSelectedId}
}

export default usePlans