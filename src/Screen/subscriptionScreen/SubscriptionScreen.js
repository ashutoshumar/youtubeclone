import './subscriptionScreen.scss'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSubscribedChannel } from '../../redux/actions/videos.action'
import { Container } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import { SkeletonTheme } from 'react-loading-skeleton'
import VideoHorizontal from '../../Component/videoHorizontal/VideoHorizontal'

const SubscriptionScreen = () => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getSubscribedChannel())
    }, [dispatch])
    const {loading,videos}=useSelector(state=>state.subscriptionsChannel)
    return (
       <Container fluid>
         {
             !loading?(videos?.map(video=><VideoHorizontal video={video} key={video.id} subScreen/>)):<SkeletonTheme color='#343a40' highlightColor='#3c4147'>
             <Skeleton width="100%" height="130px" count={15}/>
         </SkeletonTheme>
         }
       </Container>
    )
}

export default SubscriptionScreen
