/**
 * Helper function to handle images that might not exist
 * This will provide a category-specific placeholder image if the image doesn't exist
 * 
 * @param {string} imagePath - The path to the actual image
 * @param {string} category - The category of image (hero, project, team, etc.)
 * @param {string} defaultPath - Optional default path if both are missing
 * @returns {string} - The path to use
 */
export const getImagePath = (imagePath, category = 'default', defaultPath = null) => {
    // In a real implementation, we'd check if the image exists
    // For this demo, we'll assume it doesn't and use placeholders
    
    // Use placeholder images based on category
    const placeholders = {
      'hero': '/images/placeholder-hero.jpg',
      'project': '/images/placeholder-project.jpg',
      'interior': '/images/placeholder-interior.jpg',
      'team': '/images/placeholder-team.jpg',
      'logo': '/images/placeholder-logo.png',
      'icon': '/images/placeholder-icon.svg',
      'default': '/images/placeholder.jpg'
    };
    
    // Return the placeholder for the given category, or the default placeholder
    return defaultPath || imagePath || placeholders[category] || placeholders.default;
  };
  
  /**
   * Generate placeholder SVG for components to use when images are missing
   * 
   * @param {string} text - Text to display in the placeholder
   * @param {string} bgColor - Background color
   * @param {number} width - Width of SVG
   * @param {number} height - Height of SVG
   * @returns {string} - SVG data URL
   */
  export const generatePlaceholderSVG = (text = 'Image', bgColor = '#4682B4', width = 400, height = 300) => {
    const svg = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="${width}" height="${height}" fill="${bgColor}" />
        <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle">${text}</text>
      </svg>
    `;
    
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  };