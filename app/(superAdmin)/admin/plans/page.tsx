import AdminPlans from '@/app/_pages/admin/plans/AdminPlans'
import { AdminPlanStoreProvider } from '@/app/_providers/AdminPlansProvider'
import React from 'react'

const page = () => {
  return (
    <>
      <AdminPlanStoreProvider>
        <AdminPlans/>
      </AdminPlanStoreProvider>
    </>
  )
}

export default page