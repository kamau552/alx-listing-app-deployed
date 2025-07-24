import { useState, useEffect } from "react";
import Image from 'next/image';
import { myReviewArray } from '@/constants';

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [reviews, setReviews] = useState(myReviewArray);
  const [loading, setLoading] = useState(false); // Set to false since we're using local data
  const [error, setError] = useState<string | null>(null);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    // Simulate loading if needed
    setLoading(true);
    
    // Small delay to mimic API fetch
    const timer = setTimeout(() => {
      try {
        // Calculate average rating
        const avg = myReviewArray.reduce((sum, review) => sum + review.rating, 0) / 
                   myReviewArray.length;
        setAverageRating(parseFloat(avg.toFixed(1)));
        
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError("Error displaying reviews");
      } finally {
        setLoading(false);
      }
    }, 300); // Small delay for realism

    return () => clearTimeout(timer);
  }, [propertyId]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        <h3 className="text-sm font-semibold col-span-2 mb-1">
          ⭐ Loading reviews...
        </h3>
        <div className="col-span-2 text-center py-4">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        <h3 className="text-sm font-semibold col-span-2 mb-1">
          ⭐ {averageRating} ({reviews.length} reviews)
        </h3>
        <div className="col-span-2 text-red-500 text-sm">{error}</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
      <h3 className="text-sm font-semibold col-span-2 mb-1">
        ⭐ {averageRating} ({reviews.length} reviews)
      </h3>
      
      {reviews.length > 0 ? (
        reviews.map((review, index) => (
          <div key={index} className="text-xs pr-4">
            <div className="flex items-start gap-1.5">
              <Image
                src={review.avatar}
                alt={review.name}
                width={28}
                height={28}
                className="rounded-full"
              />
              <div>
                <p className="font-bold leading-none">{review.name}</p>
                <p className="text-gray-500 text-[0.65rem] leading-none mt-2">
                  {review.work}
                </p>
              </div>
            </div>
            <div className="mt-0.5 text-gray-500 text-xs">
              {review.date}
              {review.place && <span className="ml-1">{review.place}</span>}
            </div>
            <p className="mt-1 text-black text-sm leading-snug">
              {review.comment}
            </p>
          </div>
        ))
      ) : (
        <div className="col-span-2 text-gray-500 text-sm">
          No reviews yet. Be the first to review!
        </div>
      )}
    </div>
  );
};

export default ReviewSection;