import React from 'react';
import { motion } from 'framer-motion';
import { Award, Brain, Code, Rocket, Star, Trophy, Zap } from 'lucide-react';

const ProjectCard = ({ title, description, tags, achievementIcon, achievementText, imageUrl, altText, delay, direction = 'x' }) => (
  <motion.div
    initial={{ opacity: 0, [direction]: direction === 'x' ? (delay % 0.4 === 0 ? -50 : 50) : 50 }}
    whileInView={{ opacity: 1, [direction]: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="card-gradient rounded-2xl p-8"
  >
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-1/3">
        <img  className="w-full h-48 object-cover rounded-xl shadow-lg" alt={altText} src={imageUrl} />
      </div>
      <div className="lg:w-2/3">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className={`${tag.color} px-3 py-1 rounded-full text-sm`}>
              {tag.name}
            </span>
          ))}
        </div>
        {achievementText && (
          <div className={`flex items-center gap-2 ${achievementIcon.color}`}>
            {achievementIcon.icon}
            <span>{achievementText}</span>
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

const SmallProjectCard = ({ icon, title, description, tags, delay, gradient }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="card-gradient rounded-2xl p-6"
  >
    <div className={`w-12 h-12 ${gradient} rounded-lg flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
         <span key={index} className={`${tag.color} px-3 py-1 rounded-full text-sm`}>
         {tag.name}
       </span>
      ))}
    </div>
  </motion.div>
);


const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Driven 3D Bioprinter for Dermatological Treatment",
      description: "Conceptualized and designed a novel 3D bioprinter for vitiligo treatment, utilizing AI algorithms (U-Net CNN) for precise bioprinting. Led development, patent filing, and publication of research paper.",
      tags: [
        { name: "AI/ML", color: "bg-blue-600/30 text-blue-200" },
        { name: "U-Net CNN", color: "bg-purple-600/30 text-purple-200" },
        { name: "Biomedical", color: "bg-green-600/30 text-green-200" }
      ],
      achievementIcon: { icon: <Award className="w-5 h-5" />, color: "text-yellow-400" },
      achievementText: "Patent Granted & ₹2,45,000 Funding",
      imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35c2342d-d2ca-4ec3-ae28-e36f3462d812/10b1f7b776b71fec0b5cb4784dd8c76b.png",
      altText: "AI-Driven 3D Bioprinter for Dermatological Treatment",
    },
    {
      title: "Machine Learning Model for ISRO IROC 2025",
      description: "Developed a machine learning model for space applications as part of the ISRO IROC Robo Challenge 2025. Utilized Python and libraries (NumPy, Pandas) for data analysis and predictive algorithms.",
      tags: [
        { name: "Python", color: "bg-blue-600/30 text-blue-200" },
        { name: "Machine Learning", color: "bg-purple-600/30 text-purple-200" },
        { name: "Space Tech", color: "bg-orange-600/30 text-orange-200" }
      ],
      achievementIcon: { icon: <Trophy className="w-5 h-5" />, color: "text-green-400" },
      achievementText: "Team Svayatt Qualified - Top Teams",
      imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35c2342d-d2ca-4ec3-ae28-e36f3462d812/9eb02c71438128b7f9225bba0dbf43b6.png",
      altText: "Machine Learning Model for ISRO IROC 2025",
    },
    {
      title: "Nidar National-Level Drone Competition 2025",
      description: "Designed and developed a drone prototype, demonstrating creativity and technical expertise in robotics. Showcased innovative engineering solutions and advanced flight control systems.",
      tags: [
        { name: "Robotics", color: "bg-blue-600/30 text-blue-200" },
        { name: "Drone Tech", color: "bg-purple-600/30 text-purple-200" },
        { name: "Engineering", color: "bg-green-600/30 text-green-200" }
      ],
      achievementIcon: { icon: <Star className="w-5 h-5" />, color: "text-blue-400" },
      achievementText: "Shortlisted for National Competition",
      imageUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/35c2342d-d2ca-4ec3-ae28-e36f3462d812/64e8df8ebf27e6b756107db1a810a034.png",
      altText: "Nidar National-Level Drone Competition 2025",
    }
  ];

  const smallProjects = [
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "BioMedical Engineering Club Website",
      description: "Designed and developed a full React-based website for the BioMedical Engineering Club, demonstrating proficiency in modern web development technologies.",
      tags: [
        { name: "React", color: "bg-blue-600/30 text-blue-200" },
        { name: "Web Dev", color: "bg-purple-600/30 text-purple-200" }
      ],
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "3D Bioprinting Web Application",
      description: "Developed an AI-powered application for 3D bioprinting, integrating artificial intelligence algorithms with cutting-edge 3D printing technology for medical research.",
      tags: [
        { name: "AI", color: "bg-blue-600/30 text-blue-200" },
        { name: "3D Printing", color: "bg-green-600/30 text-green-200" }
      ],
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500',
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Key Projects</h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
              delay={index * 0.2}
            />
          ))}
          
          <div className="grid md:grid-cols-2 gap-8">
            {smallProjects.map((project, index) => (
              <SmallProjectCard 
                key={index}
                {...project}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;