import { useFormik } from "formik"
import { CompanyValidationSchema } from "../_validationSchema/companyValidationSchema"
import { useDashboardStore } from "../_providers/DashboardProvider"
import { getAPIAuth, postAPIAuth, PutApiAuth } from "../_services/apiInstance"
import { companyTypes } from "../_store/dashboardStore/slices/newCompanySlice"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { useParams } from "next/navigation"

const useCompany = () => {
  const {formValues, setShowNewCompany, resetFormValues, selectedCompany, resetSelectedCompany, updateFormValues} = useDashboardStore(state => state)
  const queryClient = useQueryClient()
  const params = useParams()

  console.log('params123', params)

  useEffect(()=> {
    updateFormValues(selectedCompany)
  }, [selectedCompany]) // eslint-disable-line

  const handleAddNewCompany = async (values : companyTypes) => {
    try {
      if(selectedCompany?.companyName) {
        const res = await PutApiAuth(`api/company/${selectedCompany?.id}`, values)
        return res
      } else {
        const res = await postAPIAuth('api/company', values)
        return res
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getCompanyList = async () : Promise<companyTypes[]> => {
    try {
      if(params?.id) {
        const res = await getAPIAuth(`api/companyManagement/list/${params?.id}`)
        return res?.data?.data || []
      } else {
        const res = await getAPIAuth('api/company')
        return res?.data?.data || []
      }
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const {data : companyList = [], isLoading : companyListLoading} = useQuery({
    queryFn : getCompanyList,
    queryKey : ['Company']
  })

  const mutation = useMutation({
    mutationFn : handleAddNewCompany,
    onSuccess : (data) => {
      toast.success(data?.data?.message)
      if(data?.data?.success) {
        setShowNewCompany(false)
        resetFormValues()
        resetSelectedCompany()
        queryClient.invalidateQueries({ queryKey: ["Company"] })
      }
    },
    onError : (error) => {
      toast.error(error.message || '')
    }
  })

  const onSubmit = async (values : companyTypes) => {
    mutation.mutate(values)
  }

  const formik = useFormik({
    initialValues : formValues,
    validationSchema : CompanyValidationSchema,
    onSubmit,
    enableReinitialize : true
  })

  return {formik, companyList, companyListLoading}
}

export default useCompany