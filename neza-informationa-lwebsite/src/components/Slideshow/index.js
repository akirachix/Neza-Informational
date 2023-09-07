import React, { useState, useEffect } from "react";
import slidesData from "./slides-data";
import "./style.css";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const renderSlide = (slide, index) => {
    const isActive = index === currentSlide;
    const slideStyle = {
      opacity: isActive ? 1 : 0,
      transition: "opacity 1s ease-in-out",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    return (
      <div className="slide" style={slideStyle} key={index}>

<div> <img src={slide.imgSrc} alt={slide.alt} /></div>
        <div className="content">
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          
        </div>
       
       
      </div>
    );
  };

  return <div className="slideshow">{slidesData.map(renderSlide)}</div>;
};

export default Slideshow;
