import { StateCreator } from "zustand";
import { v4 as uuidv4 } from 'uuid';

export interface addOnsProps  {
  id: string
  value : string
}

export interface PlanFormValues {
  planName : string,
  imageUrl : string | File,
  popular : string,
  discount : number | '',
  monthlyPrice : number | '',
  yearlyPrice : number | '',
  userAccessLimit : string,
  websiteAccessLimit : string,
  conversions : string,
  id? : string | Blob  
}

// Merging PlanFormValues and addOnsProps
export interface PlanWithAddOns extends PlanFormValues {
  addons: addOnsProps[];
}
export interface newPlanSlice {
  showCreateNew: boolean
  addOns : addOnsProps[]
  formValues : PlanFormValues
  selectedPlan: PlanWithAddOns
  setShowCreateNew: (value : boolean) => void
  setAddOns : (value : addOnsProps[]) => void
  resetAddons: () => void
  handleAddMore: () => void
  handleDelete: (id : string) => void
  handleChange: (id : string, newValue : string) => void
  setFormValues: (type : string, value : string) => void
  setSelectedPlan : (value : PlanWithAddOns) => void
  updateFormValues : (value : PlanWithAddOns) => void
  resetSelectedPlan : ()=> void
}



export const createNewPlanSlice: StateCreator<newPlanSlice> = ((set, get)=>({
  showCreateNew : false,
  addOns : [{id : uuidv4(), value : ''}],
  formValues : {
    planName : '',
    imageUrl : '',
    popular : '',
    discount : '',
    monthlyPrice : '',
    yearlyPrice : '',
    userAccessLimit : '',
    websiteAccessLimit : '',
    conversions : '',
  },
  selectedPlan : {
    planName : '',
    imageUrl : '',
    popular : '',
    discount : '',
    monthlyPrice : '',
    yearlyPrice : '',
    userAccessLimit : '',
    websiteAccessLimit : '',
    conversions : '',
    addons : [{id : uuidv4(), value : ''}],
    id : ''
  },

  setSelectedPlan : (value : PlanWithAddOns) => {
    set({selectedPlan : value})
  },

  resetSelectedPlan : ()=> {
    set({ 
          selectedPlan : {
          planName : '',
          imageUrl : '',
          popular : '',
          discount : '',
          monthlyPrice : '',
          yearlyPrice : '',
          userAccessLimit : '',
          websiteAccessLimit : '',
          conversions : '',
          addons : [{id : uuidv4(), value : ''}],
          id: ''
      }})
  },

  updateFormValues : (value : PlanWithAddOns) => {
    set({formValues : value})
  },


  setAddOns : (value) => {
    set({addOns : value})
  },

  resetAddons : ()=> {
    set({addOns : [{id : uuidv4(), value : ''}]})
  },

  handleAddMore : ()=> {
    const {addOns, setAddOns} = get();
    const arr = [...addOns, {id : uuidv4(), value : ''}]
    setAddOns(arr)
  },

  handleDelete : (id : string)=> {
    const {addOns, setAddOns} = get();
    const updatedArray = addOns?.filter(item => item?.id !== id);
    setAddOns(updatedArray)
  },

  handleChange : (id : string, newValue : string) => {
    const {addOns, setAddOns} = get();
    const updatedArray = addOns.map((elem)=>{
      if(elem?.id === id ){
        return {
          ...elem,
          value: newValue,
        }
      } else return elem
    })
    setAddOns(updatedArray)
  },

  setShowCreateNew : (value : boolean)=> {
    set({showCreateNew : value})
  },


  setFormValues: (type, value) => {
    const { formValues } = get();
    set(() => {
      return {
        formValues: {
          ...formValues,
          [type]: value,
        },
      };
    });
  },


}))