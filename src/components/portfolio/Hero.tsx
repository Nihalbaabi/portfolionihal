import React from 'react';
import heroImage from '@/assets/hero video/FINAL MEEEE.png';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const { scrollY } = useScroll();
  // Fade in the SVG transition only after scrolling down 50px
  const opacity = useTransform(scrollY, [0, 50], [0, 1]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Hero Background"
        loading="lazy"
        decoding="async"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-4xl md:text-6xl font-black mb-4 tracking-tight uppercase"
          >
            I'M <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_black]">Muhammed Nihal PA</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-xl drop-shadow-md leading-relaxed tracking-wide"
          >
            Aspiring Software Engineer <span className="text-[#ff2a2a] px-1">|</span> Mobile & Web Application Developer <span className="text-[#ff2a2a] px-1">|</span> IoT Enthusiast
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <a href="#projects" className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md inline-block text-center">
              View My Work
            </a>
            
            {/* Secondary Button - Glassmorphism style */}
            <a href="https://linkedin.com/in/muhammednihalpa477" target="_blank" rel="noopener noreferrer" className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md inline-block text-center">
              LinkedIn
            </a>
          </div>
        </div>


      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Torn paper divider at bottom to transition to About section smoothly */}
      <motion.div style={{ opacity }} className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#ff2a2a]" aria-hidden="true">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </motion.div>
    </section>
  );
};
