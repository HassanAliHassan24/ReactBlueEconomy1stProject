import React, { Component } from "react";
import FisherService from "./Service/FisherService";

class FisherListComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
              fishers: []

        }

        this.addFisher = this.addFisher.bind(this);
        this.editFisher = this.editFisher.bind(this);
    }

    editFisher(id){
        this.props.history.push(`/add-Fisher/${id}`);

    }
    componentDidMount(){
        FisherService.getFishers().then((res) => {
            this.setState({ fishers: res.data});

        });
    }

        addFisher(){
            this.props.history.push('/CreateFihserComponent/_add');
        }

    render() {
        return(
            <div>

                <h2 className="text-centet">Fisher List</h2>
                <div className="row">
                    <button style={{width: "15%",marginBottom: "5px", marginLeft: "-0px"}} className="btn btn-primary" onClick={this.addFisher}> Add Fisher</button>
                </div>
                <div  className="row">


                        <table style={{color:"white",fontSize:"15px"}} className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Id</th>
                                    <th>UserName</th>
                                    <th>Password</th>
                                    <th>phoneNumber</th>
                                    <th>FisherType</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    this.state.fishers.map(
                                        fisher =>
                                        <tr key={fisher.id}>
                                        <td >{fisher.firstName}</td>
                                        <td >{fisher.lastName}</td>
                                        <td >{fisher.emailId}</td>
                                        <td >{fisher.userName}</td>
                                        <td >{fisher.password}</td>
                                        <td >{fisher.phoneNumber}</td>
                                        <td >{fisher.fisherType}</td>
                                        <td >{fisher.address}</td>

                                        <td>
                                            <button onClick={ () => this.editFisher(fisher.id)} className="btn btn-info">Update</button>
                                        </td>

                                        
                                        

                                        </tr>
                                    )
                                }

                            </tbody>

                        </table>

                </div>

            </div>
        )
    }
}
export default FisherListComponent;