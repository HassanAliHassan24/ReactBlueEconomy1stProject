// import react, { useState } from "react";
// import { FormControl, FormGroup, InputLabel,Input, Typography,Button, styled } from "@mui/material";

// import React from "react";

// // import{useNavigate}from 'react-router-dom';

// import { addUser } from "../service/api";
// const Container = styled(FormGroup)`
//            width:40%;
//            margin: 5% auto 0 auto;
//            & > div {
//             margin-top: 20px;
//             background:white;
//             font-size: 50px;
//             text-align: center;
//             // border: 1px solid blue;
//             border-radius:10px;
//            }


// `
// const initialValue = {
//     FirstName: '',
//     LastName: '',
//     Email: '',
//     Username: '',
//     Password: '',
//     PhoneNumber: '',
//     Fishertype: '',
//     Address: ''
// }


// const AddFisher = () => {
//     const [user, setUser] = useState(initialValue);
//     const { FirstName,LastName,Email,Username,Password,PhoneNumber,Fishertype,Address } = user;
//     // let navigate = useNavigate();
//     // const navigate = useNavigate();

//     const onValueChange = (e) => {
    
//         setUser({ ...user, [e.target.name]: e.target.value })
//         console.log(user);
//     }

//     const addUserDetails = async () => {
//         await addUser(user);
//         // navigate('/all');


//     }
   
//     return (

     
//         <Container>
//             {/* <Typography style={{fontSize: "30px", textAlign:"center",color: "#fff"}} variant="hd">Add Fisher</Typography>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>FirstName</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="FirstName"/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>LastName</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="LastName"/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>Email</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="Email"/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>Username</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="Username"/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>Password</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="Password"/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>PhoneNumber</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="phoneNumber"/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>Fishertype</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="Fishertype"/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>Address</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name=""Address/>

//             </FormControl>
//             <FormControl>
//                 <Button style={{width:"100%",fontSize: "14px"}} onClick={() => addUserDetails()}  variant="contained">
                   
//                     Add Fisher
//                 </Button>
//             </FormControl> */}
            
//         </Container>
//     )
// }

// export default AddFisher;