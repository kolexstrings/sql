"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
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
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isEventSoftwareExpanded, setIsEventSoftwareExpanded] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, changeInterval);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black/50 text-white">
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

      <header className="relative z-10 px-16 py-2 md:py-2 flex justify-between items-center bg-white/40 backdrop-blur-sm">
        <img
          src="/logo.png"
          alt="SqlEvents Logo"
          className="h-24 w-auto ml-8 md:ml-24"
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
          className="flex items-center justify-center w-8 h-8 z-30 mr-8 md:mr-24 cursor-pointer"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
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
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsServicesExpanded(false);
            }}
            className="flex items-center justify-center w-8 h-8 cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col items-start justify-center h-full gap-6 px-8 font-baskervville w-full">
          <Link
            href="/about-us"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsServicesExpanded(false);
            }}
            className="flex w-full items-center justify-between text-base uppercase tracking-[0.2em] hover:text-white/70 transition-colors font-baskervville text-left cursor-pointer"
          >
            <span>About Us</span>
            <span className="text-xs opacity-0 select-none" aria-hidden>
              ▼
            </span>
          </Link>
          <div className="w-full">
            <button
              type="button"
              onClick={() => setIsServicesExpanded((prev) => !prev)}
              className="flex w-full items-center justify-between text-base uppercase tracking-[0.2em] hover:text-white/70 transition-colors font-baskervville text-left cursor-pointer"
            >
              <span>Our Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isServicesExpanded ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              aria-hidden={!isServicesExpanded}
              className={`flex flex-col gap-3 pl-4 text-[0.95rem] tracking-[0.15em] overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                isServicesExpanded
                  ? "mt-3 max-h-96 opacity-100 pointer-events-auto"
                  : "max-h-0 opacity-0 pointer-events-none mt-0"
              }`}
            >
              <Link
                href="/services#corporate-events"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsServicesExpanded(false);
                }}
                className="text-left text-white/80 transition-colors hover:text-white w-full cursor-pointer"
              >
                Corporate Event & Conference Management
              </Link>
              <Link
                href="/services#conference-registration"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsServicesExpanded(false);
                }}
                className="text-left text-white/80 transition-colors hover:text-white w-full cursor-pointer"
              >
                Conference Registration
              </Link>
            </div>
          </div>
          <div className="w-full">
            <button
              type="button"
              onClick={() => setIsEventSoftwareExpanded((prev) => !prev)}
              className="flex w-full items-center justify-between text-base uppercase tracking-[0.2em] hover:text-white/70 transition-colors font-baskervville text-left cursor-pointer"
            >
              <span>Event Software</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isEventSoftwareExpanded ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div
              aria-hidden={!isEventSoftwareExpanded}
              className={`flex flex-col gap-3 pl-4 text-[0.95rem] tracking-[0.15em] overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                isEventSoftwareExpanded
                  ? "mt-3 max-h-96 opacity-100 pointer-events-auto"
                  : "max-h-0 opacity-0 pointer-events-none mt-0"
              }`}
            >
              {[
                { label: "Online & Onsite", href: "/services#online-onsite" },
                {
                  label: "Online Abstract Management",
                  href: "/services#online-abstract-management",
                },
                {
                  label: "Online Exhibition",
                  href: "/services#online-exhibition",
                },
                {
                  label: "Delegate Scanning",
                  href: "/services#delegate-scanning",
                },
                {
                  label: "Virtual Event Platforms",
                  href: "/services#virtual-event-platforms",
                },
                {
                  label: "Membership Management",
                  href: "/services#membership-management",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsServicesExpanded(false);
                    setIsEventSoftwareExpanded(false);
                  }}
                  className="text-left text-white/80 transition-colors hover:text-white w-full cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {[
            { label: "Event Mobile App", href: "#event-rentals" },
            { label: "Event Rentals", href: "#event-rentals" },
            { label: "Lanyards Supply", href: "#lanyards-supply" },
            { label: "Past Events Clients", href: "#past-events-clients" },
            { label: "Gallery", href: "#gallery" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsServicesExpanded(false);
                setIsEventSoftwareExpanded(false);
              }}
              className="flex w-full items-center justify-between text-base uppercase tracking-[0.2em] hover:text-white/70 transition-colors font-baskervville text-left cursor-pointer"
            >
              <span>{item.label}</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-0" aria-hidden />
            </a>
          ))}

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsServicesExpanded(false);
              setIsEventSoftwareExpanded(false);
            }}
            className="flex w-full items-center justify-between border border-white/40 px-8 py-4 text-base uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-colors mt-6 font-baskervville text-left cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {/* Overlay when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 cursor-pointer"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsServicesExpanded(false);
            setIsEventSoftwareExpanded(false);
          }}
        />
      )}

      <main className="relative z-10 flex flex-col items-center justify-start px-6 text-center md:items-start md:text-left md:px-20 pt-24 md:pt-32 pb-16 md:pb-20 min-h-[calc(100vh-200px)] font-baskervville">
        {/* <p
          className="text-sm uppercase tracking-[0.5em] mb-4 md:mb-6 font-baskervville font-medium"
          style={{
            color: "var(--brand-primary)",
            fontFamily: "var(--font-baskervville)",
          }}
        >
          Premier Event Management
        </p> */}
        <h1
          className="max-w-3xl text-3xl font-semibold uppercase tracking-[0.15em] sm:text-4xl md:text-5xl font-baskervville mb-4 md:mb-6"
          style={{ fontFamily: "var(--font-baskervville)" }}
        >
          Creating Unforgettable Experiences
        </h1>
        <p
          className="max-w-2xl text-base md:text-lg font-medium tracking-wide md:text-left mb-6 md:mb-8 font-baskervville"
          style={{
            color: "var(--text-secondary)",
            fontFamily: "var(--font-baskervville)",
          }}
        >
          Marshalling the best in knowledge, human capital and technology to
          bring your vision to life.
        </p>
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-4 mb-8 md:mb-12">
          <button
            type="button"
            className="bg-white border px-6 py-3 text-xs uppercase tracking-[0.4em] transition-colors font-baskervville cursor-pointer"
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
            className="bg-brand-primary text-white border px-6 py-3 text-xs uppercase tracking-[0.4em] transition-colors font-baskervville cursor-pointer"
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
            type="button"
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
          <span> Passion | Innovation | Technology</span>
        </div> */}
      </footer>
    </div>
  );
}
