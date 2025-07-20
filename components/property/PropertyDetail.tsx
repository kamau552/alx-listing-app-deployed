import Header from "@/components/layout/Header";
import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import PropertyGrid from "../common/PropertyGrid";
import Tab from "@/components/common/tab";
import BookingSection from "@/components/property/BookingSection";
import React from "react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 py-6 overflow-x-hidden text-sm">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 hidden sm:block">
          {property.name}
        </h1>

        {/* Rating and Location */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mb-4">
          <span className="text-black hidden sm:block">
            ⭐ {property.rating} (376 reviews)
          </span>

          <span className="text-black items-center hidden sm:block">
            <Image
              src="/assets/icons/Bold/Map & Location/Map Point.png"
              alt="Location"
              width={16}
              height={16}
              className="inline-block mr-1"
            />
            {property.address.city}, {property.address.country}
          </span>

          <span className="text-black items-center mr-40 sm:mr-20 hidden sm:block">
            <Image
              src="/assets/icons/profile 1.png"
              alt="Host"
              width={16}
              height={16}
              className="inline-block ml-2 mr-1"
            />
            Mainstream
          </span>

          {/* Save and Share */}
          {/* Return button - visible only on small screens */}
          <div className="flex">
            <span className="flex items-center px-2 py-1 mr-40 sm:hidden">
              <Image
                src="/assets/icons/Linear/Arrows/Arrow Left.png"
                alt="save"
                width={15}
                height={15}
                className="inline-block mr-2"
              />
              <p>Return</p>
            </span>

            {/* Save button - with conditional borders */}
            <span className="flex items-center px-2 py-1 mr-1 sm:border sm:border-gray-300 sm:rounded-full sm:ml-40">
              <Image
                src="/assets/icons/Fav.png"
                alt="save"
                width={15}
                height={15}
                className="inline-block mr-2"
              />
              <p className="hidden sm:block">Save</p>
            </span>

            {/* Share button - with conditional borders */}
            <span className="flex items-center px-2 py-1 sm:border sm:border-gray-300 sm:rounded-full">
              <Image
                src="/assets/icons/Share.png"
                alt="share"
                width={13}
                height={13}
                className="inline-block mr-1 m-2"
              />
              <p className="hidden sm:block">Share</p>
            </span>
          </div>
        </div>

        {/* Property Image Grid */}
        <PropertyGrid data={property} />

        {/*Rating location on small screens */}
        <div className="container mx-auto px-4 sm:px-6 py-6 overflow-x-hidden text-sm block lg:hidden md:hidden">
          {/* Name of property */}
          <h1 className="text-2xl font-bold mb-2">{property.name}</h1>

          {/* Rating and Location */}
          <div className="flex flex-wrap items-center gap-2 text-xs mb-0">
            <span className="text-black">
              ⭐ {property.rating} (376 reviews)
            </span>

            <span className="text-black items-center">
              <Image
                src="/assets/icons/Bold/Map & Location/Map Point.png"
                alt="Location"
                width={16}
                height={16}
                className="inline-block mr-1"
              />
              {property.address.city}, {property.address.country}
            </span>

            <span className="text-black items-center">
              <Image
                src="/assets/icons/profile 1.png"
                alt="Host"
                width={16}
                height={16}
                className="inline-block ml-2 mr-1"
              />
              Mainstream
            </span>
          </div>
        </div>

        {/* Tabs + Booking Section */}
        <div className="flex flex-col lg:flex-row gap-6 mt-2 sm:mt-0">
          {/* Tabs Content */}
          <div className="w-full lg:w-2/3">
            <Tab />
          </div>

          {/* Sticky Booking Card */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertyDetail;
