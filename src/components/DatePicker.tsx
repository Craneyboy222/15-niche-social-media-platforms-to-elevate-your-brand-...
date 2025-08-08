import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  className?: string;
}

export const CustomDatePicker: React.FC<DatePickerProps> = ({ selected, onChange, className }) => {
  return (
    <div className={className} aria-label="Date Picker">
      <DatePicker selected={selected} onChange={onChange} dateFormat="MM/dd/yyyy" />
    </div>
  );
};

CustomDatePicker.propTypes = {
  selected: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};