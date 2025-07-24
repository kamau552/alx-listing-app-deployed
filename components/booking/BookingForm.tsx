import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import CancellationPolicy from './CancellationPolicy';
import CustomCheckbox from '@/components/common/CustomCheckbox';

const BookingForm = () => {
  const [selectedCard, setSelectedCard] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardType: '',
  });

  const handleCardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCard(e.target.value);
    setFormData((prev) => ({ ...prev, cardType: e.target.value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('/api/bookings', formData);
      console.log('Booking success:', response.data);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError('Failed to submit booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 ">
      <h2 className="text-md sm:text-xl font-bold">Contact Detail</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <label className="text-xs text-black font-bold">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-xs text-black font-bold">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
          <div>
            <label className="text-xs text-black font-bold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-xs text-black font-bold">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
        </div>

        <div className="mt-4 border-b border-gray-300 pb-3 sm:pb-4">
          <CustomCheckbox label="Receive text message updates about your booking. Message rates may apply." />
        </div>

        {/* Payment Info */}
        <h2 className="text-md sm:text-xl font-bold mt-6">Pay with</h2>
        <div className="relative mt-2">
          <div className="relative">
            <input
              type="text"
              disabled
              placeholder=""
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
              <div className="relative">
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
                    <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {selectedCard && (
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-xs text-black font-bold">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="border border-gray-500 p-2 w-full mt-2 rounded-lg"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div>
                  <label className="text-xs text-black font-bold">Expiration Date</label>
                  <input
                    type="text"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
                  />
                </div>
                <div>
                  <label className="text-xs text-black font-bold">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Billing Address */}
        <h2 className="text-lg sm:text-xl font-bold mt-6">Billing Address</h2>
        <div className="mt-2">
          <label className="text-xs text-black font-bold">Street Address</label>
          <input
            type="text"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          <div>
            <label className="text-xs text-black font-bold">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-xs text-black font-bold">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-xs text-black font-bold">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
          <div>
            <label className="text-xs text-black font-bold">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full mt-2 rounded-lg"
            />
          </div>
        </div>

        <div className="pt-4">
          <CancellationPolicy />
        </div>

        <div className="pt-8">
          <button
            type="submit"
            disabled={loading}
            className="mt-6 bg-teal-600 text-white py-2 px-4 rounded-lg w-full sm:w-60 font-bold"
          >
            {loading ? 'Processing...' : 'Confirm & Pay'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-600 mt-2">Booking confirmed!</p>}
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
