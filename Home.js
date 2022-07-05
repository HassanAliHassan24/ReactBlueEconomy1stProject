import React from 'react';
import Gallery from './Gallery';
import Top from './Top';
import './CSS/Ramipage.css';
// import './CSS/News.css';s

function Home() {
  return (
   <div className='Home'>
   
   <div className='after-header' >
   <div className='TopHead'>
      <h1>The blue Economy Site</h1>
      <h1>Based In Fisheries Activities</h1>
      <button className='Explorer'><a href="#">Explore to Read More.</a></button>
    </div>

  </div>
      <Gallery/>
      <Top/>
   </div>
     


     
 
  );
}

export default Home;
