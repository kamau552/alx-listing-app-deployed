import React from 'react';
import Image from 'next/image';
import { myReviewArray } from '@/constants';

interface ReviewSectionProps {
  reviews?: any[];
  rating: number;
}



const ReviewSection: React.FC<ReviewSectionProps> = ({
  reviews = [],
  rating,
}) => {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-3"> {/* Reduced vertical gap */}
      <h3 className="text-sm font-semibold col-span-2 mb-1"> {/* Smaller text and margin */}
        ⭐ {rating} ({reviews.length} reviews)
      </h3>
      {reviews.map((review, index) => (
        <div key={index} className="text-xs pr-4"> {/* Added right padding */}
          <div className="flex items-start gap-1.5"> {/* Tighter gap */}
            <Image
              src={review.avatar}
              alt={review.name}
              width={28} 
              height={28}
              className="rounded-full"
            />
            <div>
              <p className="font-bold leading-none">{review.name}</p> {/* Tighter line */}
              <p className="text-gray-500 text-[0.65rem] leading-none mt-2"> {/* Smaller text */}
                {review.work}
              </p>
            </div>
          </div>
          <div className="mt-0.5 text-gray-500 text-xs"> {/* Smaller margin */}
            {review.date}
            {review.place && <span className="ml-1">{review.place}</span>}
          </div>
          <p className="mt-1 text-black text-sm leading-snug"> {/* Compact text */}
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
