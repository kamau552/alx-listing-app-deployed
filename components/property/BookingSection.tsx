import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react'

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const handleReserveClick = () => {
  setIsLoading(true);
  router.push('/booking').then(() => setIsLoading(false));
  };

  return (
    <div className="bg-white p-6 pl-6 shadow-md w-full rounded-lg">
      <h3 className="text-xl font-semibold pb-1.5 border-b border-gray-300">
        ${price}
        <span className="text-gray-500 text-sm ">/night</span>
      </h3>
      <div className="mt-2 pb-0 text-xs">
        <label className="font-bold">Check-in</label>
        <input type="date" className="border border-gray-400 p-2 w-full mt-2" />
      </div>
      <div className="mt-4 text-xs">
        <label className="font-bold">Check-out</label>
        <input type="date" className="border border-gray-400 p-2 w-full mt-2" />
      </div>

      {/* Total payment */}
      <div className="mt-6 text-gray-500">
        <p className="text-xs justify-between font-bold mb-3">
          $3200 x 7 nights
          <span className="text-black font-bold pl-37">$22400</span>
        </p>
        <p className="text-xs justify-between font-bold mb-3">
          Weekly discounts<span className="text-black font-bold pl-40">$0</span>
        </p>
        <p className="text-xs justify-between font-bold mb-5">
          Service fee <span className="text-black font-bold pl-48">$0</span>
        </p>
        <p className="flex border-t border-gray-300 text-xs text-gray-500 font-bold pt-1.5">
          Total payment:{" "}
          <span className="pl-40 space-x-4 text-teal-600">
            <strong>${price * 7}</strong>
          </span>
        </p>
      </div>

      {/* Reserve button */}
      <button
        onClick={handleReserveClick}
        disabled={isLoading}
        className={`mt-4 bg-teal-600 text-white text-xs py-2 px-4 w-full rounded-md hover:bg-teal-500 ${
          isLoading ? "opacity-75 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Processing..." : "Reserve now"}
      </button>
    </div>
  );
};

export default BookingSection;