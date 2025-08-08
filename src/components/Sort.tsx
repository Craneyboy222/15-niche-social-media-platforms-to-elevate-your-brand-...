import React from 'react';

interface SortProps {
  options: string[];
  onSortChange: (selectedOption: string) => void;
}

const Sort: React.FC<SortProps> = ({ options, onSortChange }) => {
  return (
    <div className="p-4">
      <label htmlFor="sort-select" className="sr-only">Sort</label>
      <select
        id="sort-select"
        className="p-2 border rounded-lg"
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="">Sort by</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Sort;
