import React from 'react'
import "./_header.scss"
import {FaBars} from 'react-icons/fa'
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications,MdApps} from "react-icons/md"
import { useState } from "react"
import { useHistory } from 'react-router'
const Header = ({handleTogglesidebar}) => {
  const [input,setInput]=useState(' ')
  const history=useHistory()
  const handleSubmit=(e)=>{
   e.preventDefault()
   history.push(`/search/${input}`)
   
  }
    return (
        <div className="border border-primary header">
          <FaBars className="header__menu" size={26}
          onClick={()=>handleTogglesidebar()}/>
          <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt="some" className="header__logo"/>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="search" value={input} onChange={e=>setInput(e.target.value)}/>
            <button type="submit">
              <AiOutlineSearch size={20}/>
              </button>
              </form>
              <div className="header__icons">
                <MdNotifications size={28}/>
                <MdApps size={28}/>
                <img src="https://www.bing.com/th?id=OIP.X_65uIJkSF8bJl_zyU4twgHaEo&w=155&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="  " />             </div>
        </div>
    )
}

export default Header
