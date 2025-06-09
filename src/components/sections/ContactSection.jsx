
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const handleContactClick = () => {
    toast({
      title: "Contact Information",
      description: "Email: Deshmukhomkar9119@gmail.com | Phone: +91-8087292383",
    });
  };

  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold gradient-text mb-6">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to collaborate on cutting-edge AI and biomedical innovations? Let's build the future together!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-6"
            >
              <Mail className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-300">Deshmukhomkar9119@gmail.com</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-6"
            >
              <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+91-8087292383</p>
            </motion.div>
          </div>

          <Button 
            onClick={handleContactClick}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-xl pulse-glow"
          >
            <Mail className="w-6 h-6 mr-3" />
            Start a Conversation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
