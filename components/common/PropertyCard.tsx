import { PropertyCardProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function PropertyCard({ data, property }: PropertyCardProps) {
  return (
    <Link href={`/property/${property.id}`} className="w-full">
      <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden h-full">
        {/* Image with margin inside the card */}
        <div className="p-4 pb-0">
          <div className="relative w-full h-[200px] rounded-2xl overflow-hidden">
            <Image src={data.image} alt={data.name} fill className="object-cover" />
          </div>
        </div>

        <div className="flex flex-col justify-between flex-1 p-4 pt-3">
          {/* Pills */}
          <div className="flex flex-wrap gap-2 text-xs mb-2">
            <span className="bg-gray-100 px-2 py-1 rounded-full">Top Villa</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">Self CheckIn</span>
            <span className="bg-gray-100 px-2 py-1 rounded-full">Free Reschedule</span>
          </div>

          {/* Info */}
          <div className="mb-3">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-base">{data.name}</h3>
              <span className="text-sm font-semibold text-black">⭐ {data.rating}</span>
            </div>
            <p className="text-sm text-black">
              {data.address.city}, {data.address.country}
            </p>
          </div>

          {/* Features & Price */}
          <div className="flex justify-between items-center mt-auto text-sm">
            <div className="flex flex-wrap items-center gap-2 text-black text-xs">
              <div className="flex items-center gap-1">
                <Image src="/assets/icons/bed 1.png" alt="Bed" width={14} height={14} />
                {data.offers.bed}
              </div>
              <div className="flex items-center gap-1">
                <Image src="/assets/icons/bathtub 1.png" alt="Shower" width={14} height={14} />
                {data.offers.shower}
              </div>
              <div className="flex items-center gap-1">
                <Image src="/assets/icons/people 1.png" alt="Occupants" width={14} height={14} />
                {data.offers.occupants}
              </div>
            </div>

            <div className="font-semibold text-gray-900 whitespace-nowrap ml-2">
              ${data.price}/<span className="text-sm">n</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
