"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80",
    alt: "Corporate conference event with audience",
  },
  {
    src: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&w=1600&q=80",
    alt: "Elegant gala dinner setup",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80",
    alt: "Professional speaker at business conference",
  },
];

const changeInterval = 6000;

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, changeInterval);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out`} 
            style={{
              opacity: activeIndex === index ? 1 : 0,
            }}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.src})` }}
              role="img"
              aria-label={slide.alt}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40" aria-hidden />
      </div>

      <header className="relative z-10 px-8 py-4 md:py-6 flex justify-between items-center">
        <div className="text-xl font-semibold tracking-wide uppercase font-baskervville">SqlEvents</div>
        <button className="hidden md:inline-flex border border-white/40 px-6 py-3 text-sm uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-colors">
          Contact Us
        </button>
      </header>

      <main className="relative z-10 flex flex-col items-center justify-center px-6 text-center md:items-start md:text-left md:px-20 py-8 md:py-12">
        <p className="text-sm uppercase tracking-[0.5em] text-white/70 mb-4 md:mb-6">
          Premier Event Management
        </p>
        <h1 className="max-w-3xl text-3xl font-light uppercase tracking-[0.15em] sm:text-4xl md:text-5xl font-baskervville mb-4 md:mb-6">
          Creating Unforgettable Experiences
        </h1>
        <p className="max-w-2xl text-white/80 text-base md:text-lg font-light tracking-wide md:text-left mb-6 md:mb-8">
          Marshalling the best in knowledge, human capital and technology to bring your vision to life.
        </p>
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4">
          <button className="border border-white/60 px-6 py-3 text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-colors">
            Our Services
          </button>
          <button className="border border-white/0 bg-white/20 px-6 py-3 text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-colors">
            View Portfolio
          </button>
        </div>
      </main>

      <nav className="relative z-10 px-8 py-8 md:py-12 flex justify-center items-center">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-center">
          <a href="#services" className="text-lg uppercase tracking-[0.2em] hover:text-white/70 transition-colors">
            Services
          </a>
          <a href="#events" className="text-lg uppercase tracking-[0.2em] hover:text-white/70 transition-colors">
            Events
          </a>
          <a href="#gallery" className="text-lg uppercase tracking-[0.2em] hover:text-white/70 transition-colors">
            Gallery
          </a>
          <a href="#about" className="text-lg uppercase tracking-[0.2em] hover:text-white/70 transition-colors">
            About Us
          </a>
        </div>
      </nav>

      <footer className="absolute bottom-6 md:bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-2 text-center text-xs uppercase tracking-[0.4em] text-white/80 md:items-start md:text-left md:px-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-12 bg-white/60" aria-hidden />
          <span>Transforming Visions into Memorable Events</span>
        </div>
        <div className="flex gap-4">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full border border-white/60 transition-colors ${
                activeIndex === index ? "bg-white" : "bg-transparent"
              }`}
              aria-hidden
            />
          ))}
        </div>
      </footer>
    </div>
  );
}
