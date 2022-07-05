// import { useEffect, useState } from "react";
// import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from "@mui/material";
// import React from "react"

// import { getUsers, deleteUser } from "../service/api";
// import {Link}  from "react-router-dom";

// const styledTable = styled(Table)`
//       width: 90%;
//       margin-left: 30px;

// `
// const Thead = styled(TableRow)`

//         background: #000;
//         & > th {
//             color: #fff;
//             font-size: 20px;
          
//         }

// `
// const TBody = styled(TableRow)`

//         background: #fff;
//         & > td {
             
//             font-size: 20px;
//         }

// `

// const AllFishers = () => {

//     const [users, setUsers] = useState([]);
//     useEffect(() => {
//         getUsersDetails();

//     }, [])

//     const getUsersDetails = async () => {
//         let response = await getUsers();
//         console.log(response);
//         // setUsers(response.data);    
//     }

//     const deleteUserData = async (id) => {
//         await deleteUser(id);
//         // getUsersDetails();

//     }


//     return (

  
//         <styledTable>
//             <TableHead>
//                 <Thead>
//                     <TableCell>Id</TableCell>
//                     <TableCell>FirstName</TableCell>
//                     <TableCell>LastName</TableCell>
//                     <TableCell>Email</TableCell>
//                     <TableCell>Username</TableCell>
//                     <TableCell> Password</TableCell>
//                     <TableCell>PhoneNumber</TableCell>
//                     <TableCell>Fishertype</TableCell>
//                     <TableCell>Address</TableCell>
//                     <TableCell></TableCell>
                   
                    

                               
                    
//                 </Thead>

//             </TableHead>
//             <TableBody>
//                 {
//                     users.map(user =>(
//                         <TBody>
//                             <TableCell>{user.id}</TableCell>
//                             <TableCell>{user.FirstName}</TableCell>
//                             <TableCell>{user.LastName}</TableCell>
//                             <TableCell>{user.Email}</TableCell>
//                             <TableCell>{user.Username}</TableCell>
//                             <TableCell>{user.Password}</TableCell>
//                             <TableCell>{user.PhoneNumber}</TableCell>
//                             <TableCell>{user.Fishertype}</TableCell>
//                             <TableCell>{user.Address}</TableCell>
//                             <TableCell>
//                                 <Button variant="contained" style={{marginRight:"10px"}} componenent={Link} to={`/edit/${user.id}`}>Edit</Button>
//                                 <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
//                             </TableCell>
//                         </TBody>
//                     ))
//                 }

//             </TableBody>
//         </styledTable>
//     )
// }

// export default AllFishers;