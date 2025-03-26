import React from 'react'
import Dashboard from '@/app/_pages/dashboard/Dashboard'
import { DashboardStoreProvider } from '@/app/_providers/DashboardProvider'

const page = () => {
  return (
    <>
      <DashboardStoreProvider>
        <Dashboard/>
      </DashboardStoreProvider>
    </>
  )
}

export default page