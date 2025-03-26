import TrackingInstallation from '@/app/_pages/trackingInstallation/TrackingInstallation'
import { TrackingInstallationStoreProvider } from '@/app/_providers/TrackingInstallationProvider'
import React from 'react'

const page = () => {
  return (
    <>
      <TrackingInstallationStoreProvider>
        <TrackingInstallation/>
      </TrackingInstallationStoreProvider>
    </>
  )
}

export default page