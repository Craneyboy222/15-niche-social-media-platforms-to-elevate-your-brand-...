import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from './Spinner';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const handleLoad = () => setLoading(false);
  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className={`relative ${className}`} aria-busy={loading} aria-live="polite">
      {loading && <Spinner />}
      {!error ? (
        <img src={src} alt={alt} onLoad={handleLoad} onError={handleError} className="w-full h-auto" />
      ) : (
        <div role="alert" className="text-red-500">Image failed to load</div>
      )}
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};