import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Play, CheckCircle2, ChevronRight, FileCode2, Terminal } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { toast } from "sonner";
import { z } from "zod";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("contact.ts");

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
      toast.success("Script executed! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="GET IN TOUCH" title="Let's build something." />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mt-16 max-w-5xl mx-auto rounded-xl border border-border/80 bg-[#0d1117] shadow-2xl overflow-hidden flex flex-col font-mono"
        >
          {/* IDE Header */}
          <div className="h-12 bg-[#010409] border-b border-white/5 flex items-center px-4 justify-between relative">
             <div className="flex items-center gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] hover:bg-red-400 cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] hover:bg-yellow-400 cursor-pointer" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F] hover:bg-green-400 cursor-pointer" />
             </div>
             <div className="absolute inset-0 flex items-center justify-center text-[12px] text-white/40 tracking-wider pointer-events-none">
                Nihal_Portfolio — Code Editor
             </div>
          </div>

          <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
             {/* Sidebar Explorer */}
             <div className="w-full md:w-64 bg-[#0d1117] border-b md:border-b-0 md:border-r border-white/5 flex flex-col shrink-0">
                <div className="py-2 md:py-3 px-4 text-[11px] text-white/50 tracking-wider uppercase font-semibold flex items-center gap-1">
                   <ChevronRight size={14} className="rotate-90" /> EXPLORER
                </div>
                
                <div className="flex flex-row md:flex-col gap-0.5 px-2 pb-2 md:pb-0 overflow-x-auto hide-scrollbar">
                   <div className="hidden md:block py-1 px-4 text-[11px] text-white/50 tracking-wider uppercase font-semibold mt-2 mb-1">
                     PORTFOLIO
                   </div>
                   
                   <button 
                     onClick={() => setActiveTab("contact.ts")}
                     className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] whitespace-nowrap transition-colors ${activeTab === "contact.ts" ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"}`}
                   >
                     <FileCode2 size={15} className="text-[#3178c6]" /> contact.ts
                   </button>
                   
                   <a href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammednihal477@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] whitespace-nowrap text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                     <Mail size={15} className="text-[#ea4335]" /> email.config.json
                   </a>
                   
                   <a href="https://github.com/Nihalbaabi" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] whitespace-nowrap text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                     <Github size={15} className="text-white" /> github.md
                   </a>
                   
                   <a href="https://www.linkedin.com/in/muhammednihalpa477" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] whitespace-nowrap text-white/60 hover:bg-white/5 hover:text-white transition-colors">
                     <Linkedin size={15} className="text-[#0a66c2]" /> linkedin.yml
                   </a>
                </div>
             </div>

             {/* Main Editor Area */}
             <div className="flex-1 flex flex-col bg-[#0d1117] relative w-full overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b border-white/5 bg-[#010409] overflow-x-auto hide-scrollbar">
                   <div className="px-4 py-2 border-r border-white/5 flex items-center gap-2 text-[13px] text-white bg-[#0d1117] border-t-2 border-t-[#3178c6] whitespace-nowrap">
                     <FileCode2 size={14} className="text-[#3178c6]" /> contact.ts
                   </div>
                </div>

                {/* Editor Content */}
                <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                   <form onSubmit={onSubmit} className="max-w-2xl text-[13px] sm:text-[14px] lg:text-[15px] leading-loose">
                      <div className="flex mb-4">
                         <span className="text-white/20 select-none mr-3 sm:mr-4 text-right w-4 sm:w-6 shrink-0">1</span>
                         <div className="text-white/40 italic">{"/**"}</div>
                      </div>
                      <div className="flex mb-4">
                         <span className="text-white/20 select-none mr-3 sm:mr-4 text-right w-4 sm:w-6 shrink-0">2</span>
                         <div className="text-white/40 italic whitespace-normal">{" * Open to internships, collaborations, and interesting tech conversations."}</div>
                      </div>
                      <div className="flex mb-4">
                         <span className="text-white/20 select-none mr-3 sm:mr-4 text-right w-4 sm:w-6 shrink-0">3</span>
                         <div className="text-white/40 italic">{" */"}</div>
                      </div>
                      
                      <div className="flex mb-2">
                         <span className="text-white/20 select-none mr-3 sm:mr-4 text-right w-4 sm:w-6 shrink-0">4</span>
                         <div className="flex-1 whitespace-nowrap overflow-x-auto hide-scrollbar">
                            <span className="text-[#ff7b72]">import</span> {"{ "} <span className="text-[#d2a8ff]">sendEmail</span> {" }"} <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'@/services/api'</span>;
                         </div>
                      </div>

                      <div className="flex mb-6">
                         <span className="text-white/20 select-none mr-3 sm:mr-4 text-right w-4 sm:w-6 shrink-0">5</span>
                      </div>

                      <div className="flex mb-2">
                         <span className="text-white/20 select-none mr-3 sm:mr-4 text-right w-4 sm:w-6 shrink-0">6</span>
                         <div>
                            <span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">visitor</span> <span className="text-[#ff7b72]">=</span> {"{"}
                         </div>
                      </div>

                      {/* Name Input */}
                      <div className="flex mb-2 group">
                         <span className="text-white/20 select-none mr-3 sm:mr-4 text-right w-4 sm:w-6 shrink-0 group-focus-within:text-white/60">7</span>
                         <div className="flex w-full items-center pl-4 sm:pl-8 flex-wrap">
                            <span className="text-[#79c0ff] mr-2">name:</span>
                            <span className="text-[#a5d6ff]">"</span>
                            <input 
                              required
                              value={form.name}
                              onChange={e => setForm({...form, name: e.target.value})}
                              className="bg-transparent text-[#a5d6ff] outline-none min-w-[150px] sm:min-w-[200px] w-auto border-b border-transparent focus:border-white/20 transition-colors"
                              placeholder="John Doe"
                            />
                            <span className="text-[#a5d6ff]">"</span><span className="text-white">,</span>
                         </div>
                      </div>

                      {/* Email Input */}
                      <div className="flex mb-2 group">
                         <span className="text-white/20 select-none mr-3 sm:mr-4 text-right w-4 sm:w-6 shrink-0 group-focus-within:text-white/60">8</span>
                         <div className="flex w-full items-center pl-4 sm:pl-8 flex-wrap">
                            <span className="text-[#79c0ff] mr-2">email:</span>
                            <span className="text-[#a5d6ff]">"</span>
                            <input 
                              required
                              type="email"
                              value={form.email}
                              onChange={e => setForm({...form, email: e.target.value})}
                              className="bg-transparent text-[#a5d6ff] outline-none min-w-[150px] sm:min-w-[250px] w-auto border-b border-transparent focus:border-white/20 transition-colors"
                              placeholder="john@example.com"
                            />
                            <span className="text-[#a5d6ff]">"</span><span className="text-white">,</span>
                         </div>
                      </div>

                      {/* Message Input */}
                      <div className="flex mb-2 group">
                         <span className="text-white/20 select-none mr-3 sm:mr-4 text-right w-4 sm:w-6 shrink-0 group-focus-within:text-white/60">9</span>
                         <div className="flex w-full items-start pl-4 sm:pl-8">
                            <span className="text-[#79c0ff] mr-2 mt-1">message:</span>
                            <span className="text-[#a5d6ff] mt-1">`</span>
                            <textarea 
                              required
                              value={form.message}
                              onChange={e => setForm({...form, message: e.target.value})}
                              className="bg-transparent text-[#a5d6ff] outline-none w-full max-w-sm border-b border-transparent focus:border-white/20 transition-colors resize-none h-24 mt-1"
                              placeholder="Hey Nihal, let's build something awesome..."
                            />
                            <span className="text-[#a5d6ff] self-end mb-1">`</span>
                         </div>
                      </div>

                      <div className="flex mb-6">
                         <span className="text-white/20 select-none mr-3 sm:mr-4 text-right w-4 sm:w-6 shrink-0">10</span>
                         <div className="text-white">{"};"}</div>
                      </div>

                      <div className="flex mb-6">
                         <span className="text-white/20 select-none mr-3 sm:mr-4 text-right w-4 sm:w-6 shrink-0">11</span>
                      </div>

                      {/* Submit Button disguised as function call */}
                      <div className="flex mb-2">
                         <span className="text-white/20 select-none mr-3 sm:mr-4 text-right w-4 sm:w-6 shrink-0">12</span>
                         <div className="flex items-center flex-wrap">
                            <span className="text-[#ff7b72]">await</span>&nbsp;
                            <span className="text-[#d2a8ff]">sendEmail</span>
                            <span className="text-white">(</span>
                            <span className="text-[#79c0ff]">visitor</span>
                            <span className="text-white">);</span>
                         </div>
                      </div>

                      <div className="flex mt-8 pl-8 sm:pl-10">
                         <button
                           type="submit"
                           disabled={loading}
                           className="group flex items-center gap-2 bg-[#238636] hover:bg-[#2ea043] text-white px-5 py-2.5 rounded-md font-sans text-sm font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                         >
                           {loading ? (
                             <>
                               <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                               Executing Script...
                             </>
                           ) : (
                             <>
                               <Play size={16} className="fill-white/80 group-hover:fill-white" />
                               Run Script
                             </>
                           )}
                         </button>
                      </div>
                   </form>
                </div>
                
                {/* Status Bar */}
                <div className="h-6 sm:h-7 bg-[#3178c6] flex items-center px-4 justify-between text-[10px] sm:text-[11px] text-white font-sans shrink-0">
                   <div className="flex items-center gap-3 sm:gap-4">
                      <span className="flex items-center gap-1.5"><Terminal size={13}/> {loading ? "Running script..." : "Ready"}</span>
                      {loading && <span className="flex items-center gap-1.5 animate-pulse"><CheckCircle2 size={13}/> Sending</span>}
                   </div>
                   <div className="flex items-center gap-3 sm:gap-4">
                      <span className="hidden sm:inline">UTF-8</span>
                      <span>TypeScript React</span>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
