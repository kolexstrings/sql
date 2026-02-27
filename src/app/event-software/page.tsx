"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ── HELPERS ── */
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

/* ── SOFTWARE CARDS DATA ── */
const softwareItems = [
  {
    href: "/online-onsite",
    number: "01",
    title: "Online & Onsite",
    subtitle: "Registration Platform",
    description:
      "Seamless delegate registration from pre-conference online sign-up through to onsite check-in, badge printing and accreditation — all in one unified workflow.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="4" y="8" width="32" height="24" rx="2" />
        <path d="M4 14h32M13 8v6M27 8v6" />
        <circle cx="13" cy="22" r="2" fill="currentColor" stroke="none" />
        <circle cx="20" cy="22" r="2" fill="currentColor" stroke="none" />
        <circle cx="27" cy="22" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "/online-abstract-management",
    number: "02",
    title: "Online Abstract",
    subtitle: "Management",
    description:
      "End-to-end submission, review and selection of abstracts and papers. Configurable reviewer workflows, scoring and scheduling — eliminating months of manual email chains.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M8 6h24v28H8z" />
        <path d="M13 13h14M13 19h14M13 25h8" />
        <path d="M28 28l6 6" strokeLinecap="round" />
        <circle cx="28" cy="28" r="5" />
      </svg>
    ),
  },
  {
    href: "/online-exhibition",
    number: "03",
    title: "Online Exhibition",
    subtitle: "Management",
    description:
      "Manage exhibitor booths, floor plans, sponsorship tiers and lead capture in a single portal. Drive meaningful connections between exhibitors and the right attendees.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M6 34V18l14-12 14 12v16H6z" />
        <path d="M15 34v-9h10v9" />
        <path d="M6 18h28" />
      </svg>
    ),
  },
  {
    href: "/delegate-scanning",
    number: "04",
    title: "Delegate Scanning",
    subtitle: "& Lead Retrieval",
    description:
      "Lightning-fast QR and NFC badge scanning for session attendance tracking, CPD/CME compliance, lead retrieval and access control — real-time data at your fingertips.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M6 6h10v10H6zM24 6h10v10H24zM6 24h10v10H6z" />
        <path d="M24 24h4v4h-4zM30 24h4M24 30v4h4M30 30h4v4h-4z" />
        <path d="M3 14v-4a4 4 0 014-4h4M26 3h4a4 4 0 014 4v4M3 26v4a4 4 0 004 4h4" />
      </svg>
    ),
  },
  {
    href: "/virtual-event-platforms",
    number: "05",
    title: "Virtual Event",
    subtitle: "Platforms",
    description:
      "Fully branded virtual and hybrid event environments — live streaming, breakout rooms, virtual networking, digital exhibition halls and on-demand content libraries.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="4" y="8" width="32" height="20" rx="2" />
        <path d="M13 28l-3 6M27 28l3 6M10 34h20" />
        <circle cx="20" cy="18" r="5" />
        <path d="M26 12l4-4M14 12l-4-4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/membership-management",
    number: "06",
    title: "Membership",
    subtitle: "Management",
    description:
      "Comprehensive membership lifecycle management — renewals, directories, dues collection, communications and governance tools designed for professional associations.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <circle cx="20" cy="13" r="6" />
        <path d="M6 34c0-7.732 6.268-14 14-14s14 6.268 14 14" />
        <path d="M28 20l3 3 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/* ── STAT ITEMS ── */
const stats = [
  { value: "20+", label: "Years of Expertise" },
  { value: "500+", label: "Events Powered" },
  { value: "100K+", label: "Delegates Processed" },
  { value: "6", label: "Integrated Modules" },
];

/* ── SOFTWARE CARD COMPONENT ── */
function SoftwareCard({
  item,
  index,
}: {
  item: (typeof softwareItems)[0];
  index: number;
}) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        animation: inView
          ? `cardIn 0.6s ${index * 0.08}s cubic-bezier(0.22,1,0.36,1) forwards`
          : "none",
      }}
    >
      <Link
        href={item.href}
        className="group relative flex flex-col h-full bg-white border border-[#891c7a]/10 p-8 overflow-hidden transition-all duration-400 hover:shadow-2xl hover:-translate-y-1 hover:border-[#891c7a]/40"
      >
        {/* Number watermark */}
        <span
          className="absolute top-4 right-6 font-playfair text-6xl font-light select-none transition-colors duration-300 group-hover:text-[#891c7a]/10"
          style={{ color: "#f3e8f2" }}
        >
          {item.number}
        </span>

        {/* Purple fill on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ background: "linear-gradient(135deg, #891c7a08 0%, #891c7a14 100%)" }}
        />

        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out"
          style={{ background: "var(--brand)" }}
        />

        {/* Icon */}
        <div
          className="relative z-10 mb-6 w-14 h-14 flex items-center justify-center border transition-all duration-300 group-hover:bg-[#891c7a] group-hover:border-[#891c7a]"
          style={{ borderColor: "#891c7a40", color: "#891c7a" }}
        >
          <span className="group-hover:[&>svg]:stroke-white transition-colors duration-300">
            {item.icon}
          </span>
        </div>

        {/* Title */}
        <div className="relative z-10 mb-3">
          <p className="font-jost text-[10px] uppercase tracking-[0.4em] mb-1" style={{ color: "#891c7a" }}>
            {item.subtitle}
          </p>
          <h3 className="font-playfair text-2xl font-normal text-gray-900 leading-tight group-hover:text-[#891c7a] transition-colors duration-300">
            {item.title}
          </h3>
        </div>

        {/* Divider */}
        <div className="relative z-10 w-8 h-px mb-4" style={{ background: "#891c7a50" }} />

        {/* Description */}
        <p className="relative z-10 font-jost text-sm text-gray-500 leading-relaxed flex-1">
          {item.description}
        </p>

        {/* Arrow CTA */}
        <div className="relative z-10 mt-6 flex items-center gap-2 font-jost text-xs uppercase tracking-[0.3em] transition-colors duration-300 group-hover:text-[#891c7a]" style={{ color: "#aaa" }}>
          <span>Learn more</span>
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Link>
    </div>
  );
}

