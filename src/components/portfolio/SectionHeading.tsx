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
      className={`${isCenter ? "text-center mx-auto flex flex-col items-center" : ""} max-w-2xl mb-16 relative z-10`}
    >
      <div className={`inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm font-bold mb-6 shadow-sm bg-white text-gray-800`}>
        {eyebrow}
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-inherit leading-[1.1] mb-6 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
