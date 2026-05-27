import { Cpu, Network, Radio, Code2, Database, Terminal } from "lucide-react";
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
            <div className="absolute -top-4 -left-4 h-32 w-32 bg-coral-soft rounded-full" aria-hidden />
            <div className="absolute -bottom-6 -right-2 h-20 w-20 text-ink dot-pattern" aria-hidden />
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-[3rem] bg-coral flex items-center justify-center overflow-hidden shadow-xl">
              <p className="font-display text-[10rem] text-ink leading-none font-bold">N</p>
            </div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={itemVariants} className="text-[11px] tracking-[0.3em] text-coral mb-3 font-semibold uppercase">— WHO I AM</motion.p>
            <motion.h3 variants={itemVariants} className="font-display text-3xl md:text-4xl text-ink leading-tight">
              I'm Muhammed Nihal P A, a Computer Science Engineering student in love with
              <span className="text-coral"> building things that think.</span>
            </motion.h3>
            <motion.p variants={itemVariants} className="mt-6 text-muted-foreground leading-relaxed">
              Passionate Computer Science Engineering student with a strong interest in software development, full-stack web development, and Flutter app development. Skilled in building real-world projects using the MERN stack, Flutter, and IoT technologies, with hands-on experience in Python, Java, C++, and JavaScript.
              <br /><br />
              Driven by continuous learning and innovation, I am actively exploring AI, data science, and emerging technologies while seeking opportunities in internships, projects, and software development roles to grow as an aspiring software engineer.
              <br /><br />
              Let's connect and build impactful solutions through technology.
            </motion.p>
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
