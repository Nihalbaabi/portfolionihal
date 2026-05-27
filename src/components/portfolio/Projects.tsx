import { ArrowUpRight, Github, MoveHorizontal, ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    n: "01",
    title: "FleetFlow – Modular Fleet & Logistics Management",
    desc: "Developed a Full stack scalable fleet and logistics management system to digitize and streamline operational workflows, featuring trip dispatching and financial analytics.",
    tech: ["Full-Stack", "Odoo", "Architecture"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_odoohackathon-fleetmanagement-logistics-ugcPost-7451669170276052992-OM-N/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
  },
  {
    n: "02",
    title: "GODDESS – Women Empowering Women",
    desc: "An innovative women-centric digital platform focused on safety, empowerment, and mentorship with smart SOS, location sharing, and AI-powered recommendations.",
    tech: ["Flutter", "Node.js", "MongoDB", "Firebase"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_womenempowerment-techforgood-mobileappdevelopment-ugcPost-7448635343794507777-ShR4/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
  },
  {
    n: "03",
    title: "Timber Calculator App",
    desc: "Flutter-based app that digitizes timber volume calculations, reduces human error, and securely stores transaction records.",
    tech: ["Flutter", "Firebase", "Mobile App"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_flutter-firebase-mobiledevelopment-ugcPost-7449725068559159296-pLYW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
  },
  {
    n: "04",
    title: "A-Ziet Event Management System",
    desc: "MERN Stack full-stack web application designed to streamline event discovery, registration, and administration for students and faculty.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_mern-reactjs-nodejs-ugcPost-7371436808024252416-_v_7/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
  },
  {
    n: "05",
    title: "Online Shopping System",
    desc: "A simple online shopping system with robust database management capabilities.",
    tech: ["DBMS", "Web Development"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/in/muhammednihalpa477/",
  },
  {
    n: "06",
    title: "MediTrack: Smart Pill Box",
    desc: "IoT system ensuring timely medicine intake by combining ESP32 hardware intelligence with a user-friendly Flutter mobile app.",
    tech: ["ESP32", "Flutter", "IoT", "RTC"],
    github: "https://github.com/Nihalbaabi",
    demo: "https://www.linkedin.com/posts/muhammednihalpa477_excited-to-share-my-latest-project-smart-ugcPost-7370381676541153280-w7PO/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFkh6gQBwD2lwsWOVoF0XjDRw4AcQuTjnS0",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="relative py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="PROJECTS"
          title="Selected work."
          description="A showcase of my full-stack, mobile, and IoT projects."
        />
        
        <motion.div 
          className="max-w-7xl mx-auto flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-8 -mx-6 px-6 sm:mx-0 sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
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
                className="group relative bg-secondary rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-500 overflow-hidden border border-border/50 hover:border-coral/50 shadow-sm hover:shadow-xl flex flex-col h-full shrink-0 w-[85vw] sm:w-auto snap-center"
              >
                {/* Background Number Watermark */}
                <div className="absolute -top-4 -right-4 font-display text-[8rem] font-bold text-ink/5 group-hover:text-coral/10 transition-colors duration-500 leading-none pointer-events-none select-none z-0">
                  {p.n}
                </div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl text-ink leading-tight font-bold mb-4">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px] mb-8 flex-1">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-[0.1em] text-ink/70 bg-background px-3 py-1.5 rounded-full font-semibold uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center bg-ink text-white py-3 px-4 rounded-xl font-medium text-sm hover:bg-ink/80 transition-colors flex items-center justify-center gap-2"
                    >
                      View Project
                      <ArrowUpRight size={16} />
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-background text-ink border border-border py-3 px-4 rounded-xl hover:bg-ink/5 transition-colors flex items-center justify-center"
                      aria-label="View Source Code"
                    >
                      <Github size={20} />
                    </a>
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

        {/* Mobile Swipe Indicator */}
        <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground/70 sm:hidden text-[13px] font-medium tracking-wide">
          <MoveHorizontal size={16} className="animate-pulse text-coral" />
          <span>Swipe to explore {showAll ? '' : 'more'}</span>
        </div>
      </div>
    </section>
  );
}
