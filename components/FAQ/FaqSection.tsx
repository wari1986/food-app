import React from "react";
// import { HiArrowLongRight } from "react-icons/hi2";

const FaqSection = () => {
  return (
    <div className="bg-white pt-10">
      <div className="bg-[#53E5A9] w-screen">
        <div className="mx-8 pt-8 font-bold">
          <h1 className="text-2xl text-white">EXCUSE ME DRINKUP,</h1>
          <p className="text-3xl">I have a question.</p>
        </div>
        <div className="flex flex-col p-8">
          <button className="flex space-around w-full mx-auto py-1.5 px-4 text-[#2F2F2D] bg-white font-bold text-sm rounded-md border-4 border-black">
            <h1 className="w-full text-lg text-left">GO TO FAQ</h1>
            {/* <HiArrowLongRight /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
