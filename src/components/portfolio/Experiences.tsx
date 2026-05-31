import { SectionHeading } from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

import certGenzee from "@/assets/experiences/IMG-20240722-WA0136-1~2.jpg";
import certLuminar from "@/assets/experiences/IMG-20250701-WA0128.jpg";
import certSrmist from "@/assets/experiences/PXL_20251226_114727077.jpg";
import certIct from "@/assets/experiences/ict internship.jpg";
import certCodsoft from "@/assets/experiences/Muhammed Nihal P A.jpg";
import certDextra from "@/assets/experiences/Muhammed Nihal P A (2)_page-0001.jpg";

const experiences = [
  {
    title: "Co‑Lead",
    organization: "ACM Student Chapter, ASIET",
    period: "Jun 2025 – Present",
    location: "Kalady, Kerala, India",
    description:
      "Co‑lead technical events, workshops and coding activities for the ACM Student Chapter, driving student engagement and technical growth.",
    skills: ["Leadership", "Team Coordination", "Event Management", "Communication"],
    logo: null as string | null,
    logoFallback: "ACM",
    color: "#2B5EA7",
  },
  {
    title: "Executive Member",
    organization: "CSE Association, ASIET",
    period: "Jun 2025 – Present",
    location: "Kalady, Kerala, India",
    description:
      "Organized department events, technical programs and workshops, ensuring smooth execution and student participation.",
    skills: ["Teamwork", "Coordination", "Event Planning", "Communication"],
    logo: certDextra,
    logoFallback: "CSE",
    color: "#1A5276",
    certificates: [certDextra],
  },
  {
    title: "Web Development Intern",
    organization: "CodSoft",
    period: "Jan 2026 – Feb 2026",
    description:
      "Engineered responsive UI modules using React.js and modern JavaScript, optimizing cross-device layout discrepancies and enhancing overall front-end architecture.",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Responsive Design"],
    logo: certCodsoft,
    logoFallback: "CS",
    color: "#6C3FC5",
    certificates: [certCodsoft],
  },
  {
    title: "Winter School Participant",
    organization: "SRMIST School of Computing",
    period: "Dec 2025",
    location: "Chennai, India",
    description:
      "Attended ACM Winter School focused on Compiler Design, covering lexical analysis, parsing, syntax analysis and optimisation.",
    skills: ["Compiler Design", "Lexical Analysis", "Parsing", "Syntax Analysis"],
    logo: certSrmist,
    logoFallback: "SRM",
    color: "#E31837",
    certificates: [certSrmist],
  },
  {
    title: "Full‑Stack Development Intern",
    organization: "ICT Academy of Kerala",
    period: "Jun 2025 – Jul 2025",
    location: "Chalakudy, Kerala, India",
    description:
      "Architected full-stack MERN applications with robust API integrations, ensuring secure authentication workflows and scalable database management.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    logo: certIct,
    logoFallback: "ICT",
    color: "#0D9488",
    certificates: [certIct],
  },
  {
    title: "Flutter Developer Intern",
    organization: "Luminar Technolab",
    period: "Jun 2025",
    location: "Kochi, Kerala, India",
    description:
      "Developed cross‑platform mobile UI components using Flutter, focusing on state management efficiency and seamless cross-device widget implementations.",
    skills: ["Flutter", "Dart", "Mobile UI Design", "Cross‑Platform Development"],
    logo: certLuminar,
    logoFallback: "LT",
    color: "#0369A1",
    certificates: [certLuminar],
  },
  {
    title: "Flutter Developer Intern",
    organization: "Genzee Technologies LLP",
    period: "Jun 2024 – Jul 2024",
    location: "Ernakulam, Kerala, India",
    description:
      "Built and tested core Flutter application features, leading debugging efforts within Android Studio to reduce crash rates and improve performance.",
    skills: ["Flutter", "Android Studio", "Debugging", "App Testing"],
    logo: certGenzee,
    logoFallback: "GT",
    color: "#059669",
    certificates: [certGenzee],
  },
];


