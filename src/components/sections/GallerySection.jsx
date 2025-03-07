import React from 'react';

const GallerySection = () => {
  // Sample gallery images - in a real application, these would come from an API or props
  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/gallery-1.jpg",
      alt: "Kiến trúc Avahome"
    },
    {
      id: 2,
      src: "/images/gallery/gallery-2.jpg",
      alt: "Kiến trúc Avahome"
    },
    {
      id: 3,
      src: "/images/gallery/gallery-3.jpg",
      alt: "Kiến trúc Avahome"
    },
    {
      id: 4,
      src: "/images/gallery/gallery-4.jpg",
      alt: "Kiến trúc Avahome"
    },
    {
      id: 5,
      src: "/images/gallery/gallery-5.jpg",
      alt: "Kiến trúc Avahome"
    },
    {
      id: 6,
      src: "/images/gallery/gallery-6.jpg",
      alt: "Kiến trúc Avahome"
    },
    {
      id: 7,
      src: "/images/gallery/gallery-7.jpg",
      alt: "Kiến trúc Avahome"
    },
    {
      id: 8,
      src: "/images/gallery/gallery-8.jpg",
      alt: "Kiến trúc Avahome"
    }
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
        {galleryImages.map(image => (
          <div key={image.id} className="overflow-hidden h-48 md:h-64 lg:h-80">
            <img
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              alt={image.alt}
              src={image.src}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;