import React, { useState } from 'react';

const CallButton = ({ phoneNumber }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Expanded phone number */}
      <div 
        className={`absolute bottom-0 left-0 bg-primary text-white rounded-full shadow-lg transition-all duration-300 flex items-center ${
          isExpanded 
            ? 'w-auto px-12 opacity-100 visible' 
            : 'w-0 px-0 opacity-0 invisible'
        }`}
      >
        <a 
          href={`tel:${phoneNumber.replace(/\D/g, '')}`}
          className="whitespace-nowrap text-lg font-bold"
        >
          {phoneNumber}
        </a>
      </div>
      
      {/* Outer ring animation */}
      <div className="absolute -inset-1 rounded-full border-2 border-primary opacity-30 animate-ping"></div>
      
      {/* Middle ring */}
      <div className="absolute -inset-2 rounded-full border-2 border-primary opacity-20"></div>
      
      {/* Inner button */}
      <button
        onClick={toggleExpanded}
        className="relative h-16 w-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors duration-300"
      >
        <div className="text-white">
          <i className="fas fa-phone-alt text-xl"></i>
        </div>
      </button>
    </div>
  );
};

export default CallButton;