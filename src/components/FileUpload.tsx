import React, { useRef } from 'react';
import PropTypes from 'prop-types';

interface FileUploadProps {
  onUpload: (files: FileList | null) => void;
  accept?: string;
  multiple?: boolean;
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onUpload, accept, multiple = false, className }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpload(event.target.files);
  };

  return (
    <div className={`file-upload ${className}`} aria-label="File Upload">
      <input
        type="file"
        ref={inputRef}
        onChange={handleChange}
        accept={accept}
        multiple={multiple}
        className="hidden"
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload File
      </button>
    </div>
  );
};

FileUpload.propTypes = {
  onUpload: PropTypes.func.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  className: PropTypes.string,
};