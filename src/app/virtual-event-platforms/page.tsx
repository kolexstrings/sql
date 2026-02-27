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

const offerings = [
  {
    id: "01",
    title: "Platform Options",
    description:
      "Choose between clean, content-focused 2D Platforms or highly engaging, navigable 3D Platforms designed to replicate the look, feel, and flow of a physical venue.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <rect x="4" y="8" width="40" height="28" rx="3" />
        <path d="M4 18h40M14 8v28" />
        <path d="M20 24l6-4v8l6-4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 40l-3 5M32 40l3 5M10 45h28" strokeLinecap="round" />
      </svg>
    ),
    bullets: [
      "2D Platforms — clean, content-focused and distraction-free",
      "3D Platforms — navigable virtual venue replicating physical events",
      "Access via your website, YouTube or social media",
      "Full session, exhibition & networking access for virtual attendees",
      "Text & Video Chat for Q&A and delegate interaction",
      "Mobile App integration for on-the-go participation",
    ],
  },
  {
    id: "02",
    title: "Virtual Exhibition eStands",
    description:
      "Dedicated 2D or 3D digital exhibition booths for sponsors and exhibitors — featuring integrated live chat, video calls, downloadable documents, and measurable lead generation analytics.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <path d="M6 38V22l18-14 18 14v16H6z" />
        <path d="M6 22h36" />
        <path d="M18 38V28h12v10" />
        <path d="M24 22v-6" strokeLinecap="round" />
        <circle cx="38" cy="36" r="7" fill="white" stroke="currentColor" strokeWidth="1.4" />
        <path d="M35 36l2 2 4-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
    bullets: [
      "2D and 3D digital exhibition eStand options",
      "Integrated live chat and video call with booth visitors",
      "Downloadable brochures and document library per booth",
      "Measurable lead generation analytics per eStand",
      "Branded booth design aligned to sponsor identity",
      "Real-time visitor tracking and engagement metrics",
    ],
  },
  {
    id: "03",
    title: "Full Production Team Services",
    description:
      "A dedicated technical crew ensures seamless video streaming, troubleshooting, and broadcast-quality production for all live and pre-recorded sessions throughout your event.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <rect x="4" y="14" width="28" height="20" rx="2" />
        <path d="M32 20l10-6v20l-10-6V20z" />
        <circle cx="18" cy="24" r="4" />
        <path d="M4 38h28M10 42h16" strokeLinecap="round" />
      </svg>
    ),
    bullets: [
      "Dedicated technical crew for your entire event",
      "Seamless live video streaming setup and management",
      "Real-time troubleshooting and on-call technical support",
      "Broadcast-quality production for all live sessions",
      "Pre-recorded session editing, encoding and scheduling",
      "Multi-platform simultaneous broadcast capability",
    ],
  },
  {
    id: "04",
    title: "Speaker Training",
    description:
      "Comprehensive onboarding and technical coaching for all presenters — ensuring they are confident, comfortable, and professional on camera for a polished delivery to the online audience.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <circle cx="24" cy="14" r="8" />
        <path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" />
        <path d="M30 26l4 4-8 6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36 22l4-2M38 28l4 1" strokeLinecap="round" />
      </svg>
    ),
    bullets: [
      "Technical onboarding for all confirmed speakers",
      "Camera presence and on-screen delivery coaching",
      "Lighting, audio and background setup guidance",
      "Full rehearsal and dry-run sessions pre-event",
      "Slide-sharing and screen-share technical checks",
      "Dedicated speaker support throughout the live event",
    ],
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
  { value: "2D/3D",  label: "Platform Options" },
  { value: "Live",   label: "Video Streaming" },
  { value: "eStand", label: "Virtual Exhibition" },
  { value: "Full",   label: "Production Crew" },
];

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

