import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { toast } from "sonner";
import { z } from "zod";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const socials = [
  { Icon: Mail, label: "muhammednihal477@gmail.com", href: "mailto:muhammednihal477@gmail.com" },
  {
    Icon: Linkedin,
    label: "linkedin.com/in/muhammednihalpa477",
    href: "https://www.linkedin.com/in/muhammednihalpa477",
  },
  { Icon: Github, label: "github.com/Nihalbaabi", href: "https://github.com/Nihalbaabi" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check your input");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="relative">
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Left: info */}
        <div className="relative bg-background flex items-center px-6 sm:px-12 lg:px-16 py-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-md w-full"
          >
            <p className="text-[11px] tracking-[0.3em] text-coral mb-4 uppercase font-bold">— CONTACT</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] font-bold">
              Let's build<br />something great.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
              Open to internships, collaborations, and interesting tech conversations.
            </p>
            <ul className="mt-10 space-y-6">
              {socials.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 text-ink hover:text-coral transition-colors"
                  >
                    <span className="h-12 w-12 rounded-2xl border border-border bg-secondary flex items-center justify-center group-hover:bg-coral group-hover:border-coral group-hover:text-ink shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
                      <Icon size={20} />
                    </span>
                    <span className="text-[15px] font-medium break-all">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="absolute bottom-10 right-10 h-24 w-24 text-ink dot-pattern opacity-30" aria-hidden />
        </div>

        {/* Right: form on coral */}
        <div className="relative bg-coral text-ink flex items-center px-6 sm:px-12 lg:px-16 py-20">
          <motion.form 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            onSubmit={onSubmit} 
            className="w-full max-w-md space-y-8 bg-white/20 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] shadow-xl border border-white/40"
          >
            <h3 className="font-display text-3xl font-bold">Drop a message</h3>
            <div>
              <label className="text-[11px] tracking-[0.2em] font-bold opacity-80 uppercase">NAME</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="mt-2 w-full bg-transparent border-b-2 border-ink/20 py-2 text-ink placeholder:text-ink/40 outline-none focus:border-ink transition-colors font-medium"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-[11px] tracking-[0.2em] font-bold opacity-80 uppercase">EMAIL</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="mt-2 w-full bg-transparent border-b-2 border-ink/20 py-2 text-ink placeholder:text-ink/40 outline-none focus:border-ink transition-colors font-medium"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-[11px] tracking-[0.2em] font-bold opacity-80 uppercase">MESSAGE</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={4}
                className="mt-2 w-full bg-transparent border-b-2 border-ink/20 py-2 text-ink placeholder:text-ink/40 outline-none focus:border-ink transition-colors resize-none font-medium"
                placeholder="Tell me about your idea..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="group mt-4 w-full inline-flex items-center justify-center gap-3 bg-ink text-white rounded-xl px-8 py-4 text-[13px] tracking-[0.1em] font-bold hover:bg-black transition-all disabled:opacity-60 shadow-lg"
            >
              {loading ? "SENDING..." : "SEND MESSAGE"}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
