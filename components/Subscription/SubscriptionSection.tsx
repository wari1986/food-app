import React from "react";
import Button from "../Button";

const SubscriptionSection = () => {
  return (
    <div className="bg-white py-8">
      <div className="bg-[#98FCD2] mx-4 rounded-lg">
        <div className="mx-12 pt-8 font-bold">
          <h1 className="text-4xl text-[#53E5A9] py-2">HEY YOU!</h1>
          <p className="text-xl">
            Yes, You! Subscribe to DrinkUp newsletter to get unmissable offers
            and promotions!
          </p>
        </div>
        <div className="flex flex-col p-8">
          <input
            className="rounded-xl p-3 text-sm"
            type="text"
            placeholder="Enter your email"
          />
          <Button
            style="w-38 mx-12 my-4 py-2.5 bg-[#2F2F2D] text-white font-bold text-sm rounded-lg"
            text="SUBSCRIBE"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
