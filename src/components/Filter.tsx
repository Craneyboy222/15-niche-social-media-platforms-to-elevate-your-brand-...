import React from 'react';

interface FilterProps {
  filters: string[];
  onFilterChange: (selectedFilter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="p-4">
      <label htmlFor="filter-select" className="sr-only">Filter</label>
      <select
        id="filter-select"
        className="p-2 border rounded-lg"
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="">Select a filter</option>
        {filters.map((filter) => (
          <option key={filter} value={filter}>{filter}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
