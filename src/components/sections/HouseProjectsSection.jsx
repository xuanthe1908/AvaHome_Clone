import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';

const HouseProjectsSection = () => {
  // Sample house project data - in a real application, this would come from an API
  const projects = [
    {
      id: 1,
      title: 'Nhà phố hiện đại 4 tầng',
      category: 'Nhà Phố',
      image: '/images/projects/house-1.jpg',
      link: '/du-an/nha-pho/1'
    },
    {
      id: 2,
      title: 'Nhà phố mặt tiền 6m',
      category: 'Nhà Phố',
      image: '/images/projects/house-2.jpg',
      link: '/du-an/nha-pho/2'
    },
    {
      id: 3,
      title: 'Nhà phố liền kề',
      category: 'Nhà Phố',
      image: '/images/projects/house-3.jpg',
      link: '/du-an/nha-pho/3'
    },
    {
      id: 4,
      title: 'Nhà phố 3 tầng hiện đại',
      category: 'Nhà Phố',
      image: '/images/projects/house-4.jpg',
      link: '/du-an/nha-pho/4'
    },
    {
      id: 5,
      title: 'Nhà phố 1 trệt 2 lầu',
      category: 'Nhà Phố',
      image: '/images/projects/house-5.jpg',
      link: '/du-an/nha-pho/5'
    },
    {
      id: 6,
      title: 'Nhà phố phong cách hiện đại',
      category: 'Nhà Phố',
      image: '/images/projects/house-6.jpg',
      link: '/du-an/nha-pho/6'
    }
  ];

  return (
    <section className="py-section bg-background-white relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-around pointer-events-none">
        <span className="text-[240px] font-raleway font-bold text-primary">T</span>
        <span className="text-[240px] font-raleway font-bold text-primary">E</span>
        <span className="text-[240px] font-raleway font-bold text-primary">A</span>
        <span className="text-[240px] font-raleway font-bold text-primary">M</span>
      </div>
      
      <Container>
        <div className="relative z-10">
          <SectionTitle 
            title="KIẾN TRÚC | NHÀ PHỐ" 
            subtitle="Các dự án nhà phố hiện đại đã được thiết kế và thi công bởi đội ngũ kiến trúc sư Avahome"
            highlightWord="NHÀ PHỐ"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map(project => (
              <ProjectCard 
                key={project.id}
                image={project.image}
                title={project.title}
                category={project.category}
                link={project.link}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/du-an/nha-pho'}
            >
              Xem tất cả
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HouseProjectsSection;