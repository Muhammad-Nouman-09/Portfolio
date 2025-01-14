import React from "react";
import Slider from "react-slick";
import offer1 from "./Assets/offer-1.webp";
import offer2 from "./Assets/offer-2.webp";
import offer3 from "./Assets/offer-3.webp";
import offer4 from "./Assets/offer-4.webp";
import offer5 from "./Assets/offer-5.webp";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SlickSlider() {
  const settings = {
    dots: true, // Adds navigation dots
    infinite: true, // Enable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Adds navigation arrows
    autoplay: true, // Automatically move slides
    autoplaySpeed: 3000, // Interval for autoplay
  };

  const imageStyle = {
    width: "90%", // Adjust to make images fit well
    height: "auto",
    objectFit: "cover",
    margin: "auto",
    borderRadius: "8px",
  };

  const sliderContainerStyle = {
    margin: "10px auto",
    width: "100%", // Adjust to control the width of the slider
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={sliderContainerStyle}>
      <Slider {...settings}>
        <div>
          <img src={offer1} alt="Offer 1" style={imageStyle} />
        </div>
        <div>
          <img src={offer2} alt="Offer 2" style={imageStyle} />
        </div>
        <div>
          <img src={offer3} alt="Offer 3" style={imageStyle} />
        </div>
        <div>
          <img src={offer4} alt="Offer 4" style={imageStyle} />
        </div>
        <div>
          <img src={offer5} alt="Offer 5" style={imageStyle} />
        </div>
      </Slider>
    </div>
  );
}
