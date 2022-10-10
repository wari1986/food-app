import React from "react";
import ReasonsCard from "./ReasonsCard";

export const ReasonsSection = () => {
  return (
    <div className="text-center bg-[#FFFCF1] pt-24 pb-6">
      <div className=''>
        <div className="title section space-y-4">
          <h1 className='text-4xl font-bold'>Why you need to try DrinkUp</h1>
          <p>
            There are many reasons to try DrinkUp: convinience, price, service,
            choice, our amazing personalities.... Here are some others:
          </p>
        </div>
        <div className="">
          <ReasonsCard
            src="https://bru.andy.be/media/wysiwyg/Group_10305_2.webp"
            alt="cartoon bottle ringing the door"
            title="Free delivery"
            description="Ground floor, penthouse, somewhere in between - it doesn't matter to us. We'll bring your order right to your door - always free."
          />
          <ReasonsCard
            src="https://bru.andy.be/media/wysiwyg/Group_10306_2.webp"
            alt="cartoon van speeding up"
            title="Fast delivery"
            description="Ground floor, penthouse, somewhere in between - it doesn't matter to us. We'll bring your order right to your door - always free."
          />
          <ReasonsCard
            src="https://bru.andy.be/media/wysiwyg/Group_10307_2.webp"
            alt="a case of bevarages"
            title="Easy return of empties"
            description="Ground floor, penthouse, somewhere in between - it doesn't matter to us. We'll bring your order right to your door - always free."
          />
          <ReasonsCard
            src="https://bru.andy.be/media/wysiwyg/Mask_Group_361_2.webp"
            alt="cartoon case of beverages on top of a plant"
            title="Eco-friendly delivery"
            description="Ground floor, penthouse, somewhere in between - it doesn't matter to us. We'll bring your order right to your door - always free."
          />
        </div>
      </div>
    </div>
  );
};
