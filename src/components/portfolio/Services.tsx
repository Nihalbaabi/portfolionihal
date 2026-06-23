import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent, MotionValue, AnimatePresence } from 'framer-motion';
import { X } from "lucide-react";

import certGenzee from "@/assets/experiences/IMG-20240722-WA0136-1~2.jpg";
import certLuminar from "@/assets/experiences/IMG-20250701-WA0128.jpg";
import certSrmist from "@/assets/experiences/PXL_20251226_114727077.jpg";
import certIct from "@/assets/experiences/ict internship.jpg";
import certCodsoft from "@/assets/experiences/Muhammed Nihal P A.jpg";
import certDextra from "@/assets/experiences/Muhammed Nihal P A (2)_page-0001.jpg";

interface TagCardProps {
  number: string;
  title: string;
  text: string;
  className: string;
  aosDelay: string;
  aosType: string;
  pathLength: MotionValue<number>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  period?: string;
  organization?: string;
  location?: string;
  skills?: string[];
  certificates?: string[];
  setSelectedCert?: (cert: string | null) => void;
}

const TagCard = ({ number, title, text, className, aosDelay, aosType, pathLength, containerRef, period, organization, location, skills, certificates, setSelectedCert }: TagCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;
    
    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    
    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;
    
    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div 
      ref={ref}
      data-aos={aosType || "fade-up"} 
      data-aos-delay={aosDelay}
      className={`w-[340px] sm:w-[380px] rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${className} ${
        isActive ? 'bg-[#ff2a2a] border-red-400 shadow-[0_20px_50px_rgba(255,42,42,0.4)]' : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >
      {/* The hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>
      
      {/* Inner container */}
      <div className={`w-full h-full rounded-[1.5rem] mt-8 p-6 sm:p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
        isActive ? 'bg-red-700/50' : 'bg-[#f4f4f4]'
      }`}>
        <div className="flex justify-between items-start mb-2">
          <span className={`text-xl font-bold font-serif italic transition-colors duration-700 ${
            isActive ? 'text-red-200' : 'text-gray-400'
          }`}>{number}</span>
          {period && (
            <span className={`text-xs font-semibold px-2 py-1 rounded-full transition-colors duration-700 ${
              isActive ? 'bg-red-500/30 text-red-100' : 'bg-gray-200 text-gray-600'
            }`}>
              {period}
            </span>
          )}
        </div>
        
        <h3 className={`text-xl sm:text-2xl font-black mb-1 tracking-tight transition-colors duration-700 ${
          isActive ? 'text-white' : 'text-gray-900'
        }`}>{title}</h3>
        
        {organization && (
          <h4 className={`text-sm font-semibold mb-1 transition-colors duration-700 ${
            isActive ? 'text-red-200' : 'text-[#ff2a2a]'
          }`}>{organization}</h4>
        )}

        {location && (
          <p className={`text-xs font-medium mb-3 transition-colors duration-700 ${
             isActive ? 'text-red-300' : 'text-gray-400'
          }`}>{location}</p>
        )}
        
        <p className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
          isActive ? 'text-red-100' : 'text-gray-500'
        }`}>
          {text}
        </p>

        {certificates && certificates.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {certificates.map((cert, cIdx) => (
              <div 
                key={cIdx}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCert?.(cert);
                }}
                className={`flex items-center gap-3 border rounded-lg overflow-hidden pr-4 cursor-pointer transition-colors w-fit ${
                  isActive ? 'border-red-400/50 hover:bg-red-600/50' : 'border-gray-300 hover:bg-gray-200 bg-white'
                }`}
              >
                <img loading="lazy" decoding="async" src={cert} alt="Certificate thumbnail" className={`w-16 h-12 object-cover border-r ${isActive ? 'border-red-400/50' : 'border-gray-200'}`} />
                <span className={`text-[13.5px] font-semibold ${isActive ? 'text-white' : 'text-gray-700'}`}>Certificate</span>
              </div>
            ))}
          </div>
        )}

        {skills && skills.length > 0 && (
          <div className="mt-4 flex items-start gap-2 text-[13.5px]">
            <svg className={`shrink-0 mt-[2px] transition-colors duration-700 ${isActive ? 'text-white' : 'text-[#ff2a2a]'}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
            </svg>
            <span className={`font-medium transition-colors duration-700 ${isActive ? 'text-red-100' : 'text-gray-500'}`}>
              <span className={`font-bold ${isActive ? 'text-white' : 'text-gray-900'}`}>{skills.slice(0, 2).join(", ")}</span>
              {skills.length > 2 && ` and +${skills.length - 2} skills`}
            </span>
          </div>
        )}

      </div>
    </div>
  );
};

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return (
    <section 
      id="services"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[2150px]">
        
        {/* Header Content */}
        <div data-aos="fade-up" className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            My path of growth and experience
            {/* Hand-drawn arrow */}
            <svg className="absolute -bottom-10 right-10 w-12 h-12 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" className="hidden" />
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            A timeline of my internships, leadership roles, and hands-on learning experiences in the tech world.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg 
          className="hidden md:block absolute top-0 left-0 w-full h-[2150px] pointer-events-none z-0" 
          viewBox="0 0 1000 2150" 
          preserveAspectRatio="none"
        >
          {/* Faint background path */}
          <path 
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200 C 200,1300 400,1400 700,1450 C 800,1550 600,1650 300,1800 C 200,1900 400,2000 500,2100" 
            fill="none" 
            stroke="#cbd5e1" 
            strokeWidth="2" 
            strokeDasharray="8 10" 
          />

          {/* Mask to reveal the dashed path based on scroll */}
          <mask id="path-mask">
            <motion.path 
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200 C 200,1300 400,1400 700,1450 C 800,1550 600,1650 300,1800 C 200,1900 400,2000 500,2100" 
              fill="none" 
              stroke="white" 
              strokeWidth="20" 
              style={{ pathLength }}
            />
          </mask>

          {/* The actual dashed line that gets revealed */}
          <path 
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200 C 200,1300 400,1400 700,1450 C 800,1550 600,1650 300,1800 C 200,1900 400,2000 500,2100" 
            fill="none" 
            stroke="black" 
            strokeWidth="2" 
            strokeDasharray="8 10" 
            mask="url(#path-mask)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg 
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0" 
          viewBox="0 0 4 100" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="#cbd5e1" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path 
              d="M 2,0 L 2,100" 
              fill="none" 
              stroke="white" 
              strokeWidth="4" 
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path 
            d="M 2,0 L 2,100" 
            fill="none" 
            stroke="black" 
            strokeWidth="4" 
            strokeDasharray="4 6" 
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">
          
          <TagCard 
            number="01"
            title="Mobile Dev Intern"
            organization="Luminar Technolab"
            period="Jun 2025"
            location="Kochi, Kerala, India"
            text="Built mobile application features and integrated them with backend APIs."
            skills={["Flutter", "Dart", "API Integration"]}
            certificates={[certLuminar]}
            setSelectedCert={setSelectedCert}
            className="md:absolute md:top-[10px] md:right-[2%] lg:right-[5%] rotate-2 md:rotate-4"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="02"
            title="Backend Dev Intern"
            organization="ICT Academy of Kerala"
            period="Jun 2025 - Jul 2025"
            location="Chalakudy, Kerala, India"
            text="Developed REST APIs and implemented secure authentication and database management features."
            skills={["MongoDB", "Express.js", "Node.js", "REST APIs"]}
            certificates={[certIct]}
            setSelectedCert={setSelectedCert}
            className="md:absolute md:top-[450px] md:left-[2%] lg:left-[5%] -rotate-2 md:-rotate-4"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="03"
            title="Machine Learning Intern"
            organization="ICT Academy of Kerala"
            period="Present"
            location="Kerala, India"
            text="Testing machine learning algorithms and integrating them into an existing backend system."
            skills={["Machine Learning", "Python", "Data Science"]}
            certificates={[certIct]}
            setSelectedCert={setSelectedCert}
            className="md:absolute md:top-[700px] md:right-[2%] lg:right-[10%] rotate-1 md:rotate-2"
            aosType="fade-left"
            aosDelay="300"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          <TagCard 
            number="04"
            title="Winter School"
            organization="SRMIST"
            period="Dec 2025"
            location="Chennai, India"
            text="Attended ACM Winter School focused on Compiler Design, covering lexical analysis, parsing, syntax analysis and optimisation."
            skills={["Compiler Design", "Lexical Analysis", "Parsing", "Syntax Analysis"]}
            certificates={[certSrmist]}
            setSelectedCert={setSelectedCert}
            className="md:absolute md:top-[1050px] md:left-[10%] lg:left-[20%] -rotate-1 md:-rotate-2"
            aosType="fade-right"
            aosDelay="400"
            pathLength={pathLength}
            containerRef={containerRef}
          />
          
          <TagCard 
            number="05"
            title="Executive Member"
            organization="CSE Association"
            period="Jun 2025 - Present"
            location="Kalady, Kerala, India"
            text="Organized department events, technical programs and workshops, ensuring smooth execution and student participation."
            skills={["Teamwork", "Coordination", "Event Planning", "Communication"]}
            certificates={[certDextra]}
            setSelectedCert={setSelectedCert}
            className="md:absolute md:top-[1400px] md:right-[5%] lg:right-[15%] rotate-2 md:rotate-3"
            aosType="fade-left"
            aosDelay="500"
            pathLength={pathLength}
            containerRef={containerRef}
          />
          
          <TagCard 
            number="06"
            title="Co-Lead"
            organization="ACM Student Chapter"
            period="Jun 2025 - Present"
            location="Kalady, Kerala, India"
            text="Co-lead technical events, workshops and coding activities for the ACM Student Chapter, driving student engagement and technical growth."
            skills={["Leadership", "Team Coordination", "Event Management", "Communication"]}
            certificates={[]}
            setSelectedCert={setSelectedCert}
            className="md:absolute md:top-[1750px] md:left-[5%] lg:left-[15%] -rotate-1 md:-rotate-2"
            aosType="fade-right"
            aosDelay="600"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Hand-drawn end text */}
          <div 
            data-aos="fade-in" 
            data-aos-delay="700"
            className="hidden md:block absolute top-[2100px] left-[55%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6"
          >
            And the journey continues...
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-4 md:p-8 border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-gray-100 hover:bg-red-500 text-gray-800 hover:text-white rounded-full transition-all shadow-sm"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <img
                loading="lazy"
                decoding="async"
                src={selectedCert}
                alt="Certificate full view"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Torn paper divider at bottom to transition to Projects section smoothly */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#000000]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};
