import React from 'react';
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://andy.be/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fxf434nhc%2Fproduction%2Fdcb7870e24c7ff0e50dfe16da0c7328c3e308db3-767x683.webp&w=2048&q=75",
  },
  {
    url: "https://andy.be/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fxf434nhc%2Fproduction%2Fcffbc4f46387d3b32622a087b66dd8097a5bd549-767x683.webp&w=750&q=75",
  },
];

export const Slider = () => {
  return (
    <div className="slide-container ">
      <Slide arrows={false}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div className='' style={{ backgroundImage: `url(${slideImage.url})`, backgroundSize: 'cover', height: 400}}>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
