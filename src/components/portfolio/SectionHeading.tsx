interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, description, align = "center" }: Props) {
  const isCenter = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${isCenter ? "text-center mx-auto" : ""} max-w-2xl mb-16`}
    >
      <div className={`flex items-center gap-6 mb-4 ${isCenter ? "justify-center" : ""}`}>
        <span className="h-[3px] w-24 bg-coral" />
        <p className="text-[35px] tracking-[0.3em] font-extrabold text-coral uppercase">{eyebrow}</p>
        <span className="h-[3px] w-24 bg-coral" />
      </div>
      {description && (
        <p className="mt-5 text-muted-foreground leading-relaxed text-center">{description}</p>
      )}
    </motion.div>
  );
}
