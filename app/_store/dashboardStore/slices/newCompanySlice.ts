import { StateCreator } from "zustand";

export interface companyTypes {
  companyName : string,
  companyType : string,
  companySize : string,
  companyTnc : boolean,
  id? : string
}

export interface newCompanySlice {
  showCreateNew: boolean
  setShowCreateNew: () => void
  showNewCompany : boolean
  setShowNewCompany : (value : boolean) => void
  formValues : companyTypes
  setFormValues : (key : string, value : string | boolean) => void
  resetFormValues : () => void
  selectedCompany : companyTypes
  resetSelectedCompany : () => void
  setSelectedCompany : (value : companyTypes) => void
  updateFormValues : (value : companyTypes) => void
}



export const createNewCompanySlice: StateCreator<newCompanySlice> = ((set, get)=>({
  showCreateNew : false,
  showNewCompany : false,
  selectedCompany : {
    companyName : "",
    companyType : "",
    companySize : "",
    companyTnc : false,
    id: ""
  },
  formValues : {
    companyName : "",
    companyType : "",
    companySize : "",
    companyTnc : false,
  },

  setShowCreateNew : ()=> {
    const {showCreateNew} = get();

    set({showCreateNew : !showCreateNew})
  },

  setShowNewCompany : (value)=> {
    set({showNewCompany : value})
  },

  setFormValues : (key, value) => {
    const {formValues} = get()
    set(()=> {
      return {
        formValues : {
          ...formValues,
          [key] : value
        }
      }
    })
  },

  resetFormValues : () => {
    set({formValues : {
      companyName : "",
      companyType : "",
      companySize : "",
      companyTnc : false,
    }})
  },

  resetSelectedCompany : () => {
    set({selectedCompany : {
      companyName : "",
      companyType : "",
      companySize : "",
      companyTnc : false,
      id : ''
    }})
  },

  setSelectedCompany : (value) => {
    set({selectedCompany : value})
  },

  updateFormValues : (value) => {
    set({formValues : value})
  },

}))