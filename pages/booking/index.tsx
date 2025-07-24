import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import Image from 'next/image';

export default function BookingPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isActive = isClient && router.pathname === '/booking';

  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="mx-auto">
      <Header />
      <div className="border-b border-gray-200 p-2 mt-0 bg-gray-100">
        <Link href={isActive ? "" : "/booking"}>
          <span
            className={`pl-14 cursor-pointer px-4 py-2 font-medium  ${
              isActive
                ? "underline decoration-solid decoration-teal-600 text-teal-600"
                : ""
            }`}
            onClick={(e) => {
              if (isActive) {
                e.preventDefault();
                router.back();
              }
            }}
          >
            <Image
              src="/assets/icons/Linear/Arrows/Arrow Left.png"
              alt="left arrow"
              width={15}
              height={15}
              className="inline-block mr-2"
            />
            <p className="inline-block">
              <b>Booking</b>
            </p>
          </span>
        </Link>
      </div>

      {/* Booking page */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 w-full">
        <div className="flex flex-col-reverse p-8 lg:flex-row gap-6 w-full">
          {/* Booking Form */}
          <div className="w-full">
            <BookingForm />
          </div>

          {/* Order Summary */}
          <div className="mr-3 mt-4">
            <OrderSummary
              bookingDetails={bookingDetails}
              hideImageOnDesktop={true}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}



