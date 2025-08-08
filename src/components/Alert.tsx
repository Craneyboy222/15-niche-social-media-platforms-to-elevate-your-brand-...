import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const alertClasses = classNames('p-4 rounded-lg', {
    'bg-green-100 text-green-700': type === 'success',
    'bg-red-100 text-red-700': type === 'error',
    'bg-yellow-100 text-yellow-700': type === 'warning',
    'bg-blue-100 text-blue-700': type === 'info',
  });

  return (
    <div className={alertClasses} role="alert">
      <span>{message}</span>
      {onClose && (
        <button className="ml-4" onClick={onClose} aria-label="Close Alert">
          &times;
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default Alert;
