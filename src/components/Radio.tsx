import React, { InputHTMLAttributes } from 'react';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Radio: React.FC<RadioProps> = ({ label, name, ...props }) => {
  return (
    <div className="mb-4">
      <label className="inline-flex items-center">
        <input type="radio" name={name} className="form-radio text-indigo-600" {...props} />
        <span className="ml-2 text-gray-700">{label}</span>
      </label>
    </div>
  );
};

export default Radio;
