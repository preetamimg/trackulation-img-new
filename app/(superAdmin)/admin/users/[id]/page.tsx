import Dashboard from '@/app/_pages/dashboard/Dashboard'
import { DashboardStoreProvider } from '@/app/_providers/DashboardProvider'
import React from 'react'

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