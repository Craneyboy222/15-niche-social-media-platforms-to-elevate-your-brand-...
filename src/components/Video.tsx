import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from './Spinner';

interface VideoProps {
  src: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
}

export const Video: React.FC<VideoProps> = ({ src, className, controls = true, autoPlay = false }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleCanPlay = () => setLoading(false);
  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className={`relative ${className}`} aria-busy={loading} aria-live="polite">
      {loading && <Spinner />}
      {!error ? (
        <video
          ref={videoRef}
          src={src}
          controls={controls}
          autoPlay={autoPlay}
          onCanPlay={handleCanPlay}
          onError={handleError}
          className="w-full h-auto"
        />
      ) : (
        <div role="alert" className="text-red-500">Video failed to load</div>
      )}
    </div>
  );
};

Video.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
};