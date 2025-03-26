import { StateCreator } from "zustand"

export interface userListProps {
  id : string,
  name : string,
  email : string,
  emailVerified : boolean,
  image : string,
  socialId : string,
  socialIdType : string,
  role : string,
  createdAt : string,
} 

export interface userSliceProps {
  currentPage : number
  totalPages : number
  setCurrentPage : (value : number) => void
  setTotalPages : (value : number) => void
  handlePrev : () => void
  handleNext : (value : number) => void
}

export const createAdminUserSlice : StateCreator<userSliceProps> = ((set, get) => ({
  currentPage : 1,
  totalPages : 1,

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
  }
}))