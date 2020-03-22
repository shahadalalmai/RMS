import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { show, update } from "../api";

class GroupUpdate extends Component {
    state = { 
        group: {}
     }

    componentDidMount() {
        const user = this.props.user
        const groupId = this.props.match.params.id
        show(user, groupId)
        .then( response => {
            const group = response.data.group
            this.setState({
                group: group
            })
        })
        .catch(error => console.log(error))
     } // end CDM

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
        const groupId = this.props.match.params.id
        update(user, group, groupId)
        .then(() => alert("Group Updated Sucessfully"))
        .then(() => this.props.history.push(`/groups`))
        .catch((error) => console.log(error))
    } // end handleSubmit


    render() { 
        console.log(this)
        return ( 
        <div className="intro-img" style={{marginTop:"10%", marginBottom:"10%"}}>
            
            <form className='auth-form' onSubmit={this.handleSubmit}>
                <h1 style={{paddingBottom: "7%", color: "#717070"}}>Edit Group</h1>     
                <label>Group Name: </label>  
                <input onChange={this.handleChange} type="text" name="name" value={this.state.group.name} placeholder="Group Name"/><br/>

                    <input type="submit" value="Submit"/>
                    <Link to={`/groups`}> Back</Link>
            </form>
        </div> )
    }
}
 
export default withRouter(GroupUpdate)