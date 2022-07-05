// import { useState, useEffect } from "react";
// import { FormControl, FormGroup, InputLabel,Input, Typography,Button, styled } from "@mui/material";
// import React from "react";


// // import { useNevigate ,UseParams} from "react-router-dom";
// import { useParams} from "react-router-dom";

// import { getUsers, editUser } from "../service/api";
// const Container = styled(FormGroup)`
//            width:50%;
//            margin: 5% auto 0 auto;
//            & > div {
//             margin-top: 20px;
//             background:#fff;
//             font-size: 50px;
//             text-align: center;
//             // border: 1px solid blue;
//             border-radius:10px;
//            }


// `
// const initialValues = {
//     FirstName: '',
//     LastName: '',
//     Email: '',
//     Username: '',
//     Password: '',
//     PhoneNumber: '',
//     Fishertype: '',
//     Address: ''
// }


// const EditFisher = () => {
//     const [user, setUser] = useState(initialValues);
//     // const navigate = useNevigate();
//     const {id} = useParams();

//     useEffect(() => {
//          getUserData();
//     }, [])
    

//     const getUserData = async () => {
//         let response = await getUsers(id);
//         //  setUser(response.data);
//     }
//     const onValueChange = (e) => {
    
//         setUser({ ...user, [e.target.name]: e.target.value })
//         console.log(user);
//     }

//     const addUserDetails = async () => {
//         await editUser(user, id);
//         // navigate("/all");


//     }
   
//     return (

     
//         <Container>
//             <Typography style={{fontSize: "30px", textAlign:"center",color: "#fff"}} variant="hd">Edit Fisher</Typography>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}} style={{fontSize: "12.5px"}}>FirstName</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="FirstName" value={user.FirstName}/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>LastName</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="LastName" value={user.LastName}/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>Email</InputLabel>
//                 <Input onChange={(e) => onValueChange(e)} name="Email" value={user.Email}/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>Username</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="Username" value={user.Username}/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>Password</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="Password" value={user.Password}/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>PhoneNumber</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="phoneNumber" value={user.PhoneNumber}/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>Fishertype</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="Fishertype" value={user.Fishertype}/>

//             </FormControl>
//             <FormControl>
//                 <InputLabel style={{fontSize: "12.5px"}}>Address</InputLabel>
//                 <Input style={{fontSize: "20px",height:"30px"}} onChange={(e) => onValueChange(e)} name="Address" value={user.Address}/>

//             </FormControl>
//             <FormControl>
//                 <Button style={{width:"100%",fontSize: "14px"}}onClick={() => addUserDetails()}  variant="contained">
                   
//                     Edit Fisher
//                 </Button>
//             </FormControl>
            
//         </Container>
//     )
// }

// export default EditFisher;