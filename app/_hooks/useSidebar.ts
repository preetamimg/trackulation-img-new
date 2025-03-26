import { SidebarContext } from "@/app/_context/sidebarContext";
import { useContext } from "react";

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarContextProvider");
  }
  
  const { showSidebar, setShowSidebar, showFrontSidebar , setShowFrontSidebar } = context;

  const handleFrontSidebar = ()=> {
    const wrapper = document.querySelector('.frontEndLayoutWrapper')
    if(showFrontSidebar) {
      setShowFrontSidebar(false)
      wrapper?.classList.remove('overflow-hidden')
      wrapper?.classList.add('overflow-y-auto')
    } else {
      setShowFrontSidebar(true)
      wrapper?.classList.add('overflow-hidden')
      wrapper?.classList.remove('overflow-y-auto')
    }
  }
  return { showSidebar, setShowSidebar, showFrontSidebar, setShowFrontSidebar, handleFrontSidebar };
};
