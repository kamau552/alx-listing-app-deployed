import React from 'react'
import Image from 'next/image';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OrderSummary: React.FC<{ bookingDetails: any, hideImageOnDesktop?: boolean; }> = ({
  bookingDetails,
}) => (
  <div className="bg-white p-6 pr-4 shadow-sm rounded-lg w-full h-[650px] md:items-center">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex items-center w-full mt-4 pl-2">
      <Image
        src="/assets/Images/image 19.png"
        alt="Property"
        width={420}
        height = {400}
        className="object-cover rounded-lg"
      />
    </div>
    <div className="p-2">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">⭐ 4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500">
          {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
        </p>
      </div>

    {/* Price Breakdown */}
    <div className="mt-6 pl-2 md:">
      <div className="flex justify-between mb-2">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-6 font-bold">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;