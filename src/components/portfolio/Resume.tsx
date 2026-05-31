import { useState } from "react";
import { Download, Eye, X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";

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
  const [showPreview, setShowPreview] = useState(false);

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
              className="bg-ink p-0 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-white/10"
            >
              {/* Terminal Window Header */}
              <div className="h-12 bg-white/5 flex items-center px-6 gap-2 border-b border-white/5 relative">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="font-mono text-[13px] font-semibold tracking-[0.2em] text-white uppercase">RESUME</span>
                </div>
              </div>

              {/* Terminal Window Body */}
              <div className="p-8 md:p-10 lg:p-12 font-mono text-[14px] sm:text-[15px] leading-loose text-left overflow-x-auto w-full">
                <div>
                  <span className="text-blue-400">const</span> <span className="text-white">resume</span> <span className="text-blue-400">=</span> <span className="text-coral">async</span> () <span className="text-blue-400">{"=>"}</span> {"{"}
                </div>
                <div className="pl-4 sm:pl-8 py-4 space-y-4">
                  <div className="text-white/60 text-[13px] sm:text-[14px] leading-relaxed">
                    <span className="text-[#ff7b72]">// Download the complete PDF version of my resume</span><br />
                    <span className="text-[#ff7b72]">// to explore all of my skills, projects, and experiences.</span>
                  </div>
                  <div className="truncate">
                    <span className="text-coral">await</span> <span className="text-[#a5d6ff]">fetch</span>(<span className="text-[#a5d6ff]">"Muhammed_Nihal_Resume.pdf"</span>);
                  </div>
                  <div className="truncate">
                    <span className="text-coral">await</span> <span className="text-[#a5d6ff]">openPreview</span>();
                  </div>
                </div>
                <div>{"};"}</div>

                {/* Interactive Action Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full font-sans">
                  <button
                    onClick={() => setShowPreview(true)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 text-[13px] tracking-widest font-bold bg-white text-ink hover:bg-coral hover:text-white transition-colors rounded-xl shadow-lg"
                  >
                    <Eye size={18} /> PREVIEW CV
                  </button>
                  <a
                    href="/ats_resume.html"
                    download="Muhammed_Nihal_Resume.html"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 text-[13px] tracking-widest font-bold bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-colors rounded-xl shadow-sm"
                  >
                    <Download size={18} /> DOWNLOAD
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Document Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-5xl h-[85vh] bg-background rounded-2xl overflow-hidden shadow-2xl flex flex-col border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/50">
                <h3 className="font-display font-bold text-lg flex items-center gap-2">
                  <Eye size={20} className="text-coral" /> Document Preview
                </h3>
                <div className="flex items-center gap-4">
                  <a
                    href="/ats_resume.html"
                    download="Muhammed_Nihal_Resume.html"
                    className="text-sm font-semibold text-ink hover:text-coral transition-colors flex items-center gap-1.5"
                  >
                    <Download size={16} /> Save PDF
                  </a>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="p-2 hover:bg-coral/10 hover:text-coral rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Body (Iframe) */}
              <div className="flex-1 bg-white relative w-full h-full">
                <iframe
                  src="/ats_resume.html"
                  className="w-full h-full border-none"
                  title="Resume Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
