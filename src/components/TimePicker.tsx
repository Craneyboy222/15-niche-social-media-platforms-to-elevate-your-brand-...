import React from 'react';
import { TimePicker as AntTimePicker } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

interface TimePickerProps {
  value: moment.Moment | null;
  onChange: (time: moment.Moment | null) => void;
  className?: string;
}

export const TimePicker: React.FC<TimePickerProps> = ({ value, onChange, className }) => {
  return (
    <div className={className} aria-label="Time Picker">
      <AntTimePicker value={value} onChange={onChange} format="HH:mm" />
    </div>
  );
};

TimePicker.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};