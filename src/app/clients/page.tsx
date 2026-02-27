"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const testimonials = [
  {
    quote:
      "SqlEvents transformed our annual conference into an extraordinary experience. Their attention to detail, innovative approach, and seamless execution exceeded all our expectations. The event was flawless from start to finish.",
    name: "Sarah Johnson",
    role: "Event Director",
    company: "TechCorp International",
  },
  {
    quote:
      "Working with SqlEvents was a game-changer for our product launch event. They handled everything from venue selection to technical production with professionalism and creativity. Our attendees were blown away by the experience.",
    name: "Michael Chen",
    role: "Marketing Manager",
    company: "InnovateLab",
  },
  {
    quote:
      "The team at SqlEvents made our corporate retreat both productive and memorable. Their expertise in team-building activities and event coordination created the perfect balance of work and engagement for our executive team.",
    name: "Dr. Amanda Rodriguez",
    role: "HR Director",
    company: "Global Pharma Solutions",
  },
  {
    quote:
      "We've partnered with SqlEvents for three consecutive years for our industry summit. Their reliability, innovation, and commitment to excellence make them our go-to event management partner. Highly recommended!",
    name: "James Thompson",
    role: "Conference Chair",
    company: "National Industry Association",
  },
  {
    quote:
      "The virtual event SqlEvents produced for us during the pandemic was outstanding. They seamlessly adapted our in-person conference to a digital format while maintaining the same level of engagement and interaction.",
    name: "Prof. Elena Volkov",
    role: "Academic Conference Organizer",
    company: "International Research Institute",
  },
  {
    quote:
      "From concept to execution, SqlEvents delivered perfection. Their understanding of our brand and audience needs resulted in an event that not only met but exceeded our strategic objectives. A true partnership!",
    name: "Robert Kim",
    role: "Brand Director",
    company: "Luxury Lifestyle Group",
  },
];

const clientLogos = [
  "TechCorp International",
  "InnovateLab",
  "Global Pharma Solutions",
  "National Industry Association",
  "International Research Institute",
  "Luxury Lifestyle Group",
  "Enterprise Solutions Ltd",
  "Healthcare Innovations",
  "Federal Ministry of Finance",
  "Nigerian Bar Association",
  "Lagos State Government",
  "ECOWAS Secretariat",
];

export default function ClientsPage() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-white font-['Cormorant_Garamond',Georgia,serif]">
      <Header />

      <main className="bg-white text-gray-900">

        {/* ── MOSAIC HERO ── */}
        <section className="relative w-full overflow-hidden" style={{ height: "520px" }}>
          <div
            className="absolute inset-0 grid gap-1"
            style={{
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr",
              transform: "skewY(-1deg) scale(1.05)",
              transformOrigin: "top center",
            }}
          >
            <div className="col-span-2 row-span-3 relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop" alt="Conference audience" fill className="object-cover" />
            </div>
            <div className="col-span-2 row-span-2 relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop" alt="Event setup" fill className="object-cover" />
            </div>
            <div className="col-span-1 row-span-3 relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop" alt="Speaker at podium" fill className="object-cover" />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&auto=format&fit=crop" alt="Business meeting" fill className="object-cover" />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&auto=format&fit=crop" alt="Gala dinner" fill className="object-cover" />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-white/70 backdrop-blur-[2px] px-10 py-6 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-2 font-sans">
                SQL Events Nigeria
              </p>
              <h1
                className="text-4xl md:text-5xl font-light tracking-widest text-gray-900 uppercase"
                style={{ letterSpacing: "0.18em" }}
              >
                Our
                <br />
                Clients
              </h1>
            </div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Trusted By Leading Organisations
              </h2>
              <div className="space-y-5 text-[15px] leading-relaxed text-gray-600 font-sans">
                <p>
                  Over the years, SQL Events Nigeria has had the privilege of working with an
                  exceptional range of clients — from international NGOs and professional
                  associations to Federal Government Agencies, Ministries, and State Governments.
                </p>
                <p>
                  Our clientele spans the Public Sector, Organised Private Sector, and
                  International Development Organisations. In every engagement, we bring the same
                  commitment to excellence, passion for innovation, and mastery of technology.
                </p>
                <p className="italic text-gray-800 border-l-2 border-gray-300 pl-4">
                  &quot;We are proud of every relationship we have built and every event we have delivered.&quot;
                </p>
              </div>
            </div>

            <div className="relative w-full h-80 lg:h-full min-h-[400px] overflow-hidden rounded-sm">
              <Image src="/photo1.jpeg" alt="SQL Events clients" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-2 font-sans text-center">What They Say</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-12 text-center">
              Client Testimonials
            </h2>

            <div className="grid lg:grid-cols-2 gap-0 items-stretch">
              {/* Left: large quote display */}
              <div className="bg-gray-900 text-white p-10 lg:p-14 flex flex-col justify-between min-h-[420px]">
                <div>
                  <span className="text-6xl font-light text-white/20 leading-none">&quot;</span>
                  <p className="text-lg lg:text-xl font-light leading-relaxed text-white/90 mt-2">
                    {testimonials[current].quote}
                  </p>
                </div>
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="font-semibold text-white tracking-wide">{testimonials[current].name}</p>
                  <p className="text-white/60 text-sm font-sans mt-1">{testimonials[current].role}</p>
                  <p className="text-white/40 text-sm font-sans">{testimonials[current].company}</p>
                </div>
              </div>

              {/* Right: nav + image */}
              <div className="flex flex-col">
                <div className="relative flex-1 min-h-[260px]">
                  <Image src="/photo2.jpg" alt="Client event" fill className="object-cover" />
                </div>
                <div className="bg-white border border-gray-200 border-t-0 px-8 py-5 flex items-center justify-between">
                  {/* Prev / Next */}
                  <div className="flex gap-3">
                    <button
                      onClick={prev}
                      className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 font-sans"
                      aria-label="Previous"
                    >
                      ←
                    </button>
                    <button
                      onClick={next}
                      className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 font-sans"
                      aria-label="Next"
                    >
                      →
                    </button>
                  </div>
                  {/* Dots */}
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 transition-all duration-200 ${i === current ? "bg-gray-900 w-6" : "bg-gray-300"}`}
                        aria-label={`Go to ${i + 1}`}
                      />
                    ))}
                  </div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-sans">
                    {current + 1} / {testimonials.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CLIENT LOGOS ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-2 font-sans text-center">Our Partners</p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-12 text-center">
              Organisations We Have Served
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-200">
              {clientLogos.map((name, i) => (
                <div
                  key={i}
                  className="bg-white px-6 py-8 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <p className="text-center text-sm font-sans text-gray-600 tracking-wide leading-snug">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHOTO STRIP ── */}
        <section className="py-0">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {["/photo3.jpg", "/photo4.jpg", "/photo5.jpg", "/photo6.jpg"].map((src, i) => (
              <div key={i} className="relative h-56 overflow-hidden group">
                <Image src={src} alt={`SQL Events client event ${i + 3}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-4 font-sans">Work With Us</p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Ready to join our<br />
                <span className="italic">success stories?</span>
              </h2>
            </div>
            <div className="space-y-4 font-sans">
              <p className="text-white/70 leading-relaxed text-[15px]">
                Let&apos;s discuss how we can bring your vision to life with our comprehensive
                event management solutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-white text-gray-900 px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/corporate-event-management"
                  className="border border-white/30 text-white px-8 py-3 text-sm uppercase tracking-widest font-medium hover:border-white transition-colors duration-200"
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}