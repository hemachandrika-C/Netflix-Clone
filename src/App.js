import React from 'react';
import * as Routes from "./constant/routes"
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {Home, Browse, Signin,Signup} from "./Pages/index"
import {IsUserRedirect,ProtectedRoute} from  "./helpers/routes"
import {useAuthListener} from './hooks/index';
import firebase from './lib/firebase.prod'

function App() { 
  const {user}=useAuthListener();
  console.log(user)
   
  return (
  <Router>    
    <Switch>
       <IsUserRedirect user={user} loggedInPath={Routes.BROWSE} path={Routes.SIGN_IN} exact>
       <Signin /> 
       </IsUserRedirect> 

        <IsUserRedirect user={user} loggedInPath={Routes.BROWSE} path={Routes.SIGN_UP} exact>
        <Signup /> 
        </IsUserRedirect>     
      
        <ProtectedRoute user={user} path={Routes.BROWSE} exact>
          <Browse />
        </ProtectedRoute>

        
        <IsUserRedirect user={user} loggedInPath={Routes.BROWSE} path={Routes.HOME} exact>
        <Home/> 
        </IsUserRedirect> 

        </Switch>         
  </Router>
  )
}

export default App;
