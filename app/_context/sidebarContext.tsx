"use client"
import React ,{ useState, createContext, ReactNode  } from 'react'

interface SidebarContextProps {
  showSidebar : boolean;
  setShowSidebar : React.Dispatch<React.SetStateAction<boolean>>;
  showFrontSidebar : boolean
  setShowFrontSidebar : React.Dispatch<React.SetStateAction<boolean>>;

}

type SidebarContextProviderProps = {
  children : ReactNode
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(undefined)

const SidebarContextProvider : React.FC<SidebarContextProviderProps> = ({children}) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false)
  const [showFrontSidebar, setShowFrontSidebar] = useState<boolean>(false)
  return (
      <SidebarContext.Provider value={{showSidebar, setShowSidebar, showFrontSidebar, setShowFrontSidebar}}>{children}</SidebarContext.Provider>
  )
}

export default SidebarContextProvider