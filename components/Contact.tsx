"use client";
import React from "react";
import { motion } from "motion/react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "circOut" }}
          viewport={{ once: true }}
          className="text-white/70 text-center mb-10 max-w-2xl mx-auto text-lg"
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            
            <a
              href="mailto:johnbongcacjohn@gmail.com"
              className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-white/50">Email</p>
                <p>johnbongcacjohn@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/john-benedict-bongcac-b37668346/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-sm text-white/50">LinkedIn</p>
                <p>John Benedict Bongcac</p>
              </div>
            </a>

            <a
              href="https://github.com/joohhhnnnny"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                <Github size={20} />
              </div>
              <div>
                <p className="text-sm text-white/50">GitHub</p>
                <p>joohhhnnnny</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-white/70">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-white/50">Location</p>
                <p>Davao City, Philippines</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            viewport={{ once: true }}
            className="border border-white/[0.2] rounded-xl p-6 bg-black/50"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Send a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label className="text-sm text-white/70 mb-1 block">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-white/70 mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-white/70 mb-1 block">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
