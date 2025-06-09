
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Lightbulb, Target } from 'lucide-react';

const PatentsSection = () => {
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
          <h2 className="text-5xl font-bold gradient-text mb-6">Patents & Innovation</h2>
          <p className="text-xl text-gray-300">4 Patents Filed in Biomedical Engineering</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-gradient rounded-2xl p-8 mb-8"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-white">Integrated 3D Bioprinter for Dermatological Treatment</h3>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">GRANTED</span>
              </div>
              <p className="text-gray-300 mb-4">
                Innovated an AI-driven 3D bioprinter for Dermatological treatment, integrating U-Net Convolutional 
                Neural Network for precise skin regeneration. This groundbreaking technology represents a significant 
                advancement in personalized medicine and biomedical engineering.
              </p>
              <div className="flex items-center gap-2 text-yellow-400">
                <Lightbulb className="w-5 h-5" />
                <span className="font-semibold">Design INDIAN Patent - Granted</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="card-gradient rounded-2xl p-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Additional Patents</h3>
              <p className="text-gray-400">3 Pending Patents (INDIAN/US)</p>
            </div>
          </div>
          <p className="text-gray-300">
            Focus on advancements in AI and robotics for healthcare applications, demonstrating continued 
            innovation in the intersection of technology and medicine.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PatentsSection;
