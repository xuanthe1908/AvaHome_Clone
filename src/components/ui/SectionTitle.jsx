import React from 'react';

/**
 * Section title component for consistent heading styles across the site
 * 
 * @param {Object} props
 * @param {string} props.title - Main title text
 * @param {string} props.subtitle - Optional subtitle text
 * @param {string} props.highlightWord - Word in title to highlight with primary color
 * @param {string} props.align - Text alignment: 'left', 'center', 'right'
 * @param {string} props.className - Additional custom classes
 */
const SectionTitle = ({ 
  title, 
  subtitle, 
  highlightWord = null,
  align = 'center',
  className = '' 
}) => {
  // Create highlighted title if highlightWord is provided
  const renderTitle = () => {
    if (!highlightWord) return title;
    
    // Split the title by the highlight word
    const parts = title.split(highlightWord);
    
    return (
      <>
        {parts[0]}
        <span className="text-primary">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };
  
  // Text alignment classes
  const alignClasses = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
  };
  
  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-raleway font-bold uppercase tracking-wide mb-4">
        {renderTitle()}
      </h2>
      
      {subtitle && (
        <p className="text-lg text-text-light max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      
      <div className={`w-24 h-1 bg-primary mt-4 mb-4 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;