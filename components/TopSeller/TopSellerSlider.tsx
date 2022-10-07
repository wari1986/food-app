import React from "react";
import { Slide } from "react-slideshow-image";
import TopSellerCard from "./TopSellerCard";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    src: "https://andy.be/_next/image?url=https%3A%2F%2Fbru.andy.be%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F220ded411292c711e28149c6439a6500%2Fl%2Fo%2Flooza-mix6325d0a7039da.png&w=640&q=75",
    alt: "Looza Mix six pack image",
    name: "Looza Mix",
    price: "16.99",
  },
  {
    src: "https://andy.be/_next/image?url=https%3A%2F%2Fbru.andy.be%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F220ded411292c711e28149c6439a6500%2Fj%2Fu%2Fjupiler633d76559ef1d.png&w=640&q=75",
    alt: "small bottle of jupiler beer",
    name: "Jupiler",
    price: "14.59",
  },
];

export const Slider = () => {
  return (
    <div className="slide-container">
      <Slide duration={4500} transitionDuration={200}>
        {slideImages.map((slideImage, index) => (
          <TopSellerCard
            src={slideImage.src}
            alt={slideImage.alt}
            name={slideImage.name}
            price={slideImage.price}
            key={index}
            slug={slideImage.name}
          />
        ))}
      </Slide>
    </div>
  );
};
