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
    title: "Centralised Management",
    description:
      "A complete browser-based solution — no additional software required. Manage member records, categorisation, grouping, contact details, committees, and special interest groups from one secure online hub.",
    bullets: [
      "Browser-based — no installation or additional software",
      "Member record maintenance, tracking & categorisation",
      "Grouping, segmentation & user-defined contact selection",
      "Committee and special interest group management",
      "Affiliation management for linked associations",
      "Multi-lingual interface for diverse member bases",
    ],
    image: "/slider/photo6.jpg",
  },
  {
    id: "02",
    title: "Online Membership Forms",
    description:
      "Custom-designed, branded membership and data-collection forms available 24/7 from any internet-connected device. Create questionnaires, surveys, and registration forms with no HTML knowledge required.",
    bullets: [
      "Custom-branded membership definition forms",
      "Online surveys and questionnaires — created & submitted digitally",
      "Available 24/7 from any PC or mobile with internet access",
      "Automatic username and password issued on registration",
      "Members-only secure area for self-service data updates",
      "Event registration directly from the members portal",
    ],
    image: "/slider/photo3.jpg",
  },
  {
    id: "03",
    title: "Integrated Payment Processing",
    description:
      "Secure e-commerce payment collection for dues, renewals, and subscriptions — with payments transferred automatically into your bank account and a complete financial audit trail.",
    bullets: [
      "Secure online dues, renewals and subscription payments",
      "Payments transferred automatically into your bank account",
      "Complete financial records and invoicing",
      "Encrypted transactions on a secure server",
      "Daily data backup and strict security protocols",
      "No third-party redirection — seamless member experience",
    ],
    image: "/slider/photo7.jpeg",
  },
  {
    id: "04",
    title: "Communication & CRM",
    description:
      "Personalised mass email broadcasting, targeted by membership group or category. Keep all members informed simultaneously with communications addressed to them individually.",
    bullets: [
      "Personalised bulk email broadcasting to all members",
      "Segment and target communications by group or category",
      "All members receive the same vital information simultaneously",
      "Tailored information delivered to each membership type",
      "Full integration with your existing database or CRM",
      "Powerful import and export engine for data synchronisation",
    ],
    image: "/slider/photo2.jpg",
  },
];

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

const stats = [
  { value: "24/7",      label: "Online Access" },
  { value: "Multi",     label: "Lingual System" },
  { value: "Secure",    label: "Encrypted Server" },
  { value: "Unlimited", label: "Admin Users" },
];

