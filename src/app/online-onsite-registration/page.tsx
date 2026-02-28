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
    title: "Online Registration Software",
    description:
      "Highly customisable online forms, integrated online payment processing, and options to include attendee surveys, online services, and essential features like hotel booking management.",
    bullets: [
      "Highly customisable online registration forms",
      "Integrated Credit / Debit Card payment processing",
      "Hotel accommodation booking built in",
      "Attendee surveys & online service options",
      "Automatic PDF confirmation letters by email",
      "Official receipts sent instantly on payment",
    ],
    image: "/slider/photo1.jpeg",
  },
  {
    id: "02",
    title: "Onsite Registration Software",
    description:
      "A robust Onsite Registration Management Software synchronised with our online solution. Simplify attendee management and elevate your event experience with comprehensive badge printing.",
    bullets: [
      "Fully synchronised with online registration data",
      "Real-time check-in status & live reporting",
      "Comprehensive attendee management dashboard",
      "Configurable access control per delegate category",
      "Fast, intuitive interface for onsite staff",
      "Badge printing integrated into the workflow",
    ],
    image: "/slider/photo2.jpg",
  },
  {
    id: "03",
    title: "Onsite Registration & Equipment",
    description:
      "Fast, professional onsite setup including Self-Service Kiosks, Desktops, Laptops, Printers, Trained Personnel, and Manned Desks — handling high volumes of check-ins with ease.",
    bullets: [
      "Self-Service Kiosks for rapid delegate check-in",
      "Desktops, Laptops & professional Badge Printers",
      "Manned Desks with trained registration personnel",
      "Handles high volumes of simultaneous check-ins",
      "Fast, professional setup and teardown",
      "Dedicated onsite support throughout your event",
    ],
    image: "/slider/photo3.jpg",
  },
  {
    id: "04",
    title: "Advanced Badging System",
    description:
      "High-quality, professional badge printing with future-proof options including NFC Wristbands, Plastic Card Holders, Plain or Branded Lanyards, and Smart QR Coded Badges.",
    bullets: [
      "High-quality professional badge design & printing",
      "Smart QR Coded Badges for access & tracking",
      "NFC Wristbands for future-proof events",
      "Plastic Card Holders for a premium feel",
      "High-quality plain or fully branded Lanyards",
      "Enhanced security & streamlined entry",
    ],
    image: "/slider/photo4.jpg",
  },
];

const featureChecklist = [
  "Delegate categorisation — Members, Non-Members, Students, Spouses & custom categories",
  "Credit & Debit Card payments processed directly into your account",
  "Automatic PDF registration confirmation letters by email",
  "Official electronic receipts sent instantly on payment",
  "GROUP Registration — one form & one payment for corporate teams or branches",
  "Hotel accommodation & conference charges bookable at registration",
  "Per-event licence or annual multi-event licence options",
  "Full Registration Management Team hire available",
];

const licenceOptions = [
  { title: "Per-Event Licence", desc: "Pay only for what you need — ideal for one-off conferences and summits." },
  { title: "Annual Licence", desc: "Manage unlimited events under one subscription throughout the year." },
  { title: "Fully Managed Service", desc: "Hire our expert Registration Management Team to handle everything for you." },
];

export default function OnlineOnsiteRegistrationPage() {
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
        .hidden-anim { opacity: 0; }
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
                Online &amp; Onsite
                <br />
                Registration
              </h1>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
            <div ref={overviewRef.ref}>
              <h2
                className="text-2xl font-semibold text-gray-900 mb-6"
                style={{ opacity: 0, animation: overviewRef.inView ? "fadeUp 0.6s 0s ease forwards" : "none" }}
              >
                Built for Every Stage of Your Event
              </h2>
              <div
                className="space-y-5 text-[15px] leading-relaxed text-gray-600 font-sans"
                style={{ opacity: 0, animation: overviewRef.inView ? "fadeUp 0.7s 0.1s ease forwards" : "none" }}
              >
                <p>
                  The Registration &amp; Badges system is designed for maximum efficiency and a
                  superior attendee experience — from initial sign-up to onsite check-in. One
                  unified system for data, payments, and access control.
                </p>
                <p>
                  Our online registration platform enables participants to register, pay fees,
                  book hotel accommodation and other conference charges — all in one go, with
                  payments processed directly into your account.
                </p>
                <p>
                  The system supports full delegate categorisation, sends automatic PDF
                  confirmation letters and official receipts, and supports GROUP Registration —
                  one form, one payment for corporate groups, branches or teams.
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

        {/* ── LICENCE OPTIONS ── */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-px bg-gray-700">
            {licenceOptions.map((opt) => (
              <div key={opt.title} className="bg-gray-900 px-8 py-10 hover:bg-gray-800 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-white mb-3">{opt.title}</h3>
                <p className="font-sans text-sm text-gray-400 leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── OFFERINGS ── */}
        <section id="offerings" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div ref={offHeadRef.ref} className="mb-12">
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
                Everything You Need, All in One Place
              </h2>
            </div>

            <div className="space-y-0">
              {offerings.map((item, idx) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch"
                >
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
          </div>
        </section>

        {/* ── PHOTO STRIP ── */}
        <section className="py-0">
          <div className="grid grid-cols-3">
            {["/slider/photo5.jpg", "/slider/photo6.jpg", "/slider/photo7.jpeg"].map((src, i) => (
              <div key={i} className="relative h-56 overflow-hidden group">
                <Image src={src} alt={`SQL Events registration ${i + 5}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section ref={ctaRef.ref} className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
            <div style={{ opacity: 0, animation: ctaRef.inView ? "fadeUp 0.7s 0s ease forwards" : "none" }}>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-4 font-sans">Ready to streamline your registration?</p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Let&apos;s set up your<br />
                <span className="italic">registration system</span>
              </h2>
            </div>
            <div
              className="space-y-4 font-sans"
              style={{ opacity: 0, animation: ctaRef.inView ? "fadeUp 0.7s 0.15s ease forwards" : "none" }}
            >
              <p className="text-white/70 leading-relaxed text-[15px]">
                Whether you need a simple online form or a full end-to-end onsite solution with
                badging and equipment, our team will tailor the right package for your event.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-white text-gray-900 px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="border border-white/30 text-white px-8 py-3 text-sm uppercase tracking-widest font-medium hover:border-white transition-colors duration-200"
                >
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