export function Experiences() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const groupedExperiences = experiences.reduce((acc, exp) => {
    const existing = acc.find(g => g.organization === exp.organization);
    if (existing) {
      existing.roles.push(exp);
    } else {
      acc.push({
        organization: exp.organization,
        logo: exp.logo,
        logoFallback: exp.logoFallback,
        color: exp.color,
        roles: [exp]
      });
    }
    return acc;
  }, [] as Array<{
    organization: string;
    logo: string | null;
    logoFallback: string;
    color: string;
    roles: typeof experiences;
  }>);

  return (
    <section id="experience" className="relative py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <SectionHeading eyebrow="EXPERIENCE" title="Professional Journey" />
        
        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-border/80 p-6 sm:p-8 md:p-10 text-left">
          <h2 className="text-2xl font-bold text-ink mb-8">Experience</h2>
          
          <div className="space-y-6">
            {groupedExperiences.map((group, idx) => (
              <div key={idx} className="flex gap-3 sm:gap-4 border-b border-border/40 pb-6 last:border-0 last:pb-0">
                {/* Logo */}
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-md flex items-center justify-center shrink-0 overflow-hidden shadow-sm border border-border/50"
                  style={{ 
                    background: group.logo ? 'var(--secondary)' : `linear-gradient(135deg, ${group.color || '#333'}, ${group.color ? group.color + 'CC' : '#555'})`,
                  }}
                >
                  {group.logo ? (
                    <img 
                      loading="lazy" 
                      decoding="async"
                      src={group.logo} 
                      alt={group.organization} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <span className="text-white font-bold text-sm tracking-wider">
                      {group.logoFallback}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <h3 className="font-bold text-[16px] sm:text-[17px] text-ink leading-tight">{group.organization}</h3>
                  <p className="text-[14px] text-ink/70 mt-0.5 mb-4">Full-time</p>
                  
                  <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[5px] top-3 bottom-4 w-[2px] bg-border/80" />
                    
                    <div className="space-y-6">
                      {group.roles.map((role, rIdx) => (
                        <div key={rIdx} className="relative pl-7 sm:pl-8">
                          {/* Dot */}
                          <div className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full bg-border/80 -translate-x-[4px]" />
                          
                          <h4 className="font-semibold text-[15px] sm:text-[16px] text-ink leading-tight">{role.title}</h4>
                          <p className="text-[13.5px] text-ink/60 mt-0.5">
                            {role.period}
                          </p>
                          {role.location && (
                            <p className="text-[13.5px] text-ink/60">
                              {role.location}
                            </p>
                          )}
                          
                          {role.description && (
                            <p className="mt-3 text-[14px] text-ink/90 leading-relaxed max-w-2xl">
                              {role.description}
                            </p>
                          )}

                          {role.certificates && role.certificates.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-3">
                              {role.certificates.map((cert, cIdx) => (
                                <div 
                                  key={cIdx}
                                  onClick={() => setSelectedCert(cert)}
                                  className="flex items-center gap-3 border border-border/80 rounded-lg overflow-hidden pr-4 hover:bg-secondary/60 cursor-pointer transition-colors w-fit"
                                >
                                  <img loading="lazy" decoding="async" src={cert} alt="Certificate thumbnail" className="w-16 h-12 object-cover border-r border-border/60" />
                                  <span className="text-[13.5px] font-semibold text-ink">Certificate</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {role.skills && role.skills.length > 0 && (
                            <div className="mt-4 flex items-start gap-2 text-[13.5px] text-ink">
                              <svg className="shrink-0 mt-[2px] text-ink/70" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
                              </svg>
                              <span className="font-medium text-ink">
                                <span className="font-bold">{role.skills.slice(0, 2).join(", ")}</span>
                                {role.skills.length > 2 && ` and +${role.skills.length - 2} skills`}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
              className="relative max-w-4xl max-h-[90vh] w-full bg-background rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-4 md:p-8 border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-background/80 hover:bg-coral text-ink hover:text-white rounded-full backdrop-blur-md transition-all border border-border hover:border-coral shadow-sm"
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
    </section>
  );
}
