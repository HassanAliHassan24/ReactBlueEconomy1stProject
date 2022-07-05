import React from "react";
import {Carousel} from "react-bootstrap";
import o8 from '../image/fsh.jpeg';
import o9 from '../image/fisher.jpg';
import o10 from '../image/bluefish.jpg';
import o11 from '../image/nyavu.jpg';
import '../CSS/Carousel.css';

function ControlledCarousel() {
    return(
      <div className="carousel">
          <Carousel variant="dark" fade={true}>
  <Carousel.Item>
    <img
      className="d-block w-100"
    src={o8}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={o9}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={o10}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={o11}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    );
  }
  
  export default ControlledCarousel;
