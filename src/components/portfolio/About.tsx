import { Cpu, Network, Radio, Code2, Database, Terminal, Smartphone, Wifi, Server, Globe } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";

const interests = [
  { Icon: Radio, label: "IoT Projects" },
  { Icon: Cpu, label: "Embedded Systems" },
  { Icon: Network, label: "Networking" },
  { Icon: Code2, label: "Software Dev" },
  { Icon: Database, label: "Databases" },
  { Icon: Terminal, label: "Linux & Tools" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function About() {
  return (
    <section id="about" className="relative py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="ABOUT"
          title="A young engineer with a curious mind."
        />
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-coral/20 rounded-full blur-3xl animate-pulse" />
               
               {/* Center piece */}
               <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-ink rounded-3xl flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] z-20"
               >
                 <Cpu size={48} className="text-white relative z-10" />
                 <motion.div 
                   animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                   transition={{ duration: 3, repeat: Infinity }}
                   className="absolute inset-0 bg-coral rounded-3xl z-0"
                 />
               </motion.div>

               {/* Flutter / Mobile Node */}
               <motion.div 
                  animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-[10%] left-[10%] bg-white p-4 rounded-2xl shadow-xl border border-border/50 text-[#02569B] z-10"
               >
                 <Smartphone size={32} />
               </motion.div>

               {/* IoT Node */}
               <motion.div 
                  animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-[15%] right-[10%] bg-white p-4 rounded-2xl shadow-xl border border-border/50 text-[#FF9900] z-10"
               >
                 <Wifi size={32} />
               </motion.div>

               {/* MERN / Database Node */}
               <motion.div 
                  animate={{ y: [-10, 10, -10], x: [10, -10, 10] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-[10%] right-[15%] bg-white p-4 rounded-2xl shadow-xl border border-border/50 text-[#47A248] z-10"
               >
                 <Database size={32} />
               </motion.div>

               {/* Cloud / Backend Node */}
               <motion.div 
                  animate={{ y: [12, -12, 12], x: [-10, 10, -10] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-[15%] left-[15%] bg-white p-4 rounded-2xl shadow-xl border border-border/50 text-[#0F62FE] z-10"
               >
                 <Server size={32} />
               </motion.div>

               {/* Connecting lines (SVG) */}
               <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none text-ink/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <line x1="15" y1="15" x2="50" y2="50" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />
                 <line x1="85" y1="20" x2="50" y2="50" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />
                 <line x1="80" y1="85" x2="50" y2="50" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />
                 <line x1="20" y1="80" x2="50" y2="50" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 2" />
               </svg>
            </div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={itemVariants} className="text-[11px] tracking-[0.3em] text-coral mb-3 font-semibold uppercase">— WHO I AM</motion.p>
            <motion.h3 variants={itemVariants} className="font-display text-3xl md:text-4xl text-ink leading-tight font-bold mb-6">
              I'm Muhammed Nihal P A, a software engineer obsessed with
              <span className="text-coral"> building things that think.</span>
            </motion.h3>
            <motion.div variants={itemVariants} className="space-y-5 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                I specialize in architecting scalable full-stack web applications and engineering fluid, cross-platform mobile experiences. By leveraging the MERN stack and Flutter ecosystem, I transform complex requirements into seamless, user-centric digital products.
              </p>
              <p>
                My expertise extends beyond traditional software development into the realm of connected devices. I have hands-on experience integrating IoT technologies to bridge the gap between hardware intelligence and intuitive software interfaces, utilizing languages like Python, Java, C++, and JavaScript to drive innovation.
              </p>
              <p>
                Driven by an unyielding curiosity, I am constantly exploring the intersections of AI, data science, and modern cloud infrastructure. I thrive in collaborative, fast-paced environments where I can tackle challenging problems and engineer impactful, future-proof solutions.
              </p>
            </motion.div>
            <motion.ul variants={containerVariants} className="mt-8 grid grid-cols-2 gap-4">
              {interests.map(({ Icon, label }) => (
                <motion.li variants={itemVariants} key={label} className="flex items-center gap-3 group">
                  <span className="h-10 w-10 rounded-xl border border-ink flex items-center justify-center group-hover:bg-coral group-hover:border-coral group-hover:text-ink group-hover:shadow-lg transition-all duration-300">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-medium text-ink/80 group-hover:text-ink transition-colors">{label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
