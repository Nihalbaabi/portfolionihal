import React from 'react';
import { motion } from 'framer-motion';
import stackImage from '@/assets/about/image.png';
import reactImage from '@/assets/about/react.png';
import nodeImage from '@/assets/about/node.png';
import mongoImage from '@/assets/about/mongodb.png';

export const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-red-500 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Profile" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content Bento Box */}
        <div className="flex-1 mt-8 md:mt-0 relative z-20 w-full">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter uppercase drop-shadow-sm"
          >
            Hello!
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            
            {/* Intro Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-1 md:col-span-2 bg-black/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 hover:bg-black/20 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.12)] group"
            >
              <p className="text-2xl md:text-3xl font-black text-white leading-snug group-hover:scale-[1.01] transition-transform origin-left duration-500">
                Hi, my name is <span className="text-black bg-white/20 px-2 rounded-md mx-1 uppercase shadow-sm">Nihal</span>, a software engineer obsessed with building things that think.
              </p>
            </motion.div>

            {/* Specialize Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 shadow-xl group"
            >
              <div className="w-12 h-12 mb-6 rounded-2xl bg-black flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">Software Dev</h3>
              <p className="text-sm md:text-base font-medium text-white/80 leading-relaxed">
                Architecting scalable full-stack web applications and fluid cross-platform mobile experiences leveraging MERN and Flutter.
              </p>
            </motion.div>

            {/* IoT Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/10 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 shadow-xl group"
            >
              <div className="w-12 h-12 mb-6 rounded-2xl bg-black flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">IoT & Systems</h3>
              <p className="text-sm md:text-base font-medium text-white/80 leading-relaxed">
                Bridging hardware intelligence with intuitive software. Hands-on integrating IoT using Python, Java, C++, and JavaScript.
              </p>
            </motion.div>

            {/* AI/Data Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-1 md:col-span-2 bg-gradient-to-br from-black/20 to-black/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 flex flex-col xl:flex-row items-center gap-8 shadow-2xl relative overflow-hidden group"
            >
              {/* Decorative background glow inside card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-[2]" />
              
              <div className="flex-1 relative z-10">
                <p className="text-sm md:text-base font-medium text-white/90 leading-relaxed">
                  Driven by an unyielding curiosity, I am constantly exploring the intersections of AI, data science, and modern cloud infrastructure. I thrive in collaborative, fast-paced environments where I can tackle challenging problems and engineer impactful, future-proof solutions.
                </p>
              </div>

              {/* Stack Icons */}
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 shrink-0 relative z-10 bg-black/10 p-4 rounded-2xl border border-white/10">
                <motion.img 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  src={reactImage} 
                  alt="React"
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                />
                <motion.img 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  src={nodeImage} 
                  alt="Node.js" 
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-pointer" 
                />
                <motion.img 
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  src={mongoImage} 
                  alt="MongoDB" 
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-pointer" 
                />
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};
