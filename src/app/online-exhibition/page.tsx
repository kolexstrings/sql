"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const offerings = [
  {
    id: "01",
    title: "Booth Software & Floor Plans",
    description:
      "Centralised software for managing booth sales, invoicing, and contract management — with an interactive 3D Floor Plan visualisation tool for optimal space allocation and exhibitor previews.",
    bullets: [
      "Centralised booth sales, invoicing & contract management",
      "Interactive 3D Floor Plan visualisation tool",
      "Optimal space allocation for any venue layout",
      "Exhibitor preview of booth position before event",
      "Real-time availability & booking status",
      "Supports physical and virtual exhibition formats",
    ],
    image: "/slider/photo1.jpeg",
  },
  {
    id: "02",
    title: "Exhibitor Manual",
    description:
      "A secure, digital portal where exhibitors can access deadlines, logistics information, download forms, and manage staff registrations — all in one place, anytime.",
    bullets: [
      "Secure, password-protected exhibitor portal",
      "Access to deadlines and logistics information",
      "Downloadable forms and documentation",
      "Staff registration management for each booth",
      "Real-time updates and exhibitor notifications",
      "Accessible anytime — desktop and mobile friendly",
    ],
    image: "/slider/photo2.jpg",
  },
  {
    id: "03",
    title: "Exhibitor Lead Retrieval",
    description:
      "Dedicated mobile application technology allowing exhibitors to scan attendee badges or wristbands, instantly capturing verified data and rating leads for post-event follow-up.",
    bullets: [
      "Dedicated mobile app for badge & wristband scanning",
      "Instant capture of verified attendee contact data",
      "Lead rating system for post-event prioritisation",
      "Works with QR Codes and NFC Wristbands",
      "Offline scanning capability with automatic sync",
      "Exportable lead reports for exhibitor CRM import",
    ],
    image: "/slider/photo3.jpg",
  },
  {
    id: "04",
    title: "Exhibition Booth Design & Supply",
    description:
      "We supply Shell Scheme and Bespoke Exhibition Booths for your events. Our designs and materials are first class — custom-crafted to represent your exhibitors at their best.",
    bullets: [
      "Shell Scheme booths for standard exhibition formats",
      "Bespoke custom-built exhibition stands",
      "First-class materials and professional finishes",
      "Design consultation for brand alignment",
      "Full supply, delivery, installation and teardown",
      "Suitable for conferences, trade shows & summits",
    ],
    image: "/slider/photo4.jpg",
  },
];

const featureChecklist = [
  "Manage the entire exhibitor booking process end-to-end",
  "Interactive 3D floor plan for spatial planning & exhibitor previews",
  "Secure digital Exhibitor Manual portal with downloadable forms",
  "Mobile lead retrieval app — scan badges & NFC wristbands instantly",
  "Lead rating & export for post-event CRM follow-up",
  "Shell Scheme and bespoke booth design, supply & installation",
  "Supports both physical and virtual exhibition environments",
  "Maximise sponsorship returns with real-time availability data",
];

const stats = [
  { value: "3D",    label: "Floor Plan Tool" },
  { value: "Live",  label: "Availability Tracking" },
  { value: "NFC",   label: "Lead Retrieval" },
  { value: "100%",  label: "Digital Exhibitor Portal" },
];

