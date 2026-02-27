"use client";

import { useEffect, useRef, useState } from "react";
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

/* ── KEY OFFERINGS ── */
const offerings = [
  {
    id: "01",
    title: "Centralised Management",
    description:
      "A complete browser-based solution — no additional software required. Manage member records, categorisation, grouping, contact details, committees, and special interest groups from one secure online hub.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="7" />
        <path d="M24 6v4M24 38v4M6 24h4M38 24h4" strokeLinecap="round" />
        <path d="M24 17v7l5 5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: [
      "Browser-based — no installation or additional software",
      "Member record maintenance, tracking & categorisation",
      "Grouping, segmentation & user-defined contact selection",
      "Committee and special interest group management",
      "Affiliation management for linked associations",
      "Multi-lingual interface for diverse member bases",
    ],
  },
  {
    id: "02",
    title: "Online Membership Forms",
    description:
      "Custom-designed, branded membership and data-collection forms available 24/7 from any internet-connected device. Create questionnaires, surveys, and registration forms with no HTML knowledge required.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <path d="M10 6h28v36H10z" />
        <path d="M17 6v5h14V6" />
        <path d="M17 20h14M17 27h14M17 34h8" strokeLinecap="round" />
        <circle cx="36" cy="38" r="7" fill="white" stroke="currentColor" strokeWidth="1.4" />
        <path d="M33 38l2 2 4-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
    bullets: [
      "Custom-branded membership definition forms",
      "Online surveys and questionnaires — created & submitted digitally",
      "Available 24/7 from any PC or mobile with internet access",
      "Automatic username and password issued on registration",
      "Members-only secure area for self-service data updates",
      "Event registration directly from the members portal",
    ],
  },
  {
    id: "03",
    title: "Integrated Payment Processing",
    description:
      "Secure e-commerce payment collection for dues, renewals, and subscriptions — with payments transferred automatically into your bank account and a complete financial audit trail.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <rect x="4" y="12" width="40" height="28" rx="3" />
        <path d="M4 20h40" />
        <rect x="10" y="28" width="10" height="6" rx="1" />
        <path d="M28 31h10" strokeLinecap="round" />
        <path d="M28 34h6" strokeLinecap="round" />
        <path d="M30 8l-4 4h16l-4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bullets: [
      "Secure online dues, renewals and subscription payments",
      "Payments transferred automatically into your bank account",
      "Complete financial records and invoicing",
      "Encrypted transactions on a secure server",
      "Daily data backup and strict security protocols",
      "No third-party redirection — seamless member experience",
    ],
  },
  {
    id: "04",
    title: "Communication & CRM",
    description:
      "Personalised mass email broadcasting, targeted by membership group or category. Keep all members informed simultaneously with communications addressed to them individually.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <rect x="4" y="10" width="40" height="28" rx="3" />
        <path d="M4 14l20 14 20-14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 34l12-10M44 34L32 24" strokeLinecap="round" />
      </svg>
    ),
    bullets: [
      "Personalised bulk email broadcasting to all members",
      "Segment and target communications by group or category",
      "All members receive the same vital information simultaneously",
      "Tailored information delivered to each membership type",
      "Full integration with your existing database or CRM",
      "Powerful import and export engine for data synchronisation",
    ],
  },
];

/* ── FEATURES LIST ── */
const features = [
  "Complete browser-based solution — no software installation required",
  "Custom-branded membership forms collecting all necessary member information",
  "Online forms available 24/7 from any internet-connected device",
  "Automatic login credentials issued to every online registrant",
  "Member self-service portal for updating details and registering for events",
  "Personalised bulk email broadcast segmented by group or membership type",
  "Secure e-commerce payment — dues and renewals paid directly to your account",
  "Unlimited admin users with no bottlenecks",
  "Full import/export engine for seamless data synchronisation",
  "Daily encrypted backups on a secure, authentication-protected server",
];

