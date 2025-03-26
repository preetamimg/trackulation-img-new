"use client"
import Image from 'next/image'
import { useGlobalStore } from '../_providers/GlobalProvider'

interface PageProps {
  deleteEvent : () => void
}

const DeleteModal : React.FC<PageProps> = ({deleteEvent}) => {
  const {showDeleteModal, setShowDeleteModal} = useGlobalStore(state => state)
  return (
    <>
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[34rem] bg-white rounded-xl border border-theme6 p-6 shadow-[0px_1px_3px_0px_#1018281A] z-50 ${showDeleteModal ? '' : 'hidden'}`}>
      <div className="flex gap-4">
        <div className="size-12 min-w-12 flex items-center justify-center rounded-full">
          <Image
            width={20}
            height={20}
            src={'/img/delete_confirmation.png'}
            alt={"Avatar"}
            className='size-12 object-contain'
          />
        </div>
        <div className="a">
          <div className="text-lg font-semibold">Are you sure ?</div>
          <div className="text-sm font-normal text-theme9">Do you really want to delete this record? This process can&#39;t be undone. </div>
        </div>
      </div>
        <div className="flex items-center justify-end mt-8">
          <div className="flex justify-end items-center gap-3 max-md:justify-end max-md:w-full">
            <button onClick={() => {
                deleteEvent()
                setShowDeleteModal()
                }} className='h-10 flex items-center justify-center text-sm font-semibold bg-red-500 text-white gap-2 rounded-lg px-4'>
              <Image width={15} height={15} src={"/img/deleteIcon.png"} className="h-[0.9375rem] w-[0.9375rem] object-contain brightness-[1000]" alt="refresh icon"/>
              Delete
            </button>
            <button onClick={setShowDeleteModal} className='h-10 w-10 flex items-center justify-center'>
              <Image width={20} height={20} src={"/img/closeIcon.png"} className="h-3.5 w-3.5 object-contain" alt="refresh icon"/>
            </button>
          </div>
        </div>

      </div>
      <div onClick={setShowDeleteModal} className={`fixed top-0 left-0 h-dvh w-full bg-black/40 z-30 ${showDeleteModal ? '' : 'hidden'}`}></div>
    </>
  )
}

export default DeleteModal