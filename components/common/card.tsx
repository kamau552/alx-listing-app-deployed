import React from 'react';
import Image from 'next/image';
import { CardProps } from '@/interfaces';



const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      {imageUrl && (
        <Image src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      )}
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {description && <p className="text-gray-600 mb-2">{description}</p>}
      {children}
    </div>
  );
};

export default Card;
