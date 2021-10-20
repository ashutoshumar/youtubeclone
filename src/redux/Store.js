import {createStore,applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk"
import { authReducer } from './reducers/auth.reducer';
import { homeVideosReducer,selectedVideoReducer } from './reducers/videos.reducer';
import { channelDetailsReducer } from './reducers/channel.reducer';
import { commentListReducer } from './reducers/comments.reducer';
import { relatedVideoReducer } from './reducers/videos.reducer';
import { searchedVideosReducer } from './reducers/videos.reducer';
import { subscriptionChannelReducer } from './reducers/videos.reducer';
import { channelVideoReducer } from './reducers/videos.reducer';

const rootReducer=combineReducers({
    auth:authReducer,
    homeVideos:homeVideosReducer,
    selectedVideo:selectedVideoReducer,
    channelDetails:channelDetailsReducer,
    commentList:commentListReducer,
    relatedVideo:relatedVideoReducer,
    searchVideos:searchedVideosReducer,
    subscriptionsChannel:subscriptionChannelReducer,
    channelVideos:channelVideoReducer,
    
})
const store=createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))

export default store;