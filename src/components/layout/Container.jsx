import React from 'react';

/**
 * Container component for consistent section widths
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Container content
 * @param {string} props.className - Additional custom classes
 * @param {string} props.as - HTML element to render as
 * @param {boolean} props.fluid - Whether to use full width
 */
const Container = ({ 
  children, 
  className = '', 
  as: Component = 'div',
  fluid = false,
  ...props 
}) => {
  return (
    <Component
      className={`${fluid ? 'w-full' : 'max-w-container mx-auto px-4 md:px-6 lg:px-8'} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;