
import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, CheckSquare, Shield } from 'lucide-react';

const leadershipData = [
  {
    icon: <Building className="w-8 h-8 text-white" />,
    title: "Founder & CTO – Biomedical Engineering Club (BioBridges)",
    organization: "Sapthagiri NPS University",
    duration: "October 2024 – Present",
    description: [
      "Established a collaborative initiative between Sapthagiri Medical College and School of Engineering under Vice Chancellor Dr. Jayanthi V.",
      "Organized workshops and seminars on healthcare technology, enhancing interdisciplinary collaboration."
    ],
    gradient: "from-teal-500 to-cyan-500"
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    title: "Active Member – Team Svayatt",
    organization: "Sapthagiri NPS University",
    duration: "Ongoing",
    description: [
      "Contributed to space technology innovation through ISRO’s IROC program."
    ],
    gradient: "from-blue-500 to-indigo-500"
  },
  {
    icon: <CheckSquare className="w-8 h-8 text-white" />,
    title: "Student Union Election Winner",
    organization: "SCSCD, Omerga",
    duration: "2023",
    description: [
      "Elected as a student leader, demonstrating leadership and peer support."
    ],
    gradient: "from-purple-500 to-pink-500"
  }
];

const LeadershipCard = ({ icon, title, organization, duration, description, gradient, delay }) => (
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

const LeadershipSection = () => {
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
          <h2 className="text-5xl font-bold gradient-text mb-6">Leadership & Extracurricular</h2>
        </motion.div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {leadershipData.map((item, index) => (
            <LeadershipCard key={index} {...item} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
