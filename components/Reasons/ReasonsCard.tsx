import React from "react";
import { FaShoppingCart } from "react-icons/fa";

interface Props {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const ReasonsCard: React.FC<Props> = ({ src, alt, title, description }) => {
  return (
    <div className="card flex flex-col justify-center px-20">
      <div className="py-8">
        <img className="w-32 mx-auto" src={src} alt={alt} />
      </div>
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-sm text-gray-500 my-2">{description}</p>
    </div>
  );
};

export default ReasonsCard;
