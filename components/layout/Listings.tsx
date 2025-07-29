import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Link from "next/link";
import PropertyCard from "@/components/common/PropertyCard";

export default function ListingsPage() {
  return (
    <div className="pl-10 pr-10 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <div key={property.id} className="relative">
            {/* Show badge only on the first property */}
            {index === 0 && (
              <div className="absolute top-2 left-2 bg-teal-500 text-white text-xs px-2 py-1 rounded-md z-20">
                60% Off
              </div>
            )}
            <PropertyCard data={property} property={property} />
          </div>
        ))}
      </div>

      {/* Show More */}
      <div className="w-full flex justify-center mt-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center rounded-full bg-gray-900 text-white text-sm h-10 px-5 cursor-pointer">
            Show more
          </div>
          <Link href="#" className="mt-1.5 text-sm text-gray-700">
            Click to see more listings
          </Link>
        </div>
      </div>
    </div>
  );
}
