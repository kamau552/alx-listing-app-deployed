import React from 'react'
import { PropertyGridProps } from '@/interfaces';
import Image from 'next/image';


const images = [
    "/assets/Images/image 19.png",
    "/assets/Images/image 21.png",
    "/assets/Images/image 22.png",
    "/assets/Images/image 24.png",
];


const PropertyGrid: React.FC<PropertyGridProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-auto py-2 mt-2 p-2 md:p-4">
      {/*Large Image*/}
      <div className="relative col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 h-[250px] sm:h-[400px] md:h-[500px]">
        <Image
          src={images[0]}
          alt="Large Property Image"
          fill
          className="object-cover w-full rounded-lg "
        />
      </div>

      {/*Medium Images*/}
      <div className="relative col-span-2 h-[150px] sm:h-[200px] md:h-[250px]  hidden sm:block sm:">
        <Image
          src={images[1]}
          alt="Medium Property Image"
          fill
          className="object-cover w-full rounded-lg"
        />
      </div>
      {/* small image 1 */}
      <div className="relative col-span-1 h-[150px] sm:h-[200px] md:h-[250px] hidden sm:block sm:col-span-1 row-span-1">
        <Image
          src={images[2]}
          alt="Medium Property Image"
          fill
          className="object-cover w-full rounded-lg md:h-[300px]"
        />
      </div>
      {/* small image 2 */}
      <div className="relative col-span-1 h-[150px] sm:h-[200px] md:h-[250px] hidden sm:block sm:col-span-1 row-span">
        <Image
          src={images[3]}
          alt="Medium Property Image"
          fill
          className="object-cover w-full rounded-lg"
        />
        {/* show more photos button */}
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <button className="border border-white font-light text-xs text-white px-4 py-1 rounded-full backdrop-blur-sm hover:text-black hover:bg-white transition">
            show all photos
          </button>
        </span>
      </div>

      {/*Additional Features */}
      <div className="flex flex-row items-center gap-2 w-full text-xs sm:absolute">
        {/* Bed */}
        <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded-full text-center whitespace-nowrap">
          <Image
            src="/assets/icons/bed 1.png"
            alt="Bed"
            width={14}
            height={14}
          />
          <span className="mr-2.5">{data.offers.bed} bedrooms</span>
        </div>

        {/* Shower */}
        <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded-full text-center whitespace-nowrap">
          <Image
            src="/assets/icons/bathtub 1.png"
            alt="Shower"
            width={14}
            height={14}
          />
          <span className="mr-2.5">{data.offers.shower} bathroom</span>
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
