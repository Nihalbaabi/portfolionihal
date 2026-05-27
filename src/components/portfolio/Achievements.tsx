import { Trophy, Star, Rocket, Users, Award, BookOpen, X, MoveHorizontal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import hackkarmaImg from "@/assets/acheivements/hackkarma.jpeg";
import proxpoImg from "@/assets/acheivements/proxpo.jpeg";
import websparkImg from "@/assets/acheivements/webspark.jpeg";
import iotWorkshopImg from "@/assets/acheivements/iot workshop.jpeg";
import winterImg from "@/assets/acheivements/winter.jpeg";
import webteamImg from "@/assets/acheivements/webteam.jpeg";

const items = [
  { Icon: Trophy, image: hackkarmaImg, title: "1st Place - SaveSphere", desc: "Secured 1st Place at the KMCT Engineering College project exhibition for SaveSphere (Flutter, Firebase & IoT)." },
  { Icon: Award, image: proxpoImg, title: "1st Prize - ProXpo 2026", desc: "Secured First Prize at ProXpo 2026 CSE Project Exhibition & Competition among 115+ innovative projects." },
  { Icon: Users, image: websparkImg, title: "Resource Person - WebSpark", desc: "Conducted an engaging Web Development session as a Resource Person for ACM WebSpark." },
  { Icon: Star, image: iotWorkshopImg, title: "IoT Fundamentals Trainer", desc: "Awarded Certificate of Appreciation for contributing as a trainer in an IoT Fundamentals session at Govt Polytechnic." },
  { Icon: BookOpen, image: winterImg, title: "ACM India Winter School", desc: "Attended the ACM Winter School 2025 on Compiler Design at SRM Institute of Science and Technology, Chennai." },
  { Icon: Rocket, image: webteamImg, title: "EXECOM - Web & Social Media", desc: "Honored to be part of the EXECOM Web & Social Media Team at ACM ASIET, managing and growing our digital presence." },
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

export function Achievements() {
  const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="achievements" className="relative py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="ACHIEVEMENTS"
          title="Milestones & moments."
        />
        <div className="max-w-6xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-6 -mx-6 px-6 sm:mx-0 sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {items.map((item) => (
              <motion.div
                variants={itemVariants}
                key={item.title}
                onClick={() => setSelectedItem(item)}
                className="group bg-background rounded-[2rem] border border-border hover:border-coral hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer shrink-0 w-[85vw] sm:w-auto snap-center"
              >
                <div className="h-48 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors z-10" />
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-coral/10 text-coral group-hover:bg-coral group-hover:text-ink transition-all duration-300">
                      <item.Icon size={20} />
                    </span>
                    <h3 className="font-display text-xl text-ink font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Mobile Swipe Indicator */}
          <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground/70 sm:hidden text-[13px] font-medium tracking-wide">
            <MoveHorizontal size={16} className="animate-pulse text-coral" />
            <span>Swipe to explore more</span>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-background rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white hover:bg-black/80 rounded-full transition-colors backdrop-blur-md"
              >
                <X size={24} />
              </button>
              <div className="w-full bg-ink/5 flex items-center justify-center overflow-hidden h-[60vh] md:h-[70vh]">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-8 bg-background border-t border-border shrink-0">
                <div className="flex items-center gap-4 mb-3">
                  <span className="inline-flex p-3 rounded-xl bg-coral/10 text-coral">
                    <selectedItem.Icon size={24} />
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-ink font-bold">{selectedItem.title}</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">{selectedItem.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
