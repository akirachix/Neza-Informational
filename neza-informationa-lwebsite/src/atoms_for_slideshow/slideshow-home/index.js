import React, { useState, useEffect } from "react";
import "./style.css";
import slides2 from "../slides2";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides2.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const renderSlide = (slides, index) => {
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
      <div className="slides" style={slideStyle} key={index}>
        <div className="contents">
          <h1>{slides.title}</h1>
          <p>{slides.description}</p>
        </div>
        <img src={slides.imgSrc} alt={slides.alt} />
      </div>
    );
  };

  return <div className="slideshow">{slides2.map(renderSlide)}</div>;
};

export default Slideshow;