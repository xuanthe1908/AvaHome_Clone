import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';

const WorkflowStep = ({ number, title, description, isLast = false }) => {
  return (
    <div className="flex relative">
      {/* Number Circle */}
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold">
          {number}
        </div>
      </div>
      
      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary-light"></div>
      )}
      
      {/* Content */}
      <div className="ml-6 pb-12">
        <h3 className="text-xl font-raleway font-bold text-text-dark mb-2">
          {title}
        </h3>
        <p className="text-text-light">
          {description}
        </p>
      </div>
    </div>
  );
};

const WorkflowSection = ({ title }) => {
  // Workflow steps
  const steps = [
    {
      number: 1,
      title: "Tiếp nhận thông tin",
      description: "Tiếp nhận thông tin từ khách hàng, đưa ra tư vấn định hướng thiết kế và dự toán kinh phí."
    },
    {
      number: 2,
      title: "Khảo sát hiện trạng",
      description: "Khảo sát hiện trạng công trình, đo đạc và thu thập số liệu cần thiết cho dự án."
    },
    {
      number: 3,
      title: "Ký kết hợp đồng",
      description: "Thống nhất phương án thiết kế, ký kết hợp đồng, chốt tiến độ thực hiện."
    },
    {
      number: 4,
      title: "Thiết kế sơ bộ",
      description: "Phát triển ý tưởng thiết kế, tạo phối cảnh 3D, điều chỉnh theo yêu cầu khách hàng."
    },
    {
      number: 5,
      title: "Thiết kế chi tiết",
      description: "Hoàn thiện hồ sơ thiết kế chi tiết, bản vẽ kỹ thuật và dự toán công trình."
    },
    {
      number: 6,
      title: "Triển khai thi công",
      description: "Giám sát thi công, đảm bảo chất lượng và đúng tiến độ công trình."
    }
  ];

  return (
    <section className="py-section bg-background-white">
      {/* Header background */}
      <div className="bg-primary py-12 mb-16">
        <Container>
          <h2 className="text-3xl md:text-4xl font-raleway font-bold uppercase text-white text-center">
            {title || "Quy trình làm việc"}
          </h2>
        </Container>
      </div>
      
      <Container>
        <div className="md:flex">
          {/* Left Column */}
          <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
            {steps.slice(0, 3).map((step, index) => (
              <WorkflowStep 
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === 2}
              />
            ))}
          </div>
          
          {/* Right Column */}
          <div className="md:w-1/2 md:pl-8">
            {steps.slice(3).map((step, index) => (
              <WorkflowStep 
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isLast={index === 2}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkflowSection;