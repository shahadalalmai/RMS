import React, { Component } from 'react';
import { Link , withRouter} from 'react-router-dom'
import lock from "../images/lock.svg"
import firewall from "../images/firewall.svg"


class Profile extends Component {

    render() { 
        return (  
        <div className="register intro">
           <div className="intro-img"> <Link to='/change-password'><img src={lock} height="250px"  width="250px" alt="changepsw"></img></Link><h3>Change Password</h3></div>
           <div className="intro-img"><Link to='/sign-out'><img src={firewall} height="250px"  width="250px" alt="signout"></img></Link><h3>Sign Out</h3></div>
        </div>
         )
    }
}
 
export default withRouter(Profile)