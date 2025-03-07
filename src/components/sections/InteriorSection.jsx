import React from 'react';
import Container from '../layout/Container';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';

const InteriorSection = () => {
  // Sample interior design project data - in a real application, this would come from an API
  const projects = [
    {
      id: 1,
      title: 'Nội thất phòng khách hiện đại',
      category: 'Nội Thất',
      image: '/images/projects/interior-1.jpg',
      link: '/du-an/noi-that/1'
    },
    {
      id: 2,
      title: 'Nội thất phòng ngủ master',
      category: 'Nội Thất',
      image: '/images/projects/interior-2.jpg',
      link: '/du-an/noi-that/2'
    },
    {
      id: 3,
      title: 'Nội thất nhà bếp',
      category: 'Nội Thất',
      image: '/images/projects/interior-3.jpg',
      link: '/du-an/noi-that/3'
    },
    {
      id: 4,
      title: 'Nội thất phòng làm việc',
      category: 'Nội Thất',
      image: '/images/projects/interior-4.jpg',
      link: '/du-an/noi-that/4'
    },
    {
      id: 5,
      title: 'Nội thất biệt thự cao cấp',
      category: 'Nội Thất',
      image: '/images/projects/interior-5.jpg',
      link: '/du-an/noi-that/5'
    },
    {
      id: 6,
      title: 'Nội thất phòng trẻ em',
      category: 'Nội Thất',
      image: '/images/projects/interior-6.jpg',
      link: '/du-an/noi-that/6'
    }
  ];

  return (
    <section className="py-section bg-background-light">
      <Container>
        <SectionTitle 
          title="NỘI THẤT" 
          subtitle="Thiết kế nội thất cao cấp, tạo không gian sống đẳng cấp và tiện nghi"
          highlightWord="NỘI THẤT"
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
            onClick={() => window.location.href = '/du-an/noi-that'}
          >
            Xem tất cả
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default InteriorSection;