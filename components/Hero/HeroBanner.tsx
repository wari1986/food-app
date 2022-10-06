import React from "react";
import Image from "next/image";
import HeroImage from "../public/assets/hero-banner/drinkUpBanner1.webp";
import {Slider} from "./Slider";

const HeroBanner = () => {
  return (
    <div className="w-screen">
      <Slider />
      {/* <Image src={HeroImage} layout="responsive" height={800} alt="drinkup hero image " /> */}
    </div>
  );
};

export default HeroBanner;
