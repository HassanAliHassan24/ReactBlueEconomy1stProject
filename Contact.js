import React from "react";
import con1 from '../image/call.jpeg';
import con2 from '../image/location.jpeg';
import con3 from '../image/message.jpeg';
import  '../CSS/Contact.css'


function contact() {
    return(

<div class="contact-page">


<h1>Contact Us</h1>
<h3>Get everything To us</h3>

<u>
<li>
        <div class="round">
          <img src={con1} alt=""  />
          <p>
          <h2>PHONE</h2>
          <h5>Get in touch with </h5>
          <h5>+255774661603</h5>
          <h5>Administrator office call</h5>
          <h5>+255620216729</h5>
          </p>
        </div>
      </li>

      <li>
        <div class="round">
          <img src={con2} alt=""  />
          <p>
          <h2>ADDRESS</h2>
          <h5>Urban </h5>
          <h5>+255774661603</h5>
          <h5>West</h5>
          <h5>+255620216729</h5>
          </p>
        </div>
      </li>


      <li>
        <div class="round">
          <img src={con3} alt="" />
          <p>
          <h2>EMAIL</h2>
          <h5>Request for Proposal</h5>
          <h5>info@fisheriessector.com</h5>
          <h5>Office</h5>
          <h5>fisheries@gmail.com</h5>
          </p>
        </div>
      </li>
    


      
      </u>


</div>



      
      
    );
}
export default contact;