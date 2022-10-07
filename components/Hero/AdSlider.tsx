import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    title: "Fast delivery",
    subtitle: "Straight to your door",
  },
  {
    title: "Fast delivery",
    subtitle: "Straight to your door",
  },
  {
    title: "Free delivery",
    subtitle: "Don't pay get it for free",
  },
  {
    title: "Eco-friendly delivery",
    subtitle: "Electric vans, and bikes, no emissions",
  },
];

export const AdSlider = () => {

  return (
    <div className="slide-container px-4 bg-white">
      <Slide duration={3000}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div className="text-center py-4">
              <h3 className="text-md font-bold">{slideImage.title}</h3>
              <p className="text-xs text-gray-500">{slideImage.subtitle}</p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
