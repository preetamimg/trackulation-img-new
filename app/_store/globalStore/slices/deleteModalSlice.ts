import { StateCreator } from "zustand";

export interface deleteModalSlice {
  showDeleteModal: boolean
  setShowDeleteModal: () => void
}



export const createDeleteModalSlice: StateCreator<deleteModalSlice> = ((set, get)=>({
  showDeleteModal : false,

  setShowDeleteModal : ()=> {
    const {showDeleteModal} = get();

    set({showDeleteModal : !showDeleteModal})
  }
}))