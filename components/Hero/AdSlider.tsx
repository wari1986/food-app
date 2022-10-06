import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://andy.be/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fxf434nhc%2Fproduction%2Fdcb7870e24c7ff0e50dfe16da0c7328c3e308db3-767x683.webp&w=2048&q=75",
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
      <Slide>
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
