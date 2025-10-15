"use client";

import { useEffect, useState } from "react";
import TaglineTab from "../components/TaglineTab";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    alt: "Professional corporate conference with engaged business audience and keynote speaker",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1600&q=80",
    alt: "Executive business meeting with professional presentation setup and team collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    alt: "Sophisticated corporate gala dinner with premium table settings and elegant ambiance",
  },
  {
    src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1600&q=80",
    alt: "Elegant corporate award ceremony with red carpet entrance and professional stage lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1464047736614-af63643285bf?auto=format&fit=crop&w=1600&q=80",
    alt: "Modern corporate training seminar with professional AV equipment and interactive displays",
  },
  {
    src: "https://images.unsplash.com/photo-1553028826-f4804151e04b?auto=format&fit=crop&w=1600&q=80",
    alt: "Upscale corporate networking event with sophisticated cocktail setup and business professionals",
  },
];

const changeInterval = 6000;

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <div className="absolute inset-0 bg-black/60" aria-hidden />
      </div>

      <header className="relative z-10 px-12 py-2 md:py-2 flex justify-between items-center bg-white/40 backdrop-blur-sm">
        <img
          src="/logo.png"
          alt="SqlEvents Logo"
          className="h-20 w-auto ml-8 md:ml-24"
          onError={(e) => {
            // Fallback to text logo if image fails to load
            const target = e.currentTarget as HTMLElement;
            const nextSibling = target.nextElementSibling as HTMLElement;
            if (nextSibling) {
              target.style.display = "none";
              nextSibling.style.display = "block";
            }
          }}
        />
        <div
          className="hidden text-xl font-semibold tracking-wide uppercase font-baskervville ml-8 md:ml-24"
          style={{ color: "var(--brand-primary)" }}
        >
          SqlEvents
        </div>

        {/* Hamburger Menu Button - Always visible */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1 z-30 mr-8 md:mr-24"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </header>

      {/* Slide-in Navigation Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-md border-l border-white/20 z-20 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button positioned over the menu */}
        <div className="absolute top-6 right-8">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Close navigation menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full gap-6 px-8 font-baskervville">
          <a
            href="#about-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base uppercase tracking-[0.2em] hover:text-white/70 transition-colors font-baskervville"
          >
            About Us
          </a>
          <a
            href="#our-services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base uppercase tracking-[0.2em] hover:text-white/70 transition-colors font-baskervville"
          >
            Our Services
          </a>
          <a
            href="#event-software"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base uppercase tracking-[0.2em] hover:text-white/70 transition-colors font-baskervville"
          >
            Event Software
          </a>
          <a
            href="#event-rentals"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base uppercase tracking-[0.2em] hover:text-white/70 transition-colors font-baskervville"
          >
            Event Rentals
          </a>
          <a
            href="#lanyards-supply"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base uppercase tracking-[0.2em] hover:text-white/70 transition-colors font-baskervville"
          >
            Lanyards Supply
          </a>
          <a
            href="#past-events-clients"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base uppercase tracking-[0.2em] hover:text-white/70 transition-colors font-baskervville"
          >
            Past Events Clients
          </a>
          <a
            href="#gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base uppercase tracking-[0.2em] hover:text-white/70 transition-colors font-baskervville"
          >
            Gallery
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="border border-white/40 px-8 py-4 text-base uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-colors mt-6 font-baskervville"
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Overlay when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <main className="relative z-10 flex flex-col items-center justify-start px-6 text-center md:items-start md:text-left md:px-20 pt-24 md:pt-32 pb-16 md:pb-20 min-h-[calc(100vh-200px)] font-baskervville">
        <p
          className="text-sm uppercase tracking-[0.5em] mb-4 md:mb-6 font-baskervville"
          style={{ color: "var(--brand-primary)", fontFamily: "var(--font-baskervville)" }}
        >
          Premier Event Management
        </p>
        <h1 className="max-w-3xl text-3xl font-light uppercase tracking-[0.15em] sm:text-4xl md:text-5xl font-baskervville mb-4 md:mb-6" style={{ fontFamily: "var(--font-baskervville)" }}>
          Creating Unforgettable Experiences
        </h1>
        <p
          className="max-w-2xl text-base md:text-lg font-light tracking-wide md:text-left mb-6 md:mb-8 font-baskervville"
          style={{ color: "var(--text-secondary)", fontFamily: "var(--font-baskervville)" }}
        >
          Marshalling the best in knowledge, human capital and technology to
          bring your vision to life.
        </p>
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4 mb-8 md:mb-12">
          <button
            className="bg-white border px-6 py-3 text-xs uppercase tracking-[0.4em] transition-colors font-baskervville"
            style={{
              borderColor: "var(--brand-primary)",
              color: "var(--brand-primary)",
              fontFamily: "var(--font-baskervville)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--brand-primary)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--white)";
              e.currentTarget.style.color = "var(--brand-primary)";
            }}
          >
            Our Services
          </button>
          <button
            className="bg-brand-primary text-white border px-6 py-3 text-xs uppercase tracking-[0.4em] transition-colors font-baskervville"
            style={{
              borderColor: "var(--brand-primary)",
              color: "var(--text-primary)",
              fontFamily: "var(--font-baskervville)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--brand-primary)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--brand-primary)";
              e.currentTarget.style.color = "var(--text-primary)";
            }}
          >
            View Portfolio
          </button>
        </div>
      </main>

      <footer className="absolute bottom-6 md:bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-2 text-center text-xs uppercase tracking-[0.4em] text-white/80 md:items-start md:text-left md:px-20">
        {/* Navigation section positioned towards bottom of hero */}
        <TaglineTab />
        {/* <div className="flex items-center gap-3">
          <span className="h-px w-12 bg-white/60" aria-hidden />
          <span>Transforming Visions into Memorable Events</span>
        </div> */}
      </footer>
    </div>
  );
}
