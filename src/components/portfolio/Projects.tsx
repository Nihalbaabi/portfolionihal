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
    title: "FleetFlow – Modular Fleet & Logistics Management",
    desc: "Built a full-stack scalable logistics system using Odoo to digitize operational workflows, featuring real-time trip dispatching and modular financial analytics.",
    tech: ["Full-Stack", "Odoo", "Architecture"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_odoohackathon-fleetmanagement-logistics-ugcPost-7451669170276052992-OM-N/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
    image: fleetflowImg,
  },
  {
    n: "02",
    title: "GODDESS – Women Empowering Women",
    desc: "Engineered a women-centric digital platform using Flutter and Node.js to enhance personal safety, integrating smart SOS, live location sharing, and AI-powered recommendations.",
    tech: ["Flutter", "Node.js", "MongoDB", "Firebase"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_womenempowerment-techforgood-mobileappdevelopment-ugcPost-7448635343794507777-ShR4/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
    image: goddessImg,
  },
  {
    n: "03",
    title: "Timber Calculator App",
    desc: "Developed a cross-platform mobile application using Flutter and Firebase to digitize timber volume calculations, eliminating human error and securing transaction records.",
    tech: ["Flutter", "Firebase", "Mobile App"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_flutter-firebase-mobiledevelopment-ugcPost-7449725068559159296-pLYW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
    image: timberImg,
  },
  {
    n: "04",
    title: "A-Ziet Event Management System",
    desc: "Created a full-stack event discovery platform using the MERN stack to streamline registration and administration for students and faculty, optimizing database queries.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_mern-reactjs-nodejs-ugcPost-7371436808024252416-_v_7/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
    image: azietImg,
  },
  {
    n: "05",
    title: "Online Shopping System",
    desc: "Designed an online shopping platform utilizing relational DBMS concepts to handle complex database management and improve transactional integrity.",
    tech: ["DBMS", "Web Development"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/in/muhammednihalpa477/",
    image: shopeaseImg,
  },
  {
    n: "06",
    title: "MediTrack: Smart Pill Box",
    desc: "Built an IoT-driven medication tracking system integrating an ESP32 micro-controller and a Flutter app to ensure timely medicine intake with Real-Time Clock precision.",
    tech: ["ESP32", "Flutter", "IoT", "RTC"],
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
    <section id="projects" className="relative py-28 bg-background overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-orange-400/10 blur-[100px] rounded-full mix-blend-multiply pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-rose-400/10 blur-[100px] rounded-full mix-blend-multiply pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Floating Code Symbols */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 lg:left-20 text-5xl md:text-7xl font-mono text-ink/[0.04] font-bold pointer-events-none select-none"
      >
        {"</>"}
      </motion.div>
      <motion.div 
        animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-10 lg:right-24 text-6xl md:text-8xl font-mono text-ink/[0.03] font-bold pointer-events-none select-none"
      >
        {"{}"}
      </motion.div>
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-10 lg:left-32 text-5xl md:text-6xl font-mono text-ink/[0.04] font-bold pointer-events-none select-none"
      >
        {"[]"}
      </motion.div>
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 lg:right-40 text-4xl font-mono text-coral/[0.08] font-bold pointer-events-none select-none"
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
                className="group relative bg-ink rounded-2xl p-0 transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 z-10 border border-white/10"
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
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[8rem] font-bold text-white/[0.02] group-hover:text-coral/[0.05] transition-all duration-700 leading-none pointer-events-none select-none z-0 group-hover:scale-110">
                    {p.n}
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-5">
                      <h3 className="font-sans text-xl text-white leading-tight font-bold group-hover:text-coral transition-colors">
                        {p.title}
                      </h3>
                      {p.image && (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:border-coral/40 group-hover:shadow-[0_4px_20px_rgba(244,63,94,0.2)] transition-all duration-500 bg-[#0d1117] flex items-center justify-center p-1">
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
                          className="text-[10px] tracking-widest text-[#ff7b72] bg-[#ff7b72]/10 border border-[#ff7b72]/20 px-2 py-1 rounded font-bold uppercase"
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
                        className="flex-1 bg-white text-ink py-2.5 px-4 rounded-lg font-bold text-[13px] hover:bg-coral hover:text-white transition-colors flex items-center justify-center gap-2"
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

        {/* Show More Button (Desktop & Mobile) */}
        {projects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 bg-secondary text-ink border border-border/50 hover:border-coral hover:text-coral transition-colors px-6 py-3 rounded-full font-semibold tracking-wide text-sm"
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
