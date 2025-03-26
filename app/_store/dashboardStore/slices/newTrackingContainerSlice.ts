import { StateCreator } from "zustand";

export interface trackingContainerFormValues {
  companyId : string,
  companyWebsite : string,
  companyWebsiteName : string,
  countryId : string,
  currency : string,
  timezone : string,
  analyticStatus : string,
  marketingStatus : string,
  extendedUrl : [],
  cookiePolicy : boolean,
  knowledgeConsent : boolean,
  id? : string
  createdAt? : string
  trackingCode? : string
  company? : {
    companyName? : string
  }
}

export interface trackingContainerSliceType {
  trackingFormValues : trackingContainerFormValues
  setTrackingFormValues : (key : string, value : string | boolean) => void
  resetTrackingFormValues : () => void
  currentPage : number
  totalPages : number
  setCurrentPage : (value : number) => void
  setTotalPages : (value : number) => void
  handlePrev : () => void
  handleNext : (value : number) => void
}


export const createNewTrackingContainerSlice: StateCreator<trackingContainerSliceType> = ((set, get)=>({
  currentPage : 1,
  totalPages : 1,
  trackingFormValues : {
    companyId : "",
    companyWebsite : "",
    companyWebsiteName : "",
    countryId : "",
    currency : "",
    timezone : "",
    analyticStatus : "",
    marketingStatus : "",
    extendedUrl : [],
    cookiePolicy : false,
    knowledgeConsent : false
  },

  setTrackingFormValues : (key, value) => {
    const {trackingFormValues} = get();

    set(()=> {
      return {
        trackingFormValues : {
          ...trackingFormValues,
          [key] : value
        }
      }
    })
  },

  resetTrackingFormValues : () => {
    set({trackingFormValues : {
      companyId : "",
      companyWebsite : "",
      companyWebsiteName : "",
      countryId : "",
      currency : "",
      timezone : "",
      analyticStatus : "",
      marketingStatus : "",
      extendedUrl : [],
      cookiePolicy : false,
      knowledgeConsent : false
    }})
  },

  handlePrev : ()=> {
    const {currentPage} = get()

    if (currentPage === 1) return

    set({currentPage : currentPage - 1})
  },

  handleNext : (value)=> {
    const {currentPage} = get()

    if(currentPage >= value) return

    set({currentPage : currentPage + 1})
  },

  setCurrentPage : (value) => {
    set({currentPage : value})
  },

  setTotalPages : (value) => {
    set({totalPages : value})
  },
}))