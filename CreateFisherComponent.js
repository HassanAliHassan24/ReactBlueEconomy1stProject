import React, { Component } from "react";
import FisherService from "./Service/FisherService";
// import FisherService from "./Service/FisherService";s

class CreateFisherComponent extends Component{
    constructor(props){
        super(props)

        this.state = {

            firstName: '',
            lastName: '',
            emailId: '',
            userName: '',
            password: '',
            phoneNumber: '',
            fisherType: '',
            address: ''
            
        }

           this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
           this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
           this.saveFisher = this.saveOrUpdateFisher.bind(this);
    }

    // step 3
    
    componentDidMount() {

        // step 4

        if(this.state.id === '_add'){

        }else{

            FisherService.getFisherById(this.state.id).then((res) => {
                let fisher = res.data;
                this.setState({
                    firstName: fisher.firstName,
                    lastName: fisher.lastName,
                    emailId: fisher.emailId,
                    userName: fisher.userName,
                    password: fisher.password,
                    phoneNumber: fisher.phoneNumber,
                    fisherType: fisher.fisherType,
                    address: fisher.address
    
                });
            });
        }

    }

            saveOrUpdateFisher = (e) => {
                e.preventDefault();
                let fisher = {firstName: this.firstName, lastName:this.lastName,emailId: this.emailId, userName: this.userName,
                password: this.password, phoneNumber: this.phoneNumber, fisherType:this.fisherType, address: this.address};
                console.log('fisher => ' + JSON.stringify(fisher)); 


                // step5
                if(this.state.id === '_add'){

                    FisherService.createFisher(fisher).then(res => {
                        this.props.history.push('/fishers');
                    });
                }else{
                    FisherService.updateFisher(fisher, this.state.id).then(res => {
                        this.props.history.push('/fishers');
                    });
            }
            

            }

    changeFirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailIdHandler = (event) => {
        this.setState({emailId: event.target.value});
    }

   changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }
    
    changeUserNameHandler = (event) => {
        this.setState({userName: event.target.value});
    }

    changePhoneNumberHandler = (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    changeFisherTypeHandler = (event) => {
        this.setState({fisherType: event.target.value});
    }

    changeAddressHandler = (event) => {
        this.setState({address: event.target.value});
    }

    cancel(){
        this.props.history.push('/fishers');
    }




    getTitle(){
        if(this.state.id === '_add'){
                return <h3 className="text-center">Add Fisher </h3>
        }else{
           return <h3 className="text-center">Update Fisher </h3>
        }
    }
     render() {
        return(

                <div >
                   

                    <div  className="container">
                        <div  className="row">
                            <div style={{border: "4px solid black",background:"black"}} className="card col-md-6 offset-md-3 offset-md-3">
                                    {
                                        this.getTitle()
                                    }
                            <div className="card-body">

                                <form>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input style={{width:"100%", height:"35px",fontSize: "20px"}} placeholder="Firs tName" name="firstName" value={this.state.firstName}
                                             onChange={this.changeFirstNameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input style={{width:"100%", height:"35px", fontSize: "20px"}} placeholder="Last Name" name="lastName" value={this.state.lastName}
                                             onChange={this.changeLastNameHandler} />
                                    </div>

                                    <div className="form-group">
                                        <label>Email Id:</label>
                                        <input style={{width:"100%", height:"35px", fontSize: "20px"}} placeholder="Email Address" name="emailId" value={this.state.emailId}
                                             onChange={this.changeEmailIdHandler} />
                                    </div>


                                    <div className="form-group">
                                        <label>User Name:</label>
                                        <input style={{width:"100%", height:"35px", fontSize: "20px"}} placeholder="User Name" name="userName" value={this.state.userName}
                                             onChange={this.changeUserNameHandler} />
                                    </div>


                                    <div className="form-group">
                                        <label>Password:</label>
                                        <input style={{width:"100%", height:"35px", fontSize: "20px"}} placeholder="Password " name="password" value={this.state.password}
                                             onChange={this.changePasswordHandler} />
                                    </div>


                                    <div className="form-group">
                                        <label>Phone Number:</label>
                                        <input style={{width:"100%", height:"35px", fontSize: "20px"}} placeholder="Phone Number" name="phoneNumber" value={this.state.phoneNumber}
                                             onChange={this.changePhoneNumberHandler} />
                                    </div>


                                    <div className="form-group">
                                        <label>Fisher Type:</label>
                                        <input style={{width:"100%",height:"35px", fontSize: "20px"}} placeholder="Fisher Type" name="fisherType" value={this.state.fisherType}
                                             onChange={this.changeFisherTypeHandler} />
                                    </div>


                                    <div className="form-group">
                                        <label>Address:</label>
                                        <input style={{width:"100%", height:"35px", fontSize: "20px"}} placeholder="Address" name="emailId" value={this.state.address}
                                             onChange={this.changeAddressHandler} />

                                             <button className="btn btn-success" onClick={this.saveOrUpdateFisher}>Save</button>
                                             <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default  CreateFisherComponent;