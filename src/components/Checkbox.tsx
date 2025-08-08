import React, { InputHTMLAttributes } from 'react';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="inline-flex items-center">
        <input type="checkbox" className="form-checkbox text-indigo-600" {...props} />
        <span className="ml-2 text-gray-700">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
