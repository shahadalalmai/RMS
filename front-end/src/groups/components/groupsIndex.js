import React, { Component } from 'react';
import { index, destroy } from "../api";
import { Link , withRouter} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import add from "../../images/add.svg"
import edit from "../../images/edit.svg";
import remove from "../../images/cross.svg";


class GroupsIndex extends Component {
    state = { 
        groups: []
     }

    componentDidMount(){
        const user = this.props.user
        index(user) // excuting the api
        .then( (response) => {
            const groups = response.data.groups
            this.setState({
                groups: groups
            })
        })
        .catch(error => console.log(error))
    } // end CDM

    destroy = (id) => {
        const user = this.props.user
        destroy(user, id) 
        .then( () => alert("Are you sure you want to Delete?"))
        .then( () => {
            const groups = this.state.groups.filter( (group) => group._id !== id)
            this.setState({
                groups: groups
            })
        })
        .catch( error => console.log(error))
    } // end destroy
    

    render() { 
        return (   
            <div className="intro-img" style={{marginTop:"10%", marginBottom:"10%"}}> 
                <h1 style={{paddingBottom: "2%", color: "#717070"}}>System Groups</h1>
                <h3 style={{color: "orange", textAlign: "left"}}>Add a New Group <Link to={`group/new`}><img src={add} height="40px"  width="40px" alt="add"></img></Link></h3> 
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Group ID</th>
                        <th>Group Name</th>
                        <th>Edit Group</th>
                        <th>Delete Group</th>
                    </tr>
                    </thead> 
                    <tbody>
                        {this.state.groups.map( (group, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td><p style={{paddingTop: "20px"}}>{group._id}</p></td>
                                <td><p style={{paddingTop: "20px"}}>{group.name}</p></td>
                                <td><Link to={`/groups/edit/${group._id}`}><img src={edit} height="40px"  width="40px" alt="show"></img></Link>
                                </td> 
                                <td> <img className="point" onClick={() => this.destroy(group._id)} src={remove} height="40px"  width="40px" alt="remove"></img> </td>
                            </tr>
                        ) )}           
                     </tbody>
                </Table>
            </div>
                )
                        }
} // end class
 
export default withRouter(GroupsIndex)