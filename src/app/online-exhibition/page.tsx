"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── INTERSECTION HELPER ── */
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

/* ── DATA ── */
const offerings = [
  {
    id: "01",
    title: "Booth Software & Floor Plans",
    description:
      "Centralised software for managing booth sales, invoicing, and contract management — with an interactive 3D Floor Plan visualisation tool for optimal space allocation and exhibitor previews.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <rect x="4" y="4" width="18" height="18" rx="1.5" />
        <rect x="26" y="4" width="18" height="18" rx="1.5" />
        <rect x="4" y="26" width="18" height="18" rx="1.5" />
        <rect x="26" y="26" width="18" height="18" rx="1.5" />
        <path d="M13 13l22 0M13 13l0 22" strokeDasharray="2 2" strokeWidth="1" />
        <path d="M26 16h8M26 32h8M16 26v8" strokeLinecap="round" />
      </svg>
    ),
    bullets: [
      "Centralised booth sales, invoicing & contract management",
      "Interactive 3D Floor Plan visualisation tool",
      "Optimal space allocation for any venue layout",
      "Exhibitor preview of booth position before event",
      "Real-time availability & booking status",
      "Supports physical and virtual exhibition formats",
    ],
  },
  {
    id: "02",
    title: "Exhibitor Manual",
    description:
      "A secure, digital portal where exhibitors can access deadlines, logistics information, download forms, and manage staff registrations — all in one place, anytime.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <path d="M10 6h20l8 8v28H10V6z" />
        <path d="M30 6v8h8" />
        <path d="M17 20h14M17 27h14M17 34h8" strokeLinecap="round" />
        <circle cx="36" cy="38" r="6" fill="white" stroke="currentColor" strokeWidth="1.4" />
        <path d="M33 38l2 2 4-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
      </svg>
    ),
    bullets: [
      "Secure, password-protected exhibitor portal",
      "Access to deadlines and logistics information",
      "Downloadable forms and documentation",
      "Staff registration management for each booth",
      "Real-time updates and exhibitor notifications",
      "Accessible anytime — desktop and mobile friendly",
    ],
  },
  {
    id: "03",
    title: "Exhibitor Lead Retrieval",
    description:
      "Dedicated mobile application technology allowing exhibitors to scan attendee badges or wristbands, instantly capturing verified data and rating leads for post-event follow-up.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <rect x="14" y="4" width="20" height="32" rx="3" />
        <path d="M20 4v3h8V4" />
        <path d="M19 16h10M19 21h7" strokeLinecap="round" />
        <path d="M6 36l5 5 12-12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="M38 28a8 8 0 11-8-8" strokeLinecap="round" />
        <path d="M38 20v8h-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: [
      "Dedicated mobile app for badge & wristband scanning",
      "Instant capture of verified attendee contact data",
      "Lead rating system for post-event prioritisation",
      "Works with QR Codes and NFC Wristbands",
      "Offline scanning capability with automatic sync",
      "Exportable lead reports for exhibitor CRM import",
    ],
  },
  {
    id: "04",
    title: "Exhibition Booth Design & Supply",
    description:
      "We supply Shell Scheme and Bespoke Exhibition Booths for your events. Our designs and materials are first class — custom-crafted to represent your exhibitors at their best.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <path d="M4 40V20l8-8h24l8 8v20H4z" />
        <path d="M4 20h40" />
        <path d="M16 40V28h16v12" />
        <path d="M24 20v-8" strokeLinecap="round" />
        <path d="M10 28h6M32 28h6M10 34h6M32 34h6" strokeLinecap="round" />
      </svg>
    ),
    bullets: [
      "Shell Scheme booths for standard exhibition formats",
      "Bespoke custom-built exhibition stands",
      "First-class materials and professional finishes",
      "Design consultation for brand alignment",
      "Full supply, delivery, installation and teardown",
      "Suitable for conferences, trade shows & summits",
    ],
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

