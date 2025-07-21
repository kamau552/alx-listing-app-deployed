// components/common/Button.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';


interface ButtonProps {
  label: string;
  onClick?: () => void;
}

interface AuthButtonsProps {
  onSignIn?: () => void;
  onSignUp?: () => void;
  className?: string;
  variant?: 'default' | 'mobile';
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
  >
    {label}
  </button>
);

export const AuthButtons: React.FC<AuthButtonsProps> = ({
  className,
  variant = "default",
}) => {
  return (
    <div
      className={`flex items-center space-x-2 md:space-x-3 lg:space-x-4 ${className}`}
    >
      {variant === "default" ? (
        // Responsive buttons with size progression
        <>
          <button
            className="
            flex items-center justify-center
            rounded-full
            bg-teal-600 text-white hover:bg-teal-700
            font-medium
            py-1.5 md:py-2 px-3 md:px-4
            text-xs sm:text-sm md:text-base
            min-w-[80px] sm:min-w-[90px] md:min-w-[100px] lg:min-w-[110px]
            h-8 md:h-9 lg:h-10
            transition-colors duration-200
            whitespace-nowrap
          "
          >
            <span>Sign In</span>
          </button>
          <button
            className="
            flex items-center justify-center
            border border-gray-300 rounded-full
            text-gray-800 hover:bg-gray-100
            font-medium
            py-1.5 md:py-2 px-3 md:px-4
            text-xs sm:text-sm md:text-base
            min-w-[80px] sm:min-w-[90px] md:min-w-[100px] lg:min-w-[110px]
            h-8 md:h-9 lg:h-10
            transition-colors duration-200
            whitespace-nowrap
          "
          >
            <span>Sign Up</span>
          </button>
        </>
      ) : (
        // Mobile variant
        <>
          <button
            className="
            text-xs sm:text-sm font-medium text-teal-600 hover:text-teal-700
            whitespace-nowrap
            px-2 py-1.5 md:px-3 md:py-2
          "
          >
            Sign In
          </button>
          <button
            className="
            bg-teal-600 text-white
            px-3 md:px-4 py-1.5 md:py-2
            rounded-full
            text-xs sm:text-sm font-medium
            hover:bg-teal-700
            whitespace-nowrap
            h-8 md:h-9
          "
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
};

export const BackButton = () => {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()}
      className="flex items-center px-2 py-1 mr-40 sm:hidden"
    >
      <Image
        src="/assets/icons/Linear/Arrows/Arrow Left.png"
        alt="Back"
        width={15}
        height={15}
        className="inline-block mr-2"
      />
      <p>Return</p>
    </button>
  );
};

export default Button;

