import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} · MUHAMMED NIHAL
        </p>
        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "https://github.com/Nihalbaabi" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/muhammednihalpa477" },
            { Icon: Mail, href: "mailto:nihalspixel@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-full border border-ink flex items-center justify-center text-ink hover:bg-coral hover:border-coral hover:text-white transition-all"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
