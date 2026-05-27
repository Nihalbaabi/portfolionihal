import { useState, useRef } from "react";
import { X, Award, ExternalLink, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";

// Import local certificate images
import cert1 from "@/assets/certificates/cert1.jpeg";
import cert2 from "@/assets/certificates/cert2.jpeg";
import cert3 from "@/assets/certificates/cert3.jpeg";
import cert4 from "@/assets/certificates/cert4.jpeg";
import cert5 from "@/assets/certificates/cert5.jpeg";
import cert6 from "@/assets/certificates/cert6.jpeg";
import cert7 from "@/assets/certificates/cert7.jpeg";
import cert8 from "@/assets/certificates/cert8.jpeg";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  description: string;
  image: string;
  color: string;
  icon: string;
}

interface CertGroup {
  category: string;
  emoji: string;
  items: Certification[];
}

const certifications: CertGroup[] = [
  {
    category: "Cloud & Infrastructure",
    emoji: "☁️",
    items: [
      {
        title: "Cloud Computing with AWS",
        issuer: "Academy of Skill Development",
        date: "Mar 2026",
        credentialId: "ASD/CLO/ADI/A++/91402",
        description:
          "A comprehensive certification covering foundational and advanced concepts of cloud computing using Amazon Web Services (AWS). Developed practical skills in managing cloud infrastructure, deploying scalable applications, and understanding core services like EC2, S3, and IAM to build reliable, cloud‑native solutions.",
        image: cert8,
        color: "#FF9900",
        icon: "AWS",
      },
      {
        title: "Network Fundamentals",
        issuer: "Infosys Springboard",
        date: "Sep 2025",
        description:
          "Validated core networking concepts essential for modern software development and cloud architecture. Topics included OSI model, TCP/IP suite, routing, switching, and network security protocols.",
        image: cert2,
        color: "#007CC3",
        icon: "NET",
      },
    ],
  },
  {
    category: "Software Engineering & Programming",
    emoji: "⚡",
    items: [
      {
        title: "The Complete Full‑Stack Web Development Bootcamp",
        issuer: "Udemy",
        date: "Jul 2024",
        credentialId: "UC-89447cc3-9cc0-4879-a9b0-8a95ad376536",
        description:
          "Intensive hands‑on bootcamp focusing on end‑to‑end web development. Mastered front‑end and back‑end technologies, database integration, RESTful APIs, and responsive UI design.",
        image: cert3,
        color: "#A435F0",
        icon: "FS",
      },
      {
        title: "Data Base Management System",
        issuer: "NPTEL",
        date: "Jan 2025",
        credentialId: "NPTEL25CS18S637901055",
        description:
          "Deep‑dive into database architecture covering relational design, ER modeling, query optimisation, normalization, and transaction management.",
        image: cert4,
        color: "#1A73E8",
        icon: "DB",
      },
      {
        title: "Programming in Java",
        issuer: "NPTEL",
        date: "Oct 2024",
        credentialId: "NPTEL24CS105S552100796",
        description:
          "Advanced certification on core and OOP concepts in Java, including inheritance, polymorphism, exception handling, multithreading, and data structures.",
        image: cert5,
        color: "#ED8B00",
        icon: "JV",
      },
      {
        title: "Basics of Python",
        issuer: "Infosys Springboard",
        date: "Jun 2025",
        description:
          "Fundamental Python syntax, data types, control structures, functional programming, and problem‑solving techniques.",
        image: cert6,
        color: "#3776AB",
        icon: "PY",
      },
      {
        title: "Java Concepts",
        issuer: "Infosys Springboard",
        date: "Aug 2024",
        description:
          "Foundation‑level certification validating core OOP principles, syntax, and basic software logic in Java.",
        image: cert7,
        color: "#ED8B00",
        icon: "JC",
      },
    ],
  },
  {
    category: "Emerging Technology",
    emoji: "🤖",
    items: [
      {
        title: "Artificial Intelligence Fundamentals",
        issuer: "IBM",
        date: "Jan 2026",
        description:
          "Explored foundational AI, ML, and Deep Learning concepts, real‑world applications, NLP, and computer vision, establishing a baseline for integrating intelligent features.",
        image: cert1,
        color: "#0F62FE",
        icon: "AI",
      },
    ],
  },
];

