
import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Book, Newspaper, VenetianMask, Palette } from 'lucide-react';

const hobbiesData = [
  { icon: <TreePine className="w-8 h-8 text-green-400" />, name: "Exploring Nature" },
  { icon: <Book className="w-8 h-8 text-yellow-400" />, name: "Reading Historical Books" },
  { icon: <Newspaper className="w-8 h-8 text-blue-400" />, name: "Current Facts" },
  { icon: <VenetianMask className="w-8 h-8 text-purple-400" />, name: "Playing Football" },
  { icon: <Palette className="w-8 h-8 text-pink-400" />, name: "Hand Drawing" },
];

const HobbiesSection = () => {
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
          <h2 className="text-5xl font-bold gradient-text mb-6">Hobbies</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {hobbiesData.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-6 text-center flex flex-col items-center justify-center aspect-square"
            >
              <div className="mb-4 p-4 bg-white/10 rounded-full">
                {hobby.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{hobby.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
