import React, { Component } from 'react';
import { create } from "../api";
import { withRouter} from 'react-router-dom'

class GroupCreate extends Component {
    state = { 
        group: {
            name: ""
        }
     } // end state


    handleChange = (event) => {
        const inputTagName = event.target.name
        const inputValue = event.target.value
        const formDataCopy = {...this.state.group} 
        formDataCopy[inputTagName] = inputValue 
        this.setState({ 
            group: formDataCopy
        })
    } // end handlechange

    handleSubmit = (event) => {
        event.preventDefault()
        const user = this.props.user
        const group = {...this.state.group}
        create(user, group) 
        .then(() => alert("Group Created Sucessfully"))
        .then(() => this.props.history.push('/groups'))
        .catch((error) => console.log(error))
    }
    

    render() { 
        console.log("omg srsly?")
        return ( 
            <div className="intro-img" style={{marginTop:"10%", marginBottom:"10%"}}>
                <form className='auth-form' onSubmit={this.handleSubmit}>
                <h1 style={{paddingBottom: "7%", color: "#717070"}}>New Group</h1>
                    <label>Group Name: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.group.name} placeholder="Group Name"/><br/>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
         )
    }
}
 
export default withRouter(GroupCreate);