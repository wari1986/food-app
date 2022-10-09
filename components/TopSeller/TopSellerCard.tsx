import React from "react";
import { FaShoppingCart } from "react-icons/fa";

interface Props {
  src: string;
  alt: string;
  name: string;
  price: string;
  slug: string;
  topBandColor: string;
  priceColor: string;
}

const TopSellerCard: React.FC<Props> = ({ src, alt, name, price, slug, topBandColor, priceColor }) => {
  return (
    <div className="card flex justify-center px-6">
      <div className="card-section w-3/4  rounded-xl py-2 shadow-md">
        <section className={`${topBandColor} h-2 w-full rounded-t-xl`}></section>
        <div className="image-section mx-auto bg-gray-100 px-6 py-2">
          <img src={src} alt={alt} />
        </div>
        <div className="name-section">
          <div className="">
            <h1 className="mx-auto text-xl font-bold pt-8 px-4 pb-4 mb-8">
              {name}
            </h1>
          </div>
        </div>
        <div className="price-section flex justify-between px-4">
          <h1 className={`text-2xl ${priceColor} font-bold`}>$us{price}</h1>
          <button className="text-2xl">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSellerCard;
