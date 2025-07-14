import { PropertyCardProps } from "@/interfaces";
import Image from "next/image";
import { BadgeCheck, Bed, ShowerHead, Users } from "lucide-react";
import Link from "next/link";

export default function PropertyCard({ data }: PropertyCardProps) {
  return (
    <Link href={`/property/${encodeURIComponent(data.name)}`}>
    <div className="relative rounded-xl shadow p-4 p w-full max-w-sm bg-white hover:">
      {/* Discount Badge 
      <div className="absolute top-2 left-2 bg-green-500 text-white text-sm px-2 py-1 rounded z-10">
        60% Off
      </div>*/}

      {/* Image */}
      <div className="relative w-full h-48 rounded-lg overflow-hidden">
        <Image src={data.image} alt={data.name} fill className="object-cover" />
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2 mt-3 text-xs text-black">
        <span className="bg-gray-100 px-2 py-1 rounded-full">Top Villa</span>
        <span className="bg-gray-100 px-2 py-1 rounded-full">Self CheckIn</span>
        <span className="bg-gray-100 px-2 py-1 rounded-full">Free Reschedule</span>
      </div>

      {/* Info */}
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-base">{data.name}</h3>
          <span className="text-black text-sm font-semibold">
            ⭐ {data.rating}
          </span>
        </div>
        <p className="text-sm text-black">
          {data.address.city}, {data.address.country}
        </p>
      </div>

      {/* Features & Price */}
      <div className="mt-3 flex justify-between items-center text-sm">
        <div className="flex items-center gap-3 text-black">
          <div className="flex items-center gap-1.5 rounded-full  border border-gray-300 text-xs px-3 py-1 h-6">
            <Image
              src="/assets/icons/bed 1.png"
              alt="Bed"
              width={12}
              height={12}
            />
            {data.offers.bed}
            <Image
              src="/assets/icons/bathtub 1.png"
              alt="Shower"
              width={12}
              height={12}
            />
            {data.offers.shower}
            <Image
              src="/assets/icons/people 1.png"
              alt="Users"
              width={12}
              height={12}
            />
            {data.offers.occupants}
          </div>
        </div>
        <div className="ml-10 font-semibold text-gray-900">
          ${data.price}/<span className="text-sm">n</span>
        </div>
      </div>
    </div>
    </Link>
  );
}
