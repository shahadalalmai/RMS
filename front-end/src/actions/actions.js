import React, { Component } from 'react';
import { Link , withRouter} from 'react-router-dom'
import contact from "../images/contact.svg"
import team from "../images/team.svg"
import admin from "../images/admin.svg";



class Actions extends Component {

    render() { 
        return (  
        <div className="register intro">
           <div className="intro-img"> <Link to='/reports'><img src={contact} height="250px"  width="250px" alt="MR"></img></Link><h3>Manage Reports</h3></div>
           <div className="intro-img"><Link to=''><img src={team} height="250px"  width="250px" alt="MG"></img></Link><h3>Manage Groups</h3></div>
           <div className="intro-img"><Link to='/users'><img src={admin} height="250px"  width="250px" alt="MU"></img></Link><h3>Manage Users</h3></div>
        </div>

         )
    }
}
 
export default withRouter(Actions)