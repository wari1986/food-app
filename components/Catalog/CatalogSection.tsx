import React from "react";
import TypeOfBeverageCard from "./TypeOfBeverageCard";

const CatalogSection = () => {
  return (
    <div className="bg-white">
      <h1>Our Catalog</h1>
      <p>
        Bottoms up! We’ve got a fantastic range of drinks for you to choose from
        – take a look!
      </p>
      <div className="flex-col flex items-center  my-4">
        <TypeOfBeverageCard
          bgcolor="bg-[#d4faff]"
          title="Water"
          description="From Still to Flavoured - From Bru to Spa. Andy surely has your
            favorite water"
          image="https://andy.be/_next/image?url=%2Fimages%2Fhome%2Fwater-bottle.webp&w=384&q=75"
          imageDescription="cartoon bottle of water holding a bottle of water"
        />
        <TypeOfBeverageCard
          bgcolor="bg-[#99D5FF]"
          title="Liquors"
          description="All kinds of liquors, for the best cocktails.Make your choice1"
          image="https://andy.be/_next/image?url=%2Fimages%2Fhome%2Fliquor-bottle.webp&w=384&q=75"
          imageDescription="cartoon bottle of liquor holding a bottle of liquor"
        />
        <TypeOfBeverageCard
          bgcolor="bg-[#FFE899]"
          title="Beers"
          description="All time favourite and local breweries - discover our beers"
          image="https://andy.be/_next/image?url=%2Fimages%2Fhome%2Fbeer-bottle.webp&w=384&q=75"
          imageDescription="cartoon bottle of beer holding a bottle of beer"
        />
        <TypeOfBeverageCard
          bgcolor="bg-[#FFCFC5]"
          title="Soft Drinks"
          description="Refreshments in a bottle - from classics to fancy"
          image="https://andy.be/_next/image?url=%2Fimages%2Fhome%2Fsoft-drinks-bottle.webp&w=384&q=75"
          imageDescription="cartoon bottle of soda holding a bottle of soda"
        />
        <TypeOfBeverageCard
          bgcolor="bg-[#FFBFC9]"
          title="Juice"
          description="From organic to yummi, to very healthy veggy juices"
          image="https://andy.be/_next/image?url=%2Fimages%2Fhome%2Fjuice-bottle.webp&w=384&q=75"
          imageDescription="cartoon bottle of juice holding a bottle of juice"
        />
        <TypeOfBeverageCard
          bgcolor="bg-[#EBC5FF]"
          title="Wine"
          description="Our Wines are handselected with the help of great sommeliers - Santé!"
          image="https://andy.be/_next/image?url=%2Fimages%2Fhome%2Fwine-bottle.webp&w=384&q=75"
          imageDescription="cartoon bottle of wine holding a bottle of wine"
        />
      </div>
    </div>
  );
};

export default CatalogSection;
