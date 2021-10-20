import React from 'react'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import VideoMetaData from '../../Component/videoMetaData/VideoMetaData'
import './watchScreen.scss'
import VideoHorizontal from '../../Component/videoHorizontal/VideoHorizontal'
import Comments from '../../Component/comments/Comments'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getRelatedVideos, getVideoById } from '../../redux/actions/videos.action'
import Skeleton from 'react-loading-skeleton'
import { SkeletonTheme } from 'react-loading-skeleton'

const WatchScreen = () => {
    const {id}=useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getVideoById(id))
        dispatch(getRelatedVideos(id))
       
    }, [dispatch,id])
    const {video,loading}=useSelector(state=>state.selectedVideo)
    const {videos,loading:relatedVideosLoading}=useSelector(state=>state.relatedVideo)
    return (
       <Row>
           
            <Col lg={8}>
                <div className="watchScreen__player">
                  <iframe src={`http://www.youtube.com/embed/${id}`}
                  title={video?.snippet?.title}
                  allowFullScreen
                  width="100%"
                  height="100%" frameBorder='0'>

                  </iframe>
                </div>
                {
                    !loading?  <VideoMetaData video={video} videoId={id}/>:<h6>Loading...</h6>
                }
              
                <Comments videoId={id} totalComments={video?.statistics?.commentCount}/>
            </Col>
            <Col lg={4}>
                {
                    !relatedVideosLoading ? videos?.filter(video=>video.snippet)
                    .map((video)=>
                        <VideoHorizontal video={video} key={video.id.videoId}/>
                    ):<SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                        <Skeleton width="100%" height="130px" count={15}/>
                    </SkeletonTheme>
                    
                }
            </Col>
       </Row>
    )
}

export default WatchScreen
