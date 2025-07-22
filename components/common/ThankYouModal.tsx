"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({
  isOpen,
  onClose,
  selectedDate,
}) => {
  const router = useRouter();
  const [savePreference, setSavePreference] = useState(true);

  // Format the date if needed
  const formattedDate = new Date(selectedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const handleGoHome = () => {
    onClose(); // Optional: close the modal
    router.push("/"); // Redirect to homepage
  };

  // Always return valid JSX
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-md rounded-xl p-6 shadow-lg text-center">
        <h2 className="text-xl font-semibold text-teal-600 mb-3">
          Thank you for your booking!
        </h2>
        <p className="text-gray-600 mb-4">
          Your trip is confirmed for <strong>{formattedDate}</strong>.
        </p>

        <div className="flex items-center justify-center gap-2 mb-4">
          <input
            type="checkbox"
            id="savePrefs"
            checked={savePreference}
            onChange={(e) => setSavePreference(e.target.checked)}
            className="form-checkbox text-teal-600"
          />
          <label htmlFor="savePrefs" className="text-sm text-gray-600">
            Save this preference for future bookings
          </label>
        </div>

        <button
          onClick={handleGoHome}
          className="mt-4 inline-block bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition"
        >
          Go back to homepage
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;

