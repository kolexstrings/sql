"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const services = [
  { label: "Corporate Events & Conference Management", href: "/corporate-event-management" },
  { label: "Conference Registration Management", href: "/conference-registration" },
  { label: "Exhibition Management", href: "/exhibition-management" },
  { label: "Online Abstract Submission & Review Management", href: "/online-abstract-management" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-['Cormorant_Garamond',Georgia,serif]">
      <Header />

      <main className="bg-white text-gray-900">

        {/* ── HERO ── */}
        <section className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-4 font-sans">What We Do</p>
            <h1
              className="text-4xl md:text-5xl font-light uppercase tracking-widest text-gray-900"
              style={{ letterSpacing: "0.18em" }}
            >
              Our Services
            </h1>
          </div>
        </section>

        {/* ── SERVICE LINKS ── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="border-t border-gray-200">
              {services.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between py-6 px-2 border-b border-gray-200 group hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-sans text-gray-300 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl md:text-2xl font-light text-gray-800 group-hover:text-gray-900 transition-colors tracking-wide">
                      {item.label}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-300 group-hover:text-gray-700 transition-colors duration-200 flex-shrink-0 ml-4" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-4 font-sans">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Not sure which service<br />
                <span className="italic">is right for you?</span>
              </h2>
            </div>
            <div className="space-y-4 font-sans">
              <p className="text-white/70 leading-relaxed text-[15px]">
                Get in touch and we&apos;ll help you find the perfect solution for your event.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="/contact-us"
                  className="bg-white text-gray-900 px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}