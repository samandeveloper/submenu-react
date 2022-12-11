//menu
import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from "./context"

const Navbar = () => {
  const {openSubnav,openSidebar,closeSubnav} = useGlobalContext()
  const displaysubmenu = (e)=>{
    const content = e.target.textContent
    console.log(content)
    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn)
    const center = (tempBtn.left + tempBtn.right) / 2;   //count in the middle of button--subnav in the middle of the each navbar
    console.log(center)
    const bottom = tempBtn.bottom - 3;  //we want submenu 3px down the main menu--distance between navbar and submenu
    console.log(bottom)
    openSubnav(content,{center,bottom});
  }

  //to close the submenu when mouse is outside (mouse is not over the menu)
  const handleSubmenu = (e) =>{
    if(!e.target.classList.contains('link-btn')){
      closeSubnav();
    }
  }

  return(
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img className="nav-logo" src={logo}/>
          <button className='btn toggle-btn' onClick={openSidebar}><FaBars/></button>
        </div>

        <ul className='nav-links'>
          <li><button className='link-btn' onMouseOver={displaysubmenu}>products</button></li>
          <li><button className='link-btn' onMouseOver={displaysubmenu}>developers</button></li>
          <li><button className='link-btn' onMouseOver={displaysubmenu}>company</button></li>
        </ul>
        <button className='btn signin-btn'>sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
