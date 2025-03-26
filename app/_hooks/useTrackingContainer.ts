import { useFormik } from "formik"
import { trackingContainerValidationSchema } from "../_validationSchema/trackingContainerValidationSchema"
import { useDashboardStore } from "../_providers/DashboardProvider"
import { trackingContainerFormValues } from "../_store/dashboardStore/slices/newTrackingContainerSlice"
import { getAPIAuth, postAPIAuth } from "../_services/apiInstance"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { useParams } from "next/navigation"

const useTrackingContainer = () => {

  const {trackingFormValues, setShowCreateNew, setTotalPages, currentPage, setCurrentPage} = useDashboardStore(state => state)
  const queryClient = useQueryClient()
  const params = useParams()

  const getTrackingContainers = async () : Promise<trackingContainerFormValues[]> => {
    try {
      if(params?.id) {
        const res = await getAPIAuth(`api/companyManagement/list/details/${params?.id}?page=${currentPage}&pageSize=2`)
        setTotalPages(res?.data?.pagination?.totalPages)
        return res?.data?.data || []
      } else {
        const res = await getAPIAuth(`api/company/details?page=${currentPage}&pageSize=2`)
        setTotalPages(res?.data?.pagination?.totalPages)
        return res?.data?.data || []
      }
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const {data : trackingContainersList = [], isLoading : trackingContainerLoading} = useQuery({
    queryFn : getTrackingContainers,
    queryKey : ["trackingContainers"],
    refetchOnMount: false, // Prevents extra fetch
    refetchOnWindowFocus: false,
  })

  useEffect(()=> {
    queryClient.invalidateQueries({queryKey : ["trackingContainers"]})
  }, [currentPage]) // eslint-disable-line

  const handleAddNewContainer = async (values : trackingContainerFormValues) => {
    try {
      const res = await postAPIAuth('api/company/details', values)
      return res 
    } catch (error) {
      console.log(error)
    }
  }

  const mutation = useMutation({
    mutationFn : handleAddNewContainer,
    onSuccess : (data) => {
      if(data?.data?.success) {
        toast.success(data?.data?.message)
        setCurrentPage(1)
        setShowCreateNew()
        formik.resetForm()
        queryClient.invalidateQueries({queryKey : ["trackingContainers"]})
      }
    },
    onError : (error : Error) => {
      toast.error(error?.message)
    }
  })

  const onSubmit = async (values : trackingContainerFormValues) => {
    mutation.mutate(values)
  }

  const formik = useFormik({
    initialValues : trackingFormValues,
    validationSchema : trackingContainerValidationSchema,
    onSubmit,
    enableReinitialize : true
  })

  return {formik, trackingContainersList, trackingContainerLoading}
}

export default useTrackingContainer