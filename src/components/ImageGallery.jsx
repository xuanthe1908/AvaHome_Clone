import React from 'react';

const ImageGalleryItem = ({ image, alt }) => {
  return (
    <div className="overflow-hidden relative h-[335.4px]">
      <img
        className="absolute h-full w-full top-0 right-0 bottom-0 left-0 max-w-full overflow-hidden max-h-full object-cover"
        alt={alt || "Gallery Image"}
        src={image}
      />
      <div className="absolute h-full w-full top-0 right-0 bottom-0 left-0 [background:linear-gradient(0deg,_#323232,_rgba(50,_50,_50,_0)_33%)] opacity-[0.3]" />
    </div>
  );
};

const ImageGallery = ({ images, columns = 3, gap = 5, className = '', itemClassName = '' }) => {
  return (
    <div className={`grid grid-cols-${columns} gap-${gap} ${className}`}>
      {images.map((image, index) => (
        <div 
          key={index} 
          className={itemClassName || "w-[calc(100%_-_729.6px)]"}
        >
          <ImageGalleryItem image={image} alt={`Gallery image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;