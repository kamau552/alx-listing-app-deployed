import Header from "@/components/layout/Header";
import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500">{property.rating} stars</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
         {property.images && property.images.length >= 5 ? (
  <div className="mt-6 grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
    {/* Main Image */}
    <div className="col-span-2 row-span-2 relative">
      <Image
        src={property.images[0]}
        alt="Main Image"
        fill
        className="object-cover rounded-lg"
      />
    </div>

    {/* Additional Images */}
    {property.images.slice(1, 3).map((img, index) => (
      <div key={index} className="relative w-full h-full">
        <Image
          src={img}
          alt={`Image ${index + 1}`}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    ))}
  </div>
) : (
  <p className="text-gray-500 mt-4">Not enough images to display a collage.</p>
)}

        {/* Description */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p>{property.description}</p>
        </div>

        {/* Amenities */}
        <div className="mt-4">
          <h2 className="text-2xl font-semibold">What this place offers</h2>
          <ul className="flex flex-wrap space-x-4">
            {property.category.map((amenity, index) => (
              <li key={index} className="bg-gray-200 p-2 rounded-md">
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertyDetail;