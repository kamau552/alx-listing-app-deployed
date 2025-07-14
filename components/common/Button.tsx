// components/common/Button.tsx
import React from 'react';


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

export const AuthButtons: React.FC<AuthButtonsProps> = ({ className, variant = 'default' }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {variant === 'default' ? (
        // Original teal/purple style
        <>
          <button className="flex items-center rounded-full space-x-2 bg-teal-600 text-white hover:bg-teal-700 font-light py-2 px-4 transition-colors">
            <span>Sign In</span>
          </button>
          <button className="flex items-center border border-gray-300 rounded-full space-x-2 text-black hover:bg-gray-100 font-medium py-2 px-4 transition-colors">
            <span>Sign Up</span>
          </button>
        </>
      ) : (
        // Alternative mobile-friendly style
        <>
          <button className="text-sm font-medium text-teal-600 hover:text-teal-700">
            Sign In
          </button>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-700">
            Sign Up
          </button>
        </>
      )}
    </div>
  );
};

export default Button;

