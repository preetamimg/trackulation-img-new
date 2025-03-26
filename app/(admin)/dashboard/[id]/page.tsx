import DashboardInner from '@/app/_pages/dashboardInner/DashboardInner'
import { DashboardInnerStoreProvider } from '@/app/_providers/DashboardInnerProvider'
import React from 'react'

const page = () => {
  return (
    <>
      <DashboardInnerStoreProvider>
        <DashboardInner/>
      </DashboardInnerStoreProvider>
    </>
  )
}

export default page