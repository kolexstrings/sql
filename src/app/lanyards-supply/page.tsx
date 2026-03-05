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
  const section1 = useInView();
  const section2 = useInView();
  const section3 = useInView();
  const section4 = useInView();

  return (
    <div className="min-h-screen bg-[#f8f6f2] font-['Cormorant_Garamond',Georgia,serif] overflow-x-hidden">
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
        .img-zoom { overflow: hidden; }
        .img-zoom img { transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
        .img-zoom:hover img { transform: scale(1.07); }
        .hidden-anim { opacity: 0; }
      `}</style>

      <main>

        {/* ── EDITORIAL HERO — 3-image mosaic ── */}
        <section className="relative w-full overflow-hidden" style={{ height: "65vh", minHeight: "440px" }}>
          <div className="absolute inset-0 grid gap-1" style={{ gridTemplateColumns: "1.6fr 1fr", gridTemplateRows: "1fr 1fr" }}>
            <div className="img-zoom row-span-2 relative overflow-hidden">
              <Image src="/Lanyard 1.png" alt="Event lanyards" fill className="object-cover" priority />
            </div>
            <div className="img-zoom relative overflow-hidden">
              <Image src="/Lanyard 2.png" alt="Branded lanyards" fill className="object-cover" />
            </div>
            <div className="img-zoom relative overflow-hidden">
              <Image src="/Lanyard 3.png" alt="Lanyard accessories" fill className="object-cover" />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/75" />

          <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14 lg:p-16">
            <div className="max-w-7xl mx-auto">
              <p className="text-xs uppercase tracking-[0.5em] text-white/70 mb-3" style={{ opacity: 0, animation: "fadeUp 0.8s 0.2s ease forwards" }}>
                SQL Events Nigeria
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-none tracking-tight mb-5" style={{ opacity: 0, animation: "fadeUp 0.9s 0.35s ease forwards" }}>
                Lanyards
                <br />
                <span className="italic font-normal">Supply</span>
              </h1>
              <div className="w-20 h-px bg-white/50 mb-5" style={{ opacity: 0, animation: "fadeUp 0.7s 0.55s ease forwards" }} />
              <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed font-light" style={{ opacity: 0, animation: "fadeUp 0.8s 0.65s ease forwards" }}>
                Branded & Plain Lanyards — Essential Event Credentials
              </p>
            </div>
          </div>

          <div className="absolute top-1/2 right-8 -translate-y-1/2 hidden lg:block">
            <p className="text-white/30 text-xs uppercase tracking-[0.4em]" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              SQL Events Nigeria
            </p>
          </div>
        </section>

        {/* ── INTRO PULL QUOTE ── */}
        <section className="py-16 bg-[#f8f6f2]">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div ref={section1.ref} style={{ opacity: 0, animation: section1.inView ? "fadeUp 0.8s ease forwards" : "none" }}>
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-800 leading-relaxed border-l-4 border-gray-900 pl-8">
                &quot;Lanyards are a fundamental component of event logistics — the critical link between attendee identification and secure, professional presentation.&quot;
              </p>
              <div className="mt-8 grid md:grid-cols-2 gap-8 text-[15px] text-gray-600 leading-relaxed font-sans">
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

        {/* ── BRANDED LANYARDS ── */}
        <section className="bg-gray-900 text-white py-0 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-6">
            <div ref={section2.ref} style={{ opacity: 0, animation: section2.inView ? "fadeLeft 0.8s ease forwards" : "none" }}>
              <span className="text-[11px] uppercase tracking-[0.5em] text-gray-400">01 —</span>
              <h2 className="text-4xl md:text-6xl font-light mt-2 leading-tight">
                Branded<br />
                <span className="italic">Lanyards</span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-lg leading-relaxed font-sans text-sm">
                Transform your lanyards into powerful, wearable marketing tools and keepsakes. Branded lanyards offer significant sponsorship potential and ensure your organisation&apos;s identity is visible throughout the event and beyond.
              </p>
            </div>
          </div>

          {/* 3-image strip ── */}
          <div className="w-full grid grid-cols-3 gap-1" style={{ height: "clamp(240px, 35vw, 440px)" }}>
            <div className="img-zoom relative overflow-hidden">
              <Image src="/Lanyard 1.png" alt="Lanyards close up" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent" />
            </div>
            <div className="img-zoom relative overflow-hidden">
              <Image src="/Lanyard 4.png" alt="Branded lanyards at event" fill className="object-cover opacity-80" />
            </div>
            <div className="img-zoom relative overflow-hidden">
              <Image src="/Lanyard 5.png" alt="Lanyard detail" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-l from-gray-900/70 to-transparent" />
            </div>
          </div>

          {/* Feature cards */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
            <div className="grid md:grid-cols-2 gap-px bg-gray-700">
              {brandedFeatures.map((f, i) => (
                <div
                  key={f.feature}
                  className="bg-gray-900 p-7 hover:bg-gray-800 transition-colors duration-300"
                  style={{ opacity: 0, animation: section2.inView ? `fadeUp 0.7s ${0.1 + i * 0.12}s ease forwards` : "none" }}
                >
                  <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 mb-3">0{i + 1}</p>
                  <h3 className="text-lg font-semibold text-white mb-2">{f.feature}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-sans mb-3">{f.description}</p>
                  <p className="text-xs text-gray-500 italic border-t border-gray-700 pt-3 font-sans">{f.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── KEY ACCESSORIES ── */}
        <section className="py-16 bg-[#f8f6f2]" ref={section3.ref}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr,1.4fr] gap-14 items-start">

              <div style={{ opacity: 0, animation: section3.inView ? "fadeLeft 0.8s ease forwards" : "none" }}>
                <span className="text-[11px] uppercase tracking-[0.5em] text-gray-400">02 —</span>
                <h2 className="text-3xl md:text-4xl font-light text-gray-900 mt-2 leading-tight">
                  Key Accessories<br />
                  <span className="italic">& Safety</span>
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed text-[15px] font-sans">
                  Safety and functionality are paramount. All lanyards are supplied with high-quality fittings to ensure reliability and attendee well-being.
                </p>
                {/* Reduced height from h-80 to h-60 */}
                <div className="img-zoom mt-6 relative h-60 w-full hidden lg:block">
                  <Image src="/Lanyard 3.png" alt="Event staff with lanyards" fill className="object-cover" />
                </div>
              </div>

              <div className="space-y-5">
                {accessories.map((a, i) => (
                  <div
                    key={a.name}
                    className="bg-white border border-gray-200 p-7 hover:shadow-lg transition-shadow duration-300 group"
                    style={{ opacity: 0, animation: section3.inView ? `fadeRight 0.7s ${0.1 + i * 0.15}s ease forwards` : "none" }}
                  >
                    <div className="flex items-start gap-5">
                      <span className="text-3xl font-light text-gray-200 group-hover:text-gray-300 transition-colors">0{i + 1}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{a.name}</h3>
                        <p className="text-gray-600 text-[14px] leading-relaxed font-sans">{a.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Reduced from h-64 to h-48 */}
                <div
                  className="img-zoom relative h-48 w-full"
                  style={{ opacity: 0, animation: section3.inView ? "scaleIn 0.9s 0.55s ease forwards" : "none" }}
                >
                  <Image src="/Lanyard 4.png" alt="Conference badges and lanyards" fill className="object-cover" />
                  <div className="absolute bottom-3 left-3 bg-white/90 px-4 py-2">
                    <p className="text-xs uppercase tracking-widest text-gray-600 font-sans">Safety First</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PLAIN LANYARDS ── */}
        <section className="bg-white overflow-hidden" ref={section4.ref}>
          {/* Reduced from min-h-[70vh] to min-h-[50vh] */}
          <div className="grid lg:grid-cols-2 min-h-[50vh]">
            <div
              className="img-zoom relative min-h-[320px] lg:min-h-0"
              style={{ opacity: 0, animation: section4.inView ? "fadeLeft 0.9s 0.1s ease forwards" : "none" }}
            >
              <Image src="/Lanyard 5.png" alt="Plain lanyards for event staff" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="bg-white text-gray-900 text-xs uppercase tracking-[0.3em] px-4 py-2 font-medium font-sans">
                  Plain Lanyards
                </span>
              </div>
            </div>

            <div
              className="flex flex-col justify-center px-10 lg:px-14 py-14"
              style={{ opacity: 0, animation: section4.inView ? "fadeRight 0.9s 0.25s ease forwards" : "none" }}
            >
              <span className="text-[11px] uppercase tracking-[0.5em] text-gray-400 mb-4">03 —</span>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mb-5">
                Plain Lanyards<br />
                <span className="italic">Quick & Essential</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 font-sans text-[15px]">
                For basic security, staff identification, or last-minute needs, our plain lanyards are available for immediate, cost-effective delivery in a variety of standard colours.
              </p>

              <div className="space-y-5">
                {[
                  { title: "Ready-to-Ship Stock", body: "Large inventory of solid-colour lanyards — black, white, red, blue, green and more — available for immediate dispatch." },
                  { title: "Cost-Effective", body: "Ideal for non-sponsored or internal staff identification where budget and speed are the priority." },
                  { title: "Colour Coding", body: "Perfect for quickly colour-coding different access levels — staff, VIP, press, general admission — without custom printing." },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className="border-t border-gray-100 pt-4"
                    style={{ opacity: 0, animation: section4.inView ? `fadeUp 0.6s ${0.4 + i * 0.12}s ease forwards` : "none" }}
                  >
                    <h4 className="font-semibold text-gray-900 mb-1 text-[15px]">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
            <div style={{ opacity: 0, animation: "fadeUp 0.8s ease forwards" }}>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-4 font-sans">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                30-day lead time.<br />
                <span className="italic">Any quantity. Doorstep delivery.</span>
              </h2>
            </div>
            <div className="space-y-6 font-sans">
              <p className="text-white/70 leading-relaxed text-[15px]">
                Provide your specifications and we will deliver branded or plain lanyards from source to your event — anywhere in Nigeria.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {["Branded from 30 days", "Plain — Immediate", "Any quantity"].map((s) => (
                  <div key={s} className="bg-white/10 border border-white/20 px-4 py-3 text-center">
                    <p className="text-xs font-medium tracking-wide text-white/80">{s}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="/contact" className="bg-white text-gray-900 px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors duration-200">
                  Contact Us
                </a>
                <a href="/services" className="border border-white/30 text-white px-8 py-3 text-sm uppercase tracking-widest font-medium hover:border-white transition-colors duration-200">
                  All Services
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}