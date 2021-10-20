import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './Component/Header/Header'
import Sidebar from './Component/Sidebar/Sidebar'
import Homescreen from './Screen/Homescreen/Homescreen'
import "./_app.scss"
import Loginscreen from './Screen/LoginScreen/Loginscreen'
import { Route,Switch,Redirect,useHistory} from "react-router-dom"
import { useSelector } from 'react-redux'
import WatchScreen from './Screen/watchScreen/WatchScreen'
import SearchScreen from './Screen/SearchScreen'
import SubscriptionScreen from './Screen/subscriptionScreen/SubscriptionScreen'
import ChannelScreen from './Screen/channelScreen/ChannelScreen'
const Layout=({children})=>{
    const [sidebar,togglesidebar]=useState(false);

    let handleTogglesidebar = ()=> togglesidebar(value=>!value);
    return (
        <>
          <Header handleTogglesidebar={handleTogglesidebar} />
           <div className="app_container">
            <Sidebar sidebar={sidebar} handleTogglesidebar={handleTogglesidebar} />
               <Container fluid className="app_main">
              {/* <Homescreen/>  */}
              {
                  children
              }
              </Container> 
          </div> 
           
        </>
    )
      

}
const App = (props) => {
  const {accessToken,loading}=useSelector(state=>state.auth)
  const history=useHistory()
  useEffect(()=>{
      if(!loading && !accessToken)
      {
          history.push('/auth')

      }
  },[accessToken,loading,history])
    return (
      
            <Switch>
            <Route exact path="/">
              <Layout>
                  <Homescreen/>
              </Layout>
           </Route>
           <Route exact path="/auth">
             
                <Loginscreen/>
           </Route>
           <Route exact path="/search/:query">
              <Layout>
                <SearchScreen/>
              </Layout>
           </Route>
           <Route exact path="/watch/:id">
              <Layout>
               <WatchScreen/>
              </Layout>
           </Route>
           <Route exact path="/channel/:channelId">
              <Layout>
              <ChannelScreen/>
              </Layout>
           </Route>
           <Route exact path="/feed/subscriptions">
              <Layout>
               <SubscriptionScreen/>
              </Layout>
           </Route>
           <Route>
               <Redirect to="/"/>
           </Route>
            </Switch>
          
        
    )
        
    
}

export default App
