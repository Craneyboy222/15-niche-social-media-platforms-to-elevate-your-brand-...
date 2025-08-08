import React from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PropTypes from 'prop-types';

interface CalendarProps {
  value: Date;
  onChange: (date: Date) => void;
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({ value, onChange, className }) => {
  return (
    <div className={className} aria-label="Calendar">
      <ReactCalendar value={value} onChange={onChange} />
    </div>
  );
};

Calendar.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};