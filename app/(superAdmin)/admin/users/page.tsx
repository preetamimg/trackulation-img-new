import Users from '@/app/_pages/admin/users/Users'
import { AdminUsersStoreProvider } from '@/app/_providers/AdminUserProvider'
import React from 'react'

const page = () => {
  return (
    <>
      <AdminUsersStoreProvider>
        <Users/>
      </AdminUsersStoreProvider>
    </>
  )
}

export default page