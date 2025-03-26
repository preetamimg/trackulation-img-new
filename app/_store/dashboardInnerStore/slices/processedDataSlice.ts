import { DateRange } from "rsuite/esm/DateRangePicker"
import { StateCreator } from "zustand"

export interface processedDataSlice {
  selectedItem : number | undefined
  setSelectedIten : (value: number | undefined)=> void
  dateRange : DateRange | null
  setDateRange  : (value : DateRange | null) => void
}

export const createProcressedDataSlice: StateCreator<processedDataSlice> = ((set, get)=> ({
  selectedItem : undefined,

  dateRange : null,

  setSelectedIten : (value)=> {
    const {selectedItem} = get();

    if(selectedItem === value) {
      set({selectedItem : undefined})
    }else {
      set({selectedItem : value})
    }
  },

  setDateRange : (value : DateRange | null) => {
    set({dateRange : value})
  }
}))