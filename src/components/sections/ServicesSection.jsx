import React from 'react';

const ServiceBlock = ({ title, subtitle, image, link }) => {
  return (
    <div className="relative h-[480px] overflow-hidden group">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 group-hover:bg-opacity-70"></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
        <h3 className="text-3xl md:text-4xl uppercase font-raleway font-bold tracking-wider mb-4">
          {title}
        </h3>
        <p className="text-xl uppercase font-light tracking-wide mb-8">
          {subtitle}
        </p>
        <a 
          href={link} 
          className="border border-white text-white hover:bg-primary hover:border-primary px-6 py-3 uppercase font-medium tracking-wider transition-all duration-300"
        >
          Xem thêm
        </a>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "CÔNG TRÌNH",
      subtitle: "Thiết kế BIỆT THỰ",
      image: "/images/services/villa-service.jpg",
      link: "/du-an/biet-thu"
    },
    {
      id: 2,
      title: "KIẾN TRÚC",
      subtitle: "Thiết kế NHÀ PHỐ",
      image: "/images/services/house-service.jpg",
      link: "/du-an/nha-pho"
    },
    {
      id: 3,
      title: "NỘI THẤT",
      subtitle: "Thiết kế NỘI THẤT",
      image: "/images/services/interior-service.jpg",
      link: "/du-an/noi-that"
    }
  ];

  return (
    <section className="w-full bg-background-white">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map(service => (
          <ServiceBlock
            key={service.id}
            title={service.title}
            subtitle={service.subtitle}
            image={service.image}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;