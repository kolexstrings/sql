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
    title: "Online Registration Software",
    description:
      "Highly customisable online forms, integrated online payment processing, and options to include attendee surveys, online services, and essential features like hotel booking management.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <rect x="6" y="8" width="36" height="32" rx="3" />
        <path d="M6 17h36" />
        <path d="M16 8v9M32 8v9" />
        <path d="M14 27h10M14 33h7" strokeLinecap="round" />
        <path d="M30 27l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: [
      "Highly customisable online registration forms",
      "Integrated Credit / Debit Card payment processing",
      "Hotel accommodation booking built in",
      "Attendee surveys & online service options",
      "Automatic PDF confirmation letters by email",
      "Official receipts sent instantly on payment",
    ],
  },
  {
    id: "02",
    title: "Onsite Registration Software",
    description:
      "A robust Onsite Registration Management Software synchronised with our online solution. Simplify attendee management and elevate your event experience with comprehensive badge printing.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <rect x="10" y="4" width="28" height="40" rx="3" />
        <path d="M19 4v5h10V4" />
        <path d="M16 22h16M16 29h10" strokeLinecap="round" />
        <circle cx="32" cy="36" r="5" />
        <path d="M30 36l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: [
      "Fully synchronised with online registration data",
      "Real-time check-in status & live reporting",
      "Comprehensive attendee management dashboard",
      "Configurable access control per delegate category",
      "Fast, intuitive interface for onsite staff",
      "Badge printing integrated into the workflow",
    ],
  },
  {
    id: "03",
    title: "Onsite Registration & Equipment",
    description:
      "Fast, professional onsite setup including Self-Service Kiosks, Desktops, Laptops, Printers, Trained Personnel, and Manned Desks — handling high volumes of check-ins with ease.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <rect x="4" y="28" width="40" height="14" rx="2" />
        <rect x="15" y="8" width="18" height="20" rx="2" />
        <path d="M22 8V5M26 8V5" />
        <circle cx="12" cy="35" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="24" cy="35" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="36" cy="35" r="2.5" fill="currentColor" stroke="none" />
        <path d="M4 33h40" />
      </svg>
    ),
    bullets: [
      "Self-Service Kiosks for rapid delegate check-in",
      "Desktops, Laptops & professional Badge Printers",
      "Manned Desks with trained registration personnel",
      "Handles high volumes of simultaneous check-ins",
      "Fast, professional setup and teardown",
      "Dedicated onsite support throughout your event",
    ],
  },
  {
    id: "04",
    title: "Advanced Badging System",
    description:
      "High-quality, professional badge printing with future-proof options including NFC Wristbands, Plastic Card Holders, Plain or Branded Lanyards, and Smart QR Coded Badges.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <rect x="13" y="14" width="22" height="28" rx="2" />
        <path d="M21 14v-5a3 3 0 016 0v5" />
        <rect x="18" y="24" width="12" height="8" rx="1" />
        <path d="M21 28h6M21 26h4" strokeWidth="1.1" />
        <circle cx="24" cy="20" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
    bullets: [
      "High-quality professional badge design & printing",
      "Smart QR Coded Badges for access & tracking",
      "NFC Wristbands for future-proof events",
      "Plastic Card Holders for a premium feel",
      "High-quality plain or fully branded Lanyards",
      "Enhanced security & streamlined entry",
    ],
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
  { symbol: "◈", title: "Per-Event Licence",       desc: "Pay only for what you need — ideal for one-off conferences and summits." },
  { symbol: "◉", title: "Annual Licence",           desc: "Manage unlimited events under one subscription throughout the year." },
  { symbol: "◐", title: "Fully Managed Service",    desc: "Hire our expert Registration Management Team to handle everything for you." },
];

