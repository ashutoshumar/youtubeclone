import React,{useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Categoriesbar from '../../Component/Categoriesbar/Categoriesbar'
import Video from '../../Component/video/Video'
import { getPopularVideos, getVideosByCatagory } from '../../redux/actions/videos.action'
import { useDispatch, useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from '../../Component/skeleton/SkeletonVideo'
const Homescreen = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(getPopularVideos())
    }, [dispatch])

    const {videos,activeCategory,loading}= useSelector(state=>state.homeVideos)
    const fetchData = ()=>{
       //logic
       if(activeCategory==="All")
       dispatch(getPopularVideos())
       else
      {
         dispatch(getVideosByCatagory(activeCategory))
      }
    }
    return (
       <Container>
          
        <Categoriesbar/>
        
              <InfiniteScroll
            
           dataLength={videos.length}
            next={fetchData}
             hasMore={true}
         //  loader={
         //        <div className="spinner-border text-danger d-block mx-auto">

         //        </div>
         //    }
            
            >   
             <Row>
              {!loading ?  videos.map((video)=>
             <Col lg={3} md={4}>
                <Video video={video} key={video.id}/> 
                
              </Col>
                 ): [...Array(20)].map(()=>  <Col lg={3} md={4}><SkeletonVideo/></Col>)
            }
             </Row> 
               </InfiniteScroll>   
       
       </Container>
    )
}

export default Homescreen
