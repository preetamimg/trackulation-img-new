import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getAPIAuth } from '../_services/apiInstance'
import { userListProps } from '../_store/adminUserStore/slices/adminUserSlice'
import { useAdminUsersStore } from '../_providers/AdminUserProvider'
import { useEffect } from 'react'

const useUsers = () => {
  const queryClient = useQueryClient()
  const {currentPage, setTotalPages} = useAdminUsersStore(state => state)

  const fetchUserList = async () : Promise<userListProps[]>=> {
    try {
      const res = await getAPIAuth(`api/usersManagement/list?page=${currentPage}&pageSize=2`)
      setTotalPages(res?.data?.pagination?.totalPages)
      return res?.data?.data || []
    } catch (error) {
      console.log(error)
      return []
    }
  }


  const {data : userList = [], isLoading : userListLoading} = useQuery({
    queryKey : ["userList"],
    queryFn : fetchUserList
  })

  useEffect(()=> {
    queryClient.invalidateQueries({queryKey : ["userList"]})
  }, [currentPage]) // eslint-disable-line

  return {userList, userListLoading}
}

export default useUsers