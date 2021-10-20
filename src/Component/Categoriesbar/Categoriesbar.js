import React, { useState } from 'react'
import "./_categoriesbar.scss"
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCatagory } from '../../redux/actions/videos.action'
const keywords=[
    "All",
    "React Js",
    "Angular Js",
    "React Native",
    "use of API",
    "Redux",
    "Music",
    "Algorithm of Art",
    "Guitar",
    "Bengali Songs",
    "Coding",
    "Cricket",
    "football",
    "Real madrid",
    "Gatsby"
]
const Categoriesbar = (props) => {
    const [activeElement,setActiveElement]=useState('All');
    const dispatch = useDispatch()
    let handleClick=(value)=>{
        setActiveElement(value)
        if(value==="All")
        {
           dispatch(getPopularVideos()) 
        }
        else{
            dispatch(getVideosByCatagory(value))
        }
        
    }
    return (
        <div className="CategoriesBar">
         {
             keywords.map((value,i)=><span
             className={
                 activeElement===value?"active":
                 " "
             }
             onClick={()=>handleClick(value)} key={i}>{value}</span>)
         } 
        </div>
    )
}

export default Categoriesbar
