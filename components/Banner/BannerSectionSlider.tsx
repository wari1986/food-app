import React from "react";
import { Slide } from "react-slideshow-image";
import BannerCard from "./BannerCard";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    src: "https://andy.be/_next/image?url=%2Fimages%2Fhome%2Fwater-bottle.webp&w=384&q=75",
    alt: "bottle mascot holding a bottle",
    title: "ANDY LOVES OUR PLANET",
    subTitle: "Zero-emission delivery",
    description:
      "With Andy you get convinience delivered with a good conscience and can rest assured we deliver truly zero-emission ",
    bgColor: "bg-green-300",
  },
  {
    src: "https://andy.be/_next/image?url=%2Fimages%2Fhome%2Fwater-bottle.webp&w=384&q=75",
    alt: "bottle mascot holding a bottle",
    title: "Convinience shouldn't cost the world",
    subTitle: "Free Delivery!",
    description:
      "With Andy you get convinience delivered with a good conscience and can rest assured we deliver truly zero-emission ",
    bgColor: "bg-blue-200",
  },
  {
    src: "https://andy.be/_next/image?url=%2Fimages%2Fhome%2Fwater-bottle.webp&w=384&q=75",
    alt: "bottle mascot holding a bottle",
    title: "ANDY LIKES IT FAST!",
    subTitle: "Drinks at your door in 180 min!",
    description:
      "With Andy you get convinience delivered with a good conscience and can rest assured we deliver truly zero-emission ",
    bgColor: "bg-yellow-300",
  },
];

export const Slider = () => {
  return (
    <div className="slide-container">
      <Slide arrows={false} duration={4500} transitionDuration={700}>
        {slideImages.map((slideImage, index) => (
          <BannerCard
            src={slideImage.src}
            alt={slideImage.alt}
            title={slideImage.title}
            subTitle={slideImage.subTitle}
            description={slideImage.description}
            key={index}
            bgColor={slideImage.bgColor}
          />
        ))}
      </Slide>
    </div>
  );
};
