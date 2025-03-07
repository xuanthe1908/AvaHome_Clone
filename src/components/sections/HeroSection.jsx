import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slide data with images and content
  const slides = [
    {
      id: 1,
      image: '/images/hero1.jpg',
      title: 'Nhà Phố',
      subtitle: 'Thiết kế kiến trúc hiện đại, tinh tế trong từng chi tiết',
      buttonText: 'Xem thêm',
      buttonLink: '/du-an/nha-pho'
    },
    {
      id: 2,
      image: '/images/hero2.jpg',
      title: 'Biệt Thự',
      subtitle: 'Không gian đẳng cấp, phong cách sống thượng lưu',
      buttonText: 'Xem thêm',
      buttonLink: '/du-an/biet-thu'
    },
    {
      id: 3,
      image: '/images/hero3.jpg',
      title: 'Nội Thất',
      subtitle: 'Thiết kế nội thất cao cấp, sang trọng và hiện đại',
      buttonText: 'Xem thêm',
      buttonLink: '/du-an/noi-that'
    }
  ];

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  // Manual slide change
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div className="h-full w-full">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background image with overlay */}
            <div className="absolute inset-0 bg-black">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="absolute h-full w-full object-cover opacity-70" 
              />
            </div>
            
            {/* Content */}
            <div className="relative z-20 flex h-full items-center justify-center text-center text-white">
              <div className="px-4 max-w-4xl">
                <h1 className="font-raleway font-light uppercase text-4xl md:text-6xl lg:text-7xl tracking-wider mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                  {slide.subtitle}
                </p>
                <Button 
                  variant="white"
                  size="lg"
                  onClick={() => window.location.href = slide.buttonLink}
                >
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all duration-300"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
      
      {/* Dots indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full border-2 border-white transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white opacity-100' 
                : 'bg-transparent opacity-70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;