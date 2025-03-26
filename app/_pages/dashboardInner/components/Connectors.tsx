import ConnectorCard from '@/app/_components/ConnectorCard'
import { connectors } from '@/app/_constants/connectors'
import React from 'react'
import EditConnectorsModal from './EditConnectorsModal'

const Connectors : React.FC = () => {
  return (
    <>
      <div className="text-lg font-semibold text-theme14 mt-6">Connectors</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {
          connectors?.map(item => (
            <ConnectorCard key={item?.title} data={item}/>
          ))
        }
      </div>
      <EditConnectorsModal/>
    </>
  )
}

export default Connectors