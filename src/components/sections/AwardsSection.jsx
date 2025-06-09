
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, BookOpen, Users, Award as AwardIcon } from 'lucide-react';

const awardsData = [
  {
    icon: <Users className="w-6 h-6 text-blue-300" />,
    text: "Selected as Tech Leader for ISRO IROC 2025 Project, showcasing leadership and expertise.",
    color: "text-blue-300",
  },
  {
    icon: <Trophy className="w-6 h-6 text-yellow-300" />,
    text: "Secured 1st prize in event hosting and science competition at SCSCD.",
    color: "text-yellow-300",
  },
  {
    icon: <AwardIcon className="w-6 h-6 text-green-300" />,
    text: "Secured 1st prize in district-level football and debate competitions.",
    color: "text-green-300",
  },
  {
    icon: <Trophy className="w-6 h-6 text-purple-300" />,
    text: "Secured 3rd prize in district-level science competition.",
    color: "text-purple-300",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-pink-300" />,
    text: "Published a research paper on the Integrated 3D Bioprinter for Dermatological Treatment.",
    color: "text-pink-300",
  }
];

const AwardsSection = () => {
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
          <h2 className="text-5xl font-bold gradient-text mb-6">Awards & Achievements</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsData.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-6 flex items-start space-x-4 h-full"
            >
              <div className={`p-3 rounded-full bg-white/10`}>
                {React.cloneElement(award.icon, { className: `${award.icon.props.className} ${award.color}`})}
              </div>
              <p className="text-gray-200">{award.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
