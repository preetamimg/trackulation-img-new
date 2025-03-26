"use client"
import Image from 'next/image'
import React from 'react'
import { ConnectorProps } from '../_constants/connectors'
import { useDashboardInnerStore } from '../_providers/DashboardInnerProvider'

interface ConnectorCardProps {
  data : ConnectorProps
}

const ConnectorCard : React.FC<ConnectorCardProps> = ({data}) => {
  const {setShowEditModal} = useDashboardInnerStore(state => state)
  return (
    <div className='p-6 bg-white border border-theme6 shadow-[0px_1px_3px_0px_rgba(16,24,40,0.10)] rounded-xl'>
      <div className="flex items-center gap-4">
        <div className="size-10 min-w-10 flex items-center justify-center rounded-full bg-theme7">
          <Image
            width={20}
            height={20}
            src={data?.icon}
            alt={"Avatar"}
            className='size-5 object-contain'
          />
        </div>
        <div className="text-sm font-medium text-theme14">{data?.title}</div>
        <div className="text-xs font-medium text-theme5 h-[1.375rem] px-2 flex items-center justify-center bg-theme7 rounded-full ml-auto">Paused</div>
      </div>
      <div className="flex gap-1.5 mt-2 pl-[3.5rem]">
        {
          ['Pixel', 'API']?.map(item =>(
            <div key={item} className="text-xs font-medium text-theme1 h-[1.375rem] px-2 flex items-center justify-center bg-theme16 rounded-full">{item}</div>
          ))
        }
      </div>
      <button onClick={()=> setShowEditModal(true)} className='mt-2 text-sm font-semibold text-theme5 flex items-center justify-center gap-2 h-9 w-[5.25rem] border border-theme8 shadow-[0px_1px_2px_0px_#1018280D] rounded-lg ml-auto'>
        Edit
        <Image
            width={16}
            height={16}
            src={"/img/editIconBlack.png"}
            alt={"Avatar"}
            className='size-4 object-contain'
          />
      </button>
    </div>
  )
}

export default ConnectorCard