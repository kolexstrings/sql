"use client";

import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────────
   GALLERY DATA  — Local images from /slider
───────────────────────────────────────────── */
const images = [
  { id: 1,  src: "/slider/photo1.jpeg", thumb: "/slider/photo1.jpeg", alt: "SQL Events — Photo 1", span: "tall" },
  { id: 2,  src: "/slider/photo2.jpeg", thumb: "/slider/photo2.jpg", alt: "SQL Events — Photo 2", span: "wide" },
  { id: 3,  src: "/slider/photo3.jpeg", thumb: "/slider/photo3.jpg", alt: "SQL Events — Photo 3", span: "normal" },
  { id: 4,  src: "/slider/photo4.jpeg", thumb: "/slider/photo4.jpg", alt: "SQL Events — Photo 4", span: "normal" },
  { id: 5,  src: "/slider/photo5.jpeg", thumb: "/slider/photo5.jpg", alt: "SQL Events — Photo 5", span: "wide" },
  { id: 6,  src: "/slider/photo6.jpeg", thumb: "/slider/photo6.jpg", alt: "SQL Events — Photo 6", span: "normal" },
  { id: 7,  src: "/slider/photo7.jpeg", thumb: "/slider/photo7.jpeg", alt: "SQL Events — Photo 7", span: "tall" },
];

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function useInViewAnim(threshold = 0.12) {
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

/* ─────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────── */
function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: (typeof images)[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ animation: "lbFadeIn 0.3s ease forwards" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/92 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      {/* Image container */}
      <div
        className="relative z-10 max-w-5xl w-full mx-6 flex flex-col items-center"
        style={{ animation: "lbZoom 0.35s cubic-bezier(0.34,1.4,0.64,1) forwards" }}
      >
        <div className="relative w-full" style={{ maxHeight: "80vh" }}>
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-contain rounded-sm shadow-2xl"
            style={{ maxHeight: "75vh" }}
          />
        </div>

        {/* Caption bar */}
        <div className="mt-4 flex items-center justify-between w-full px-1">
          <div>
            <p className="text-white/90 text-sm font-light tracking-wide">{image.alt}</p>
          </div>
        </div>
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 z-20 text-white/60 hover:text-white text-4xl font-thin leading-none transition-colors"
        aria-label="Close"
      >
        ×
      </button>

      {/* Prev */}
      <button
        onClick={onPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white text-2xl flex items-center justify-center transition-all backdrop-blur-sm border border-white/10"
        aria-label="Previous"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white text-2xl flex items-center justify-center transition-all backdrop-blur-sm border border-white/10"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GALLERY CARD
───────────────────────────────────────────── */
function GalleryCard({
  img,
  index,
  onClick,
}: {
  img: (typeof images)[0];
  index: number;
  onClick: () => void;
}) {
  const { ref, inView } = useInViewAnim(0.08);

  const spanClass =
    img.span === "wide"
      ? "col-span-2"
      : img.span === "tall"
      ? "row-span-2"
      : "";

  const heightClass =
    img.span === "tall" ? "h-[480px]" : img.span === "wide" ? "h-[260px]" : "h-[260px]";

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group relative overflow-hidden cursor-pointer ${spanClass} ${heightClass}`}
      style={{
        opacity: 0,
        animation: inView
          ? `cardReveal 0.65s ${Math.min(index * 0.07, 0.5)}s cubic-bezier(0.22,1,0.36,1) forwards`
          : "none",
      }}
    >
      {/* Image */}
      <img
        src={img.thumb}
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: "linear-gradient(to top, rgba(137,28,122,0.75) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)" }} />

      {/* Zoom icon */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/0 group-hover:border-white/40" style={{ background: "rgba(137,28,122,0.5)" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const heroRef = useInViewAnim(0);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevLight = () => setLightboxIndex((i) => (i === null || i === 0 ? images.length - 1 : i - 1));
  const nextLight = () => setLightboxIndex((i) => (i === null || i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-[#0f0009] text-white overflow-x-hidden">
      <Header />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        :root {
          --brand: #891c7a;
          --brand-light: #b94daa;
          --brand-dim: #5a1250;
          --bg: #0f0009;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: scale(0.92) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lbZoom {
          from { opacity: 0; transform: scale(0.9); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        @keyframes lineExpand {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .font-playfair { font-family: 'Playfair Display', Georgia, serif; }
        .font-jost     { font-family: 'Jost', sans-serif; }

        .hero-line {
          transform-origin: left;
          animation: lineExpand 1.2s 0.8s ease forwards;
          transform: scaleX(0);
        }

        .count-badge {
          animation: countUp 0.5s ease forwards;
        }

        /* Masonry grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 260px;
          gap: 6px;
        }
        @media (max-width: 1024px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 640px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 180px; }
        }
      `}</style>

      <main>
        {/* ── HERO ── */}
        <section
          ref={heroRef.ref}
          className="relative min-h-[480px] flex items-end pb-16 pt-32 bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('/slider/photo1.jpeg')",
          }}
        >
          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#0f0009]" />

          {/* Grain texture overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
              backgroundSize: "200px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <p
              className="font-jost text-xs uppercase tracking-[0.5em] mb-5"
              style={{ opacity: 0, animation: heroRef.inView ? "fadeUp 0.7s 0.1s ease forwards" : "none", color: "var(--brand-light)" }}
            >
              SQL Events
            </p>
            <h1
              className="font-playfair font-light text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-6"
              style={{ opacity: 0, animation: heroRef.inView ? "fadeUp 0.8s 0.25s ease forwards" : "none" }}
            >
              Event <em className="italic" style={{ color: "var(--brand-light)" }}>Gallery</em>
            </h1>

            {/* Animated line */}
            <div
              className="hero-line h-px mb-6 w-64"
              style={{ opacity: heroRef.inView ? 1 : 0, background: "linear-gradient(to right, var(--brand), transparent)" }}
            />

            <p
              className="font-jost font-light text-white/70 text-base md:text-lg max-w-xl leading-relaxed"
              style={{ opacity: 0, animation: heroRef.inView ? "fadeUp 0.8s 0.55s ease forwards" : "none" }}
            >
              A visual journey through the moments that define world-class events — 
              from intimate workshops to large-scale international summits.
            </p>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-10 mt-10"
              style={{ opacity: 0, animation: heroRef.inView ? "fadeUp 0.8s 0.7s ease forwards" : "none" }}
            >
              {[
                { num: "200+", label: "Events Delivered" },
                { num: "50K+", label: "Delegates Served" },
                { num: "15+", label: "Years Experience" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-playfair text-3xl font-light" style={{ color: "var(--brand-light)" }}>{s.num}</p>
                  <p className="font-jost text-white/50 text-xs uppercase tracking-[0.3em] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY GRID ── */}
        <section className="py-8 px-6 lg:px-12 max-w-[1600px] mx-auto">
          <div className="gallery-grid">
            {images.map((img, i) => (
              <GalleryCard
                key={img.id}
                img={img}
                index={i}
                onClick={() => openLightbox(i)}
              />
            ))}
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0009] via-[#3d0d36]/30 to-[#0f0009]" />
          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <p className="font-jost text-xs uppercase tracking-[0.45em] mb-4" style={{ color: "var(--brand-light)" }}>Your event, our canvas</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-white mb-6 leading-snug">
              Ready to create<br /><em className="italic" style={{ color: "var(--brand-light)" }}>memorable moments?</em>
            </h2>
            <p className="font-jost text-white/50 text-sm leading-relaxed mb-10">
              Partner with SQL Events to bring your conference or summit to life with precision,
              technology, and elegance.
            </p>
            <a
              href="/contact"
              className="inline-block font-jost text-xs uppercase tracking-[0.35em] px-10 py-4 text-white transition-colors duration-300"
              style={{ backgroundColor: "var(--brand)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--brand-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--brand)")}
            >
              Start Planning
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <Lightbox
          image={images[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevLight}
          onNext={nextLight}
        />
      )}
    </div>
  );
}