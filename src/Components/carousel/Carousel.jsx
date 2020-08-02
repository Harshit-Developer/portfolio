import React, { Component, useState } from "react";
import image1 from "../../assets/img/carousal/slide1.webp";
import image2 from "../../assets/img/carousal/slide2.webp";
import image3 from "../../assets/img/carousal/slide3.webp";

import "./Carousel.style.css";
import { Carousel, ControlledCarousel } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <>
        <Carousel
          controls={false}
          interval={2500}
          pause={false}
          className="carausel"
          fade={true}
          id="home"
        >
          <Carousel.Item>
            <img className="d-block w-100 img" src={image1} alt="First slide" />
            <Carousel.Caption className="caption">
              <p className="colorText fontSmall">Hi, I am </p>
              <p className="colorText fontLarge">HARSHIT KUMAR TYAGI</p>
              <p className="colorText fontSmall">LEARNER</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img" src={image2} alt="Third slide" />

            <Carousel.Caption className="caption">
              <p className="colorText fontSmall">Hi, I am </p>
              <p className="colorText fontLarge">HARSHI KUMAR TYAGI</p>
              <p className="colorText fontSmall">WEB DEVELOPER</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 img" src={image3} alt="Third slide" />

            <Carousel.Caption className="caption">
              <p className="colorText fontSmall">Hi, I am </p>
              <p className="colorText fontLarge">HARSHIT KUMAR TYAGI</p>
              <p className="colorText fontSmall">FULL STACK DEVELOPER</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default Home;
