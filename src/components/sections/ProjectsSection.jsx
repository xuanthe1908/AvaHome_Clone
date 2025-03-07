import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';

const ProjectsSection = ({ title, subtitle, category, viewAllLink }) => {
  // Sample project data - in a real application, this would come from an API or props
  const projects = [
    {
      id: 1,
      title: 'Biệt thự hiện đại A1',
      category: 'Biệt Thự',
      image: '/images/projects/villa-1.jpg',
      link: '/du-an/biet-thu/1'
    },
    {
      id: 2,
      title: 'Biệt thự phong cách Á Đông',
      category: 'Biệt Thự',
      image: '/images/projects/villa-2.jpg',
      link: '/du-an/biet-thu/2'
    },
    {
      id: 3,
      title: 'Biệt thự nghỉ dưỡng',
      category: 'Biệt Thự',
      image: '/images/projects/villa-3.jpg',
      link: '/du-an/biet-thu/3'
    },
    {
      id: 4,
      title: 'Biệt thự vườn',
      category: 'Biệt Thự',
      image: '/images/projects/villa-4.jpg',
      link: '/du-an/biet-thu/4'
    },
    {
      id: 5,
      title: 'Biệt thự hiện đại 3 tầng',
      category: 'Biệt Thự',
      image: '/images/projects/villa-5.jpg',
      link: '/du-an/biet-thu/5'
    },
    {
      id: 6,
      title: 'Biệt thự song lập',
      category: 'Biệt Thự',
      image: '/images/projects/villa-6.jpg',
      link: '/du-an/biet-thu/6'
    }
  ];

  return (
    <section className="py-section bg-background-light relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-around pointer-events-none">
        <span className="text-[240px] font-raleway font-bold text-primary">S</span>
        <span className="text-[240px] font-raleway font-bold text-primary">K</span>
        <span className="text-[240px] font-raleway font-bold text-primary">I</span>
        <span className="text-[240px] font-raleway font-bold text-primary">L</span>
        <span className="text-[240px] font-raleway font-bold text-primary">L</span>
        <span className="text-[240px] font-raleway font-bold text-primary">S</span>
      </div>
      
      <Container>
        <div className="relative z-10">
          <SectionTitle 
            title={title || "DỰ ÁN BIỆT THỰ HIỆN ĐẠI"} 
            subtitle={subtitle || "Các dự án biệt thự hiện đại đã được thiết kế và thi công bởi đội ngũ kiến trúc sư Avahome"}
            highlightWord={category || "BIỆT THỰ"}
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
              onClick={() => window.location.href = viewAllLink || '/du-an/biet-thu'}
            >
              Xem tất cả
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;