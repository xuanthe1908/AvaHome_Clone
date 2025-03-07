import React from 'react';

// Layout components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CallButton from '../components/ui/CallButton';
import ScrollToTop from '../components/ui/ScrollToTop';

// Section components
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import HouseProjectsSection from '../components/sections/HouseProjectsSection';
import InteriorSection from '../components/sections/InteriorSection';
import PricingSection from '../components/sections/PricingSection';
import GallerySection from '../components/sections/GallerySection';
import WorkflowSection from '../components/sections/WorkflowSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Header */}
      <Header />
      
      <main>
        {/* Hero Section with slider */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Services (Architecture, Villas, Interiors) */}
        <ServicesSection />
        
        {/* Villa Projects */}
        <ProjectsSection 
          title="DỰ ÁN BIỆT THỰ HIỆN ĐẠI" 
          category="BIỆT THỰ"
          viewAllLink="/du-an/biet-thu"
        />
        
        {/* House Projects */}
        <HouseProjectsSection />
        
        {/* Interior Projects */}
        <InteriorSection />
        
        {/* Project Gallery */}
        <GallerySection />
        
        {/* Pricing Tables */}
        <PricingSection title="Bảng giá thiết kế" />
        
        {/* Workflow Process */}
        <WorkflowSection title="Quy trình làm việc" />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Call Button */}
      <CallButton phoneNumber="0982.061.338" />
      
      {/* Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;