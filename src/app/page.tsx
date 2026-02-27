"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import TaglineTab from "../components/TaglineTab";

const slides = [
  {
    src: "/slider/photo1.jpeg",
    alt: "Executive meeting environment with premium presentation AV",
  },
  {
    src: "/slider/photo2.jpg",
    alt: "Corporate gala dinner venue styled by SQL Events",
  },
  {
    src: "/slider/photo3.jpg",
    alt: "Award ceremony stage with dramatic lighting",
  },
  {
    src: "/slider/photo4.jpg",
    alt: "Modern training seminar with interactive displays",
  },
  {
    src: "/slider/photo5.jpg",
    alt: "Upscale networking reception produced by SQL Events",
  },
  {
    src: "/slider/photo6.jpg",
    alt: "Immersive conference breakout experience",
  },
  {
    src: "/slider/photo7.jpeg",
    alt: "High-energy corporate showcase with LED visuals",
  },
  {
    src: "/slider/photo8.jpeg",
    alt: "Executive roundtable session with custom branding",
  },
  {
    src: "/slider/photo9.jpeg",
    alt: "Large-scale plenary with dramatic lighting effects",
  },
];

const changeInterval = 6000;

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isEventSoftwareExpanded, setIsEventSoftwareExpanded] = useState(false);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesExpanded(false);
    setIsEventSoftwareExpanded(false);
  };

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
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              activeIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative h-full w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/65"
          aria-hidden
        />
      </div>

      <header className="relative z-10 px-16 py-2 md:py-2 flex justify-between items-center bg-white/40 backdrop-blur-sm">
        <img
          src="/logo.png"
          alt="SqlEvents Logo"
          className="h-24 w-auto ml-8 md:ml-24"
          onError={(e) => {
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
        <div className="absolute top-6 right-8">
          <button
            onClick={closeMenu}
            className="flex items-center justify-center w-8 h-8 cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col items-start justify-center h-full gap-6 px-8 font-baskervville w-full">

          {/* About Us */}
          <Link
            href="/about-us"
            onClick={closeMenu}
            className="flex w-full items-center justify-between text-base uppercase tracking-[0.2em] hover:text-white/70 transition-colors font-baskervville text-left cursor-pointer"
          >
            <span>About Us</span>
          </Link>

          {/* Our Services dropdown */}
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
                href="/corporate-event-management"
                onClick={closeMenu}
                className="text-left text-white/80 transition-colors hover:text-white w-full cursor-pointer"
              >
                Corporate Events & Conference Management
              </Link>
              <Link
                href="/conference-registration"
                onClick={closeMenu}
                className="text-left text-white/80 transition-colors hover:text-white w-full cursor-pointer"
              >
                Conference Registration Management
              </Link>
            </div>
          </div>

          {/* Event Software dropdown - FIXED ROUTING */}
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
                { 
                  label: "Online & Onsite Registration", 
                  href: "/online-onsite-registration" // FIXED: Changed from services#online-onsite to proper path
                },
                {
                  label: "Online Abstract Management",
                  href: "/online-abstract-management", // FIXED: Changed from /services/online-abstract-management
                },
                {
                  label: "Online Exhibition",
                  href: "/online-exhibition", // FIXED: Changed from /services/online-exhibition
                },
                // {
                //   label: "Delegate Scanning",
                //   href: "/delegate-scanning", // FIXED: Changed from /services/delegate-scanning
                // },
                {
                  label: "Virtual Event Platforms",
                  href: "/virtual-event-platforms", // FIXED: Changed from /services/virtual-event-platforms
                },
                {
                  label: "Membership Management",
                  href: "/membership-management", // FIXED: Changed from /services/membership-management
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-left text-white/80 transition-colors hover:text-white w-full cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Remaining nav links — now using proper page routes */}
          {[
            { label: "Event Mobile App", href: "/event-mobile-app" },
            // { label: "Event Rentals", href: "/event-rentals" },
            { label: "Lanyards Supply", href: "/lanyards-supply" },
            { label: "Past Events Clients", href: "/past-events-clients" },
            { label: "Gallery", href: "/gallery" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="flex w-full items-center justify-between text-base uppercase tracking-[0.2em] hover:text-white/70 transition-colors font-baskervville text-left cursor-pointer"
            >
              <span>{item.label}</span>
            </Link>
          ))}

          {/* Contact Us — now a proper Link */}
          <Link
            href="/contact-us"
            onClick={closeMenu}
            className="flex w-full items-center justify-between border border-white/40 px-8 py-4 text-base uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-colors mt-6 font-baskervville text-left cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>

      {/* Overlay when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10 cursor-pointer"
          onClick={closeMenu}
        />
      )}

      <main className="relative z-10 flex flex-col items-center justify-center px-6 text-center md:px-20 pt-24 md:pt-32 pb-16 md:pb-20 min-h-[calc(100vh-200px)] font-baskervville">
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl px-10 py-12 space-y-6 text-white text-center">
          <h1
            className="text-3xl font-semibold uppercase tracking-[0.15em] sm:text-4xl md:text-5xl drop-shadow-[0_6px_20px_rgba(0,0,0,0.65)]"
            style={{ fontFamily: "var(--font-baskervville)" }}
          >
            Creating Unforgettable Experiences
          </h1>
          <p
            className="text-base md:text-lg font-medium tracking-wide text-white/90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]"
            style={{ fontFamily: "var(--font-baskervville)" }}
          >
            Marshalling the best in knowledge, human capital and technology to
            bring your vision to life.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4">
            <Link
              href="/services"
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
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "var(--brand-primary)";
              }}
            >
              Our Services
            </Link>
            <Link
              href="/gallery"
              className="border px-6 py-3 text-xs uppercase tracking-[0.4em] transition-colors font-baskervville cursor-pointer"
              style={{
                borderColor: "var(--brand-primary)",
                backgroundColor: "var(--brand-primary)",
                color: "var(--text-primary)",
                fontFamily: "var(--font-baskervville)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-6 md:bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-2 text-center text-xs uppercase tracking-[0.4em] text-white/80 md:items-start md:text-left md:px-20">
        <TaglineTab />
      </footer>
    </div>
  );
}