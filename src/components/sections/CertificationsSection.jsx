
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Laptop, Brain } from 'lucide-react';

const certificationData = [
  {
    icon: <Laptop className="w-8 h-8 text-white" />,
    title: "Online Web Development Course",
    issuer: "AI for Techies",
    date: "December 2024",
    description: "Gained hands-on experience in HTML, JavaScript, and front-end development.",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: <Brain className="w-8 h-8 text-white" />,
    title: "How to Use AI",
    issuer: "Be10x",
    date: "November 2024",
    description: "Learned practical applications of AI in real-world scenarios.",
    gradient: "from-orange-500 to-amber-500"
  }
];

const CertificationCard = ({ icon, title, issuer, date, description, gradient, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: true }}
    className="card-gradient rounded-2xl p-8 h-full flex flex-col"
  >
    <div className="flex items-start gap-6 mb-4">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        <p className={`text-sm font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r ${gradient}`}>{issuer}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
    </div>
    <p className="text-gray-300 flex-grow">{description}</p>
  </motion.div>
);

const CertificationsSection = () => {
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
          <h2 className="text-5xl font-bold gradient-text mb-6">Certifications</h2>
        </motion.div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {certificationData.map((cert, index) => (
            <CertificationCard key={index} {...cert} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
