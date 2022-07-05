import React from "react"
import { Link } from "react-router-dom";

import { AppBar,Toolbar,Typography, styled } from "@mui/material";
import { borderRadius } from "@mui/system";

const Header = styled(AppBar)`
    background: #111111;
`

const AdminNavbar = () => {
    return (
        

     <Header style={{background: "linear-gradient(to bottom, blue, black,blue)", position:"dynamic", float:"right"}}>
           <Toolbar>
            <Typography to="/" style={{width:"7%",color: "black",fontSize:"18px", marginRight:"20px",border:"2px solid white",background: "white",borderRadius:"20px"}}>AdminNavbar</Typography>
            {/* <Link to="AllFishers" style={{color: "white",fontSize:"18px",  marginRight:"20px"}}>All Fishers</Link>
            <Link to="AddFisher" style={{color: "white",fontSize:"18px",  marginRight:"20px"}}>Add Fisher</Link>
            <Link to="EditFisher" style={{color: "white",fontSize:"18px",  marginRight:"20px"}}>Edit Fisher</Link> */}
            <Link to="FisherListComponent" style={{color: "white",fontSize:"18px",  marginRight:"20px"}}>Fisher List</Link>
            <Link to="CreateFisherComponent" style={{color: "white",fontSize:"18px",  marginRight:"20px"}}>Fisher Form</Link>
            </Toolbar>
      </Header>
   

    )
}

export default AdminNavbar;