import { StateCreator } from "zustand";

export interface newClientPermission {
  showClientPermission: boolean
  setShowNewPermission: () => void
}



export const createNewClientPermission: StateCreator<newClientPermission> = ((set, get)=>({
  showClientPermission : false,

  setShowNewPermission : ()=> {
    const {showClientPermission} = get();

    set({showClientPermission : !showClientPermission})
  }
}))