export default function VirtualEventPlatformsPage() {
  const heroRef     = useInView(0);
  const overviewRef = useInView(0.08);
  const checkRef    = useInView(0.08);
  const compareRef  = useInView(0.08);
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
              <span className="font-jost text-[10px] uppercase tracking-[0.4em]" style={{ color:"var(--brand-light)" }}>Virtual Event Platforms</span>
            </div>
            <div className="max-w-3xl">
              <p className="font-jost text-xs uppercase tracking-[0.55em] mb-5" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.6s 0.12s ease forwards":"none", color:"var(--brand-light)" }}>
                Hybrid & Virtual Solutions
              </p>
              <h1 className="font-playfair font-light text-5xl md:text-6xl lg:text-[4.5rem] text-white leading-[1.06] mb-6" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.8s 0.22s ease forwards":"none" }}>
                Virtual Event<br /><em className="italic" style={{ color:"var(--brand-light)" }}>Platforms</em>
              </h1>
              <div className={`hero-line h-px mb-8 w-56 ${heroRef.inView?"grow":""}`} style={{ background:"linear-gradient(to right,var(--brand-light),transparent)" }} />
              <p className="font-jost font-light text-white/60 text-base md:text-[1.05rem] leading-relaxed max-w-xl" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.8s 0.48s ease forwards":"none" }}>
                Engaging digital event experiences with fully supported virtual and hybrid solutions — immersive environments, live production, and reliable technical delivery for audiences anywhere in the world.
              </p>
              <div className="flex flex-wrap gap-3 mt-10" style={{ opacity:0, animation: heroRef.inView?"fadeUp 0.7s 0.62s ease forwards":"none" }}>
                <a href="#offerings" className="font-jost text-xs uppercase tracking-[0.35em] px-8 py-3.5 text-white transition-all duration-300 hover:opacity-90" style={{ background:"var(--brand)" }}>Explore Offerings</a>
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
                Your event,<br /><em className="italic" style={{ color:"var(--brand)" }}>everywhere at once</em>
              </h2>
              <div style={{ opacity:0, animation: overviewRef.inView?"fadeUp 0.8s 0.2s ease forwards":"none" }}>
                <p className="font-jost text-gray-500 text-sm leading-[1.95] mb-5">
                  We deliver engaging digital event experiences with fully supported virtual and hybrid solutions — offering immersive environments and reliable technical production services that bring your event to audiences wherever they are.
                </p>
                <p className="font-jost text-gray-500 text-sm leading-[1.95] mb-5">
                  All virtual attendees gain access to your event via your website, YouTube or social media platforms. They receive full access to all <strong className="text-gray-700 font-medium">sessions, exhibitions, and networking</strong> with other delegates through the Virtual Platform and Mobile App — with text and video chat enabling real-time Q&A participation.
                </p>
                <p className="font-jost text-gray-500 text-sm leading-[1.95]">
                  Whether you choose a clean <strong className="text-gray-700 font-medium">2D Platform</strong> or a fully navigable <strong className="text-gray-700 font-medium">3D virtual venue</strong>, our dedicated production team and speaker coaching services ensure a professional, polished experience from opening keynote to closing session.
                </p>
              </div>
            </div>
            <div ref={checkRef.ref}>
              <div className="border border-[#891c7a]/12 p-8 md:p-10" style={{ background:"var(--brand-pale)", opacity:0, animation: checkRef.inView?"fadeIn 0.8s 0.1s ease forwards":"none" }}>
                <p className="font-jost text-[10px] uppercase tracking-[0.45em] mb-7" style={{ color:"var(--brand)" }}>Platform Capabilities</p>
                <ul className="flex flex-col gap-4">
                  {featureChecklist.map((feat, i) => (
                    <li key={feat} className="flex items-start gap-4" style={{ opacity:0, animation: checkRef.inView?`fadeUp 0.5s ${0.15+i*0.06}s ease forwards`:"none" }}>
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

        {/* ══ 2D vs 3D COMPARISON ══ */}
        <section ref={compareRef.ref} className="px-6 lg:px-16 pb-20 max-w-7xl mx-auto">
          <div
            className="grid md:grid-cols-2 overflow-hidden border border-[#891c7a]/15"
            style={{ opacity:0, animation: compareRef.inView?"fadeIn 0.8s 0.1s ease forwards":"none" }}
          >
            {[
              { label:"2D Virtual Platform", tag:"Clean & Content-Focused", dark:false, points:["Distraction-free session viewer","Clear, intuitive navigation menus","Fast loading for all connection speeds","Ideal for conferences, webinars & AGMs"] },
              { label:"3D Virtual Platform", tag:"Immersive Experience", dark:true,  points:["Fully navigable virtual venue spaces","Replicates the physical event atmosphere","Avatar presence & spatial networking","Ideal for exhibitions, summits & launches"] },
            ].map((col) => (
              <div key={col.label} className="p-10 flex flex-col gap-4" style={{ background: col.dark?"var(--brand)":"var(--brand-pale)" }}>
                <p className="font-jost text-[10px] uppercase tracking-[0.4em]" style={{ color: col.dark?"rgba(255,255,255,0.45)":"var(--brand)" }}>{col.tag}</p>
                <h3 className="font-playfair text-2xl font-light" style={{ color: col.dark?"white":"#1a1a1a" }}>{col.label}</h3>
                <div className="w-8 h-px" style={{ background: col.dark?"rgba(255,255,255,0.3)":"#891c7a50" }} />
                <ul className="flex flex-col gap-2.5 mt-1">
                  {col.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: col.dark?"rgba(255,255,255,0.45)":"#891c7a" }} />
                      <span className="font-jost text-sm leading-relaxed" style={{ color: col.dark?"rgba(255,255,255,0.65)":"#6b7280" }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
                Four pillars of<br /><em className="italic" style={{ color:"var(--brand)" }}>virtual event excellence</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {offerings.map((item, i) => <OfferingCard key={item.id} item={item} index={i} />)}
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section ref={ctaRef.ref} className="relative py-28 px-6 text-center overflow-hidden" style={{ background:"linear-gradient(135deg,#0f0009,#2a0526,#0f0009)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse 50% 65% at 50% 50%,rgba(137,28,122,0.32) 0%,transparent 70%)" }} />
          <div className="relative z-10 max-w-2xl mx-auto" style={{ opacity:0, animation: ctaRef.inView?"fadeUp 0.8s 0s ease forwards":"none" }}>
            <p className="font-jost text-xs uppercase tracking-[0.5em] mb-5" style={{ color:"var(--brand-light)" }}>Ready to go virtual?</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white leading-snug mb-6">
              Let&apos;s build your<br /><em className="italic" style={{ color:"var(--brand-light)" }}>virtual event experience</em>
            </h2>
            <p className="font-jost text-white/50 text-sm leading-relaxed mb-10 max-w-md mx-auto">
              From platform selection and eStand design to speaker coaching and live production, our team will deliver a virtual event experience that rivals any in-person conference.
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