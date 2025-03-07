import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const PricingCard = ({ title, price, typeInfo, features }) => {
  return (
    <div className="bg-white border border-divider shadow-card hover:shadow-lg transition-all duration-300 h-full">
      {/* Header */}
      <div className="bg-primary text-white py-3 text-center">
        <h3 className="text-lg uppercase font-medium tracking-wider">{title}</h3>
      </div>
      
      {/* Price */}
      <div className="text-center py-6">
        <span className="text-3xl font-bold text-text-dark">{price}</span>
      </div>
      
      {/* Divider */}
      <div className="w-24 h-0.5 bg-primary mx-auto"></div>
      
      {/* Type Info */}
      <div className="px-6 py-4 border-b border-dashed border-divider">
        <ul className="space-y-2">
          {typeInfo.map((item, index) => (
            <li key={index} className="text-text-dark">
              {item.bold ? <strong>{item.text}</strong> : item.text}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Features */}
      <div className="px-6 py-4 mb-6">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-text-light flex items-start">
              <i className="fas fa-check text-primary mr-2 mt-1"></i>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* CTA */}
      <div className="px-6 pb-6 text-center">
        <Button 
          variant="primary" 
          size="md" 
          fullWidth
          onClick={() => window.location.href = '/lien-he'}
        >
          Liên hệ ngay
        </Button>
      </div>
    </div>
  );
};

const PricingSection = ({ title }) => {
  const pricingData = [
    {
      title: "NỘI THÂT VNĐ/M²",
      price: "150.000Đ",
      typeInfo: [
        { text: "NỘI THẤT NHÀ PHỐ ", bold: true },
        { text: "HIỆN ĐẠI", bold: false },
        { text: "150.000Đ", bold: false },
        { text: "NỘI THẤT BIỆT THƯ", bold: true },
        { text: "HIỆN ĐẠI", bold: false },
        { text: "150.000-200.000Đ", bold: false }
      ],
      features: [
        "Phối cảnh 3D nội thất",
        "Hồ sơ chi tiết đồ nội thất",
        "Bản vẽ trần tường sàn",
        "Bản vẽ điện chiếu sáng",
        "Và các chi tiết liên quan"
      ]
    },
    {
      title: "NHÀ PHỐ VNĐ/M²",
      price: "150.000Đ",
      typeInfo: [
        { text: "NHÀ PHÔ", bold: true },
        { text: "HIỆN ĐẠI", bold: false },
        { text: "150.000VNĐ", bold: false },
        { text: "NHÀ PHỐ", bold: true },
        { text: "TÂN CỔ ĐIỂN", bold: false },
        { text: "150.000-250.000VNĐ", bold: false }
      ],
      features: [
        "Phối cảnh 3D kiến trúc",
        "Hồ Sơ xin CPXD",
        "Bản vẽ chi tiết kiến trúc",
        "Bản vẽ chi tiết kết cấu",
        "Bản vẽ chi tiết điện",
        "Bản vẽ chi tiết nước",
        "Bản vẽ các chi tiết liên quan"
      ]
    },
    {
      title: "BIỆT THỰ VNĐ/M²",
      price: "200.000Đ",
      typeInfo: [
        { text: "BIỆT THỰ", bold: true },
        { text: "HIỆN ĐẠI", bold: false },
        { text: "200.000VNĐ", bold: false },
        { text: "BIỆT THƯ", bold: true },
        { text: "TÂN CỔ ĐIỂN", bold: false },
        { text: "200.000-300.000VNĐ", bold: false }
      ],
      features: [
        "Phối cảnh 3D kiến trúc",
        "Phối cảnh 3D tổng thể",
        "Hồ sơ xin CPXD",
        "Bản vẽ chi tiết kiến trúc",
        "Bản vẽ chi tiết kết cấu",
        "Bản vẽ chi tiết điện, nước",
        "Bản vẽ các chi tiết liên quan"
      ]
    },
    {
      title: "TK CẢI TẠO VNĐ/M²",
      price: "100.000Đ",
      typeInfo: [
        { text: "NHÀ PHÔ", bold: true },
        { text: "HIỆN ĐẠI", bold: false },
        { text: "150.000VNĐ", bold: false },
        { text: "BIỆT THƯ", bold: true },
        { text: "HIỆN ĐẠI", bold: false },
        { text: "150.000-200.000VNĐ", bold: false }
      ],
      features: [
        "Phối cảnh 3D cải tạo",
        "Bản vẽ chi tiết phá dỡ cải tạo",
        "Bản vẽ chi tiết kiến trúc",
        "Bản vẽ chi tiết kết cấu",
        "Bản vẽ chi tiết điện",
        "Bản vẽ chi tiết nước",
        "Bản vẽ các chi tiết liên quan"
      ]
    }
  ];

  return (
    <section className="py-section">
      {/* Header background */}
      <div className="bg-primary py-12 mb-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-raleway font-bold uppercase text-white text-center">
            {title || "Bảng giá thiết kế"}
          </h2>
        </Container>
      </div>
      
      {/* Pricing tables */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              typeInfo={plan.typeInfo}
              features={plan.features}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;