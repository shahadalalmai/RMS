import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'
import { show } from "../api";
import Table from 'react-bootstrap/Table'
import edit from "../../images/document.svg";


class ReportShow extends Component {
    state = { 
        report: {}
     }

     componentDidMount() {
        const user = this.props.user
        const reportId = this.props.match.params.id // get the report id
        show(user, reportId)
        .then( response => {
            const report = response.data.report
            this.setState({
                report: report
            })
        })
        .catch(error => console.log(error))
     }
    
    render() { 
        return ( 
            <div className="intro-img" style={{marginTop:"10%", marginBottom:"10%"}}>
                <h1 style={ {textAlign: "center", marginBottom: "3%", marginTop: "2%" , color: "#717070"}}>Report Details</h1>
                <h3 style={{color: "orange", textAlign: "left"}}>
                    Edit <Link to={`/report/edit/${this.state.report._id}`}><img src={edit} height="60px"  width="60px" alt="edit"></img></Link> </h3>     
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Report Title</th>
                            <th>Content</th>
                            <th>Tag</th>
                            <th>Group</th>
                        </tr>
                        </thead> 
                        <tbody>
                            <tr>
                                <td>{this.state.report.name}</td>
                                <td>{this.state.report.content}</td>
                                <td>{this.state.report.tag}</td>
                                <td>{this.state.report.group}</td>
                            </tr>        
                        </tbody>
                    </Table>
                 <Link to="/reports"><h4> Back</h4></Link> 
            </div>
         )
    }
}
 
export default withRouter(ReportShow)