import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Resume } from "@/components/portfolio/Resume";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Experiences } from "@/components/portfolio/Experiences";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammed Nihal P A — CSE Student | IoT & Software Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Muhammed Nihal P A — Computer Science Engineering student passionate about IoT, embedded systems, networking, and software development.",
      },
      { property: "og:title", content: "Muhammed Nihal P A — Developer Portfolio" },
      {
        property: "og:description",
        content: "IoT · Embedded Systems · Software · Networking — Projects & experience.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Resume />
        <Experiences />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
