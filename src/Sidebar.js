//sidebar for small devices -- includes sublinks and a close tag
import React from 'react'
import { FaExternalLinkSquareAlt, FaTimes } from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from "./context"

const Sidebar = () => {
  const{isSidebarOpen,closeSidebar} = useGlobalContext()
  return(
    <div className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>

        <div className='sidebar-links'>
          {sublinks.map((item,index)=>{
            const{links,page} = item
            return(
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link,index)=>{
                    return(
                      <a key={index} href={link.url}>
                      {link.icon}
                      {link.label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
