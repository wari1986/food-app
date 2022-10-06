import React from "react";
import Image from "next/image";
import Logo from "../public/assets/drinkup.png";
import Toggle from "./Toggle";
import { BsBuilding } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="h-6 bg-[#52E5A8]"></div>
      <div className="flex justify-around items-center text-2xl py-2">
        <div className="w-2/5">
          <Image src={Logo} alt="drinkup logo" layout="responsive" />
        </div>
        <div className="">
          <BsBuilding />
        </div>
        <div className="flex justify-around w-2/5">
          <FaUser />
          <FaShoppingCart />
          <Toggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
