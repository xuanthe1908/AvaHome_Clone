import React from 'react';

/**
 * Reusable Button component
 * 
 * @param {Object} props
 * @param {string} props.variant - 'primary', 'secondary', 'outline'
 * @param {string} props.size - 'sm', 'md', 'lg'
 * @param {boolean} props.fullWidth - Whether button should take full width
 * @param {Function} props.onClick - Click handler
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional custom classes
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  onClick, 
  children,
  className = '',
  ...props 
}) => {
  // Define base styles
  const baseStyles = "font-raleway uppercase tracking-wider transition-all duration-300 focus:outline-none";
  
  // Size variations
  const sizeStyles = {
    sm: "py-2 px-4 text-sm",
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg"
  };
  
  // Variant styles
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-button",
    secondary: "bg-secondary text-white hover:bg-opacity-90 shadow-button",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
    white: "bg-white text-text-dark hover:bg-gray-100 border border-divider"
  };
  
  // Width styles
  const widthStyles = fullWidth ? "w-full" : "";
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${className}`;
  
  return (
    <button 
      className={buttonStyles}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;