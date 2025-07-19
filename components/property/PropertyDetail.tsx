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
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          {property.name}
        </h1>

        {/* Rating and Location */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm md:text-base mb-4">
          <span className="text-black">⭐ {property.rating} (376 reviews)</span>

          <span className="text-black flex items-center">
            <Image
              src="/assets/icons/Bold/Map & Location/Map Point.png"
              alt="Location"
              width={16}
              height={16}
              className="inline-block mr-1"
            />
            {property.address.city}, {property.address.country}
          </span>

          <span className="text-black flex items-center">
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
          <div className="flex gap-2 ml-auto text-xs sm:text-sm w-full md:w-auto justify-start md:justify-end mt-2 md:mt-0">
            <span className="flex items-center border border-gray-300 px-2 py-1 rounded-full">
              <Image
                src="/assets/icons/Fav.png"
                alt="save"
                width={15}
                height={15}
                className="inline-block mr-1"
              />
              Save
            </span>
            <span className="flex items-center border border-gray-300 px-2 py-1 rounded-full">
              <Image
                src="/assets/icons/Share.png"
                alt="share"
                width={15}
                height={15}
                className="inline-block mr-1"
              />
              Share
            </span>
          </div>
        </div>

        {/* Property Image Grid */}
        <PropertyGrid data={property} />

        {/* Tabs + Booking Section */}
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
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
