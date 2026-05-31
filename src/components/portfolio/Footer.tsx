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
              className="h-10 w-10 rounded-full border-2 border-ink flex items-center justify-center text-ink hover:bg-ink hover:text-white hover:scale-110 transition-all duration-200 shadow-sm"
              aria-label={`Visit ${href}`}
            >
              <Icon size={18} strokeWidth={2.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
