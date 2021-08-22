import { FC , useEffect } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect 
} from 'react-router-dom';
import Dashboard from './components/Dashboard'
import Preferences from './components/Preferences'
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import NotFound from './components/NotFound';

import { Roles } from './roles/roles'

const App = ()=>{
  const { Guest , Admin , Developer } = Roles;
  useEffect(()=>{
    console.log(Guest)
    console.log(Admin)
    console.log(Developer)
  })
  let accessed = 'Admin';
  console.log('accessed =>',accessed )
  console.log('ROLA ADMINA =>',Roles.Admin)
  return(
    <>
      { Roles.Admin === accessed ?
    <Router>
    <Switch>
   
      <Route exact path='/' component={Dashboard} />
      <Route path='/preferences' component={Preferences} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/account' component={Account} />
      <Route component={NotFound} />
  
    </Switch>
  </Router>
      : null
    }
  </>
  )

}
export default App;