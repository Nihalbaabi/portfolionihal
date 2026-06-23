import { createFileRoute } from "@tanstack/react-router";
import React, { useEffect, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Preloader } from "@/components/portfolio/Preloader";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
const Projects = React.lazy(() => import("@/components/portfolio/Projects").then(module => ({ default: module.Projects })));
const Certifications = React.lazy(() => import("@/components/portfolio/Certifications").then(module => ({ default: module.Certifications })));
const Achievements = React.lazy(() => import("@/components/portfolio/Achievements").then(module => ({ default: module.Achievements })));
const Resume = React.lazy(() => import("@/components/portfolio/Resume").then(module => ({ default: module.Resume })));
const Contact = React.lazy(() => import("@/components/portfolio/Contact").then(module => ({ default: module.Contact })));
import { Footer } from "@/components/portfolio/Footer";
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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className="relative min-h-screen text-foreground selection:bg-[#ff2a2a] selection:text-white">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <Projects />
          <Certifications />
          <Achievements />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
