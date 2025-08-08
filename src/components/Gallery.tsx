import React from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`gallery-${index}`} className="w-full h-48 object-cover" />
      ))}
    </div>
  );
};

export default Gallery;
