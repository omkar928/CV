
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import PatentsSection from '@/components/sections/PatentsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import AwardsSection from '@/components/sections/AwardsSection';
import LanguagesSection from '@/components/sections/LanguagesSection';
import HobbiesSection from '@/components/sections/HobbiesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-gray-100">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <PatentsSection />
      <ProjectsSection />
      <ExperienceSection />
      <LeadershipSection />
      <CertificationsSection />
      <AwardsSection />
      <LanguagesSection />
      <HobbiesSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
