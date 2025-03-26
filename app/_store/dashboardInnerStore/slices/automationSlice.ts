import { StateCreator } from "zustand"

export interface automationsSlice {
  showInsertModal : boolean
  showBlockModal : boolean
  setShowInsertModal : (value : boolean)=> void
  setShowBlockModal : (value : boolean)=> void
}

export const createAutomationSlice: StateCreator<automationsSlice> = ((set)=> ({
  showInsertModal : false,
  showBlockModal : false,


  setShowInsertModal : (value)=> {
    set({showInsertModal : value})
  },

  setShowBlockModal : (value)=> {
    set({showBlockModal : value})
  },
}))