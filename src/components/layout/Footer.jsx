import React from 'react';
import Container from './Container';

const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white">
      {/* Main Footer */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <img 
                  src="/images/logo-white.png" 
                  alt="Avahome Logo" 
                  className="h-16"
                />
              </div>
              <p className="mb-4 text-gray-300">
                Công ty cổ phần kiến trúc - Avahome
              </p>
              <p className="text-gray-300">
                MST: 0108806839
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="https://facebook.com" className="text-gray-300 hover:text-primary" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://youtube.com" className="text-gray-300 hover:text-primary" aria-label="YouTube">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://instagram.com" className="text-gray-300 hover:text-primary" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" className="text-gray-300 hover:text-primary" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-raleway font-bold mb-6">Liên Hệ</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                  <span>
                    Số 25, Bùi Ngọc Dương, Bạch Mai, HBT, HN (Trung tâm 310 - Kiến trúc đô thị Hà Nội - UAC)
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-primary"></i>
                  <span>0982.061.338</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-primary"></i>
                  <span>avahome.jsc@gmail.com</span>
                </li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-raleway font-bold mb-6">Dịch Vụ</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="hover:text-primary transition-colors duration-300">
                    Trang Chủ
                  </a>
                </li>
                <li>
                  <a href="/gioi-thieu" className="hover:text-primary transition-colors duration-300">
                    Giới Thiệu
                  </a>
                </li>
                <li>
                  <a href="/du-an" className="hover:text-primary transition-colors duration-300">
                    Dự Án
                  </a>
                </li>
                <li>
                  <a href="/cong-trinh-thuc-te" className="hover:text-primary transition-colors duration-300">
                    Công Trình Thực Tế
                  </a>
                </li>
                <li>
                  <a href="/bang-gia" className="hover:text-primary transition-colors duration-300">
                    Bảng Giá
                  </a>
                </li>
                <li>
                  <a href="/lien-he" className="hover:text-primary transition-colors duration-300">
                    Liên Hệ
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Featured Projects */}
            <div>
              <h3 className="text-xl font-raleway font-bold mb-6">Dự Án Tiêu Biểu</h3>
              <div className="grid grid-cols-3 gap-2">
                <a href="/du-an/1" className="block overflow-hidden">
                  <img 
                    src="/images/projects/thumbnail-1.jpg" 
                    alt="Project" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <a href="/du-an/2" className="block overflow-hidden">
                  <img 
                    src="/images/projects/thumbnail-2.jpg" 
                    alt="Project" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <a href="/du-an/3" className="block overflow-hidden">
                  <img 
                    src="/images/projects/thumbnail-3.jpg" 
                    alt="Project" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <a href="/du-an/4" className="block overflow-hidden">
                  <img 
                    src="/images/projects/thumbnail-4.jpg" 
                    alt="Project" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <a href="/du-an/5" className="block overflow-hidden">
                  <img 
                    src="/images/projects/thumbnail-5.jpg" 
                    alt="Project" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <a href="/du-an/6" className="block overflow-hidden">
                  <img 
                    src="/images/projects/thumbnail-6.jpg" 
                    alt="Project" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <a href="/du-an/7" className="block overflow-hidden">
                  <img 
                    src="/images/projects/thumbnail-7.jpg" 
                    alt="Project" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <a href="/du-an/8" className="block overflow-hidden">
                  <img 
                    src="/images/projects/thumbnail-8.jpg" 
                    alt="Project"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </a>
                <a href="/du-an/9" className="block overflow-hidden">
                  <img 
                    src="/images/projects/thumbnail-9.jpg" 
                    alt="Project" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Copyright */}
      <div className="py-4 border-t border-gray-700">
        <Container>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0">
              {currentYear} &copy; Công ty cổ phần kiến trúc Avahome. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              Design by <a href="#" className="text-primary font-semibold">HVCG software</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;