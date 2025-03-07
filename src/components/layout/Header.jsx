import React, { useState, useEffect } from 'react';
import Container from './Container';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll events to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Navigation links
  const navLinks = [
    { name: 'Trang chủ', url: '/', active: true },
    { name: 'Giới thiệu', url: '/gioi-thieu' },
    { name: 'Dự án', url: '/du-an', hasDropdown: true },
    { name: 'Công trình thực tế', url: '/cong-trinh-thuc-te' },
    { name: 'Bảng giá', url: '/bang-gia' },
    { name: 'Liên hệ', url: '/lien-he' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-white shadow-header py-2' 
        : 'bg-white py-4'}`}>
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <img 
                src="/images/logo.png" 
                alt="Avahome" 
                className="h-16 w-auto" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                <a 
                  href={link.url} 
                  className={`font-raleway text-sm uppercase tracking-wider font-medium 
                    ${link.active 
                      ? 'text-primary' 
                      : 'text-text-dark hover:text-primary'}`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <i className="fas fa-chevron-down text-xs ml-1"></i>
                  )}
                </a>
                
                {/* Dropdown for "Dự án" - could be made into a separate component */}
                {link.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <a href="/du-an/biet-thu" className="block px-4 py-2 text-sm text-text-dark hover:text-primary hover:bg-background-light">
                      Biệt Thự
                    </a>
                    <a href="/du-an/nha-pho" className="block px-4 py-2 text-sm text-text-dark hover:text-primary hover:bg-background-light">
                      Nhà Phố
                    </a>
                    <a href="/du-an/noi-that" className="block px-4 py-2 text-sm text-text-dark hover:text-primary hover:bg-background-light">
                      Nội Thất
                    </a>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search button */}
          <div className="hidden md:block">
            <button className="text-text-dark hover:text-primary focus:outline-none">
              <i className="fas fa-search text-lg"></i>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-text-dark focus:outline-none"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      <div className={`md:hidden bg-white ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-3 space-y-1 border-t border-divider">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              className={`block py-2 px-3 text-base font-medium ${link.active ? 'text-primary' : 'text-text-dark'}`}
            >
              {link.name}
              {link.hasDropdown && <i className="fas fa-chevron-down text-xs ml-2"></i>}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;