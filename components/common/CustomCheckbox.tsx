import React, { useState } from 'react'

const CustomCheckbox = ({ label }: { label: string }) => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <label className="flex items-start sm:items-center gap-2 cursor-pointer group">
      {/* Hidden native checkbox */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        className="absolute opacity-0 h-0 w-0"
      />
      
      {/* Custom checkbox - responsive sizing */}
      <div className={`
        relative flex-shrink-0
        h-5 w-5 sm:h-6 sm:w-6 md:h-5 md:w-5 lg:h-6 lg:w-6
        rounded-sm sm:rounded-md
        border-2
        ${isChecked ? 'bg-teal-600 border-teal-600' : 'bg-white border-gray-300'}
        transition-all duration-200
        flex items-center justify-center
        group-hover:scale-105
        mt-0.5 sm:mt-0 /* Vertical alignment adjustment */
      `}>
        {/* Checkmark - responsive sizing */}
        {isChecked && (
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      
      {/* Label text - responsive sizing and wrapping */}
      <span className="text-xs sm:text-sm text-gray-800 leading-tight sm:leading-normal">
        {label}
      </span>
    </label>
  );
};

export default CustomCheckbox;
