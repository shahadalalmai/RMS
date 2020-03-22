import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { show, update } from "../api";

class ReportUpdate extends Component {
    state = { 
        report: {}
     }

    componentDidMount() {
        const user = this.props.user
        const reportId = this.props.match.params.id
        show(user, reportId)
        .then( response => {
            const report = response.data.report
            this.setState({
                report: report
            })
        })
        .catch(error => console.log(error))
     } // end CDM

     handleChange = (event) => {
        const inputTagName = event.target.name
        const inputValue = event.target.value
        const formDataCopy = {...this.state.report} // copied the current state form
        formDataCopy[inputTagName] = inputValue // update the keys' values
        this.setState({ // update the formData in my state with the search keyword the user entered in the form
            report: formDataCopy
        })
    } // end handlechange

    handleSubmit = (event) => {
        event.preventDefault()
        const user = this.props.user
        const report = {...this.state.report}
        const reportId = this.props.match.params.id
        update(user, report, reportId)
        .then(() => alert("Report Updated Sucessfully"))
        .then(() => this.props.history.push(`/reports/${reportId}`))
        .catch((error) => console.log(error))
    } // end handleSubmit


    render() { 
        console.log(this)
        return ( 
        <div className="intro-img" style={{marginTop:"10%", marginBottom:"10%"}}>
            
            <form className='auth-form' onSubmit={this.handleSubmit}>
                <h1 style={{paddingBottom: "7%", color: "#717070"}}>Edit Your Report</h1>     
                <label>Report Title: </label>  
                <input onChange={this.handleChange} type="text" name="name" value={this.state.report.name} placeholder="Report Title"/><br/>

                <label>Content: </label>
                <textarea onChange={this.handleChange} type="text" name="content" value={this.state.report.content} placeholder="Report Content"/><br/>

                <label>Tag: </label>
                <input onChange={this.handleChange} type="text" name="tag" value={this.state.report.tag} placeholder="Report Tags"/><br/>

                <label>Group: </label>
                <input onChange={this.handleChange} type="text" name="group" value={this.state.report.group} placeholder="Report Group"/><br/>

                <label>Upload Files </label>
                    <input type="submit" value="Submit"/>
                    <Link to={`/reports/${this.props.match.params.id}`}> Back</Link>
            </form>
        </div> )
    }
}
 
export default withRouter(ReportUpdate)