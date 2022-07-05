import React from "react";
import Logo1 from './image/beach.jpg';
import Logo2 from './image/beach.jpg';
import Logo3 from './image/beach.jpg';
import Logo4 from './image/beach.jpg';

function Gallery() {
    return(

        <div class="Gallery">
  
  <div className="gallery-image">
    <img  src={Logo1} alt="" />
    <div className="image-Title">Add description here</div>
  </div>

  <div className="gallery-image">
    <img  src={Logo2} alt="" />
    <div className="image-Title">Add description here</div>
  </div>

  <div className="gallery-image">
    <img  src={Logo3} alt="" />
    <div className="image-Title">Add description here</div>
  </div>

  <div className="gallery-image">
    <img  src={Logo4} alt="" />
    <div className="image-Title">Add description here</div>
  </div>

</div> 

    );
}

export default Gallery;