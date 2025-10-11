"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1600&q=80",
    alt: "Luxury hotel suite overlooking garden",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    alt: "Lush garden with mountain backdrop",
  },
  {
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80",
    alt: "Fine dining setup with wine glasses",
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

      <header className="relative z-10 px-8 py-6 flex justify-between items-center">
        <div className="text-xl font-semibold tracking-wide uppercase">The Vineyard Hotel</div>
        <nav className="hidden md:flex gap-6 text-sm uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-white/70 transition-colors">
            Sleep
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            Eat
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            Play
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            Meet
          </a>
        </nav>
        <button className="hidden md:inline-flex border border-white/40 px-6 py-3 text-sm uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-colors">
          Book Now
        </button>
      </header>

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center md:items-start md:text-left md:px-20">
        <p className="text-sm uppercase tracking-[0.5em] text-white/70 mb-6">
          The Vineyard Hotel, Cape Town
        </p>
        <h1 className="max-w-3xl text-4xl font-light uppercase tracking-[0.15em] sm:text-5xl md:text-6xl">
          Reawaken your sense of wonder
        </h1>
        <div className="mt-10 flex flex-col items-center gap-4 md:flex-row">
          <button className="border border-white/60 px-8 py-4 text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-colors">
            Explore Rooms
          </button>
          <button className="border border-white/0 bg-white/20 px-8 py-4 text-xs uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-colors">
            View Offers
          </button>
        </div>
      </main>

      <footer className="absolute bottom-10 left-0 right-0 z-10 flex flex-col items-center gap-3 text-center text-xs uppercase tracking-[0.4em] text-white/80 md:items-start md:text-left md:px-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-12 bg-white/60" aria-hidden />
          <span>Unplug, reconnect, and rejuvenate</span>
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
