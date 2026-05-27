import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";

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
      "Developed mini web applications using HTML, CSS, JavaScript and React, enhancing responsive UI design and project structuring skills.",
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
      "Built MERN stack applications, handling API integration, database management, authentication and deployment workflows.",
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
      "Developed cross‑platform mobile UI components using Flutter and Dart, focusing on responsive design and widget implementation.",
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
      "Created Flutter application features, performed debugging and testing within Android Studio environment.",
    skills: ["Flutter", "Android Studio", "Debugging", "App Testing"],
    logo: certGenzee,
    logoFallback: "GT",
    color: "#059669",
    certificates: [certGenzee],
  },
];


export function Experiences() {
  return (
    <section id="experience" className="relative py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-10">
        <SectionHeading eyebrow="EXPERIENCE" title="Professional Journey" />
        <div className="mt-16 space-y-12 max-w-5xl mx-auto relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              key={idx}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-0 md:ml-0 z-10">
                <div className="w-3 h-3 bg-coral rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-card rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:border-coral/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div 
                      className="h-14 w-14 rounded-xl flex items-center justify-center shrink-0 border-2 overflow-hidden shadow-sm"
                      style={{ 
                        borderColor: exp.color || 'var(--border)',
                        background: exp.logo ? 'var(--secondary)' : `linear-gradient(135deg, ${exp.color || '#333'}, ${exp.color ? exp.color + 'CC' : '#555'})`,
                        boxShadow: exp.color ? `0 4px 12px ${exp.color}30` : 'none'
                      }}
                    >
                      {exp.logo ? (
                        <img 
                          src={exp.logo} 
                          alt={exp.organization} 
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                        />
                      ) : (
                        <span className="text-white font-bold text-sm tracking-wider">
                          {exp.logoFallback}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-xl text-ink font-bold">{exp.title}</h3>
                      <p className="text-sm text-ink/70 font-medium">
                        {exp.organization}
                      </p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-block px-3 py-1 bg-coral/10 text-coral text-xs font-bold tracking-wider rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                    {exp.location && (
                      <p className="text-xs text-muted-foreground mt-1">{exp.location}</p>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {exp.description}
                </p>
                
                {exp.certificates && exp.certificates.length > 0 && (
                  <div className="mt-5">
                    {exp.certificates.map((cert, cIdx) => (
                      <a
                        key={cIdx}
                        href={cert}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-coral hover:text-ink transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                        View Certificate {exp.certificates!.length > 1 ? cIdx + 1 : ""}
                      </a>
                    ))}
                  </div>
                )}

                <ul className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[11px] px-3 py-1.5 bg-secondary text-ink/70 rounded-md font-medium"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
