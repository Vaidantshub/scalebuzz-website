import React, { useState } from 'react';
import KineticGrid from './components/KineticGrid';
import { PROJECTS, Project } from './data/agencyData';
import { CustomCursor } from './components/CustomCursor';
import CardNav from './components/CardNav';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ServicesSection } from './components/ServicesSection';
import { WorkSection } from './components/WorkSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyUsSection } from './components/WhyUsSection';
import { TechnologySection } from './components/TechnologySection';
import { EcommerceSection } from './components/EcommerceSection';
import { LandingPageSection } from './components/LandingPageSection';
import { AboutSection } from './components/AboutSection';
import { TeamSection } from './components/TeamSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { FinalCTA } from './components/FinalCTA';
import { Bookademo3 } from './components/ui/book-a-demo-3';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { SEO } from './components/SEO';
import { openWhatsAppInquiry } from './utils/whatsapp';

export const App: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [selectedFormProjectType, setSelectedFormProjectType] = useState<string>('Website');

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = (projectType: string = 'Website') => {
    setSelectedFormProjectType(projectType);
    openWhatsAppInquiry({ projectType });
    scrollToSection('contact');
  };

  const handleOpenProjectById = (projectId: string) => {
    const found = PROJECTS.find(p => p.id === projectId);
    if (found) {
      setActiveModalProject(found);
    }
  };

  return (
    <KineticGrid globalColor="default" className="text-[#f4f4f5] font-sans antialiased bg-noise">
      <SEO />
      
      {/* Cool Initial Loading Screen */}
      <Preloader />

      {/* Desktop Minimal Interaction Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <CardNav
        items={[
          {
            label: 'Work',
            bgColor: '#1a1724',
            textColor: '#fff',
            links: [
              { label: 'Projects', ariaLabel: 'View Projects', sectionId: 'work' },
              { label: 'Case Studies', ariaLabel: 'View Case Studies', sectionId: 'case-studies' },
            ],
          },
          {
            label: 'Services',
            bgColor: '#1e1b28',
            textColor: '#fff',
            links: [
              { label: 'Services', ariaLabel: 'View Services', sectionId: 'services' },
              { label: 'Process', ariaLabel: 'Our Process', sectionId: 'process' },
              { label: 'Tech Stack', ariaLabel: 'Technologies', sectionId: 'technology' },
            ],
          },
          {
            label: 'About',
            bgColor: '#1e1b28',
            textColor: '#fff',
            links: [
              { label: 'About Us', ariaLabel: 'About Us', sectionId: 'about' },
              { label: 'Team', ariaLabel: 'Our Team', sectionId: 'team' },
              { label: 'Contact', ariaLabel: 'Contact Us', sectionId: 'contact' },
            ],
          },
        ]}
        onNavigate={scrollToSection}
        onStartProject={() => handleStartProject('Website')}
      />

      {/* Main Page Content Flow */}
      <main>
        <Hero
          onStartProject={() => handleStartProject('Website')}
          onViewWork={() => scrollToSection('work')}
          onOpenProjectModal={handleOpenProjectById}
          onNavigate={scrollToSection}
        />

        {/* Trust Strip Section */}
        <TrustStrip />

        <ServicesSection
          onSelectService={(serviceTitle) => handleStartProject(serviceTitle)}
        />

        <WorkSection
          onOpenModal={(project) => setActiveModalProject(project)}
        />

        <CaseStudiesSection
          onStartProject={() => handleStartProject('Website')}
        />

        <ProcessSection />

        <WhyUsSection />

        <TechnologySection />

        <EcommerceSection
          onStartEcommerce={() => handleStartProject('E-commerce')}
        />

        <LandingPageSection
          onStartLandingPage={() => handleStartProject('Landing Page')}
        />

        <AboutSection />

        <TeamSection />

        <TestimonialsSection />

        <FAQSection />

        <ContactSection
          selectedProjectType={selectedFormProjectType}
        />

        <FinalCTA
          onStartProject={() => handleStartProject('Website')}
        />

        {/* Design Consultation & Booking Section */}
        <Bookademo3 />
      </main>

      {/* Floating WhatsApp Action Button */}
      <button
        onClick={() => openWhatsAppInquiry()}
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Chat on WhatsApp (+91 9873764268)"
        title="Chat on WhatsApp (+91 9873764268)"
      >
        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.305-1.127z"/>
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 whitespace-nowrap text-xs font-mono font-bold tracking-wider uppercase">
          WhatsApp Us
        </span>
      </button>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Case Study Detail Modal */}
      <CaseStudyModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onStartProject={(type) => handleStartProject(type || 'Website')}
      />
    </KineticGrid>
  );
};

export default App;
