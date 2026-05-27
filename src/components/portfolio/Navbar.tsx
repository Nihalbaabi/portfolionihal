import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#resume", label: "Resume" },
  { href: "#achievements", label: "Achievements" },
];

export function Navbar() {
  const [active, setActive] = useState("#about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = links.map((l) => document.querySelector(l.href));
      const y = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i] as HTMLElement | null;
        if (el && el.offsetTop <= y) {
          setActive(links[i].href);
          return;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <nav className="flex items-center justify-center w-full">
          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={cn(
                      "text-[15px] font-medium transition-colors hover:text-ink",
                      isActive ? "text-ink font-bold" : "text-ink/70"
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#contact"
                className="text-[15px] font-medium text-ink/70 hover:text-ink transition-colors"
              >
                Contacts
              </a>
            </li>
          </ul>
          <button
            className="lg:hidden text-ink p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {open && (
          <div className="lg:hidden pb-6 bg-white/95 backdrop-blur-md px-6 rounded-b-2xl shadow-lg animate-fade-up absolute w-full left-0 top-[100%]">
            <ul className="flex flex-col gap-4 pt-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-[16px] font-medium text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[16px] font-medium text-ink"
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
