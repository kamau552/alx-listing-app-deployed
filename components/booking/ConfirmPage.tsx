import { useState } from "react";
import ThankYouModal from "@/components/common/ThankYouModal";

const ConfirmPage = () => {
  const [showModal, setShowModal] = useState(false);
  const selectedDate = "August 15, 2025"; // or get from state

  const handleConfirm = () => {
    // Do booking logic here, then:
    setShowModal(true);
  };

  return (
    <>
      {/* Your Confirm & Pay content */}
      <button
        onClick={handleConfirm}
        className="bg-teal-600 text-white px-6 py-3 rounded-lg mt-4"
      >
        Confirm & Pay
      </button>

      <ThankYouModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        selectedDate={selectedDate}
      />
    </>
  );
};

export default ConfirmPage;
