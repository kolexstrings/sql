"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const accessories = [
  {
    name: "Attachment Clips",
    desc: "Choose from classic Metal J-Hooks, secure Dog Clips, versatile Split Rings, or robust Plastic Buckles depending on the badge hole type and intended use.",
  },
  {
    name: "Safety Breakaways",
    desc: "Essential for health and safety, these clips snap open under tension, preventing choking hazards. Mandatory for many corporate and educational events.",
  },
  {
    name: "Quick Release Buckles",
    desc: "Convenient plastic buckles that allow the badge portion to be detached easily for scanning or close inspection without removing the entire lanyard.",
  },
];

const brandedFeatures = [
  {
    feature: "Custom Branding",
    description: "Single or double-sided printing of your logo, event name, or sponsor graphics. We accommodate complex designs, full-colour gradients, and specific Pantone matching.",
    benefit: "Enhanced brand recall, professional appearance, and value proposition for sponsors.",
  },
  {
    feature: "Printing Methods",
    description: "Screen Printing (bold, simple logos), Dye Sublimation (photorealistic & full-colour designs), or Woven (textured, durable finish).",
    benefit: "Choose the method that best matches your design complexity, material, and budget.",
  },
  {
    feature: "Material Options",
    description: "Durable polyester, eco-friendly recycled PET (rPET), comfortable cotton, or premium nylon.",
    benefit: "Select for durability, comfort, or alignment with sustainability goals.",
  },
  {
    feature: "Width & Length",
    description: "Standard widths (10mm, 15mm, 20mm, 25mm) and custom lengths for universal fit or specific security requirements.",
    benefit: "Optimal badge display and comfortable wear for all attendees.",
  },
];

