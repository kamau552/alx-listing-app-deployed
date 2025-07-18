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
      <div className="container mx-auto p-6 font-sm overflow-x-hidden">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-black text-sm">
            ⭐ {property.rating} (376 reviews)
          </span>
          <span className="text-black text-sm">
            <Image
              src="/assets/icons/Bold/Map & Location/Map Point.png"
              alt="Location"
              width={16}
              height={16}
              className="inline-block mr-1"
            />
            {property.address.city}, {property.address.country}
          </span>
          <span className="text-black text-sm">
            <Image
              src="/assets/icons/profile 1.png"
              alt="Location"
              width={16}
              height={16}
              className="inline-block ml-2"
            />{" "}
            Mainstream
          </span>
          <div className="flex items-center ml-auto gap-2 text-sm">
            <span className="flex items-center border border-gray-300 px-2 py-1 rounded-full text-center whitespace-nowrap">
              <Image
                src="/assets/icons/Fav.png"
                alt="save"
                width={22}
                height={22}
                className="items-center inline-block p-1 bg-white"
              />
              Save
            </span>
            <span className="flex items-center border border-gray-300 px-2 py-1 rounded-full text-center whitespace-nowrap">
              <Image
                src="/assets/icons/Share.png"
                alt="share"
                width={22}
                height={22}
                className="items-center inline-block p-1.5 bg-white"
              />
              Share
            </span>
          </div>
        </div>

        {/* Image Grid */}
        <PropertyGrid data={property} />

        {/* Description and other tabs */}
        <div className="flex flex-col-2 border-gray-300 mt-4">
          {/* Description Tab */}
          <div >
            <Tab/>
          </div>

          {/*Booking Card */}
          <div>
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertyDetail;