import { Download } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";

const timeline = [
  {
    title: "Adi Shankara Institute of Engineering and Technology, Kalady",
    place: "Bachelor of Technology - BTech, Computer Engineering",
    period: "Jan 2023 — Apr 2027",
    desc: "Skills: Operating Systems, Database Management System (DBMS), Data Structures, and more.",
  },
  {
    title: "Government Higher Secondary School, Kuttumasserry",
    place: "Higher Secondary Education (Plus Two), Computer Science",
    period: "Jul 2021 — May 2023",
    desc: "Grade: 97.75%. Activities and societies: Sports Captain, Football Team Captain, Athletics Team Member, Cultural Activities, Singing Competitions.",
  },
  {
    title: "Al Ameen Public School, Sreemoolanagaram",
    place: "Secondary School Education (CBSE Class 10), General Studies",
    period: "Jun 2011 — May 2021",
    desc: "Grade: 94%. Activities and societies: Sports Activities, Football Team, Athletics, Singing and Cultural Programs.",
  },
];

export function Resume() {
  return (
    <section id="resume" className="relative py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="RESUME"
          title="My educational journey."
        />
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Educational Journey */}
          <div>
            <h3 className="font-display text-3xl font-bold text-ink mb-10">Educational Journey</h3>
            <div className="relative pl-10 md:pl-12 border-l-2 border-border/60 space-y-12">
              {timeline.map((t, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={t.title} 
                  className="relative group"
                >
                  <span className="absolute -left-[49px] md:-left-[57px] top-1.5 h-4 w-4 rounded-full bg-border border-[3px] border-background group-hover:bg-coral group-hover:scale-125 transition-all duration-300" />
                  <p className="text-[11px] tracking-[0.2em] font-bold text-coral uppercase mb-1">{t.period}</p>
                  <h4 className="font-display text-xl text-ink font-bold">{t.title}</h4>
                  <p className="text-sm font-medium text-muted-foreground mt-1">{t.place}</p>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Full Resume Download */}
          <div className="flex flex-col justify-center lg:pt-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white p-10 md:p-14 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-border/50 text-center flex flex-col items-center justify-center relative overflow-hidden"
            >
              {/* Decorative background blur */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-400/10 blur-[50px] rounded-full mix-blend-multiply" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-rose-400/10 blur-[50px] rounded-full mix-blend-multiply" />
              
              <div className="h-20 w-20 bg-orange-50 text-coral rounded-full flex items-center justify-center mb-6 relative z-10 shadow-sm border border-orange-100">
                <Download size={32} />
              </div>
              <p className="font-display text-3xl text-ink font-bold mb-4 relative z-10">Full Resume</p>
              <p className="text-muted-foreground mb-10 leading-relaxed relative z-10">
                Download the complete PDF version of my resume to explore all of my skills, projects, and professional experiences in detail.
              </p>
              <a
                href="#"
                className="btn-yellow inline-flex items-center justify-center gap-2 px-8 py-4 w-full shadow-sm text-[15px] relative z-10"
              >
                <Download size={18} /> DOWNLOAD CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
