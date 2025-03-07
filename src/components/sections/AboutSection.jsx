import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';

const AboutSection = () => {
  return (
    <section className="py-section bg-background-white relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-around pointer-events-none">
        <span className="text-[240px] font-raleway font-bold text-primary">A</span>
        <span className="text-[240px] font-raleway font-bold text-primary">B</span>
        <span className="text-[240px] font-raleway font-bold text-primary">O</span>
        <span className="text-[240px] font-raleway font-bold text-primary">U</span>
        <span className="text-[240px] font-raleway font-bold text-primary">T</span>
      </div>
      
      <Container>
        <div className="relative z-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold uppercase mb-6">
                <span>KIẾN TRÚC </span>
                <span className="text-primary">AVAHOME</span>
              </h2>
              
              <p className="text-xl md:text-2xl font-light mb-6 text-text-dark leading-relaxed">
                ĐƠN VỊ THIẾT KẾ KIẾN TRÚC VÀ XÂY DỰNG HÀNG ĐẦU CỦA XU HƯỚNG KIẾN TRÚC HIỆN ĐẠI
              </p>
              
              <p className="text-base text-text-light mb-8 leading-relaxed">
                Với đội ngũ kiến trúc sư tốt nghiệp từ Đại học Kiến trúc Hà Nội, chúng tôi tự hào mang đến các giải pháp thiết kế và thi công xây dựng chuyên nghiệp, hiện đại. AVAHOME là sự lựa chọn hàng đầu cho các dự án thiết kế biệt thự, nhà phố, nội thất cao cấp.
              </p>
              
              <Button 
                variant="outline" 
                size="md"
                onClick={() => window.location.href = '/gioi-thieu'}
              >
                Xem thêm
              </Button>
            </div>
            
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/about-1.jpg" 
                  alt="Avahome thiết kế" 
                  className="w-full h-64 object-cover rounded shadow-card"
                />
                <img 
                  src="/images/about-2.jpg" 
                  alt="Avahome thiết kế" 
                  className="w-full h-64 object-cover rounded shadow-card"
                />
                <img 
                  src="/images/about-3.jpg" 
                  alt="Avahome thiết kế" 
                  className="w-full h-64 object-cover rounded shadow-card mt-4"
                />
                <img 
                  src="/images/about-4.jpg" 
                  alt="Avahome thiết kế" 
                  className="w-full h-64 object-cover rounded shadow-card mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;