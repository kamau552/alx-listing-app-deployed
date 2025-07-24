import Header from "@/components/layout/Header";
import { useRouter } from "next/router";
import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import PropertyGrid from "../common/PropertyGrid";
import Tab from "@/components/common/tab";
import BookingSection from "@/components/property/BookingSection";
import React from "react";


const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
   const router = useRouter();
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const isActive = router.pathname === '/';
  const cleanedProperty = {
    ...property,
    offers: {
      bed: Number(property.offers.bed),
      shower: Number(property.offers.shower),
      occupants:(property.offers.occupants),
    },
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 sm:px-6 py-6 overflow-x-hidden text-sm">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 hidden sm:block">
          {property.name}
        </h1>

        {/* Rating and Location */}
        <div className="hidden sm:flex flex-wrap items-center justify-between gap-2 text-sm mb-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-black">
              ⭐ {property.rating} (376 reviews)
            </span>

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
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center px-2 py-1 border border-gray-300 rounded-full">
              <Image
                src="/assets/icons/Fav.png"
                alt="save"
                width={15}
                height={15}
                className="inline-block mr-2"
              />
              <p>Save</p>
            </span>

            <span className="flex items-center px-2 py-1 border border-gray-300 rounded-full">
              <Image
                src="/assets/icons/Share.png"
                alt="share"
                width={13}
                height={13}
                className="inline-block mr-2"
              />
              <p>Share</p>
            </span>
          </div>
        </div>

        {/* Mobile view */}
        <div className="flex sm:hidden items-center justify-between mb-4">
          <button
            onClick={() => router.back()}
            className="flex items-center px-2 py-1"
            aria-label="Go back"
          >
            <Image
              src="/assets/icons/Linear/Arrows/Arrow Left.png"
              alt="Return"
              width={15}
              height={15}
              className="inline-block mr-2"
            />
            <p>Return</p>
          </button>

          <div className="flex items-center gap-2 pr-4">
            <Image
              src="/assets/icons/Fav.png"
              alt="save"
              width={15}
              height={15}
              className="mr-6"
            />
            <Image
              src="/assets/icons/Share.png"
              alt="share"
              width={13}
              height={13}
            />
          </div>
        </div>

        {/* Property Image Grid */}
        <PropertyGrid data={cleanedProperty} />

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
            <Tab property={property}/>
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
