"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const clients = [
  { name: "Nigerian Medical Association", logo: "/12.jgg" },
  { name: "Nigeria Society of Engineers", logo: "/clients/nse.png" },
  { name: "Central Bank of Nigeria", logo: "/clients/cbn.png" },
  { name: "Federal Ministry of Health", logo: "/clients/fmoh.png" },
  { name: "Nigerian Bar Association", logo: "/clients/nba.png" },
  { name: "African Development Bank", logo: "/clients/afdb.png" },
  { name: "ECOWAS Commission", logo: "/clients/ecowas.png" },
  { name: "Nigerian Institute of Management", logo: "/clients/nim.png" },
  { name: "National Universities Commission", logo: "/clients/nuc.png" },
  { name: "Society of Gynaecology Nigeria", logo: "/clients/sgn.png" },
  { name: "Nigerian Stock Exchange", logo: "/clients/ngx.png" },
  { name: "Shell Petroleum Dev. Company", logo: "/clients/spdc.png" },
  { name: "TotalEnergies Nigeria", logo: "/clients/total.png" },
  { name: "Nigerian Ports Authority", logo: "/clients/npa.png" },
  { name: "NNPC Limited", logo: "/clients/nnpc.png" },
  { name: "Dangote Industries Limited", logo: "/clients/dangote.png" },
];