const allCategories = ["All", ...certifications.map((g) => g.category)];

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredGroups =
    activeCategory === "All"
      ? certifications
      : certifications.filter((g) => g.category === activeCategory);

  const allCerts = filteredGroups.flatMap((g) => g.items);
  const displayedCerts = showAll ? allCerts : allCerts.slice(0, 4);
  const hasMore = allCerts.length > 4;

  return (
    <section id="certifications" ref={sectionRef} className="relative py-28 bg-secondary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coral/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coral/[0.02] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <SectionHeading eyebrow="CERTIFICATIONS" title="Always learning." />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted-foreground max-w-lg mx-auto -mt-8 mb-12 text-sm leading-relaxed"
        >
          Industry-recognized certifications validating expertise across cloud platforms,
          software engineering, and emerging technologies.
        </motion.p>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`
                relative px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300
                ${
                  activeCategory === cat
                    ? "bg-ink text-white shadow-lg shadow-ink/20"
                    : "bg-background text-muted-foreground border border-border hover:border-coral/40 hover:text-ink hover:shadow-md"
                }
              `}
            >
              {cat === "All" && <Sparkles size={14} className="inline mr-1.5 -mt-0.5" />}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert, index) => (
              <motion.div
                key={cert.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="group relative bg-background rounded-2xl border border-border/60 hover:border-transparent overflow-hidden cursor-pointer transition-all duration-400 hover:shadow-2xl hover:-translate-y-1.5"
                  style={{
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
                    style={{
                      background: `linear-gradient(90deg, ${cert.color}, ${cert.color}88)`,
                    }}
                  />

                  <div className="p-6 flex gap-5">
                    {/* Certificate Thumbnail */}
                    <div className="shrink-0">
                      <div
                        className="w-16 h-16 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 border-2"
                        style={{
                          borderColor: cert.color,
                          boxShadow: `0 8px 24px ${cert.color}25`,
                        }}
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <h4 className="font-display text-lg text-ink leading-snug group-hover:text-coral transition-colors duration-300 line-clamp-2">
                          {cert.title}
                        </h4>
                        <span
                          className="shrink-0 text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full whitespace-nowrap"
                          style={{
                            color: cert.color,
                            backgroundColor: `${cert.color}12`,
                          }}
                        >
                          {cert.date}
                        </span>
                      </div>

                      <p className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-1.5">
                        <Award size={13} className="text-coral shrink-0" />
                        {cert.issuer}
                      </p>

                      <p className="text-[13px] text-muted-foreground/80 leading-relaxed line-clamp-2">
                        {cert.description}
                      </p>

                      {cert.credentialId && (
                        <div className="mt-3 pt-3 border-t border-border/40">
                          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50 font-bold uppercase">
                            ID: <span className="font-mono text-muted-foreground/70 normal-case tracking-normal">{cert.credentialId}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Hover reveal arrow */}
                  <div className="absolute bottom-4 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                    <ExternalLink size={16} className="text-coral" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Less Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center gap-2 bg-background text-ink border border-border/60 hover:border-coral hover:text-coral transition-all duration-300 px-7 py-3.5 rounded-full font-semibold tracking-wide text-sm shadow-sm hover:shadow-lg hover:shadow-coral/10"
            >
              {showAll ? (
                <>
                  <ChevronUp size={16} className="transition-transform group-hover:-translate-y-0.5" />
                  Show Less
                </>
              ) : (
                <>
                  View All {allCerts.length} Certifications
                  <ChevronDown size={16} className="transition-transform group-hover:translate-y-0.5" />
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 max-w-md mx-auto gap-6"
        >
          {[
            { value: "8", label: "Certifications" },
            { value: "5+", label: "Platforms" },
            { value: "3", label: "Domains" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl text-ink font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground tracking-wider mt-1 uppercase font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
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
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full bg-background rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2.5 bg-background/80 hover:bg-coral text-ink hover:text-white rounded-full backdrop-blur-md transition-all border border-border hover:border-coral shadow-sm"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Modal Image Panel */}
              <div className="bg-secondary/50 md:w-3/5 lg:w-2/3 flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
                {/* Decorative gradient glow behind the image */}
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${selectedCert.color}40 0%, transparent 70%)`,
                  }}
                />
                <div className="absolute inset-0 dot-pattern opacity-30 mix-blend-multiply pointer-events-none" />
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-full object-contain rounded-xl shadow-xl z-10"
                />
              </div>

              {/* Modal Content Panel */}
              <div className="p-8 md:p-10 bg-background md:w-2/5 lg:w-1/3 flex flex-col overflow-y-auto">
                {/* Issuer badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold tracking-wider"
                    style={{
                      background: `linear-gradient(135deg, ${selectedCert.color}, ${selectedCert.color}CC)`,
                    }}
                  >
                    {selectedCert.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{selectedCert.issuer}</p>
                    <p className="text-xs font-bold tracking-wider" style={{ color: selectedCert.color }}>
                      {selectedCert.date}
                    </p>
                  </div>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight mb-4">
                  {selectedCert.title}
                </h3>

                <div
                  className="w-16 h-1 rounded-full mb-6"
                  style={{ background: `linear-gradient(90deg, ${selectedCert.color}, transparent)` }}
                />

                <p className="text-sm text-muted-foreground leading-relaxed mb-auto">
                  {selectedCert.description}
                </p>

                {selectedCert.credentialId && (
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground/60 uppercase mb-2">
                      Credential ID
                    </p>
                    <p className="text-sm font-mono text-ink bg-secondary px-4 py-2.5 rounded-lg break-all border border-border/50">
                      {selectedCert.credentialId}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
