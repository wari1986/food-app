import React from "react";

interface Props {
  src: string;
  alt: string;
  title: string;
  subTitle: string;
  description: string;
  bgColor: string;
}

const BannerCard: React.FC<Props> = ({
  src,
  alt,
  title,
  subTitle,
  description,
  bgColor,
}) => {
  return (
    <div className={`text-center w-screen ${bgColor} h-96 py-8`}>
      <h1 className="text-white pt-12 text-lg font-bold my-2">{title}</h1>
      <h1 className="text-3xl font-bold">{subTitle}</h1>
      <p className="mx-20 text-sm mt-2">{description}</p>
      {/* <div className="absolute w-48 bottom-8 align-right">
        <img src={src} alt={alt} />
      </div> */}
    </div>
  );
};

export default BannerCard;
