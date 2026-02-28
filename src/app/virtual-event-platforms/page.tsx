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
    title: "Platform Options",
    description:
      "Choose between clean, content-focused 2D Platforms or highly engaging, navigable 3D Platforms designed to replicate the look, feel, and flow of a physical venue.",
    bullets: [
      "2D Platforms — clean, content-focused and distraction-free",
      "3D Platforms — navigable virtual venue replicating physical events",
      "Access via your website, YouTube or social media",
      "Full session, exhibition & networking access for virtual attendees",
      "Text & Video Chat for Q&A and delegate interaction",
      "Mobile App integration for on-the-go participation",
    ],
    image: "/slider/photo5.jpg",
  },
  {
    id: "02",
    title: "Virtual Exhibition eStands",
    description:
      "Dedicated 2D or 3D digital exhibition booths for sponsors and exhibitors — featuring integrated live chat, video calls, downloadable documents, and measurable lead generation analytics.",
    bullets: [
      "2D and 3D digital exhibition eStand options",
      "Integrated live chat and video call with booth visitors",
      "Downloadable brochures and document library per booth",
      "Measurable lead generation analytics per eStand",
      "Branded booth design aligned to sponsor identity",
      "Real-time visitor tracking and engagement metrics",
    ],
    image: "/slider/photo7.jpeg",
  },
  {
    id: "03",
    title: "Full Production Team Services",
    description:
      "A dedicated technical crew ensures seamless video streaming, troubleshooting, and broadcast-quality production for all live and pre-recorded sessions throughout your event.",
    bullets: [
      "Dedicated technical crew for your entire event",
      "Seamless live video streaming setup and management",
      "Real-time troubleshooting and on-call technical support",
      "Broadcast-quality production for all live sessions",
      "Pre-recorded session editing, encoding and scheduling",
      "Multi-platform simultaneous broadcast capability",
    ],
    image: "/slider/photo2.jpg",
  },
  {
    id: "04",
    title: "Speaker Training",
    description:
      "Comprehensive onboarding and technical coaching for all presenters — ensuring they are confident, comfortable, and professional on camera for a polished delivery to the online audience.",
    bullets: [
      "Technical onboarding for all confirmed speakers",
      "Camera presence and on-screen delivery coaching",
      "Lighting, audio and background setup guidance",
      "Full rehearsal and dry-run sessions pre-event",
      "Slide-sharing and screen-share technical checks",
      "Dedicated speaker support throughout the live event",
    ],
    image: "/slider/photo6.jpg",
  },
];

const featureChecklist = [
  "Virtual access via website, YouTube or social media platforms",
  "Full session, exhibition & networking access for virtual delegates",
  "Text & Video Chat for live Q&A and delegate-to-delegate interaction",
  "2D clean platforms and immersive 3D navigable virtual venue options",
  "2D and 3D virtual exhibition eStands with live chat & video calls",
  "Lead generation analytics and visitor tracking per eStand",
  "Dedicated full production crew for streaming and troubleshooting",
  "Comprehensive speaker coaching and pre-event rehearsal sessions",
];

const stats = [
  { value: "2D/3D", label: "Platform Options" },
  { value: "Live",  label: "Video Streaming" },
  { value: "eStand",label: "Virtual Exhibition" },
  { value: "Full",  label: "Production Crew" },
];

