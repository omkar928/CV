
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Trophy } from 'lucide-react';

const EducationSection = () => {
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
          <h2 className="text-5xl font-bold gradient-text mb-6">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-gradient rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Code className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">B.E. Computer Science and Engineering</h3>
              <p className="text-purple-300 text-lg mb-4">Sapthagiri NPS University, Bengaluru</p>
              <p className="text-gray-300 mb-4">October 2024 – July 2028 (Expected) | 2nd Semester</p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Foundations of Programming', 'Data Structures', 'Algorithms', 'Artificial Intelligence'].map((course, index) => (
                    <span key={index} className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Trophy className="w-5 h-5" />
                <span className="font-semibold">Consistently ranked among the top 5 students in the section</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
