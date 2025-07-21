import React, { useState } from 'react';
import Image from 'next/image';
import CancellationPolicy from './CancellationPolicy';
import CustomCheckbox from '@/components/common/CustomCheckbox'; // Make sure this component exists

const BookingForm = () => {
  const [selectedCard, setSelectedCard] = useState('');

  const handleCardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCard(e.target.value);
  };

  return (
    <div className="bg-white p-4 sm:p-6">
      <h2 className="text-md sm:text-xl font-bold">Contact Detail</h2>
      <form>
        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label className="text-xs text-black font-bold">First Name</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-xs text-black font-bold">Last Name</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
          <div>
            <label className="text-xs text-black font-bold">Email</label>
            <input
              type="email"
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-xs text-black font-bold">Phone Number</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
        </div>

        {/* Receive notification message */}
        <div className="mt-4 border-b border-gray-300 pb-3 sm:pb-4">
          <CustomCheckbox label="Receive text message updates about your booking. Message rates may apply." />
        </div>

        {/* Payment Info */}
        <h2 className="text-md sm:text-xl font-bold mt-6">Pay with</h2>
        <div className="relative mt-2">
          <div className="relative">
            <input
              type="text"
              className="mb-1 border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
              <Image
                src="/assets/icons/credit-card 1.png"
                alt="Card"
                width={10}
                height={10}
                className="h-5 w-auto mr-2"
              />
              <div className="relative ">
                <select
                  value={selectedCard}
                  onChange={handleCardChange}
                  className="appearance-none p-2 pr-2 rounded-lg text-sm text-gray-700"
                >
                  <option value="">credit or debit</option>
                  <option value="visa">Visa</option>
                  <option value="mastercard">MasterCard</option>
                  <option value="amex">American Express</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card Inputs */}
          {selectedCard && (
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-xs text-black font-bold">
                  Card Number
                </label>
                <input
                  type="text"
                  className="border border-gray-500 p-2 w-full mt-2 rounded-lg"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div>
              <label className="text-xs text-black font-bold">
                Card Number
              </label>
              <input
                type="text"
                className="border border-gray-500 p-2 w-full mt-2 rounded-lg"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div>
              <label className="text-xs text-black font-bold">
                Expiration Date
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
              />
            </div>
            <div>
              <label className="text-xs text-black font-bold">CVV</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-lg sm:text-xl font-bold mt-6">Billing Address</h2>
        <div className="mt-2">
          <label className="text-xs text-black font-bold">Street Address</label>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <div>
            <label className="text-xs text-black font-bold">City</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-xs text-black font-bold">State</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-xs text-black font-bold">Zip Code</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-xs text-black font-bold">Country</label>
            <input
              type="text"
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
        </div>

        <div className="pt-4">
          <CancellationPolicy />
        </div>

        <div className="pt-8">
          <button className="mt-6 bg-teal-600 text-white py-2 px-4 rounded-lg w-full sm:w-60 font-bold">
            Confirm & Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
    
