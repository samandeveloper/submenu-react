//submenu under the main menu
import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from "./context"


const Submenu = () => {

  const{isSubnavOpen,location,eachSubpage} = useGlobalContext()
  //or use the below line and instead of all the eachSubpage.links and eachSubpage.page in this file write links and page
  // const{isSubnavOpen,location,eachSubpage:{page,links}} = useGlobalContext()
  //the size for the style--It can be used to store a mutable value that does not cause a re-render when updated.useRef() only returns one item. It returns an Object called current.
  const container = useRef(null)
  //state
  const [columns, setColumns] = useState('col-2')

  useEffect(()=>{
    //by default col-2 is the defult for columns
    setColumns('col-2')
    //position for the submneu--this get the node
    const containerCurrent = container.current
    console.log(containerCurrent)
    const { center, bottom } = location  //bring the center and bottom from Navbar.js and location (state) from App.js
    //useRef to change the style of an element (<aside>) and what is inside the element
    //set each submenu centers of each related navbar also it defines the size of the submenu box too
    containerCurrent.style.left = `${center}px`
    containerCurrent.style.top =`${bottom}px`
  
    //set columns for each submenu
    if(eachSubpage.links.length ===3){
      setColumns('col-3')
      }if(eachSubpage.links.length>3){
        setColumns('col-4')
        // console.log(columns)
      }
  },[eachSubpage.links,eachSubpage.page,location])

  return(
    //IMPORTANT: instead of page and links we must use eachSubpage to have each submenu under the menu
    <aside className={`${isSubnavOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <section>
        <section>
          <h4>{eachSubpage.page}</h4> 
            <div className={`submenu-center ${columns}`}>
              {eachSubpage.links.map((link,index)=>{
                const{url,icon,label} = link
                return(
                <a key={index} href={url}>{icon}{label}</a>
                )
              })}
            </div>
        </section>
      </section>
    </aside>
  )
}

export default Submenu





