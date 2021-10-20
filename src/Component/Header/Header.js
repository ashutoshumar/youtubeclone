import React from 'react'
import "./_header.scss"
import {FaBars} from 'react-icons/fa'
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications,MdApps} from "react-icons/md"
import { useState } from "react"
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
const Header = ({handleTogglesidebar}) => {
  const [input,setInput]=useState(' ')
  const history=useHistory()
  const handleSubmit=(e)=>{
   e.preventDefault()
   history.push(`/search/${input}`)
   setInput('')
  }
  const { accessToken}=useSelector(state=>state.selectedVideo)
  
  
  const {user}= useSelector(state=>state.auth)
  
   
    return (
        <div className=" header">
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
                 <img src={user?.photoUrl} alt=" " />   
                          </div>
        </div>
    )
}

export default Header
