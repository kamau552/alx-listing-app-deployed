import React from 'react'

const CancellationPolicy = () => {
  return (
    <div className="mt-4 pl-2 border-t border-gray-200">
      <h2 className="pt-6 text-lg font-bold">Cancellation policy</h2>
      <p className="mt-2 text-gray-900">
        <b>Free cancellation before Aug 23.</b> Cancel before check-in on Aug 24 for a
        partial refund.
      </p>

      <h2 className="text-lg font-bold mt-6 border-t border-gray-200">
        <p className="mt-4">Ground Rules</p>
      </h2>
      <ul className="mt-2 text-gray-900 list-disc list-inside">
        <li>Follow the house rules</li>
        <li>Treat your Host’s home like your own</li>
      </ul>
    </div>
  );
}

export default CancellationPolicy;
