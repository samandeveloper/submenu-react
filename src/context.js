//useContext instead of the props
import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const AppContext = createContext();

function AppProvider({children}) {  //remember to add children
  //states
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)
  const [isSubnavOpen,setIsSubnavOpen] = useState(false)
  //state for finding each sublinks
  const [eachSubpage,setEachSubpage] = useState({page:'',links:[]})
  // state for location of the submenu
  const[location,setLocation] =useState({})  //location should be an object since it has heighr,width,etc

  //functions
  const openSidebar = () =>{
    setIsSidebarOpen(true)
  } 

  const closeSidebar = () =>{
    setIsSidebarOpen(false)
  }

  const openSubnav =(text,coordinates) =>{
    const eachSub = sublinks.find((eachLink)=>{  //.find returns the first element that has the condition
      return(eachLink.page === text)
      })
      setEachSubpage(eachSub)
      setIsSubnavOpen(true)
      setLocation(coordinates)
  }

  const closeSubnav =() =>{
    setIsSubnavOpen(false)
  }

  return (
    //pass to the components in the value={{}}
    <AppContext.Provider value={{isSidebarOpen,isSubnavOpen,eachSubpage,location,openSidebar,closeSidebar,openSubnav,closeSubnav}}>
        {children}
    </AppContext.Provider>
  )
}

//define useGlobalContext
export const useGlobalContext = ()=>{   
    return useContext(AppContext)
}

export {AppProvider,AppContext}  