export default function LanyardsPage() {
  const hero2 = useInView();
  const section1 = useInView();
  const section2 = useInView();
  const section3 = useInView();
  const section4 = useInView();

  return (
    <div className="min-h-screen bg-[#f8f6f2] font-['Georgia',serif] overflow-x-hidden">
      <Header />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        .anim-up { animation: fadeUp 0.8s ease forwards; }
        .anim-left { animation: fadeLeft 0.8s ease forwards; }
        .anim-right { animation: fadeRight 0.8s ease forwards; }
        .anim-scale { animation: scaleIn 0.9s ease forwards; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.25s; }
        .delay-3 { animation-delay: 0.4s; }
        .delay-4 { animation-delay: 0.55s; }
        .img-zoom { overflow: hidden; }
        .img-zoom img { transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
        .img-zoom:hover img { transform: scale(1.07); }
        .hidden-anim { opacity: 0; }
      `}</style>

      <main>

        {/* ── FULL-BLEED EDITORIAL HERO ── */}
        <section className="relative w-full h-[92vh] min-h-[600px] overflow-hidden">
          <div className="img-zoom absolute inset-0">
            <Image
              src="/slider/photo1.jpeg"
              alt="Event lanyards in use"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/75" />

          {/* Editorial text overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16 lg:p-20">
            <div className="max-w-7xl mx-auto">
              <p
                className="text-xs uppercase tracking-[0.5em] text-white/70 mb-4 anim-up"
                style={{ animationDelay: "0.2s", opacity: 0, animation: "fadeUp 0.8s 0.2s ease forwards" }}
              >
                SQL Events Nigeria
              </p>
              <h1
                className="text-6xl md:text-8xl lg:text-[110px] font-light text-white leading-none tracking-tight mb-6"
                style={{ opacity: 0, animation: "fadeUp 0.9s 0.35s ease forwards" }}
              >
                Lanyards
                <br />
                <span className="italic font-normal">Supply</span>
              </h1>
              <div
                className="w-24 h-[1px] bg-white/50 mb-6"
                style={{ opacity: 0, animation: "fadeUp 0.7s 0.55s ease forwards" }}
              />
              <p
                className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed font-light"
                style={{ opacity: 0, animation: "fadeUp 0.8s 0.65s ease forwards" }}
              >
                Branded & Plain Lanyards — Essential Event Credentials
              </p>
            </div>
          </div>

          {/* Side label — magazine style */}
          <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:block">
            <p
              className="text-white/30 text-xs uppercase tracking-[0.4em]"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              SQL Events Nigeria
            </p>
          </div>
        </section>

        {/* ── INTRO PULL QUOTE ── */}
        <section className="py-20 bg-[#f8f6f2]">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div
              ref={section1.ref}
              className={`${section1.inView ? "anim-up" : "hidden-anim"}`}
            >
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed border-l-4 border-gray-900 pl-8">
                &quot;Lanyards are a fundamental component of event logistics — the critical link between attendee identification and secure, professional presentation.&quot;
              </p>
              <div className="mt-10 grid md:grid-cols-2 gap-8 text-[15px] text-gray-600 leading-relaxed">
                <p>
                  Whether you require highly customised, branded lanyards to showcase your brand or sponsors and elevate your corporate identity, or need immediate supply of plain lanyards for general use — we offer a comprehensive range of materials, styles, and accessories to meet your event&apos;s exact needs and deadlines.
                </p>
                <p>
                  With a 30-day lead time we deliver any quantity of branded lanyards from source to your doorstep. For plain lanyards, we maintain ready stock for immediate dispatch across Nigeria.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BRANDED LANYARDS — LARGE EDITORIAL LAYOUT ── */}
        <section className="bg-gray-900 text-white py-0 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-8">
            <div
              ref={section2.ref}
              className={`${section2.inView ? "anim-left" : "hidden-anim"}`}
            >
              <span className="text-[11px] uppercase tracking-[0.5em] text-gray-400">01 —</span>
              <h2 className="text-5xl md:text-7xl font-light mt-2 leading-tight">
                Branded<br />
                <span className="italic">Lanyards</span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-lg leading-relaxed">
                Transform your lanyards into powerful, wearable marketing tools and keepsakes. Branded lanyards offer significant sponsorship potential and ensure your organisation&apos;s identity is visible throughout the event and beyond.
              </p>
            </div>
          </div>

          {/* Full-width image */}
          <div className="img-zoom w-full h-[55vw] min-h-[380px] max-h-[680px] relative">
            <Image
              src="/slider/photo2.jpg"
              alt="Branded lanyards at a corporate event"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-transparent" />
          </div>

          {/* Feature cards */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
            <div className="grid md:grid-cols-2 gap-px bg-gray-700">
              {brandedFeatures.map((f, i) => (
                <div
                  key={f.feature}
                  className="bg-gray-900 p-8 hover:bg-gray-800 transition-colors duration-300"
                  style={{ opacity: 0, animation: section2.inView ? `fadeUp 0.7s ${0.1 + i * 0.12}s ease forwards` : "none" }}
                >
                  <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-3">0{i + 1}</p>
                  <h3 className="text-lg font-semibold text-white mb-3">{f.feature}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{f.description}</p>
                  <p className="text-xs text-gray-500 italic border-t border-gray-700 pt-3">{f.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── KEY ACCESSORIES — ASYMMETRIC LAYOUT ── */}
        <section className="py-20 bg-[#f8f6f2]" ref={section3.ref}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr,1.4fr] gap-16 items-start">

              {/* Left: sticky text */}
              <div className={`lg:sticky lg:top-24 ${section3.inView ? "anim-left" : "hidden-anim"}`}>
                <span className="text-[11px] uppercase tracking-[0.5em] text-gray-400">02 —</span>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-2 leading-tight">
                  Key Accessories<br />
                  <span className="italic">& Safety</span>
                </h2>
                <p className="mt-5 text-gray-600 leading-relaxed text-[15px]">
                  Safety and functionality are paramount. All lanyards are supplied with high-quality fittings to ensure reliability and attendee well-being.
                </p>
                {/* Tall editorial image */}
                <div className="img-zoom mt-8 relative h-80 w-full hidden lg:block">
                  <Image
                    src="/slider/photo3.jpg"
                    alt="Event staff with lanyards"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right: accessory cards */}
              <div className="space-y-6">
                {accessories.map((a, i) => (
                  <div
                    key={a.name}
                    className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300 group"
                    style={{
                      opacity: 0,
                      animation: section3.inView ? `fadeRight 0.7s ${0.1 + i * 0.15}s ease forwards` : "none"
                    }}
                  >
                    <div className="flex items-start gap-6">
                      <span className="text-4xl font-light text-gray-200 group-hover:text-gray-300 transition-colors">0{i + 1}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{a.name}</h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">{a.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Inline image — magazine break */}
                <div
                  className="img-zoom relative h-64 w-full"
                  style={{ opacity: 0, animation: section3.inView ? "scaleIn 0.9s 0.55s ease forwards" : "none" }}
                >
                  <Image
                    src="/slider/photo4.jpg"
                    alt="Conference badges and lanyards"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2">
                    <p className="text-xs uppercase tracking-widest text-gray-600">Safety First</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PLAIN LANYARDS — SPLIT EDITORIAL ── */}
        <section className="bg-white overflow-hidden" ref={section4.ref}>
          <div className="grid lg:grid-cols-2 min-h-[70vh]">
            {/* Big image left */}
            <div
              className="img-zoom relative min-h-[400px] lg:min-h-0"
              style={{ opacity: 0, animation: section4.inView ? "fadeLeft 0.9s 0.1s ease forwards" : "none" }}
            >
              <Image
                src="/slider/photo5.jpg"
                alt="Plain lanyards for event staff"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="bg-white text-gray-900 text-xs uppercase tracking-[0.3em] px-4 py-2 font-medium">
                  Plain Lanyards
                </span>
              </div>
            </div>

            {/* Text right */}
            <div
              className="flex flex-col justify-center px-10 lg:px-16 py-16"
              style={{ opacity: 0, animation: section4.inView ? "fadeRight 0.9s 0.25s ease forwards" : "none" }}
            >
              <span className="text-[11px] uppercase tracking-[0.5em] text-gray-400 mb-4">03 —</span>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-6">
                Plain Lanyards<br />
                <span className="italic">Quick & Essential</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10">
                For basic security, staff identification, or last-minute needs, our plain lanyards are available for immediate, cost-effective delivery in a variety of standard colours.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Ready-to-Ship Stock",
                    body: "Large inventory of solid-colour lanyards — black, white, red, blue, green and more — available for immediate dispatch.",
                  },
                  {
                    title: "Cost-Effective",
                    body: "Ideal for non-sponsored or internal staff identification where budget and speed are the priority.",
                  },
                  {
                    title: "Colour Coding",
                    body: "Perfect for quickly colour-coding different access levels — staff, VIP, press, general admission — without custom printing.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className="border-t border-gray-100 pt-5"
                    style={{ opacity: 0, animation: section4.inView ? `fadeUp 0.6s ${0.4 + i * 0.12}s ease forwards` : "none" }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-1 text-[15px]">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CLOSING FULL-BLEED CTA ── */}
        <section className="relative py-32 overflow-hidden">
          <div className="img-zoom absolute inset-0">
            <Image
              src="/slider/photo6.jpg"
              alt="Conference attendees with lanyards"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0" style={{ backgroundColor: "var(--brand-primary)", opacity: 0.88 }} />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60 mb-6">Get Started</p>
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
              30-day lead time.<br />
              <span className="italic">Any quantity. Doorstep delivery.</span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto leading-relaxed mb-10">
              Provide your specifications and we will deliver branded or plain lanyards from source to your event — anywhere in Nigeria.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {["Branded from 30 days", "Plain — Immediate", "Any quantity"].map((s) => (
                <div key={s} className="bg-white/10 border border-white/20 px-6 py-4">
                  <p className="text-sm font-medium tracking-wide">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}