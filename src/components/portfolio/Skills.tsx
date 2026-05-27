import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";

const skills = [
  { name: "C", level: 90 },
  { name: "C++", level: 85 },
  { name: "Python", level: 88 },
  { name: "Java", level: 75 },
  { name: "HTML", level: 92 },
  { name: "CSS", level: 88 },
  { name: "JavaScript", level: 82 },
  { name: "Networking", level: 80 },
  { name: "IoT", level: 85 },
  { name: "Database Mgmt", level: 78 },
  { name: "Linux", level: 80 },
  { name: "Embedded", level: 82 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="SKILLS"
          title="The toolkit I work with."
          description="A growing collection of languages, platforms, and concepts I use to bring ideas to life."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 max-w-5xl mx-auto"
        >
          {skills.map((s) => (
            <motion.div variants={itemVariants} key={s.name}>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-display text-lg font-medium text-ink">{s.name}</h3>
                <span className="text-[12px] tracking-[0.1em] text-ink/70 font-semibold">
                  {s.level}%
                </span>
              </div>
              <div className="h-[4px] bg-border relative overflow-hidden rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  className="absolute inset-y-0 left-0 bg-coral"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