export default function MembershipManagementPage() {
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
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-2 font-sans">Powered by Memberlogic</p>
              <h1
                className="text-4xl md:text-5xl font-light tracking-widest text-gray-900 uppercase"
                style={{ letterSpacing: "0.18em" }}
              >
                Membership
                <br />
                Management
              </h1>
            </div>
          </div>
        </section>

        {/* ── OVERVIEW — image left, text right ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-start">
            {/* Image left — unique to this page */}
            <div className="relative w-full h-80 lg:h-full min-h-[420px] overflow-hidden rounded-sm order-last lg:order-first">
              <Image src="/slider/photo1.jpeg" alt="Membership management" fill className="object-cover" />
            </div>

            <div ref={overviewRef.ref}>
              <h2
                className="text-2xl font-semibold text-gray-900 mb-6"
                style={{ opacity: 0, animation: overviewRef.inView ? "fadeUp 0.6s 0s ease forwards" : "none" }}
              >
                Your Members, Perfectly Managed
              </h2>
              <div
                className="space-y-5 text-[15px] leading-relaxed text-gray-600 font-sans"
                style={{ opacity: 0, animation: overviewRef.inView ? "fadeUp 0.7s 0.1s ease forwards" : "none" }}
              >
                <p>
                  Memberlogic is a multi-lingual, browser-based administration tool for
                  organisations with large membership bases. It is a complete online solution —
                  handling all aspects of membership management including subscriptions, payments,
                  email communication, activities, and secure member-only access.
                </p>
                <p>
                  Maintain membership data using powerful functions such as grouping and
                  user-defined contact selection, categorisation and coding. Create multiple online
                  forms to gather data from members — questionnaires, surveys, registration forms
                  — all available 24/7 from any device.
                </p>
                <p>
                  Whether you are managing a professional association of 500 or a national body of
                  50,000 members — Memberlogic scales with you, integrates with your existing
                  systems, and keeps your entire database encrypted, backed up daily, and fully secure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES CHECKLIST — full width 2-column grid ── */}
        <section className="py-16 bg-gray-50">
          <div ref={checkRef.ref} className="max-w-7xl mx-auto px-6 lg:px-12">
            <p
              className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-8 font-sans"
              style={{ opacity: 0, animation: checkRef.inView ? "fadeUp 0.5s 0s ease forwards" : "none" }}
            >
              Platform Capabilities
            </p>
            <div
              className="grid md:grid-cols-2 gap-x-16 gap-y-4"
              style={{ opacity: 0, animation: checkRef.inView ? "fadeIn 0.8s 0.1s ease forwards" : "none" }}
            >
              {features.map((feat, i) => (
                <div
                  key={feat}
                  className="flex items-start gap-3 font-sans text-[14px] text-gray-600 leading-relaxed border-b border-gray-200 pb-4"
                  style={{ opacity: 0, animation: checkRef.inView ? `fadeUp 0.5s ${0.1 + i * 0.05}s ease forwards` : "none" }}
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                  {feat}
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

        {/* ── OFFERINGS — start image-right for variety ── */}
        <section id="offerings" className="py-16 bg-white">
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
                Everything Your Association Needs
              </h2>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-0">
            {offerings.map((item, idx) => (
              <div key={item.id} className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                {/* starts card-left / image-right on even rows */}
                <div className={`bg-gray-50 border border-gray-200 p-8 lg:p-10 flex flex-col justify-center ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs uppercase tracking-widest text-gray-400 font-sans">{item.id}</span>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
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
                <div className={`relative h-72 lg:h-auto min-h-[300px] ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MEMBERLOGIC CALLOUT — unique 3-panel block ── */}
        <section className="py-16 bg-gray-50">
          <div ref={quoteRef.ref} className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              className="grid md:grid-cols-3 overflow-hidden border border-gray-200"
              style={{ opacity: 0, animation: quoteRef.inView ? "fadeIn 0.9s 0s ease forwards" : "none" }}
            >
              {/* Dark left panel */}
              <div className="md:col-span-1 p-10 flex flex-col justify-center bg-gray-900">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4 font-sans">Powered by</p>
                <p className="text-4xl font-light text-white mb-2">Member<span className="italic">logic</span></p>
                <div className="w-8 h-px bg-white/20 my-4" />
                <p className="font-sans text-sm text-white/50 leading-relaxed">
                  A proven multi-lingual, browser-based membership administration platform trusted
                  by professional associations across Africa and beyond.
                </p>
              </div>
              {/* Right — three highlights */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 bg-white">
                {[
                  { title: "Centralised Records", desc: "All member data, invoices, communications and activity logs in one secure place." },
                  { title: "Integrated Payments", desc: "Dues and renewals collected online, transferred automatically to your account." },
                  { title: "Dedicated Support",   desc: "Expert assistance ensuring smooth platform adoption and ongoing operation." },
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

        {/* ── PHOTO STRIP ── */}
        <section className="grid grid-cols-3">
          {["/slider/photo4.jpg", "/slider/photo5.jpg", "/slider/photo7.jpeg"].map((src, i) => (
            <div key={i} className="relative h-64 overflow-hidden group">
              <Image src={src} alt={`SQL Events membership ${i}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </section>

        {/* ── CTA ── */}
        <section ref={ctaRef.ref} className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
            <div style={{ opacity: 0, animation: ctaRef.inView ? "fadeUp 0.7s 0s ease forwards" : "none" }}>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-4 font-sans">Ready to streamline your association?</p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Let&apos;s manage your<br />
                <span className="italic">membership together</span>
              </h2>
            </div>
            <div
              className="space-y-4 font-sans"
              style={{ opacity: 0, animation: ctaRef.inView ? "fadeUp 0.7s 0.15s ease forwards" : "none" }}
            >
              <p className="text-white/70 leading-relaxed text-[15px]">
                From member record management and online forms to secure payment collection and
                bulk communications — Memberlogic gives your association the tools it needs to
                grow and thrive.
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