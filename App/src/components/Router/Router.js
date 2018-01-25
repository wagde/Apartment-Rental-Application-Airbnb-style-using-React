import Navbar from '../Navbar/Navbar';
import Homes from '../Homes/Homes';
import Location from '../Location/Location';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import React ,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


export default class Routers extends Component {
  constructor() {
      super();
      this.state = {isLogIn:false};
  }
  render(){
    return(
  <Router>
    <div>
    <Navbar/>
      <Route exact path="/" component={Homes}/>
      <Route path="/Sign Up" component={SignUp}/>
      <Route path="/Log In" component={SignIn}/>
      {/* <Route path="/Log Out" component={}/> */}
       <Route path="/Location/**" component={Location}/>
    </div>
  </Router>
)
  }
}

     