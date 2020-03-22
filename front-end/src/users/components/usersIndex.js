import React, { Component } from 'react';
import { index, destroy } from "../api";
import { Link , withRouter} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import add from "../../images/add.svg"
import edit from "../../images/edit.svg";
import remove from "../../images/cross.svg";


class UsersIndex extends Component {
    state = { 
        users: []
     }

    componentDidMount(){
        const user = this.props.user
        index(user) // excuting the api
        .then( (response) => {
            const users = response.data.users
            this.setState({
                users: users
            })
        })
        .catch(error => console.log(error))
    } // end CDM

    destroy = (id) => {
        const user = this.props.user
        destroy(user, id) 
        .then( () => alert("Are you sure you want to Delete?"))
        .then( () => {
            const users = this.state.users.filter( (user) => user._id !== id)
            this.setState({
                users: users
            })
        })
        .catch( error => console.log(error))
    } // end destroy
    

    render() { 
        return (   
            <div className="intro-img" style={{marginTop:"10%", marginBottom:"10%"}}> 
                <h1 style={{paddingBottom: "2%", color: "#717070"}}>System Users</h1>
                <h3 style={{color: "orange", textAlign: "left"}}>Add a New User <Link to={`/sign-up`}><img src={add} height="40px"  width="40px" alt="add"></img></Link></h3> 
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>Edit User</th>
                        <th>Delete User</th>
                    </tr>
                    </thead> 
                    <tbody>
                        {this.state.users.map( (user, index) => (
                            <tr>
                                <td>{index+1}</td>
                                <td><p style={{paddingTop: "20px"}}>{user._id}</p></td>
                                <td><p style={{paddingTop: "20px"}}>{user.name}</p></td>
                                <td><Link to={`/users/edit/${user._id}`}><img src={edit} height="40px"  width="40px" alt="show"></img></Link>
                                </td> 
                                <td> <img className="point" onClick={() => this.destroy(user._id)} src={remove} height="40px"  width="40px" alt="remove"></img> </td>
                            </tr>
                        ) )}           
                     </tbody>
                </Table>
            </div>
                )
                        }
} // end class
 
export default withRouter(UsersIndex)