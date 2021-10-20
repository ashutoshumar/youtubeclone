import React from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getVideosBySearch } from '../redux/actions/videos.action'
import VideoHorizontal from '../Component/videoHorizontal/VideoHorizontal'
import { Container } from 'react-bootstrap'
import { SkeletonTheme } from 'react-loading-skeleton'
import Skeleton from 'react-loading-skeleton'
import InfiniteScroll from 'react-infinite-scroll-component'

const SearchScreen = () => {
    const {query}=useParams()
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getVideosBySearch(query))
    }, [dispatch,query])
   
      const {videos,loading}= useSelector(state=>state.searchVideos)

      const fetchData = ()=>{
        //logic
       dispatch(getVideosBySearch(query))
     }
    return (
        <Container> 
           <InfiniteScroll
            
            dataLength={videos.length}
             next={fetchData}
              hasMore={true}
          //  loader={
          //        <div className="spinner-border text-danger d-block mx-auto">
 
          //        </div>
          //    }
             
             >  
            {
                !loading?(videos?.map(video=><VideoHorizontal video={video} key={video.id.videoId} searchScreen/>)):<SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                <Skeleton width="100%" height="130px" count={15}/>
            </SkeletonTheme>
            }
             </InfiniteScroll> 
        </Container>
    )
}

export default SearchScreen

