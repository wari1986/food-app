/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";

interface Props {
  bgcolor: string;
  title: string;
  description: string;
  image: string;
  imageDescription: string;
}
const TypeOfBeverageCard: React.FC<Props> = ({
  bgcolor,
  title,
  description,
  image,
  imageDescription
}) => {
  return (
    <div className={`flex container ${bgcolor} w-5/6 h-44 rounded-lg my-4`}>
      <div className="p-4 text-xs w-3/4">
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <div>
          <p className="w-3/5 text-center">
            {description}
          </p>
        </div>
        <div className='pt-8'>
          <Button />
        </div>
      </div>
      <img
        className="absolute w-36 h-36 left-52 mt-4"
        src={image}
        alt={imageDescription}
      />
    </div>
  );
};

export default TypeOfBeverageCard;