/* ── OFFERING CARD ── */
function OfferingCard({ item, index }: { item: typeof offerings[0]; index: number }) {
  const { ref, inView } = useInView(0.07);
  return (
    <div
      ref={ref}
      style={{ opacity: 0, animation: inView ? `cardIn 0.65s ${index * 0.1}s cubic-bezier(0.22,1,0.36,1) forwards` : "none" }}
      className="group relative bg-white border border-gray-100 hover:border-[#891c7a]/30 transition-all duration-400 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col overflow-hidden"
    >
      <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out" style={{ background: "#891c7a" }} />
      <span className="absolute top-5 right-6 font-playfair text-6xl font-light select-none" style={{ color: "#f5eaf4" }}>{item.id}</span>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" style={{ background: "linear-gradient(135deg,#891c7a05,#891c7a0f)" }} />

      <div className="relative z-10 p-8 flex flex-col h-full">
        <div
          className="mb-6 w-16 h-16 flex items-center justify-center border transition-all duration-300 group-hover:bg-[#891c7a] group-hover:border-[#891c7a] flex-shrink-0"
          style={{ borderColor: "#891c7a35", color: "#891c7a" }}
        >
          <span className="group-hover:[&>svg]:stroke-white transition-colors duration-300">{item.icon}</span>
        </div>

        <h3 className="font-playfair text-xl font-normal text-gray-900 group-hover:text-[#891c7a] transition-colors duration-300 leading-snug mb-2">{item.title}</h3>
        <div className="w-8 h-px mb-4" style={{ background: "#891c7a50" }} />
        <p className="font-jost text-sm text-gray-400 leading-relaxed mb-6">{item.description}</p>

        <ul className="flex flex-col gap-2.5 flex-1">
          {item.bullets.map((pt) => (
            <li key={pt} className="flex items-start gap-3">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#891c7a" }} />
              <span className="font-jost text-sm text-gray-500 leading-relaxed">{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ── PAGE ── */
export default function OnlineOnsiteRegistrationPage() {
  const heroRef     = useInView(0);
  const overviewRef = useInView(0.08);
  const checkRef    = useInView(0.08);
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
        .hero-line{ transform-origin:left; transform:scaleX(0); }
        .hero-line.grow{ animation:lineGrow 1s 0.55s ease forwards; }
        .deco-ring{ position:absolute; border-radius:50%; border:1px solid rgba(137,28,122,0.13); pointer-events:none; }
      `}</style>

      <main>
        {/* ══ HERO ══ */}
        <section
          ref={heroRef.ref}
          className="relative min-h-[540px] flex items-center overflow-hidden"
          style={{ background: "linear-gradient(135deg,#0f0009 0%,#2a0526 55%,#0f0009 100%)" }}
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
              <span className="font-jost text-[10px] uppercase tracking-[0.4em]" style={{ color:"var(--brand-light)" }}>Online & Onsite</span>
            </div>

            <div className="max-w-3xl">
              <p className="font-jost text-xs uppercase tracking-[0.55em] mb-5" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.6s 0.12s ease forwards":"none", color:"var(--brand-light)" }}>
                Registration & Badges
              </p>
              <h1 className="font-playfair font-light text-5xl md:text-6xl lg:text-[4.5rem] text-white leading-[1.06] mb-6" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.8s 0.22s ease forwards":"none" }}>
                Online &amp; Onsite<br />
                <em className="italic" style={{ color:"var(--brand-light)" }}>Registration Software</em>
              </h1>
              <div className={`hero-line h-px mb-8 w-56 ${heroRef.inView?"grow":""}`} style={{ background:"linear-gradient(to right,var(--brand-light),transparent)" }} />
              <p className="font-jost font-light text-white/60 text-base md:text-[1.05rem] leading-relaxed max-w-xl" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.8s 0.48s ease forwards":"none" }}>
                Maximum efficiency and a superior attendee experience — from initial sign-up to onsite check-in. One unified system for data, payments, and access control.
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
                Built for every<br /><em className="italic" style={{ color:"var(--brand)" }}>stage of your event</em>
              </h2>
              <div style={{ opacity:0, animation: overviewRef.inView?"fadeUp 0.8s 0.2s ease forwards":"none" }}>
                <p className="font-jost text-gray-500 text-sm leading-[1.95] mb-5">
                  The Registration & Badges system is designed for maximum efficiency and a superior attendee experience, from initial sign-up to onsite check-in. It encompasses a full spectrum of services to manage attendee data, payments, and access control.
                </p>
                <p className="font-jost text-gray-500 text-sm leading-[1.95] mb-5">
                  Our online registration platform enables participants to register for your event, pay registration fees, book hotel accommodation and other conference charges online using Credit or Debit Cards — all in one go, with payments processed directly into your account.
                </p>
                <p className="font-jost text-gray-500 text-sm leading-[1.95]">
                  The system supports full <strong className="text-gray-700 font-medium">delegate categorisation</strong> (Members, Non-Members, Students, Spouses and any custom category), sends automatic <strong className="text-gray-700 font-medium">PDF confirmation letters</strong> and official receipts, and supports <strong className="text-gray-700 font-medium">GROUP Registration</strong> — one form, one payment for corporate groups, branches or teams.
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

        {/* ══ LICENCE BANNER ══ */}
        <section className="py-14 px-6" style={{ background:"var(--brand)" }}>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-white text-center">
            {licenceOptions.map((opt) => (
              <div key={opt.title} className="flex flex-col items-center gap-3 px-4">
                <span className="text-3xl opacity-55 mb-1">{opt.symbol}</span>
                <p className="font-playfair text-xl font-light">{opt.title}</p>
                <p className="font-jost text-sm text-white/55 leading-relaxed max-w-xs">{opt.desc}</p>
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
                Everything you need,<br /><em className="italic" style={{ color:"var(--brand)" }}>all in one place</em>
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
            <p className="font-jost text-xs uppercase tracking-[0.5em] mb-5" style={{ color:"var(--brand-light)" }}>Ready to streamline your registration?</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white leading-snug mb-6">
              Let's set up your<br /><em className="italic" style={{ color:"var(--brand-light)" }}>registration system</em>
            </h2>
            <p className="font-jost text-white/50 text-sm leading-relaxed mb-10 max-w-md mx-auto">
              Whether you need a simple online form or a full end-to-end onsite solution with badging and equipment, our team will tailor the right package for your event.
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