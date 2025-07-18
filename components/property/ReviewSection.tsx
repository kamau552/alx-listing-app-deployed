import React from 'react';
import Image from 'next/image';
import { myReviewArray } from '@/constants';

interface ReviewSectionProps {
  reviews?: any[];
  rating: number;
}



const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews = [],rating }) => {
  return (
    <div className="grid grid-cols-2 sm:col-span-1 mt-8">
      <h3 className="text-md font-semibold col-span-2">
        ⭐ {rating} ({reviews.length} reviews)
      </h3>
      {reviews.map((review, index) => (
        <div key={index} className="text-xs pb-2 px-2 py-1 mb-4 mt-8 ">
          <div className="flex mb-1">
            <Image 
              src={review.avatar} 
              alt={review.name} 
              width={40}
              height={40}
              className="rounded-full mr-4"
            />
              <p className="mb-0 font-bold">
                {review.name}
              </p>
          </div>
          <div>
            <p className="ml-14 mb-2 text-gray-500">{review.work}</p>
          </div>
          <p className="mb-4">
            {review.date}
            <p className="inline-block pl-2 text-gray-500">{review.place}</p>
          </p>
          <p className="md:grid grid-cols-2 sm:cols-1 text-black ">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
