import portrait from "@/assets/portrait-nobg.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-orange-200 via-rose-300 to-purple-400 overflow-hidden z-0">
      {/* Background organic shape */}
      <svg
        className="absolute left-0 top-0 h-full w-full lg:w-[70%] z-[-1]"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H804C804 0 918.5 259 660.5 487.5C402.5 716 936.5 900 936.5 900H0V0Z"
          fill="white"
        />
      </svg>

      <div className="container mx-auto px-6 lg:px-10 h-screen grid lg:grid-cols-2 items-center pt-24 lg:pt-0">
        {/* LEFT: Text Content */}
        <div className="max-w-xl animate-fade-up z-10 pt-10 lg:pt-0 lg:pl-10">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-ink mb-6">
            Hello, my name <br />
            is Muhammed Nihal P A
          </h1>
          <p className="text-ink/80 text-[15px] mb-10 max-w-md leading-relaxed font-medium">
            Aspiring Software Engineer | MERN Stack & Flutter Developer | IoT Enthusiast | ACM Student Chapter Co-Lead | CSE Association Executive Member
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-8 py-2.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-[15px] font-semibold rounded-md hover:opacity-90 transition-opacity shadow-sm"
            >
              Projects
            </a>
            <a
              href="https://www.linkedin.com/in/muhammednihalpa477"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-2.5 bg-transparent border-[1.5px] border-ink text-ink text-[15px] font-semibold rounded-md hover:bg-ink hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT: Portrait Image */}
        <div className="relative h-full w-full flex items-end justify-center z-10">
          {/* Subtle glow behind the image to soften cut-out edges */}
          <img
            decoding="async"
            src={portrait}
            alt="Muhammed Nihal P A"
            className="max-h-[85vh] w-auto object-contain object-bottom animate-fade-up relative z-10"
            style={{
              animationDelay: "0.2s",
              filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.15)) drop-shadow(0 0 60px rgba(244, 63, 94, 0.4))"
            }}
          />
        </div>
      </div>
    </section>
  );
}