const testimonials = [
  {
    name: "Dr. Adaeze Oreh",
    role: "Director General",
    org: "Nigerian Medical Association",
    quote:
      "SQL Events delivered an outstanding conference experience for our annual general meeting. Their registration technology handled over 4,000 delegates seamlessly, and the on-site team was professional and attentive throughout.",
    initials: "AO",
    color: "#1a5276",
  },
  {
    name: "Engr. Babatunde Olusanya",
    role: "President",
    org: "Nigeria Society of Engineers",
    quote:
      "We have partnered with SQL Events for three consecutive annual conferences. Their abstract management system transformed our submission and review process entirely. What once took months of back-and-forth emails now runs smoothly through one platform.",
    initials: "BO",
    color: "#1e8449",
  },
  {
    name: "Mrs. Funke Adeyemi",
    role: "Head of Corporate Events",
    org: "Central Bank of Nigeria",
    quote:
      "The level of technology and professionalism SQL Events brings is truly world-class. From the mobile app to the exhibition management, every touchpoint was handled with precision. Our attendees consistently praised the seamless experience.",
    initials: "FA",
    color: "#922b21",
  },
  {
    name: "Prof. Chukwuemeka Eze",
    role: "Executive Secretary",
    org: "National Universities Commission",
    quote:
      "Our flagship education summit drew participants from 14 countries. SQL Events managed the entire delegate registration, accreditation, and CME tracking process without a single issue.",
    initials: "CE",
    color: "#512e5f",
  },
  {
    name: "Barr. Oluwaseun Falana",
    role: "National Treasurer",
    org: "Nigerian Bar Association",
    quote:
      "Exceptional service from planning to execution. The virtual platform SQL Events deployed for our hybrid AGM allowed our members across the diaspora to participate fully — voting, networking, and engaging with sessions in real time.",
    initials: "OF",
    color: "#6e2f1a",
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function PastEventsClientsPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const logoRef = useInView(0.1);

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((s) => (s === 0 ? testimonials.length - 1 : s - 1));
    setAnimKey((k) => k + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((s) => (s === testimonials.length - 1 ? 0 : s + 1));
    setAnimKey((k) => k + 1);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const len = testimonials.length;
  const slides = [
    testimonials[(activeSlide - 1 + len) % len],
    testimonials[activeSlide],
    testimonials[(activeSlide + 1) % len],
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.88); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes zoomInSide {
          from { opacity: 0; transform: scale(0.82); }
          to   { opacity: 0.85; transform: scale(0.95); }
        }
        .logo-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .logo-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); }

        .card-center { animation: zoomIn 0.45s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .card-side   { animation: zoomInSide 0.4s ease forwards; }
      `}</style>

      <main>
        {/* ── HERO ── */}
        <section
          className="relative flex items-center justify-center min-h-[420px] py-24 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gray-900/70" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
            <h1
              className="text-6xl md:text-7xl font-light font-baskervville mb-8 tracking-wide"
              style={{ opacity: 0, animation: "fadeUp 0.8s 0.1s ease forwards" }}
            >
              Clients
            </h1>
            <div
              className="w-16 h-px bg-white/40 mx-auto mb-8"
              style={{ opacity: 0, animation: "fadeUp 0.6s 0.3s ease forwards" }}
            />
            <p
              className="text-lg md:text-xl text-white/85 leading-relaxed font-light"
              style={{ opacity: 0, animation: "fadeUp 0.8s 0.4s ease forwards" }}
            >
              Over the years, our dedication to excellence has established us as a trusted partner
              in conference planning and delivery. We work closely with every client to craft
              tailored solutions that align with their unique goals and ambitions.
            </p>
          </div>
        </section>

        {/* ── TESTIMONIALS CAROUSEL ── */}
        <section
          className="relative py-24 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-teal-800/85" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
            <h2 className="text-center text-2xl md:text-3xl font-light text-white mb-14 tracking-wide font-baskervville italic">
              What our clients say
            </h2>

            {/* Carousel wrapper — extra horizontal padding creates space for arrows */}
            <div className="relative px-16 md:px-20">
              {/* Prev arrow — sits outside the cards */}
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/50 text-white text-3xl flex items-center justify-center rounded-full transition-colors shadow-lg"
                aria-label="Previous"
              >
                ‹
              </button>

              <div className="flex items-stretch justify-center gap-4">
                {slides.map((t, idx) => {
                  const isCenter = idx === 1;
                  return (
                    <div
                      key={`${t.name}-${animKey}-${idx}`}
                      className={`bg-white flex flex-col items-center text-center ${
                        isCenter
                          ? "card-center w-full max-w-md z-10 px-10 py-12 shadow-2xl"
                          : "card-side hidden md:flex w-full max-w-xs px-8 py-10 shadow-md self-center opacity-85"
                      }`}
                    >
                      <div
                        className={`rounded-full flex items-center justify-center text-white font-bold mb-5 flex-shrink-0 ${
                          isCenter ? "w-20 h-20 text-xl" : "w-14 h-14 text-sm"
                        }`}
                        style={{ backgroundColor: t.color }}
                      >
                        {t.initials}
                      </div>
                      <h3
                        className={`font-semibold text-gray-900 mb-1 font-baskervville ${
                          isCenter ? "text-xl" : "text-base"
                        }`}
                      >
                        {t.name}
                      </h3>
                      <p className={`text-gray-400 mb-6 ${isCenter ? "text-sm" : "text-xs"}`}>
                        {t.role}
                        <br />
                        {t.org}
                      </p>
                      <p
                        className={`text-gray-600 leading-relaxed ${
                          isCenter ? "text-[15px]" : "text-xs line-clamp-5"
                        }`}
                      >
                        {t.quote}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Next arrow — sits outside the cards */}
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/50 text-white text-3xl flex items-center justify-center rounded-full transition-colors shadow-lg"
                aria-label="Next"
              >
                ›
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveSlide(i);
                    setAnimKey((k) => k + 1);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeSlide ? "bg-white w-6" : "bg-white/40 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── CLIENT LOGOS GRID ── */}
        <section className="py-20 bg-[#f2f3f4]" ref={logoRef.ref}>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div
              className="text-center mb-14"
              style={{
                opacity: 0,
                animation: logoRef.inView ? "fadeUp 0.7s ease forwards" : "none",
              }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-3">Trusted By</p>
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 font-baskervville">
                Our Clients
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {clients.map((client, i) => (
                <div
                  key={client.name}
                  className="logo-card bg-white flex items-center justify-center p-8 min-h-[160px]"
                  style={{
                    opacity: 0,
                    animation: logoRef.inView
                      ? `fadeUp 0.5s ${0.05 * i}s ease forwards`
                      : "none",
                  }}
                >
                  <div className="relative w-full h-16">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
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