import { StateCreator } from "zustand";

export interface newAccordianSlice {
  activeAccordian: string
  setActiveAccordian: (value : string) => void
}



export const createAccordianSlice: StateCreator<newAccordianSlice> = ((set, get)=>({
  activeAccordian : '',

  setActiveAccordian : (value)=> {
    const {activeAccordian} = get();

    if(activeAccordian === value) {
      set({activeAccordian : ''})
    } else {
      set({activeAccordian : value})
    }

  }
}))