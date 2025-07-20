import React from 'react'

const BookingForm = () => {
  return (
    <div className="bg-white p-6 ">
      <h2 className="text-xl font-semibold">Contact Detail</h2>
      <form>
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg">
            <label>First Name</label>
            <input type="text" className="border border-gray-500 p-2 w-full mt-2 rounded-lg" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" className="border border-gray-500 p-2 w-full mt-2 rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Email</label>
            <input type="email" className="border border-gray-500 p-2 w-full mt-2 rounded-lg" />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="text" className="border border-gray-500 p-2 w-full mt-2 rounded-lg" />
          </div>
        </div>

        {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label>Card Number</label>
          <input type="text" className="border border-gray-500 p-2 w-full mt-2 rounded-lg" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Expiration Date</label>
            <input type="text" className="border border-gray-500 p-2 w-full mt-2 rounded-lg" />
          </div>
          <div>
            <label>CVV</label>
            <input type="text" className="border border-gray-500 p-2 w-full mt-2 rounded-lg" />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label>Street Address</label>
          <input type="text" className="border border-gray-500 p-2 w-full mt-2 rounded-lg" />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>City</label>
            <input type="text" className="border border-gray-500 p-2 w-full mt-2 rounded-lg" />
          </div>
          <div>
            <label>State</label>
            <input type="text" className="border border-gray-500 p-2 w-full mt-2 rounded-lg" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Zip Code</label>
            <input type="text" className="border border-gray-500 p-2 w-full mt-2 rounded-lg" />
          </div>
          <div>
            <label>Country</label>
            <input type="text" className="border border-gray-500 p-2 w-full mt-2 rounded-lg" />
          </div>
        </div>

        {/* Submit Button */}
        <button className="mt-6 bg-teal-600 text-white py-2 px-4 rounded-md w-full">
          Confirm & Pay
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
