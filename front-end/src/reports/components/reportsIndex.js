import React, { Component } from 'react';
import { index, destroy } from "../api";
import { Link , withRouter} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import show from "../../images/checked.svg"
import edit from "../../images/document.svg";
import remove from "../../images/remove.svg";
import add from "../../images/new.svg";



class ReportsIndex extends Component {
    state = { 
        reports: []
     }

    componentDidMount(){
        const user = this.props.user
        index(user) // excuting the api
        .then( (response) => {
            const reports = response.data.reports
            this.setState({
                reports: reports
            })
        })
        .catch(error => console.log(error))
    } // end CDM

    destroy = (id) => {
        const user = this.props.user
        destroy(user, id) // first authorize the user, then display his resource
        .then( () => alert("Are you sure you want to Delete?"))
        .then( () => {
            const reports = this.state.reports.filter( (report) => report._id !== id) // filtering the reports array to only display the ones that are no deleted. This is to remove the report from the front end by updating the state
            this.setState({
                reports: reports
            })
        })
        .catch( error => console.log(error))
    } // end destroy
    

    render() { 
        return (   
            <div className="intro-img" style={{marginTop:"10%", marginBottom:"10%"}}> 
                <h1 style={{paddingBottom: "2%", color: "#717070"}}>System Reports</h1>
                <h3 style={{color: "orange", textAlign: "left"}}>Add a New Report <Link to={`/report/new`}><img src={add} height="60px"  width="60px" alt="add"></img></Link></h3> 
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Report Title</th>
                        <th>Show</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead> 
                    <tbody>
                        {this.state.reports.map( (report, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td><p style={{paddingTop: "20px"}}>{report.name}</p></td>
                                <td><Link to={`/reports/${report._id}`}><img src={show} height="60px"  width="60px" alt="show"></img></Link>
                                </td> 
                                <td>
                                <Link to={`/report/edit/${report._id}`}><img src={edit} height="60px"  width="60px" alt="edit"></img></Link> </td>
                                <td> <img className="point" onClick={() => this.destroy(report._id)} src={remove} height="60px"  width="60px" alt="remove"></img> </td>
                            </tr>
                        ) )}           
                     </tbody>
                </Table>
            </div>
                )
                        }
} // end class
 
export default withRouter(ReportsIndex)