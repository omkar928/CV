
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket } from 'lucide-react';

const SkillCard = ({ icon, title, skills, delay, gradient }) => (
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
    <div className="space-y-2">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className={`w-2 h-2 ${gradient.split(' ')[1].replace('from-', 'bg-')} rounded-full opacity-75`}></div>
          <span className="text-gray-300">{skill}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  const skillsData = [
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: 'Programming Languages',
      skills: ['C', 'Python', 'JavaScript', 'HTML', 'C#'],
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: 'AI & ML',
      skills: ['Machine Learning', 'NumPy', 'Pandas', 'U-Net CNN', 'AI Concepts'],
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      icon: <Rocket className="w-6 h-6 text-white" />,
      title: 'Specialized Areas',
      skills: ['Robotics', 'Biomedical Engineering', 'Drone Technology', '3D Modeling', 'Animation'],
      gradient: 'bg-gradient-to-r from-green-500 to-teal-500'
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
          <h2 className="text-5xl font-bold gradient-text mb-6">Technical Skills</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, index) => (
            <SkillCard
              key={index}
              icon={skillCategory.icon}
              title={skillCategory.title}
              skills={skillCategory.skills}
              delay={index * 0.2}
              gradient={skillCategory.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
