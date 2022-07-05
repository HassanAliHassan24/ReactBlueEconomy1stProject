import React from 'react';
import './CSS/Ramipage.css';
import Logo from './image/logo.jpg';
import {Link} from 'react-router-dom';


function Nav() {
  return (
   
  <div className="pages">   
  <div className='h1'>
    <div className='h2'>
    <h1>Blue Economy<sub>with <br /></sub></h1>
      <p></p>
      <p></p>
      <p></p>
      <h3>Fisheries Management System</h3>
    </div>
  </div>

  <div className="page">
    <div className="blue-economy">
      {/* <h1>Blue Economy<sub>with <br /></sub></h1>
      <p></p>
      <p></p>
      <p></p>
      <h3>Fisheries Management System</h3> */}
      <div className="logospace"></div>
      <img className="navimg" src={Logo} alt=""/>
    </div>
    <div className="space"></div>
    <div className="list-container">
      <ul className='ul'>
        <li><a className='a' href="#"><Link to="/About">About</Link></a></li>
        <li><a className='a' href="#"><Link to="/Services">Services</Link></a></li>
        <li><a className='a' href="#"><Link to="/Contact">Contact</Link></a></li>
        <li><a className='a' href="#"><Link to="/News">News</Link></a></li>
        <li><a className='a' href="#"><Link to="/Home">Home</Link></a></li>
      </ul>
    </div>

  </div>

  <div className="spaces"></div>

  <div className="navbtn" >
    <button className='bttn'><a className='a2'  href="Ramiform.html"><Link to="/Login"> Login</Link></a></button>
    <button className='bttn'><a className='a2' href="Regform.html"><Link to="/Registration">Register</Link></a></button>
  </div>

</div>
     
    
   
  );
}

export default Nav;
