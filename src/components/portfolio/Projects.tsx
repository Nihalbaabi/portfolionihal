import { ArrowUpRight, Github, MoveHorizontal, ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import fleetflowImg from "@/assets/projects/fleetflow.png";
import goddessImg from "@/assets/projects/goddess.png";
import timberImg from "@/assets/projects/timber.png";
import azietImg from "@/assets/projects/aziet.png";
import shopeaseImg from "@/assets/projects/shopease.png";
import meditrackImg from "@/assets/project-iot.jpg";

const projects = [
  {
    n: "01",
    title: "FleetFlow – Logistics Management Backend",
    desc: "Built a backend system to handle logistics workflows and transactional records, designing database schemas to improve query times.",
    tech: ["Backend", "Relational Databases", "Express.js"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_odoohackathon-fleetmanagement-logistics-ugcPost-7451669170276052992-OM-N/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
    image: fleetflowImg,
  },
  {
    n: "02",
    title: "GODDESS – Women Safety App",
    desc: "Developed a location-sharing and SOS alert application that handles multiple concurrent users to enhance personal safety.",
    tech: ["Node.js", "MongoDB", "Express", "Flutter"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_womenempowerment-techforgood-mobileappdevelopment-ugcPost-7448635343794507777-ShR4/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
    image: goddessImg,
  },
  {
    n: "03",
    title: "Timber Data App",
    desc: "Created a mobile application to calculate timber volume and store records securely in a cloud database.",
    tech: ["Firebase", "Mobile Development", "Flutter"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_flutter-firebase-mobiledevelopment-ugcPost-7449725068559159296-pLYW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
    image: timberImg,
  },
  {
    n: "04",
    title: "A-Ziet – Event Management System",
    desc: "Developed a full-stack platform for event registration, optimizing the database queries and building secure authentication.",
    tech: ["Node.js", "Express.js", "MongoDB", "Authentication"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_mern-reactjs-nodejs-ugcPost-7371436808024252416-_v_7/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
    image: azietImg,
  },
  {
    n: "05",
    title: "Relational Database App",
    desc: "Designed a relational database schema for an online store to manage users and improve data integrity.",
    tech: ["DBMS", "SQL", "Database Design"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/in/muhammednihalpa477/",
    image: shopeaseImg,
  },
  {
    n: "06",
    title: "MediTrack – Smart Pill Box",
    desc: "Built an IoT pill box using an ESP32 microcontroller to provide scheduled medication alerts and emergency assistance for the elderly.",
    tech: ["ESP32", "C/C++", "Python", "IoT", "RTC"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_excited-to-share-my-latest-project-smart-ugcPost-7370381676541153280-w7PO/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
    image: meditrackImg,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-28 bg-[#000000] overflow-hidden text-white">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#ff2a2a]/10 blur-[100px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#ff2a2a]/5 blur-[100px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Floating Code Symbols */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 lg:left-20 text-5xl md:text-7xl font-mono text-white/5 font-bold pointer-events-none select-none"
      >
        {"</>"}
      </motion.div>
      <motion.div 
        animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-10 lg:right-24 text-6xl md:text-8xl font-mono text-white/5 font-bold pointer-events-none select-none"
      >
        {"{}"}
      </motion.div>
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-10 lg:left-32 text-5xl md:text-6xl font-mono text-white/5 font-bold pointer-events-none select-none"
      >
        {"[]"}
      </motion.div>
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 lg:right-40 text-4xl font-mono text-[#ff2a2a]/20 font-bold pointer-events-none select-none"
      >
        {"=>"}
      </motion.div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeading
          eyebrow="PROJECTS"
          title="Selected work."
          description="A showcase of my full-stack, mobile, and IoT projects."
        />
        
        <motion.div 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((p) => (
              <motion.article
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                key={p.title}
                className="group relative bg-[#111111] rounded-2xl p-0 transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] hover:-translate-y-2 z-10 border border-white/10"
              >
                {/* Terminal Header */}
                <div className="h-10 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm" />
                  <div className="mx-auto text-[10px] text-white/30 font-mono tracking-widest px-4 truncate">{p.title.split(' ')[0].toLowerCase()}.ts</div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col font-mono relative">
                  {/* Background Number Watermark */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[8rem] font-bold text-white/[0.02] group-hover:text-[#ff2a2a]/[0.05] transition-all duration-700 leading-none pointer-events-none select-none z-0 group-hover:scale-110">
                    {p.n}
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-5">
                      <h3 className="font-sans text-xl text-white leading-tight font-bold group-hover:text-[#ff2a2a] transition-colors">
                        {p.title}
                      </h3>
                      {p.image && (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:border-[#ff2a2a]/40 transition-all duration-500 bg-[#0d1117] flex items-center justify-center p-1">
                          <img loading="lazy" decoding="async" src={p.image} alt={p.title} className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-700" />
                        </div>
                      )}
                    </div>
                    
                    <div className="text-white/70 leading-relaxed text-[13px] sm:text-[14px] mb-6 flex-1 font-mono">
                      <span className="text-blue-400">const</span> <span className="text-white">description</span> <span className="text-blue-400">=</span> <span className="text-[#a5d6ff]">"{p.desc}"</span>;
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] tracking-widest text-white/80 bg-white/5 border border-white/10 px-2 py-1 rounded font-bold uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-3 mt-auto font-sans">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 bg-white text-black py-2.5 px-4 rounded-lg font-bold text-[13px] hover:bg-[#ff2a2a] hover:text-white transition-colors flex items-center justify-center gap-2"
                      >
                        <ArrowUpRight size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/5 text-white border border-white/10 hover:border-white/30 hover:bg-white/10 py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                        aria-label="View Source Code"
                      >
                        <Github size={16} />
                        <span className="font-bold sr-only sm:not-sr-only text-[13px]">Source</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {projects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 bg-white text-black border border-gray-300 hover:border-[#ff2a2a] hover:text-[#ff2a2a] transition-colors px-6 py-3 rounded-full font-semibold tracking-wide text-sm"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={18} /></>
              ) : (
                <>View More Projects <ChevronDown size={18} /></>
              )}
            </button>
          </div>
        )}


      </div>
    </section>
  );
}
