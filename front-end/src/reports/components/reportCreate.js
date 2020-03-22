import React, { Component } from 'react';
import { create } from "../api";
import { withRouter} from 'react-router-dom'

class ReportCreate extends Component {
    state = { 
        report: {
            name: "",
            content: "",
            tag: "",
            group: ""
        }
     } // end state


    handleChange = (event) => {
        const inputTagName = event.target.name
        const inputValue = event.target.value
        const formDataCopy = {...this.state.report} // copied the current state form
        formDataCopy[inputTagName] = inputValue // update the keys' values
        this.setState({ // update the formData in my state with the search keyword the user entered in the form
            report: formDataCopy
        })
        // console.log(this.state.formData)
    } // end handlechange

    handleSubmit = (event) => {
        event.preventDefault()
        const user = this.props.user
        const report = {...this.state.report}
        create(user, report) 
        .then(() => alert("Report Created Sucessfully"))
        .then(() => this.props.history.push('/reports'))
        .catch((error) => console.log(error))
    }
    

    render() { 
        return ( 
            <div className="intro-img" style={{marginTop:"10%", marginBottom:"10%"}}>
                <form className='auth-form' onSubmit={this.handleSubmit}>
                <h1 style={{paddingBottom: "7%", color: "#717070"}}>New Report</h1>
                    <label>Report Title: </label>
                    <input onChange={this.handleChange} type="text" name="name" value={this.state.report.title} placeholder="Report Title"/><br/>
                    
                    <label>Content: </label>
                    <textarea onChange={this.handleChange} type="text" name="content" value={this.state.report.content} placeholder="Report Content"/><br/>
                    
                    <label>Tag: </label>
                    <input onChange={this.handleChange} type="text" name="tag" value={this.state.report.tag} placeholder="Report Tags"/><br/>

                    <label>Group: </label>
                    <input onChange={this.handleChange} type="text" name="group" value={this.state.report.group} placeholder="Report Group"/><br/>

                    <label>Upload Files </label>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
         )
    }
}
 
export default withRouter(ReportCreate);