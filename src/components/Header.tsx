"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

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

const NAV_ITEMS = {
  eventSoftware: [
    { label: "Online & Onsite", href: "/online-onsite-registration" },
    { label: "Online Abstract Management", href: "/online-abstract-management" },
    { label: "Online Exhibition", href: "/online-exhibition" },
    { label: "Virtual Event Platforms", href: "/virtual-event-platforms" },
    { label: "Membership Management", href: "/membership-management" },
  ],
};

export default function Header({
  variant = "light",
  showLogoText = true,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isEventSoftwareExpanded, setIsEventSoftwareExpanded] = useState(false);

  const isDark = variant === "dark";

  const closeAll = () => {
    setIsMobileMenuOpen(false);
    setIsServicesExpanded(false);
    setIsEventSoftwareExpanded(false);
  };

  // Hamburger icon: on dark-variant pages the header sits over a dark bg, so use white.
  // On light pages the header is over a light bg, so use dark.
  const hamburgerColor = isDark ? "text-white" : "text-gray-900";

  return (
    <>
      {/* ── Header bar ─────────────────────────────────────────── */}
      <header className="relative z-10 px-4 py-2 md:py-2 flex justify-between items-center bg-white/40 backdrop-blur-sm">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="SqlEvents Logo"
          className="h-12 w-auto ml-4 md:h-24 md:ml-24"
          onError={(e) => {
            const target = e.currentTarget as HTMLElement;
            const next = target.nextElementSibling as HTMLElement | null;
            if (next) {
              target.style.display = "none";
              next.style.display = "block";
            }
          }}
        />

        {/* Text fallback logo */}
        {showLogoText && (
          <div
            className="hidden text-xl font-semibold tracking-wide uppercase font-baskervville ml-4 md:ml-24"
            style={{ color: "var(--brand-primary)" }}
          >
            SqlEvents
          </div>
        )}

        {/* Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className={`flex items-center justify-center w-8 h-8 z-30 mr-4 md:mr-24 cursor-pointer ${hamburgerColor}`}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </header>

      {/* ── Slide-in nav panel ─────────────────────────────────── */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-md border-l border-white/20 z-20 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Close button inside panel */}
        <div className="absolute top-6 right-8">
          <button
            onClick={closeAll}
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
            onClick={closeAll}
            className="flex w-full items-center justify-between text-base uppercase tracking-[0.2em] text-white transition-colors hover:text-white/70 font-baskervville cursor-pointer"
          >
            <span>About Us</span>
          </Link>

          {/* Our Services */}
          <div className="w-full">
            <button
              type="button"
              onClick={() => setIsServicesExpanded((v) => !v)}
              className="flex w-full items-center justify-between text-base uppercase tracking-[0.2em] text-white transition-colors hover:text-white/70 font-baskervville cursor-pointer"
            >
              <span>Our Services</span>
              <ChevronDown
                className={`h-4 w-4 text-white transition-transform duration-200 ${
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
                onClick={closeAll}
                className="text-left text-white/80 transition-colors hover:text-white w-full cursor-pointer"
              >
                Corporate Events & Conference Management
              </Link>
              <Link
                href="/conference-registration"
                onClick={closeAll}
                className="text-left text-white/80 transition-colors hover:text-white w-full cursor-pointer"
              >
                Conference Registration Management
              </Link>
            </div>
          </div>

          {/* Event Software */}
          <div className="w-full">
            <button
              type="button"
              onClick={() => setIsEventSoftwareExpanded((v) => !v)}
              className="flex w-full items-center justify-between text-base uppercase tracking-[0.2em] text-white transition-colors hover:text-white/70 font-baskervville cursor-pointer"
            >
              <span>Event Software</span>
              <ChevronDown
                className={`h-4 w-4 text-white transition-transform duration-200 ${
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
              {NAV_ITEMS.eventSoftware.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeAll}
                  className="text-left text-white/80 transition-colors hover:text-white w-full cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Lanyards Supply */}
          <a
            href="/lanyards-supply"
            onClick={closeAll}
            className="flex w-full items-center justify-between text-base uppercase tracking-[0.2em] text-white transition-colors hover:text-white/70 font-baskervville cursor-pointer"
          >
            <span>Lanyards Supply</span>
          </a>

          {/* Past Events Clients */}
          <Link
            href="/clients"
            onClick={closeAll}
            className="flex w-full items-center justify-between text-base uppercase tracking-[0.2em] text-white transition-colors hover:text-white/70 font-baskervville cursor-pointer"
          >
            <span>Past Events Clients</span>
          </Link>

          {/* Gallery */}
          <a
            href="/gallery"
            onClick={closeAll}
            className="flex w-full items-center justify-between text-base uppercase tracking-[0.2em] text-white transition-colors hover:text-white/70 font-baskervville cursor-pointer"
          >
            <span>Gallery</span>
          </a>

          {/* Contact Us CTA */}
          <button
            onClick={closeAll}
            className="flex items-center gap-2 border border-white/40 px-8 py-4 text-base uppercase tracking-[0.25em] text-white transition-colors mt-6 font-baskervville w-full hover:bg-white hover:text-black cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>

        </div>
      </nav>

      {/* ── Overlay ────────────────────────────────────────────── */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={closeAll}
        />
      )}
    </>
  );
}