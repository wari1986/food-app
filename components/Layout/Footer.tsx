import React from 'react';
import { FaCcVisa } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { HiQrcode } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-around text-5xl">
        <FaCcVisa />
        <FaCcMastercard />
        <HiQrcode />
      </div>
      <div className="flex justify-around text-xs px-2 py-4 text-center">
        <p className="w-1/3">DrinkUp</p>
        <p className="w-1/3">Cochabamba</p>
        <div className="w-1/3">
          <p>hello@drinkup.bo</p>
          <p>+591 67404266</p>
        </div>
      </div>
      <div className="flex justify-center">2022, DrinkUp</div>
    </div>
  );
}

export default Footer
