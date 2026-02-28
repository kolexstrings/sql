"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "4px solid #c8a96e" }} className="bg-[#1a2744] text-white font-['Cormorant_Garamond',Georgia,serif]">

      {/* ── MAIN FOOTER BODY ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 — Brand */}
          <div className="space-y-5 lg:col-span-1">
            <img
              src="/logo.png"
              alt="SQL Events Nigeria"
              className="h-14 w-auto"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = "none";
                const sib = (e.currentTarget as HTMLElement).nextElementSibling as HTMLElement;
                if (sib) sib.style.display = "block";
              }}
            />
            <p className="hidden text-xl font-light tracking-widest uppercase text-white">
              SQL Events
            </p>
            <p className="font-sans text-sm text-gray-400 leading-relaxed">
              Passion, Innovation and Technology — driving every event we manage across Nigeria and Africa.
            </p>

            {/* Social Icons — Facebook, Instagram, LinkedIn only */}
            <div className="flex gap-4 pt-2">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.012 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.773 2.249 17.76.228 14.124.061 13.057.012 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="space-y-5">
            <h3 className="text-xs uppercase tracking-[0.35em] text-gray-500 font-sans">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              {[
                { label: "About Us",         href: "/about-us" },
                { label: "Our Services",     href: "/services" },
                { label: "Event Software",   href: "/event-software" },
                { label: "Lanyards Supply",  href: "/lanyards" },
                { label: "Our Clients",      href: "/clients" },
                { label: "Gallery",          href: "/gallery" },
                { label: "Contact Us",       href: "/contact" },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="font-sans text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Services */}
          <div className="space-y-5">
            <h3 className="text-xs uppercase tracking-[0.35em] text-gray-500 font-sans">Our Services</h3>
            <nav className="flex flex-col space-y-3">
              {[
                { label: "Corporate Events",          href: "/corporate-events" },
                { label: "Conference Registration",   href: "/conference-registration" },
                { label: "Abstract Management",       href: "/abstract-management" },
                { label: "Online Exhibition",         href: "/online-exhibition" },
                { label: "Virtual Event Platforms",   href: "/virtual-events" },
                { label: "Membership Management",     href: "/membership-management" },
              ].map((l) => (
                <Link key={l.label} href={l.href} className="font-sans text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4 — Contact */}
          <div className="space-y-5">
            <h3 className="text-xs uppercase tracking-[0.35em] text-gray-500 font-sans">Contact Us</h3>
            <div className="space-y-5 font-sans text-sm text-gray-400">

              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="leading-relaxed">
                  22 Almond Court<br />
                  VON Garden City Estate<br />
                  Airport Road, Abuja<br />
                  Nigeria
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className="space-y-1">
                  <a href="tel:+2348050501927" className="block hover:text-white transition-colors">+234 80 5050 1927</a>
                  <a href="tel:+2347038302791" className="block hover:text-white transition-colors">+234 70 3830 2791</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 flex-shrink-0 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:info@sqlevents.ng" className="hover:text-white transition-colors">
                  info@sqlevents.ng
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-gray-800 bg-[#111c35]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-gray-500">
            © 2026 SQL Events Nigeria. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((l) => (
              <a key={l} href="#" className="font-sans text-xs text-gray-500 hover:text-white transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}