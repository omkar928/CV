
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const languageData = [
  { name: "English", proficiency: "Advanced", level: 95, color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { name: "Marathi", proficiency: "Advanced", level: 95, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { name: "Hindi", proficiency: "Advanced", level: 90, color: "bg-gradient-to-r from-green-500 to-teal-500" },
  { name: "Sanskrit", proficiency: "Beginner", level: 40, color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
  { name: "Kannada", proficiency: "Beginner", level: 30, color: "bg-gradient-to-r from-red-500 to-rose-500" },
];

const LanguagesSection = () => {
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
          <h2 className="text-5xl font-bold gradient-text mb-6">Languages</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languageData.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold text-white">{lang.name}</h3>
                <span className="text-sm text-gray-400">{lang.proficiency}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className={`h-2.5 rounded-full ${lang.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
