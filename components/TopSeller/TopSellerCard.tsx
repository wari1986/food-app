import React from 'react';
import Image from 'next/image';
import LoozaMix from '../../public/assets/best-sellers/looza-mix.webp';
import { FaShoppingCart } from "react-icons/fa";


const TopSellerCard = () => {
  return (
    <div className="card flex justify-center px-6">
      <div className="card-section w-3/4  rounded-xl py-2 shadow-md">
        <section className="bg-yellow-500 h-2 w-full rounded-t-xl"></section>
        <div className="image-section mx-auto bg-gray-100 px-6 py-2">
          <Image layout="responsive" src={LoozaMix} alt="looza-mix" />
        </div>
        <div className="name-section">
          <h1 className="text-xl font-bold pt-8 pr-32 pl-4 pb-2 mb-8">
            Looza Mix
          </h1>
        </div>
        <div className="price-section flex justify-between px-4">
          <h1 className="text-xl font-bold">16.99$us</h1>
          <button className="text-2xl">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopSellerCard
