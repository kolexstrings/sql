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
  const quoteRef    = useInView(0.08);
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
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-2 font-sans">Powered by Participantlogic and Onsitelogic</p>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {offerings.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 p-8 lg:p-10 flex flex-col"
                >
                  <div className="inline-block bg-gray-100 px-3 py-1 mb-6">
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-sans">
                      {item.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>

                  <p className="font-sans text-[14px] text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 mt-auto">
                    {item.bullets.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-3 font-sans text-[13px] text-gray-600 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PARTICIPANTLOGIC / ONSITELOGIC CALLOUT — mirrors Memberlogic pattern ── */}
        <section className="py-16 bg-white">
          <div ref={quoteRef.ref} className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              className="grid md:grid-cols-3 overflow-hidden border border-gray-200"
              style={{ opacity: 0, animation: quoteRef.inView ? "fadeIn 0.9s 0s ease forwards" : "none" }}
            >
              {/* Dark left panel */}
              <div className="md:col-span-1 p-10 flex flex-col justify-center bg-gray-900">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 font-sans">Powered by</p>
                <p className="text-3xl font-light text-white mb-1">
                  Participant<span className="italic">logic</span>
                </p>
                <p className="text-3xl font-light text-white mb-2">
                  &amp; Onsite<span className="italic">logic</span>
                </p>
                <div className="w-8 h-px bg-white/20 my-4" />
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  Two purpose-built platforms working in sync — from first registration to
                  final check-in — trusted by event professionals across Africa and beyond.
                </p>
              </div>
              {/* Right — three highlights */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 bg-white">
                {[
                  { title: "Online Registration", desc: "Custom-branded forms, integrated payments, and automatic confirmations — all in one place." },
                  { title: "Onsite Management", desc: "Real-time check-in, badge printing, and access control from a fully synchronised onsite system." },
                  { title: "Dedicated Support", desc: "Expert onsite and remote assistance ensuring a seamless delegate experience from start to finish." },
                ].map((item) => (
                  <div key={item.title} className="p-8 flex flex-col gap-3">
                    <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── LICENCE OPTIONS / STATS BANNER ── */}
        <section ref={ctaRef.ref} className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-px bg-gray-700">
            {licenceOptions.map((opt) => (
              <div key={opt.title} className="bg-gray-900 px-8 py-10 hover:bg-gray-800 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-white mb-3">{opt.title}</h3>
                <p className="font-sans text-sm text-gray-400 leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}