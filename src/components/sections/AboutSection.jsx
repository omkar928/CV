
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star } from 'lucide-react';

const AboutSection = () => {
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
          <h2 className="text-5xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Motivated and innovative B.E. Computer Science and Engineering student at Sapthagiri NPS University 
            with a passion for artificial intelligence, machine learning, and biomedical engineering. 
            Demonstrated leadership in high-impact projects and seeking opportunities to apply technical expertise 
            in cutting-edge technological advancements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-gradient rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Location</h3>
            <p className="text-gray-300">Bengaluru, Karnataka, India</p>
            <p className="text-gray-400 text-sm mt-2">Originally from Omerga, Maharashtra</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-gradient rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <p className="text-gray-300">+91-8087292383</p>
            <p className="text-gray-400 text-sm mt-2">Deshmukhomkar9119@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="card-gradient rounded-2xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Academic Standing</h3>
            <p className="text-gray-300">Top 5 Student</p>
            <p className="text-gray-400 text-sm mt-2">Sapthagiri NPS University</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
