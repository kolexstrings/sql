"use client";

import { useState } from "react";
import Link from "next/link";

interface HeaderProps {
  /**
   * Background style variant
   * @default "light" - for regular pages (about-us, services)
   * @option "dark" - for home page with dark background
   */
  variant?: "light" | "dark";
  /**
   * Whether to show the logo text fallback
   * @default true
   */
  showLogoText?: boolean;
}

export default function Header({
  variant = "light",
  showLogoText = true
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDark = variant === "dark";

  return (
    <>
      {/* Header Section */}
      <header className={`relative z-10 px-16 py-2 md:py-2 flex justify-between items-center ${isDark ? 'bg-white/40' : 'bg-white/40'} backdrop-blur-sm`}>
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
        {showLogoText && (
          <div
            className={`hidden text-xl font-semibold tracking-wide uppercase font-baskervville ml-8 md:ml-24`}
            style={{ color: isDark ? "var(--brand-primary)" : "var(--brand-primary)" }}
          >
            SqlEvents
          </div>
        )}

        {/* Hamburger Menu Button - Always visible */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1 z-30 mr-8 md:mr-24"
          aria-label="Toggle navigation menu"
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              isDark
                ? isMobileMenuOpen ? "bg-white rotate-45 translate-y-2" : "bg-white"
                : isMobileMenuOpen ? "bg-gray-900 rotate-45 translate-y-2" : "bg-gray-900"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              isDark
                ? isMobileMenuOpen ? "bg-white opacity-0" : "bg-white"
                : isMobileMenuOpen ? "bg-gray-900 opacity-0" : "bg-gray-900"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              isDark
                ? isMobileMenuOpen ? "bg-white -rotate-45 -translate-y-2" : "bg-white"
                : isMobileMenuOpen ? "bg-gray-900 -rotate-45 -translate-y-2" : "bg-gray-900"
            }`}
          ></span>
        </button>
      </header>

      {/* Slide-in Navigation Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 ${isDark ? 'bg-black/95' : 'bg-black/95'} backdrop-blur-md border-l border-white/20 z-20 transition-transform duration-300 ${
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
              className={`w-6 h-0.5 transition-all duration-300 ${
                isDark
                  ? isMobileMenuOpen ? "bg-white rotate-45 translate-y-2" : "bg-white"
                  : isMobileMenuOpen ? "bg-white rotate-45 translate-y-2" : "bg-white"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isDark
                  ? isMobileMenuOpen ? "bg-white opacity-0" : "bg-white"
                  : isMobileMenuOpen ? "bg-white opacity-0" : "bg-white"
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                isDark
                  ? isMobileMenuOpen ? "bg-white -rotate-45 -translate-y-2" : "bg-white"
                  : isMobileMenuOpen ? "bg-white -rotate-45 -translate-y-2" : "bg-white"
              }`}
            ></span>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full gap-6 px-8 font-baskervville">
          <Link
            href="/about-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base uppercase tracking-[0.2em] transition-colors font-baskervville ${
              isDark ? "hover:text-white/70" : "hover:text-white/70"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base uppercase tracking-[0.2em] transition-colors font-baskervville ${
              isDark ? "hover:text-white/70" : "hover:text-white/70"
            }`}
          >
            Our Services
          </Link>
          <a
            href="#event-software"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base uppercase tracking-[0.2em] transition-colors font-baskervville ${
              isDark ? "hover:text-white/70" : "hover:text-white/70"
            }`}
          >
            Event Software
          </a>
          <a
            href="#event-rentals"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base uppercase tracking-[0.2em] transition-colors font-baskervville ${
              isDark ? "hover:text-white/70" : "hover:text-white/70"
            }`}
          >
            Event Rentals
          </a>
          <a
            href="#lanyards-supply"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base uppercase tracking-[0.2em] transition-colors font-baskervville ${
              isDark ? "hover:text-white/70" : "hover:text-white/70"
            }`}
          >
            Lanyards Supply
          </a>
          <a
            href="#past-events-clients"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base uppercase tracking-[0.2em] transition-colors font-baskervville ${
              isDark ? "hover:text-white/70" : "hover:text-white/70"
            }`}
          >
            Past Events Clients
          </a>
          <a
            href="#gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base uppercase tracking-[0.2em] transition-colors font-baskervville ${
              isDark ? "hover:text-white/70" : "hover:text-white/70"
            }`}
          >
            Gallery
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className={`border px-8 py-4 text-base uppercase tracking-[0.25em] transition-colors mt-6 font-baskervville ${
              isDark
                ? "border-white/40 hover:bg-white hover:text-black"
                : "border-white/40 hover:bg-white hover:text-black"
            }`}
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
    </>
  );
}
