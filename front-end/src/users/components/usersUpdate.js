import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { show, update } from "../api";

class UsersUpdate extends Component {
    state = { 
        selectedUser: {}
     }

    componentDidMount() {
        const admin = this.props.user
        const selectedUserId = this.props.match.params.id
        show(admin, selectedUserId)
        .then( response => {
            const selectedUser = response.data.user
            // console.log(selectedUser)
            this.setState({
                selectedUser: selectedUser
            })
        })
        .catch(error => console.log(error))
     } // end CDM

     handleChange = (event) => {
        const inputTagName = event.target.name
        const inputValue = event.target.value
        const formDataCopy = {...this.state.selectedUser}
        formDataCopy[inputTagName] = inputValue 
        this.setState({ 
            selectedUser: formDataCopy
        })
    } // end handlechange

    handleSubmit = (event) => {
        event.preventDefault()
        const admin = this.props.user
        const selectedUser = {...this.state.selectedUser}
        const selectedUserId = this.props.match.params.id
        update(admin, selectedUser, selectedUserId)
        .then(() => alert("User Updated Sucessfully"))
        .then(() => this.props.history.push(`/users`))
        .catch((error) => console.log(error))
    } // end handleSubmit


    render() { 
        return ( 
        <div className="intro-img" style={{marginTop:"10%", marginBottom:"10%"}}>
           
            <form className='auth-form' onSubmit={this.handleSubmit}>
                <h1 style={{paddingBottom: "7%", color: "#717070"}}>Edit User</h1>     
                {/* might disable the updates on personal info */}
                <label>User Name: </label>  
                <input onChange={this.handleChange} type="text" name="name" value={this.state.selectedUser.name} placeholder="User Name"/><br/>

                <label>User Email: </label>
                <textarea onChange={this.handleChange} type="text" name="email" value={this.state.selectedUser.email} placeholder="User Email"/><br/>

                <label>User Role: </label>
                <select name="admin" value={this.state.selectedUser.admin} onChange={this.handleChange}>
                        <option value="true">Admin User</option>
                        <option value="false">Regular User</option>
                </select> <br/>

                    <input type="submit" value="Submit"/>
                    <Link to='/users'> Back</Link>
            </form>

           
        </div> )
    }
}
 
export default withRouter(UsersUpdate)