import React from 'react';
 import "bootstrap/dist/css/bootstrap.min.css";
 import "bootstrap/dist/js/bootstrap.bundle.min.js";
import backGroundImg from "./Assets/background.webp";
import Products from './Products';

const Hero = () => {
  var sectionStyle = {
    width: "100%",
    height: "80vh",
    backgroundImage: "url(" + backGroundImg + ")", 
    backgroundSize: "cover", // Optional: Makes the image cover the entire area
    backgroundPosition: "center", // Optional: Centers the image
    backgroundRepeat: "no-repeat", // Optional: Prevents tiling
  };

 


  return (
    <div>
      <div className='position-relative' style={sectionStyle}>
      <div className='position-absolute top-50 start-50 translate-middle text-center'>
        <h1>Products Delivered in 90 Minute</h1>
        <p>Get your healthy foods & snacks delivered at your doorsteps all day everyday</p>
        <div class="input-group mb-3">
  <input type="text" class="form-control p-3 " placeholder="Search Your Products From Here" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">Search</span>
</div>
      </div>
      </div>
     {/* <Products/> */}
    </div>
  );
};

export default Hero;
