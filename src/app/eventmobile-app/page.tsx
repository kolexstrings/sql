"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  "Access Speaker & Exhibitor profiles and detailed Session information",
  "Interact with other attendees via direct instant messaging",
  "Keep up to date with the latest event news",
  "Direct access to social media",
  "Create surveys and facilitate discussions and collaborations in-app",
  "Audience Sampling and Q&A Voting",
  "Network with other delegates, book and set up one-on-one meetings",
  "View a detailed layout of the event, sessions per room, and Exhibitor Stands",
];

export default function EventMobileAppPage() {
  return (
    <div className="min-h-screen bg-white font-['Cormorant_Garamond',Georgia,serif]">
      <Header />

      <main className="bg-white text-gray-900">

        {/* ── MOSAIC HERO (IMAGES KEPT) ── */}
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
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-2 font-sans">Our Services</p>
              <h1
                className="text-4xl md:text-5xl font-light tracking-widest text-gray-900 uppercase"
                style={{ letterSpacing: "0.18em" }}
              >
                Event
                <br />
                Mobile App
              </h1>
            </div>
          </div>
        </section>

        {/* ── INTRO — text side by side (image removed) ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                The Ultimate in Audience Engagement
              </h2>
              <div className="space-y-5 text-[15px] leading-relaxed text-gray-600 font-sans">
                <p>
                  Our Event Mobile App is the ultimate in audience engagement software. We create
                  bespoke Mobile Apps using our multiplatform app builder — tailored to your
                  event&apos;s identity and audience.
                </p>
                <p>
                  Our App keeps your attendees up to date, increases participant interaction, and
                  extends the event life cycle while tracking engagement and gathering performance
                  insights.
                </p>
              </div>
            </div>

            <div>
              <div className="space-y-5 text-[15px] leading-relaxed text-gray-600 font-sans">
                <p className="italic text-gray-800 border-l-2 border-gray-300 pl-4">
                  Our Mobile App is <span className="font-semibold not-italic">Android and iOS compatible</span>.
                </p>
                <p>
                  Built with our multiplatform app builder, your bespoke event app is available
                  on both platforms — ensuring every attendee, regardless of device, gets
                  the full experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES — full width two-column list ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-8 font-sans">App Features</p>
            <div className="grid md:grid-cols-2 gap-0 border border-gray-200">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 border-b border-r border-gray-200 bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-xs font-sans text-gray-300 mt-1 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-sans text-[14px] text-gray-600 leading-relaxed">{feat}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPLIT — text side by side with stats (image removed) ── */}
        <section className="bg-white">
          <div className="grid lg:grid-cols-2 items-stretch">
            <div className="flex flex-col justify-center px-10 lg:px-16 py-16 bg-gray-50 border border-gray-200">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-4 font-sans">Multiplatform</p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Android & iOS Compatible
              </h3>
              <div className="space-y-5 font-sans text-[15px] text-gray-600 leading-relaxed">
                <p>
                  Delegates can network, book one-on-one meetings, participate in Q&A sessions,
                  and navigate the event venue — all from the palm of their hand.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center px-10 lg:px-16 py-16 bg-white border border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Engagement", value: "Real-time" },
                  { label: "Platforms",  value: "Android & iOS" },
                  { label: "App Type",   value: "Bespoke" },
                  { label: "Networking", value: "In-App" },
                ].map((s) => (
                  <div key={s.label} className="border border-gray-200 px-5 py-4 bg-gray-50">
                    <p className="text-lg font-semibold text-gray-900">{s.value}</p>
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-sans mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PHOTO STRIP (REMOVED) ── */}

        {/* ── CTA ── */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-4 font-sans">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-light leading-tight">
                Ready to engage your<br />
                <span className="italic">audience on mobile?</span>
              </h2>
            </div>
            <div className="space-y-4 font-sans">
              <p className="text-white/70 leading-relaxed text-[15px]">
                Let us build a bespoke event app that keeps your attendees connected,
                informed, and engaged — before, during, and after your event.
              </p>
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