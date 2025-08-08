import React from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ rating, onRatingChange }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onRatingChange(star)}
          className={`p-1 ${rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
        >
          <FaStar />
        </button>
      ))}
    </div>
  );
};

export default Rating;