/* ── STATS ── */
const stats = [
  { value: "24/7",      label: "Online Access" },
  { value: "Multi",     label: "Lingual System" },
  { value: "Secure",    label: "Encrypted Server" },
  { value: "Unlimited", label: "Admin Users" },
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
        <div className="mb-6 w-16 h-16 flex items-center justify-center border transition-all duration-300 group-hover:bg-[#891c7a] group-hover:border-[#891c7a] flex-shrink-0" style={{ borderColor:"#891c7a35", color:"#891c7a" }}>
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
export default function MembershipManagementPage() {
  const heroRef     = useInView(0);
  const overviewRef = useInView(0.08);
  const checkRef    = useInView(0.08);
  const statsRef    = useInView(0.08);
  const offHeadRef  = useInView(0.08);
  const quoteRef    = useInView(0.08);
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
        <section ref={heroRef.ref} className="relative min-h-[540px] flex items-center overflow-hidden" style={{ background:"linear-gradient(135deg,#0f0009 0%,#2a0526 55%,#0f0009 100%)" }}>
          <div className="deco-ring" style={{ width:540,height:540,top:-160,right:-110,animation:"spin 38s linear infinite" }} />
          <div className="deco-ring" style={{ width:300,height:300,bottom:-90,right:260,animation:"spin 24s linear infinite reverse" }} />
          <div className="deco-ring" style={{ width:170,height:170,top:70,left:"36%",animation:"spin 52s linear infinite" }} />
          <div className="absolute inset-0 opacity-[0.17] pointer-events-none" style={{ backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",backgroundSize:"200px" }} />
          <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 55% 70% at 65% 50%,rgba(137,28,122,0.28) 0%,transparent 70%)" }} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-28 w-full">
            <div className="flex items-center gap-2 mb-8" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.5s 0s ease forwards":"none" }}>
              <Link href="/services" className="font-jost text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white/70 transition-colors">Event Software</Link>
              <span className="text-white/25 text-xs">›</span>
              <span className="font-jost text-[10px] uppercase tracking-[0.4em]" style={{ color:"var(--brand-light)" }}>Membership Management</span>
            </div>
            <div className="max-w-3xl">
              <p className="font-jost text-xs uppercase tracking-[0.55em] mb-5" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.6s 0.12s ease forwards":"none", color:"var(--brand-light)" }}>
                Powered by Memberlogic
              </p>
              <h1 className="font-playfair font-light text-5xl md:text-6xl lg:text-[4.5rem] text-white leading-[1.06] mb-6" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.8s 0.22s ease forwards":"none" }}>
                Membership<br /><em className="italic" style={{ color:"var(--brand-light)" }}>Management Software</em>
              </h1>
              <div className={`hero-line h-px mb-8 w-56 ${heroRef.inView?"grow":""}`} style={{ background:"linear-gradient(to right,var(--brand-light),transparent)" }} />
              <p className="font-jost font-light text-white/60 text-base md:text-[1.05rem] leading-relaxed max-w-xl" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.8s 0.48s ease forwards":"none" }}>
                A complete online administration tool for organisations with large membership bases — streamlining operations, maximising member value, and keeping your community engaged.
              </p>
              <div className="flex flex-wrap gap-3 mt-10" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.7s 0.62s ease forwards":"none" }}>
                <a href="#offerings" className="font-jost text-xs uppercase tracking-[0.35em] px-8 py-3.5 text-white transition-all duration-300 hover:opacity-90" style={{ background:"var(--brand)" }}>Explore Features</a>
                <a href="/contact" className="font-jost text-xs uppercase tracking-[0.35em] px-8 py-3.5 text-white/70 border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300">Get in Touch</a>
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
                Your members,<br /><em className="italic" style={{ color:"var(--brand)" }}>perfectly managed</em>
              </h2>
              <div style={{ opacity:0, animation: overviewRef.inView?"fadeUp 0.8s 0.2s ease forwards":"none" }}>
                <p className="font-jost text-gray-500 text-sm leading-[1.95] mb-5">
                  Memberlogic is a multi-lingual, browser-based administration tool for organisations with large membership bases. It is a complete online solution — handling all aspects of membership management including subscriptions, payments, email communication, activities, and secure member-only access, with no additional software required.
                </p>
                <p className="font-jost text-gray-500 text-sm leading-[1.95] mb-5">
                  Maintain membership data using powerful functions such as <strong className="text-gray-700 font-medium">grouping and user-defined contact selection</strong>, categorisation and coding. Create multiple online forms to gather data from members — questionnaires, surveys, registration forms — all available 24/7 from any device.
                </p>
                <p className="font-jost text-gray-500 text-sm leading-[1.95]">
                  Effortlessly manage community engagement and administration with our user-friendly CRM system. Whether you are managing a professional association of 500 or a national body of 50,000 members — Memberlogic scales with you, integrates with your existing systems, and keeps your entire database <strong className="text-gray-700 font-medium">encrypted, backed up daily, and fully secure</strong>.
                </p>
              </div>
            </div>

            {/* Feature checklist */}
            <div ref={checkRef.ref}>
              <div className="border border-[#891c7a]/12 p-8 md:p-10" style={{ background:"var(--brand-pale)", opacity:0, animation: checkRef.inView?"fadeIn 0.8s 0.1s ease forwards":"none" }}>
                <p className="font-jost text-[10px] uppercase tracking-[0.45em] mb-7" style={{ color:"var(--brand)" }}>Platform Capabilities</p>
                <ul className="flex flex-col gap-4">
                  {features.map((feat, i) => (
                    <li key={feat} className="flex items-start gap-4" style={{ opacity:0, animation: checkRef.inView?`fadeUp 0.5s ${0.15+i*0.05}s ease forwards`:"none" }}>
                      <span className="mt-0.5 w-5 h-5 flex items-center justify-center flex-shrink-0" style={{ background:"var(--brand)" }}>
                        <svg viewBox="0 0 16 16" fill="none" className="w-3 h-3"><path d="M3 8l4 4 6-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
                <p className="font-playfair text-3xl md:text-4xl font-light mb-1">{s.value}</p>
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
                Everything your<br /><em className="italic" style={{ color:"var(--brand)" }}>association needs</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offerings.map((item, i) => <OfferingCard key={item.id} item={item} index={i} />)}
            </div>
          </div>
        </section>

        {/* ══ MEMBERLOGIC CALLOUT ══ */}
        <section ref={quoteRef.ref} className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
          <div
            className="grid md:grid-cols-3 gap-0 overflow-hidden border border-[#891c7a]/12"
            style={{ opacity:0, animation: quoteRef.inView?"fadeIn 0.9s 0s ease forwards":"none" }}
          >
            {/* Dark left panel */}
            <div className="md:col-span-1 p-10 flex flex-col justify-center" style={{ background:"var(--brand)" }}>
              <p className="font-jost text-[10px] uppercase tracking-[0.45em] text-white/45 mb-4">Powered by</p>
              <p className="font-playfair text-4xl font-light text-white mb-2">Member<em className="italic">logic</em></p>
              <div className="w-8 h-px bg-white/25 my-4" />
              <p className="font-jost text-xs text-white/50 leading-relaxed">
                A proven multi-lingual, browser-based membership administration platform trusted by professional associations across Africa and beyond.
              </p>
            </div>
            {/* Right — three quick highlights */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#891c7a]/10" style={{ background:"#fff" }}>
              {[
                { icon:"◈", title:"Centralised Records", desc:"All member data, invoices, communications and activity logs in one secure place." },
                { icon:"◉", title:"Integrated Payments", desc:"Dues and renewals collected online, transferred automatically to your account." },
                { icon:"◐", title:"Dedicated Support", desc:"Expert assistance ensuring smooth platform adoption and ongoing operation." },
              ].map((item) => (
                <div key={item.title} className="p-8 flex flex-col gap-3">
                  <span className="text-2xl" style={{ color:"var(--brand)", opacity:0.5 }}>{item.icon}</span>
                  <p className="font-playfair text-lg font-normal text-gray-900">{item.title}</p>
                  <p className="font-jost text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section ref={ctaRef.ref} className="relative py-28 px-6 text-center overflow-hidden" style={{ background:"linear-gradient(135deg,#0f0009,#2a0526,#0f0009)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 50% 65% at 50% 50%,rgba(137,28,122,0.32) 0%,transparent 70%)" }} />
          <div className="relative z-10 max-w-2xl mx-auto" style={{ opacity:0, animation: ctaRef.inView?"fadeUp 0.8s 0s ease forwards":"none" }}>
            <p className="font-jost text-xs uppercase tracking-[0.5em] mb-5" style={{ color:"var(--brand-light)" }}>Ready to streamline your association?</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white leading-snug mb-6">
              Let's manage your<br /><em className="italic" style={{ color:"var(--brand-light)" }}>membership together</em>
            </h2>
            <p className="font-jost text-white/50 text-sm leading-relaxed mb-10 max-w-md mx-auto">
              From member record management and online forms to secure payment collection and bulk communications — Memberlogic gives your association the tools it needs to grow and thrive.
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