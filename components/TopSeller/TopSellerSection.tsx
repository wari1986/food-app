import React from 'react';
import {Slider} from './TopSellerSlider';
import Button from '../Button';

const TopSellerSection = () => {
  return (
    <div className="bg-white text-lg">
      <h1 className='py-8 text-4xl text-center'>Top Sellers</h1>
      <Slider />
      <div className='flex justify-center'>
        <Button style='border-2 border-solid border-black px-8 py-2 my-8 font-bold text-sm' text="VIEW MORE" />
      </div>
    </div>
  );
}

export default TopSellerSection
