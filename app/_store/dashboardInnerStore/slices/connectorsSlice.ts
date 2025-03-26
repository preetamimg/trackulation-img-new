import { StateCreator } from "zustand"

export interface connectorsSlice {
  showEditModal : boolean
  setShowEditModal : (value : boolean)=> void
}

export const createConnectorsSlice: StateCreator<connectorsSlice> = ((set)=> ({
  showEditModal : false,

  setShowEditModal : (value)=> {
    set({showEditModal : value})
  }
}))