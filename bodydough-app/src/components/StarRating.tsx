"use client"
// components/StarRating.tsx
import { useState } from 'react';

interface StarRatingProps {
  totalStars: number;
  starSize : string;
  onRatingChange: (newRating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars , starSize, onRatingChange}) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starValue: number) => {
    setRating(starValue);
    onRatingChange(starValue);
  };

  return (
    <div className="star-rating flex">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        const filled = starValue <= rating;
        return (
          <span
            key={starValue}
            className={`star ${filled ? 'text-yellow-500' : 'text-gray-400'} ${starSize} cursor-pointer hover:text-yellow-500`}
            onClick={() => handleStarClick(starValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
