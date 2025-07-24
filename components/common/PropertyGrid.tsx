import React from 'react'
import { PropertyGridProps } from '@/interfaces';
import Image from 'next/image';




const images = [
    "/assets/Images/image 19.png",
    "/assets/Images/image 21.png",
    "/assets/Images/image 22.png",
    "/assets/Images/image 24.png",
];


const PropertyGrid: React.FC<PropertyGridProps > = ({ data }) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 gap-2 py-2 mt-2 p-2 md:p-4 rounded-2xl">
      {/* Large image */}
      <div className="relative h-[250px] sm:h-full sm:col-span-2 sm:row-span-2">
        <Image
          src={images[0]}
          alt="Large Property Image"
          fill
          className="object-cover rounded-2xl sm:rounded-s-2xl sm:rounded-tr-none sm:rounded-br-none"
        />
      </div>

      {/* Medium image - hidden on small screens */}
      <div className="hidden sm:block relative sm:col-span-2 sm:row-span-1 sm:h-[200px]">
        <Image
          src={images[1]}
          alt="Image 2"
          fill
          className="object-cover rounded-tr-lg p-0"
        />
      </div>

      {/* Small image 1 - hidden on small screens */}
      <div className="hidden sm:block relative sm:col-span-1 sm:row-span-1 sm:h-[200px]">
        <Image
          src={images[2]}
          alt="Image 3"
          fill
          className="object-cover  pt-0"
        />
      </div>

      {/* Small image 2 - hidden on small screens */}
      <div className="hidden sm:block relative sm:col-span-1 sm:row-span-1 sm:h-[200px]">
        <Image
          src={images[3]}
          alt="Image 4"
          fill
          className="object-cover rounded-br-lg pt-0"
        />
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <button className="border border-white font-light text-xs text-white px-4 py-1 rounded-full backdrop-blur-sm hover:text-black hover:bg-white transition">
            show all photos
          </button>
        </span>
      </div>

      {/*Additional Features */}
      <div className="flex flex-row items-center gap-4 w-full text-xs md:mt-0">
        {/* Bed */}
        <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded-full text-center whitespace-nowrap">
          <Image
            src="/assets/icons/bed 1.png"
            alt="Bed"
            width={14}
            height={14}
          />
          <span className="mr-2.5">{Number(data.offers.bed)} bedrooms</span>
        </div>

        {/* Shower */}
        <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded-full text-center whitespace-nowrap">
          <Image
            src="/assets/icons/bathtub 1.png"
            alt="Shower"
            width={14}
            height={14}
          />
          <span className="mr-2.5">{Number(data.offers.shower)} bathroom</span>
        </div>

        {/* Guests */}
        <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded-full text-center whitespace-nowrap">
          <Image
            src="/assets/icons/people 1.png"
            alt="Guests"
            width={14}
            height={14}
          />
          <span className="mr-2.5">{data.offers.occupants} guests</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyGrid;