export default function VirtualEventPlatformsPage() {
  const overviewRef = useInView(0.08);
  const checkRef    = useInView(0.08);
  const compareRef  = useInView(0.08);
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
                Virtual Event
                <br />
                Platforms
              </h1>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.9fr,1.1fr] gap-12 items-start">
            {/* Checklist left on this page for variety */}
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

            <div ref={overviewRef.ref}>
              <h2
                className="text-2xl font-semibold text-gray-900 mb-6"
                style={{ opacity: 0, animation: overviewRef.inView ? "fadeUp 0.6s 0s ease forwards" : "none" }}
              >
                Your Event, Everywhere at Once
              </h2>
              <div
                className="space-y-5 text-[15px] leading-relaxed text-gray-600 font-sans"
                style={{ opacity: 0, animation: overviewRef.inView ? "fadeUp 0.7s 0.1s ease forwards" : "none" }}
              >
                <p>
                  We deliver engaging digital event experiences with fully supported virtual and
                  hybrid solutions — offering immersive environments and reliable technical
                  production services that bring your event to audiences wherever they are.
                </p>
                <p>
                  All virtual attendees gain access to your event via your website, YouTube or
                  social media platforms. They receive full access to all sessions, exhibitions,
                  and networking with other delegates through the Virtual Platform and Mobile App
                  — with text and video chat enabling real-time Q&A participation.
                </p>
                <p>
                  Whether you choose a clean 2D Platform or a fully navigable 3D virtual venue,
                  our dedicated production team and speaker coaching services ensure a
                  professional, polished experience from opening keynote to closing session.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── 2D vs 3D COMPARISON ── */}
        <section className="py-0 bg-white">
          <div
            ref={compareRef.ref}
            className="max-w-7xl mx-auto px-6 lg:px-12 pb-16"
          >
            <div
              className="grid md:grid-cols-2 overflow-hidden border border-gray-200"
              style={{ opacity: 0, animation: compareRef.inView ? "fadeIn 0.8s 0.1s ease forwards" : "none" }}
            >
              {[
                {
                  label: "2D Virtual Platform",
                  tag: "Clean & Content-Focused",
                  dark: false,
                  points: [
                    "Distraction-free session viewer",
                    "Clear, intuitive navigation menus",
                    "Fast loading for all connection speeds",
                    "Ideal for conferences, webinars & AGMs",
                  ],
                },
                {
                  label: "3D Virtual Platform",
                  tag: "Immersive Experience",
                  dark: true,
                  points: [
                    "Fully navigable virtual venue spaces",
                    "Replicates the physical event atmosphere",
                    "Avatar presence & spatial networking",
                    "Ideal for exhibitions, summits & launches",
                  ],
                },
              ].map((col) => (
                <div
                  key={col.label}
                  className="p-10 flex flex-col gap-4"
                  style={{ background: col.dark ? "#1a1a1a" : "#f9f9f9" }}
                >
                  <p className="text-xs uppercase tracking-[0.35em] font-sans" style={{ color: col.dark ? "rgba(255,255,255,0.4)" : "#6b7280" }}>
                    {col.tag}
                  </p>
                  <h3 className="text-xl font-semibold" style={{ color: col.dark ? "white" : "#111" }}>
                    {col.label}
                  </h3>
                  <div className="w-8 h-px" style={{ background: col.dark ? "rgba(255,255,255,0.2)" : "#d1d5db" }} />
                  <ul className="space-y-3 mt-1">
                    {col.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 font-sans text-[14px] leading-relaxed" style={{ color: col.dark ? "rgba(255,255,255,0.6)" : "#6b7280" }}>
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: col.dark ? "rgba(255,255,255,0.4)" : "#9ca3af" }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
                Four Pillars of Virtual Event Excellence
              </h2>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-0">
            {offerings.map((item, idx) => (
              <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                <div className={`relative h-72 lg:h-auto min-h-[300px] ${idx % 2 === 0 ? "lg:order-2" : ""}`}>
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1">
                    <span className="text-xs uppercase tracking-widest text-gray-500 font-sans">{item.id}</span>
                  </div>
                </div>
                <div className={`bg-white border border-gray-200 p-8 lg:p-10 flex flex-col justify-center ${idx % 2 === 0 ? "lg:order-1" : ""}`}>
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
          {["/slider/photo3.jpg", "/slider/photo4.jpg", "/slider/photo1.jpeg"].map((src, i) => (
            <div key={i} className="relative h-64 overflow-hidden group">
              <Image src={src} alt={`SQL Events virtual event ${i + 5}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </section>

        {/* ── CTA ── */}
        <section ref={ctaRef.ref} className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
            <div style={{ opacity: 0, animation: ctaRef.inView ? "fadeUp 0.7s 0s ease forwards" : "none" }}>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-4 font-sans">Ready to go virtual?</p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Let&apos;s build your<br />
                <span className="italic">virtual event experience</span>
              </h2>
            </div>
            <div
              className="space-y-4 font-sans"
              style={{ opacity: 0, animation: ctaRef.inView ? "fadeUp 0.7s 0.15s ease forwards" : "none" }}
            >
              <p className="text-white/70 leading-relaxed text-[15px]">
                From platform selection and eStand design to speaker coaching and live production,
                our team will deliver a virtual event experience that rivals any in-person conference.
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