import React from "react";
import { Slide } from "react-slideshow-image";
import TopSellerCard from "../TopSeller/TopSellerCard";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    src: "https://andy.be/_next/image?url=https%3A%2F%2Fbru.andy.be%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F220ded411292c711e28149c6439a6500%2Fa%2Fn%2Fandy-s-favorite-beers634022300185a.png&w=640&q=75",
    alt: "Our favorite beers",
    name: "Our favorite beers",
    price: "35,99",
    topBandColor: "bg-red-400",
    priceColor: "text-red-400",
  },
  {
    src: "https://andy.be/_next/image?url=https%3A%2F%2Fbru.andy.be%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F220ded411292c711e28149c6439a6500%2Fc%2Fh%2Fcharitea-green630f7207ce137.png&w=640&q=75",
    alt: "bottle of chari tea",
    name: "ChariTea Green",
    price: "14.59",
    topBandColor: "bg-yellow-400",
    priceColor: "text-yellow-400",
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
            topBandColor={slideImage.topBandColor}
            priceColor={slideImage.priceColor}
          />
        ))}
      </Slide>
    </div>
  );
};