/* ── PAGE ── */
export default function EventSoftwarePage() {
  const heroRef = useInView(0);
  const aboutRef = useInView(0.1);
  const statsRef = useInView(0.1);
  const cardsHeadRef = useInView(0.1);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --brand: #891c7a;
          --brand-light: #b94daa;
          --brand-dim: #5a1250;
          --brand-pale: #f9f0f8;
        }

        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        .font-jost     { font-family: 'Jost', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .hero-line {
          transform-origin: left;
          transform: scaleX(0);
        }
        .hero-line.active {
          animation: lineGrow 1s 0.6s ease forwards;
        }

        /* Decorative ring */
        .deco-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(137,28,122,0.15);
          animation: spinSlow 30s linear infinite;
        }

      `}</style>

      <main>
        {/* ── HERO ── */}
        <section
          ref={heroRef.ref}
          className="relative min-h-[560px] flex items-center overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0f0009 0%, #2a0526 50%, #0f0009 100%)" }}
        >
          {/* Decorative rings */}
          <div className="deco-ring" style={{ width: 500, height: 500, top: -150, right: -100 }} />
          <div className="deco-ring" style={{ width: 300, height: 300, bottom: -80, right: 200, animationDirection: "reverse", animationDuration: "20s" }} />
          <div className="deco-ring" style={{ width: 200, height: 200, top: 60, left: "30%", animationDuration: "40s" }} />

          {/* Grain */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              backgroundSize: "200px",
            }}
          />

          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 70% at 70% 50%, rgba(137,28,122,0.25) 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-28 w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <p
                className="font-jost text-xs uppercase tracking-[0.55em] mb-6"
                style={{ opacity: 0, animation: heroRef.inView ? "fadeUp 0.6s 0.1s ease forwards" : "none", color: "var(--brand-light)" }}
              >
                SQL Events Nigeria
              </p>
              <h1
                className="font-playfair font-light text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6"
                style={{ opacity: 0, animation: heroRef.inView ? "fadeUp 0.8s 0.25s ease forwards" : "none" }}
              >
                Event<br />
                <em className="italic" style={{ color: "var(--brand-light)" }}>Software</em>
              </h1>

              <div
                className={`hero-line h-px mb-8 w-48 ${heroRef.inView ? "active" : ""}`}
                style={{ background: "linear-gradient(to right, var(--brand-light), transparent)" }}
              />

              <p
                className="font-jost font-light text-white/65 text-base leading-relaxed max-w-md"
                style={{ opacity: 0, animation: heroRef.inView ? "fadeUp 0.8s 0.5s ease forwards" : "none" }}
              >
                Award-winning event management technology from the Shocklogic stable — your reliable, value-centred partner for face-to-face, virtual, and hybrid events of any size.
              </p>

              <div
                className="mt-10 flex flex-wrap gap-3"
                style={{ opacity: 0, animation: heroRef.inView ? "fadeUp 0.7s 0.65s ease forwards" : "none" }}
              >
                <a
                  href="#software-modules"
                  className="font-jost text-xs uppercase tracking-[0.35em] px-8 py-3.5 text-white transition-all duration-300 hover:opacity-90"
                  style={{ background: "var(--brand)" }}
                >
                  Explore Modules
                </a>
                <a
                  href="/contact"
                  className="font-jost text-xs uppercase tracking-[0.35em] px-8 py-3.5 text-white/80 border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Right — floating feature pills */}
            <div
              className="hidden lg:flex flex-col gap-3 items-end"
              style={{ opacity: 0, animation: heroRef.inView ? "fadeIn 1s 0.7s ease forwards" : "none" }}
            >
              {[
                "Pre-conference Registration",
                "Onsite Accreditation",
                "Abstract & Reviewer Management",
                "Virtual Exhibition Halls",
                "Badge Printing & Scanning",
                "Post-event Analytics",
              ].map((feat, i) => (
                <div
                  key={feat}
                  className="font-jost text-xs tracking-wide px-5 py-2.5 border text-white/70 border-white/10 backdrop-blur-sm"
                  style={{
                    background: "rgba(137,28,122,0.12)",
                    animationDelay: `${0.8 + i * 0.1}s`,
                    marginRight: i % 2 === 0 ? "0" : "2rem",
                  }}
                >
                  <span className="mr-2" style={{ color: "var(--brand-light)" }}>◆</span>
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT SECTION ── */}
        <section ref={aboutRef.ref} className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — text */}
            <div>
              <p
                className="font-jost text-[10px] uppercase tracking-[0.5em] mb-4"
                style={{
                  opacity: 0,
                  animation: aboutRef.inView ? "fadeUp 0.6s 0s ease forwards" : "none",
                  color: "var(--brand)",
                }}
              >
                Our Platform
              </p>
              <h2
                className="font-playfair text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-8"
                style={{ opacity: 0, animation: aboutRef.inView ? "fadeUp 0.7s 0.1s ease forwards" : "none" }}
              >
                A true <em className="italic" style={{ color: "var(--brand)" }}>one-stop-shop</em><br />
                for every event
              </h2>

              <div
                style={{
                  opacity: 0,
                  animation: aboutRef.inView ? "fadeUp 0.8s 0.2s ease forwards" : "none",
                }}
              >
                <p className="font-jost text-gray-500 text-sm leading-[1.9] mb-5">
                  SQL Events Nigeria provides comprehensive, award-winning event management software and technology from the <strong className="text-gray-700 font-medium">Shocklogic stable</strong> — tailored for face-to-face, virtual, and hybrid events of any size. We bring over two decades of expertise, positioning ourselves as your reliable, value-centred technology and software partner.
                </p>
                <p className="font-jost text-gray-500 text-sm leading-[1.9] mb-5">
                  Our platform seamlessly integrates essential tools to manage every aspect of your event lifecycle — from online pre-conference registration to onsite accreditation, online exhibition management, abstract & reviewer management, scanning & lead retrieval, virtual platforms, and post-event data analysis.
                </p>
                <p className="font-jost text-gray-500 text-sm leading-[1.9]">
                  Whether you are a professional events manager or handle events for your association or corporation, by trusting SQL Events Nigeria you gain access to a unified system that drives engagement, simplifies logistics, and delivers a superior experience for attendees, exhibitors, and organisers alike.
                </p>
              </div>
            </div>

            {/* Right — decorative block */}
            <div
              className="relative"
              style={{ opacity: 0, animation: aboutRef.inView ? "fadeIn 1s 0.3s ease forwards" : "none" }}
            >
              {/* Large accent block */}
              <div
                className="absolute -top-6 -left-6 w-48 h-48 opacity-5 pointer-events-none"
                style={{ background: "var(--brand)" }}
              />
              <div className="relative border border-gray-100 p-10 bg-[#fdf8fc]">
                <p className="font-playfair text-lg italic text-gray-700 leading-relaxed mb-6" style={{ color: "#444" }}>
                  &quot;Our team comprises dedicated technology specialists, association experts, and seasoned event organisers who understand the industry&apos;s unique challenges.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px" style={{ background: "var(--brand)" }} />
                  <p className="font-jost text-xs uppercase tracking-[0.35em] text-gray-400">SQL Events Nigeria</p>
                </div>
              </div>

              {/* Shocklogic badge */}
              <div className="mt-4 border border-[#891c7a]/20 p-5 bg-white flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--brand)" }}
                >
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-jost text-xs font-medium text-gray-800 tracking-wide">Powered by Shocklogic</p>
                  <p className="font-jost text-xs text-gray-400 mt-0.5">Award-winning global event technology</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section
          ref={statsRef.ref}
          className="py-16 px-6"
          style={{ background: "var(--brand)" }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="text-center"
                style={{
                  opacity: 0,
                  animation: statsRef.inView ? `countUp 0.6s ${i * 0.1}s ease forwards` : "none",
                }}
              >
                <p className="font-playfair text-4xl md:text-5xl font-light text-white mb-2">{s.value}</p>
                <p className="font-jost text-xs uppercase tracking-[0.35em] text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SOFTWARE MODULES GRID ── */}
        <section id="software-modules" className="py-24 px-6 lg:px-16 bg-[#fdf8fc]">
          <div ref={cardsHeadRef.ref} className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="mb-16 max-w-2xl">
              <p
                className="font-jost text-[10px] uppercase tracking-[0.5em] mb-4"
                style={{
                  opacity: 0,
                  animation: cardsHeadRef.inView ? "fadeUp 0.6s 0s ease forwards" : "none",
                  color: "var(--brand)",
                }}
              >
                Software Modules
              </p>
              <h2
                className="font-playfair text-4xl md:text-5xl font-light text-gray-900 leading-tight"
                style={{ opacity: 0, animation: cardsHeadRef.inView ? "fadeUp 0.7s 0.1s ease forwards" : "none" }}
              >
                Six integrated tools,<br />
                <em className="italic" style={{ color: "var(--brand)" }}>one seamless platform</em>
              </h2>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareItems.map((item, i) => (
                <SoftwareCard key={item.href} item={item} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section
          className="relative py-28 px-6 overflow-hidden text-center"
          style={{ background: "linear-gradient(135deg, #0f0009, #2a0526, #0f0009)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(137,28,122,0.3) 0%, transparent 70%)" }}
          />
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="font-jost text-xs uppercase tracking-[0.5em] mb-5" style={{ color: "var(--brand-light)" }}>
              Ready to get started?
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white leading-snug mb-6">
              Let&apos;s power your<br />
              <em className="italic" style={{ color: "var(--brand-light)" }}>next event</em>
            </h2>
            <p className="font-jost text-white/50 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
              Talk to our team about which modules fit your event — we&apos;ll tailor a solution that works for your scale, budget, and goals.
            </p>
            <a
              href="/contact"
              className="inline-block font-jost text-xs uppercase tracking-[0.4em] px-12 py-4 text-white transition-all duration-300"
              style={{ background: "var(--brand)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--brand-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--brand)")}
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}