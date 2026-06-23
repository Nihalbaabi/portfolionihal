import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-10 md:py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col items-center">
      
      {/* Huge Text */}
      <div className="w-full flex justify-center items-center pb-12 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          nihal
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 font-medium">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono">
            &copy; {new Date().getFullYear()} Nihal
          </p>
        </div>
        
        <div className="flex items-center">
          <a href="mailto:muhammednihal477@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">muhammednihal477@gmail.com</a>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/muhammednihalpa477" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">LinkedIn</a>
          <a href="https://github.com/Nihalbaabi" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
