import React from 'react';

interface ReviewProps {
  rating: number;
  totalStars?: number;
}

const Review: React.FC<ReviewProps> = ({ rating, totalStars = 5 }) => {
  const stars = Array.from({ length: totalStars }, (_, index) => (
    <span key={index} aria-hidden="true">
      {index < rating ? '★' : '☆'}
    </span>
  ));

  return <div className="flex space-x-1 text-yellow-500">{stars}</div>;
};

export default Review;
