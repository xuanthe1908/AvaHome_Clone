import React from 'react';

/**
 * Project card component for displaying project thumbnails
 * 
 * @param {Object} props
 * @param {string} props.image - Image URL
 * @param {string} props.title - Project title
 * @param {string} props.category - Project category
 * @param {string} props.link - Link to project details
 * @param {string} props.className - Additional custom classes
 */
const ProjectCard = ({ 
  image, 
  title, 
  category, 
  link = '#',
  className = '' 
}) => {
  return (
    <div className={`group overflow-hidden rounded shadow-card transition-all duration-300 ${className}`}>
      {/* Card with overlay effect on hover */}
      <a href={link} className="block relative h-full">
        <div className="aspect-w-4 aspect-h-3 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-white">
            <span className="text-sm font-medium text-primary uppercase block mb-1">
              {category}
            </span>
            <h3 className="text-xl font-raleway font-semibold group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>

        {/* Hover effect - line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
      </a>
    </div>
  );
};

export default ProjectCard;