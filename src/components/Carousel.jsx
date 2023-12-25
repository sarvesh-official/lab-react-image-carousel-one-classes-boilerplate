import React, { Component, useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// implement the class below
export default function Carousel() {
  const [currIndex, setCurrIndex] = useState(0);

  const increaseCount = () => {
    if (currIndex >= images.length - 1) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };
  const decreaseCount = () => {
    if (currIndex == 0) {
      setCurrIndex(images.length - 1);
    } else {
      setCurrIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <h1>Carousel</h1>
      <div className="carousel-container flex">
        <div className="leftArrow arrowDiv flex" onClick={decreaseCount}>
          <ArrowBackIosIcon />
        </div>
        <h2 className="title">{images[currIndex].title}</h2>
        <img src={images[currIndex].img} alt="" />
        <h2 className="caption">{images[currIndex].subtitle}</h2>
        <div className="rightArrow arrowDiv flex" onClick={increaseCount}></div>
        <ArrowForwardIosIcon />
      </div>
    </>
  );
}