export default function OnlineExhibitionPage() {
  const overviewRef = useInView(0.08);
  const checkRef    = useInView(0.08);
  const offHeadRef  = useInView(0.08);
  const ctaRef      = useInView(0.1);

  return (
    <div className="min-h-screen bg-white font-['Cormorant_Garamond',Georgia,serif] overflow-x-hidden">
      <Header />

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
      `}</style>

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
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-2 font-sans">Our Services</p>
              <h1
                className="text-4xl md:text-5xl font-light tracking-widest text-gray-900 uppercase"
                style={{ letterSpacing: "0.18em" }}
              >
                Online Exhibition
                <br />
                Software
              </h1>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.1fr,0.9fr] gap-12 items-start">
            <div ref={overviewRef.ref}>
              <h2
                className="text-2xl font-semibold text-gray-900 mb-6"
                style={{ opacity: 0, animation: overviewRef.inView ? "fadeUp 0.6s 0s ease forwards" : "none" }}
              >
                Every Aspect of Your Exhibition, Managed
              </h2>
              <div
                className="space-y-5 text-[15px] leading-relaxed text-gray-600 font-sans"
                style={{ opacity: 0, animation: overviewRef.inView ? "fadeUp 0.7s 0.1s ease forwards" : "none" }}
              >
                <p>
                  We provide robust software solutions designed to manage the entire exhibitor
                  booking process, empower exhibitors, maximise sponsorship returns, and ensure
                  efficient floor plan utilisation for both physical and virtual exhibitions.
                </p>
                <p>
                  From the moment an exhibitor books a booth to the post-event export of scanned
                  leads, our platform handles every touchpoint. The interactive 3D Floor Plan tool
                  gives organisers and exhibitors a clear visual of the exhibition space, while the
                  secure Exhibitor Manual portal keeps all logistics in one place.
                </p>
                <p>
                  Our Lead Retrieval mobile app allows exhibitors to scan badges and wristbands
                  instantly, capturing verified attendee data and rating leads — turning every
                  interaction at your exhibition into a measurable business outcome.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div ref={checkRef.ref}>
              <div
                className="border border-gray-200 bg-gray-50 p-8"
                style={{ opacity: 0, animation: checkRef.inView ? "fadeIn 0.8s 0.1s ease forwards" : "none" }}
              >
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-6 font-sans">Platform Capabilities</p>
                <ul className="space-y-4">
                  {featureChecklist.map((feat, i) => (
                    <li
                      key={feat}
                      className="flex items-start gap-3 font-sans text-[14px] text-gray-600 leading-relaxed"
                      style={{ opacity: 0, animation: checkRef.inView ? `fadeUp 0.5s ${0.15 + i * 0.06}s ease forwards` : "none" }}
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BANNER ── */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-700">
            {stats.map((s) => (
              <div key={s.label} className="bg-gray-900 px-8 py-10 text-center hover:bg-gray-800 transition-colors duration-200">
                <p className="text-3xl md:text-4xl font-light text-white mb-2">{s.value}</p>
                <p className="font-sans text-xs uppercase tracking-[0.35em] text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── OFFERINGS ── */}
        <section id="offerings" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
            <div ref={offHeadRef.ref}>
              <p
                className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-2 font-sans"
                style={{ opacity: 0, animation: offHeadRef.inView ? "fadeUp 0.5s 0s ease forwards" : "none" }}
              >
                Key Offerings
              </p>
              <h2
                className="text-2xl font-semibold text-gray-900"
                style={{ opacity: 0, animation: offHeadRef.inView ? "fadeUp 0.6s 0.1s ease forwards" : "none" }}
              >
                Four Powerful Tools, One Exhibition Platform
              </h2>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-0">
            {offerings.map((item, idx) => (
              <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                {/* Image */}
                <div className={`relative h-72 lg:h-auto min-h-[300px] ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1">
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-sans">{item.id}</span>
                  </div>
                </div>
                {/* Content */}
                <div className={`bg-white border border-gray-200 p-8 lg:p-10 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="font-sans text-[14px] text-gray-500 leading-relaxed mb-6">{item.description}</p>
                  <ul className="space-y-2.5">
                    {item.bullets.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 font-sans text-[13px] text-gray-500 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PHOTO STRIP ── */}
        <section className="grid grid-cols-3">
          {["/slider/photo5.jpg", "/slider/photo6.jpg", "/slider/photo7.jpeg"].map((src, i) => (
            <div key={i} className="relative h-64 overflow-hidden group">
              <Image src={src} alt={`SQL Events exhibition ${i + 5}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </section>

        {/* ── CTA ── */}
        <section ref={ctaRef.ref} className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
            <div style={{ opacity: 0, animation: ctaRef.inView ? "fadeUp 0.7s 0s ease forwards" : "none" }}>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-4 font-sans">Ready to elevate your exhibition?</p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Let&apos;s power your<br />
                <span className="italic">next exhibition</span>
              </h2>
            </div>
            <div
              className="space-y-4 font-sans"
              style={{ opacity: 0, animation: ctaRef.inView ? "fadeUp 0.7s 0.15s ease forwards" : "none" }}
            >
              <p className="text-white/70 leading-relaxed text-[15px]">
                From booth management and floor planning to lead retrieval and custom booth design,
                our team will build the right exhibition solution for your event.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className="bg-white text-gray-900 px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors duration-200">
                  Contact Us
                </Link>
                <Link href="/services" className="border border-white/30 text-white px-8 py-3 text-sm uppercase tracking-widest font-medium hover:border-white transition-colors duration-200">
                  All Services
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