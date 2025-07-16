
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Settings, Briefcase, Presentation } from 'lucide-react';

const experienceData = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "License Holder TEDxSNPSU – Organizer TEDxSNPSU",
    organization: "TEDx, Sapthagiri NPS University",
    duration: "July 2025 – Present",
    description: [
      "Assisted in promotional activities and community outreach for TEDxSNPSU.",
      "Coordinated tasks, ensured milestones, and fostered collaboration.",
      "Result: Guided team to bring TEDxSNPSU."
    ],
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Team Leader – ISRO IROC 2025 Project",
    organization: "Team Svayatt, Sapthagiri NPS University",
    duration: "October 2024 – Present",
    description: [
      "Led a team of students in designing a machine learning solution for ISRO’s IROC competition.",
      "Coordinated tasks, ensured project milestones, and fostered collaboration.",
      "Result: Guided team to qualify for the prestigious national-level competition."
    ],
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: <Settings className="w-8 h-8 text-white" />,
    title: "Robotics Director – Build Club",
    organization: "Research and Innovation Cell, Sapthagiri NPS University",
    duration: "October 2024 – Present",
    description: [
      "Spearheaded robotics projects, mentoring peers and driving innovation in automation and AI.",
      "Organized workshops to promote robotics education within the university."
    ],
    gradient: "from-sky-500 to-cyan-500"
  },
  {
    icon: <Briefcase className="w-8 h-8 text-white" />,
    title: "3D Designer – Team Svayatt for ISRO ANAV Project",
    organization: "Sapthagiri NPS University",
    duration: "December 2024 – January 2025",
    description: [
      "Created 3D models and animations for the ISRO ANAV project, enhancing project visualization.",
      "Demonstrated proficiency in 3D modeling software and teamwork under tight deadlines."
    ],
    gradient: "from-emerald-500 to-green-500"
  },
  {
    icon: <Presentation className="w-8 h-8 text-white" />,
    title: "Team Lead – SCSCD District-Level Science & Football Competition",
    organization: "Omerga, Maharashtra",
    duration: "September 2023 – January 2024",
    description: [
      "Led event planning and execution, improving team collaboration and event success.",
      "Result: Secured 1st and 3rd prizes in science and football competitions."
    ],
    gradient: "from-amber-500 to-yellow-500"
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Program Host – SCSCD Annual Day",
    organization: "Omerga, Maharashtra",
    duration: "January 2023 – January 2024",
    description: [
      "Hosted annual events, showcasing communication and event management skills.",
      "Achievement: Secured 1st prize in event hosting."
    ],
    gradient: "from-rose-500 to-pink-500"
  }
];

const ExperienceCard = ({ icon, title, organization, duration, description, gradient, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="card-gradient rounded-2xl p-8"
  >
    <div className="flex items-start gap-6">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        <p className={`text-sm font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>{organization}</p>
        <p className="text-xs text-gray-400 mb-4">{duration}</p>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Experience</h2>
        </motion.div>
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <ExperienceCard key={index} {...exp} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
