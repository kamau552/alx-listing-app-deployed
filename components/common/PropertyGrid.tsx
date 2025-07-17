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
    <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] py-2 mt-2 break-inside-avoid">
      {/*Large Image*/}
      <div className="col-span-2 row-span-2 sm:col-span-2 relative">
        <Image
          src={images[0]}
          alt="Large Property Image"
          fill
          className="object-cover w-full rounded-lg md:h-[500px]"
        />
      </div>

      {/*Medium Images*/}
      <div className="col-span-2 row-span-1 relative">
        <Image
          src={images[1]}
          alt="Medium Property Image"
          fill
          className="object-cover w-full rounded-lg md:h-[300px]"
        />
      </div>
      {/* small image 1 */}
      <div className="col-span-1 row-span-1 relative sm:block sm:col-span-1">
        <Image
          src={images[2]}
          alt="Medium Property Image"
          fill
          className="object-cover w-full rounded-lg md:h-[300px]"
        />
      </div>
      {/* small image 2 */}
      <div className="col-span-1 row-span-1 sm:block relative">
        <Image
          src={images[3]}
          alt="Medium Property Image"
          fill
          className="object-cover w-full rounded-lg md:w-full md:h-[300px]"
        />
        {/* show more photos button */}
        <span className="object-bottom absolute bottom-2.5 left-20 right-20 px-3 py-2 rounded-b-lg text-center">
          <button className="flex object-bottom border-1 border-white font-extralight text-xs text-white px-5 py-1 rounded-full text-center whitespace-nowrap backdrop-blur-sm backdrop-brightness-100 hover:backdrop-blur-lg hover:text-black transition-colors duration-300">
            show all photos
          </button>
        </span>
      </div>

      {/*Additional Features */}
      <div className="flex flex-row items-center gap-2 w-full text-xs">
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
