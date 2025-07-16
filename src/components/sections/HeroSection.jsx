import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Mail, Download, Award, Trophy, Zap } from 'lucide-react';

const HeroSection = () => {
  const handleContactClick = () => {
    toast({
      title: "Contact Information",
      description: "Email: Deshmukhomkar9119@gmail.com | Phone: +91-8087292383",
    });
  };

  const handleDownloadCV = () => {
    toast({
      title: "CV Download",
      description: "CV download functionality would be implemented here!",
    });
  };

  const profileImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/35c2342d-d2ca-4ec3-ae28-e36f3462d812/9b8530191e1fc497954ad903db6fbee4.jpg";


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-0">
      <div className="absolute inset-0 hero-gradient opacity-20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 floating-animation" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <img 
              src={profileImageUrl} 
              alt="Deshmukh Omkar Haridas Profile Picture" 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-purple-500 shadow-xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Deshmukh</span>
            <br />
            <span className="text-white">Omkar Haridas</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            2nd Sem Computer Science Student at Sapthagiri NPS University
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              <span className="text-white">4 Patents Filed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base">
              <Trophy className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              <span className="text-white">ISRO IROC 2025</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base">
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              <span className="text-white">Organizer TEDxSNPSU</span>
              </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 md:px-6 md:py-3 text-sm md:text-base">
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              <span className="text-white">₹12,45,000 Funding</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 md:px-8 md:py-3 text-md md:text-lg pulse-glow"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              onClick={handleDownloadCV}
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-6 py-2 md:px-8 md:py-3 text-md md:text-lg"
            >
              <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Download CV
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
