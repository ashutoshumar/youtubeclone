import React, { useEffect, useState } from 'react'
import "./_comments.scss"
import Comment from '../comment/Comment'
import { useDispatch } from 'react-redux'
import { addComment, getCommentsOfVideoById } from '../../redux/actions/comments.action'
import { useSelector } from 'react-redux'
const Comments = ({videoId,totalComments}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId))
    
  }, [dispatch,videoId])
  const comments = useSelector(state =>state.commentList.comments)
  const {photoUrl}= useSelector(state=>state.auth?.user)
  const _comments=comments?.map(comment=>comment.snippet.topLevelComment.snippet)
  const [text,setText]=useState(' ')
    const handleComment=(e)=>{
      e.preventDefault();
      if(text.length===0) return

         dispatch(addComment(videoId,text))
         setText(' ')
    }
    return (
        <div className="comments">
           <p>{totalComments} Comments</p> 
           <div className="comment__form d-flex w-100 my-2">
               <img src={photoUrl} alt=" " className="rounded-circle mr-3" />
               <form onSubmit={handleComment} className="d-flex flex-grow-1">
                 <input type="text" className="flex-grow-1" placeholder="write a comment..."
                 value={text} onChange={e=>setText(e.target.value)}/>
                 <button className="border-0 p-2">Comment</button>
               </form>
            </div> 
            <div className="comments__list">
              {
                   _comments?.map((comment,i)=><Comment comment={comment} key={i}/>)
              }
            </div>
        </div>
    )
}

export default Comments
