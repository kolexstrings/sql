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

export default function Header({
  variant = "light",
  showLogoText = true,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isEventSoftwareExpanded, setIsEventSoftwareExpanded] = useState(false);

  const isDark = variant === "dark";

  return (
    <>
      {/* Header Section */}
      <header
        className={`relative z-10 px-16 py-2 md:py-2 flex justify-between items-center ${isDark ? "bg-white/40" : "bg-white/40"} backdrop-blur-sm`}
      >
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
            style={{
              color: isDark ? "var(--brand-primary)" : "var(--brand-primary)",
            }}
          >
            SqlEvents
          </div>
        )}

        {/* Hamburger Menu Button - Always visible */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-8 h-8 z-30 mr-8 md:mr-24 cursor-pointer"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
        >
          {isMobileMenuOpen ? (
            <X
              className={`h-6 w-6 ${isDark ? "text-white" : "text-gray-900"}`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${isDark ? "text-white" : "text-gray-900"}`}
            />
          )}
        </button>
      </header>

      {/* Slide-in Navigation Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 ${isDark ? "bg-black/95" : "bg-black/95"} backdrop-blur-md border-l border-white/20 z-20 transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button positioned over the menu */}
        <div className="absolute top-6 right-8">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center w-8 h-8 cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col items-start justify-center h-full gap-6 px-8 font-baskervville w-full">
          <Link
            href="/about-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex w-full items-center justify-between text-base uppercase tracking-[0.2em] transition-colors font-baskervville text-left cursor-pointer ${
              isDark ? "hover:text-white/70" : "hover:text-white/70"
            }`}
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
              className={`flex w-full items-center justify-between text-base uppercase tracking-[0.2em] transition-colors font-baskervville text-left cursor-pointer ${
                isDark ? "hover:text-white/70" : "hover:text-white/70"
              }`}
            >
              <span>Our Services</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isServicesExpanded ? "rotate-180" : "rotate-0"
                } ${isDark ? "text-white" : "text-white"}`}
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
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsServicesExpanded(false);
                }}
                className="text-left text-white/80 transition-colors hover:text-white w-full cursor-pointer"
              >
                Corporate Events & Conference Management
              </Link>
            </div>
          </div>
          <div className="w-full">
            <button
              type="button"
              onClick={() => setIsEventSoftwareExpanded((prev) => !prev)}
              className={`flex w-full items-center justify-between text-base uppercase tracking-[0.2em] transition-colors font-baskervville text-left cursor-pointer ${
                isDark ? "hover:text-white/70" : "hover:text-white/70"
              }`}
            >
              <span>Event Software</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isEventSoftwareExpanded ? "rotate-180" : "rotate-0"
                } ${isDark ? "text-white" : "text-white"}`}
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
          <a
            href="#event-rentals"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex w-full items-center justify-between text-base uppercase tracking-[0.2em] transition-colors font-baskervville text-left cursor-pointer ${
              isDark ? "hover:text-white/70" : "hover:text-white/70"
            }`}
          >
            <span>Event Rentals</span>
            <ChevronDown className="h-3.5 w-3.5 opacity-0" aria-hidden />
          </a>
          <a
            href="#lanyards-supply"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex w-full items-center justify-between text-base uppercase tracking-[0.2em] transition-colors font-baskervville text-left cursor-pointer ${
              isDark ? "hover:text-white/70" : "hover:text-white/70"
            }`}
          >
            <span>Lanyards Supply</span>
            <ChevronDown className="h-3.5 w-3.5 opacity-0" aria-hidden />
          </a>
          <Link
            href="/clients"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex w-full items-center justify-between text-base uppercase tracking-[0.2em] transition-colors font-baskervville text-left cursor-pointer ${
              isDark ? "hover:text-white/70" : "hover:text-white/70"
            }`}
          >
            <span>Past Events Clients</span>
            <ChevronDown className="h-3.5 w-3.5 opacity-0" aria-hidden />
          </Link>
          <a
            href="#gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex w-full items-center justify-between text-base uppercase tracking-[0.2em] transition-colors font-baskervville text-left cursor-pointer ${
              isDark ? "hover:text-white/70" : "hover:text-white/70"
            }`}
          >
            <span>Gallery</span>
            <ChevronDown className="h-3.5 w-3.5 opacity-0" aria-hidden />
          </a>

          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsServicesExpanded(false);
            }}
            className={`border px-8 py-4 text-base uppercase tracking-[0.25em] transition-colors mt-6 font-baskervville w-full text-left cursor-pointer ${
              isDark
                ? "border-white/40 hover:bg-white hover:text-black"
                : "border-white/40 hover:bg-white hover:text-black"
            }`}
          >
            <span>Contact Us</span>
            <ArrowUpRight className="h-4 w-4" />
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