/* ── OFFERING CARD ── */
function OfferingCard({ item, index }: { item: typeof offerings[0]; index: number }) {
  const { ref, inView } = useInView(0.07);
  return (
    <div
      ref={ref}
      style={{ opacity:0, animation: inView ? `cardIn 0.65s ${index * 0.1}s cubic-bezier(0.22,1,0.36,1) forwards` : "none" }}
      className="group relative bg-white border border-gray-100 hover:border-[#891c7a]/30 transition-all duration-400 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col overflow-hidden"
    >
      <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ background:"#891c7a" }} />
      <span className="absolute top-5 right-6 font-playfair text-6xl font-light select-none" style={{ color:"#f5eaf4" }}>{item.id}</span>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ background:"linear-gradient(135deg,#891c7a05,#891c7a0f)" }} />

      <div className="relative z-10 p-8 flex flex-col h-full">
        <div
          className="mb-6 w-16 h-16 flex items-center justify-center border transition-all duration-300 group-hover:bg-[#891c7a] group-hover:border-[#891c7a] flex-shrink-0"
          style={{ borderColor:"#891c7a35", color:"#891c7a" }}
        >
          <span className="group-hover:[&>svg]:stroke-white transition-colors duration-300">{item.icon}</span>
        </div>

        <h3 className="font-playfair text-xl font-normal text-gray-900 group-hover:text-[#891c7a] transition-colors duration-300 leading-snug mb-2">{item.title}</h3>
        <div className="w-8 h-px mb-4" style={{ background:"#891c7a50" }} />
        <p className="font-jost text-sm text-gray-400 leading-relaxed mb-6">{item.description}</p>

        <ul className="flex flex-col gap-2.5 flex-1">
          {item.bullets.map((pt) => (
            <li key={pt} className="flex items-start gap-3">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:"#891c7a" }} />
              <span className="font-jost text-sm text-gray-500 leading-relaxed">{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── PAGE ── */
export default function OnlineExhibitionPage() {
  const heroRef     = useInView(0);
  const overviewRef = useInView(0.08);
  const checkRef    = useInView(0.08);
  const statsRef    = useInView(0.08);
  const offHeadRef  = useInView(0.08);
  const ctaRef      = useInView(0.1);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        :root { --brand:#891c7a; --brand-light:#b94daa; --brand-pale:#fdf8fc; }
        .font-playfair { font-family:'Playfair Display',Georgia,serif; }
        .font-jost     { font-family:'Jost',sans-serif; }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes cardIn  { from{opacity:0;transform:translateY(26px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes lineGrow{ from{transform:scaleX(0)} to{transform:scaleX(1)} }
        @keyframes spin    { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes countUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        .hero-line{ transform-origin:left; transform:scaleX(0); }
        .hero-line.grow{ animation:lineGrow 1s 0.55s ease forwards; }
        .deco-ring{ position:absolute; border-radius:50%; border:1px solid rgba(137,28,122,0.13); pointer-events:none; }
      `}</style>

      <main>
        {/* ══ HERO ══ */}
        <section
          ref={heroRef.ref}
          className="relative min-h-[540px] flex items-center overflow-hidden"
          style={{ background:"linear-gradient(135deg,#0f0009 0%,#2a0526 55%,#0f0009 100%)" }}
        >
          <div className="deco-ring" style={{ width:540,height:540,top:-160,right:-110,animation:"spin 38s linear infinite" }} />
          <div className="deco-ring" style={{ width:300,height:300,bottom:-90,right:260,animation:"spin 24s linear infinite reverse" }} />
          <div className="deco-ring" style={{ width:170,height:170,top:70,left:"36%",animation:"spin 52s linear infinite" }} />
          <div className="absolute inset-0 opacity-[0.17] pointer-events-none" style={{ backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",backgroundSize:"200px" }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 55% 70% at 65% 50%,rgba(137,28,122,0.28) 0%,transparent 70%)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-28 w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.5s 0s ease forwards":"none" }}>
              <Link href="/services" className="font-jost text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white/70 transition-colors">Event Software</Link>
              <span className="text-white/25 text-xs">›</span>
              <span className="font-jost text-[10px] uppercase tracking-[0.4em]" style={{ color:"var(--brand-light)" }}>Online Exhibition</span>
            </div>

            <div className="max-w-3xl">
              <p className="font-jost text-xs uppercase tracking-[0.55em] mb-5" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.6s 0.12s ease forwards":"none", color:"var(--brand-light)" }}>
                Exhibition Management
              </p>
              <h1 className="font-playfair font-light text-5xl md:text-6xl lg:text-[4.5rem] text-white leading-[1.06] mb-6" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.8s 0.22s ease forwards":"none" }}>
                Online Exhibition<br />
                <em className="italic" style={{ color:"var(--brand-light)" }}>Software</em>
              </h1>
              <div className={`hero-line h-px mb-8 w-56 ${heroRef.inView?"grow":""}`} style={{ background:"linear-gradient(to right,var(--brand-light),transparent)" }} />
              <p className="font-jost font-light text-white/60 text-base md:text-[1.05rem] leading-relaxed max-w-xl" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.8s 0.48s ease forwards":"none" }}>
                Robust software solutions designed to manage the entire exhibitor booking process, maximise sponsorship returns, and ensure efficient floor plan utilisation for physical and virtual exhibitions.
              </p>
              <div className="flex flex-wrap gap-3 mt-10" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.7s 0.62s ease forwards":"none" }}>
                <a href="#offerings" className="font-jost text-xs uppercase tracking-[0.35em] px-8 py-3.5 text-white transition-all duration-300 hover:opacity-90" style={{ background:"var(--brand)" }}>
                  Explore Offerings
                </a>
                <a href="/contact" className="font-jost text-xs uppercase tracking-[0.35em] px-8 py-3.5 text-white/70 border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ OVERVIEW ══ */}
        <section ref={overviewRef.ref} className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-jost text-[10px] uppercase tracking-[0.5em] mb-4" style={{ opacity:0, animation: overviewRef.inView?"fadeUp 0.5s 0s ease forwards":"none", color:"var(--brand)" }}>Overview</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-8" style={{ opacity:0, animation: overviewRef.inView?"fadeUp 0.65s 0.1s ease forwards":"none" }}>
                Every aspect of your<br /><em className="italic" style={{ color:"var(--brand)" }}>exhibition, managed</em>
              </h2>
              <div style={{ opacity:0, animation: overviewRef.inView?"fadeUp 0.8s 0.2s ease forwards":"none" }}>
                <p className="font-jost text-gray-500 text-sm leading-[1.95] mb-5">
                  We provide robust software solutions designed to manage the entire exhibitor booking process, empower exhibitors, maximise sponsorship returns, and ensure efficient floor plan utilisation for both physical and virtual exhibitions.
                </p>
                <p className="font-jost text-gray-500 text-sm leading-[1.95] mb-5">
                  From the moment an exhibitor books a booth to the post-event export of scanned leads, our platform handles every touchpoint. The <strong className="text-gray-700 font-medium">interactive 3D Floor Plan</strong> tool gives organisers and exhibitors a clear visual of the exhibition space, while the <strong className="text-gray-700 font-medium">secure Exhibitor Manual portal</strong> keeps all logistics in one place.
                </p>
                <p className="font-jost text-gray-500 text-sm leading-[1.95]">
                  Our <strong className="text-gray-700 font-medium">Lead Retrieval mobile app</strong> allows exhibitors to scan badges and wristbands instantly, capturing verified attendee data and rating leads — turning every interaction at your exhibition into a measurable business outcome.
                </p>
              </div>
            </div>

            {/* Checklist */}
            <div ref={checkRef.ref}>
              <div className="border border-[#891c7a]/12 p-8 md:p-10" style={{ background:"var(--brand-pale)", opacity:0, animation: checkRef.inView?"fadeIn 0.8s 0.1s ease forwards":"none" }}>
                <p className="font-jost text-[10px] uppercase tracking-[0.45em] mb-7" style={{ color:"var(--brand)" }}>Platform Capabilities</p>
                <ul className="flex flex-col gap-4">
                  {featureChecklist.map((feat, i) => (
                    <li key={feat} className="flex items-start gap-4" style={{ opacity:0, animation: checkRef.inView?`fadeUp 0.5s ${0.15+i*0.06}s ease forwards`:"none" }}>
                      <span className="mt-0.5 w-5 h-5 flex items-center justify-center flex-shrink-0" style={{ background:"var(--brand)" }}>
                        <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3">
                          <path d="M3 8l4 4 6-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="font-jost text-sm text-gray-600 leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══ STATS BANNER ══ */}
        <section ref={statsRef.ref} className="py-14 px-6" style={{ background:"var(--brand)" }}>
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {stats.map((s, i) => (
              <div key={s.label} style={{ opacity:0, animation: statsRef.inView?`countUp 0.6s ${i*0.1}s ease forwards`:"none" }}>
                <p className="font-playfair text-4xl md:text-5xl font-light mb-1">{s.value}</p>
                <p className="font-jost text-xs uppercase tracking-[0.35em] text-white/55">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══ OFFERINGS CARDS ══ */}
        <section id="offerings" className="py-24 px-6 lg:px-16" style={{ background:"var(--brand-pale)" }}>
          <div className="max-w-7xl mx-auto">
            <div ref={offHeadRef.ref} className="mb-16 max-w-xl">
              <p className="font-jost text-[10px] uppercase tracking-[0.5em] mb-4" style={{ opacity:0, animation: offHeadRef.inView?"fadeUp 0.5s 0s ease forwards":"none", color:"var(--brand)" }}>Key Offerings</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-light text-gray-900 leading-tight" style={{ opacity:0, animation: offHeadRef.inView?"fadeUp 0.65s 0.1s ease forwards":"none" }}>
                Four powerful tools,<br /><em className="italic" style={{ color:"var(--brand)" }}>one exhibition platform</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offerings.map((item, i) => (
                <OfferingCard key={item.id} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section ref={ctaRef.ref} className="relative py-28 px-6 text-center overflow-hidden" style={{ background:"linear-gradient(135deg,#0f0009,#2a0526,#0f0009)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 50% 65% at 50% 50%,rgba(137,28,122,0.32) 0%,transparent 70%)" }} />
          <div className="relative z-10 max-w-2xl mx-auto" style={{ opacity:0, animation: ctaRef.inView?"fadeUp 0.8s 0s ease forwards":"none" }}>
            <p className="font-jost text-xs uppercase tracking-[0.5em] mb-5" style={{ color:"var(--brand-light)" }}>Ready to elevate your exhibition?</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white leading-snug mb-6">
              Let's power your<br /><em className="italic" style={{ color:"var(--brand-light)" }}>next exhibition</em>
            </h2>
            <p className="font-jost text-white/50 text-sm leading-relaxed mb-10 max-w-md mx-auto">
              From booth management and floor planning to lead retrieval and custom booth design, our team will build the right exhibition solution for your event.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="font-jost text-xs uppercase tracking-[0.4em] px-10 py-4 text-white transition-all duration-300" style={{ background:"var(--brand)" }}
                onMouseEnter={e=>(e.currentTarget.style.background="var(--brand-light)")}
                onMouseLeave={e=>(e.currentTarget.style.background="var(--brand)")}>
                Contact Us
              </a>
              <Link href="/services" className="font-jost text-xs uppercase tracking-[0.4em] px-10 py-4 text-white/60 border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300">
                Back to Software
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}