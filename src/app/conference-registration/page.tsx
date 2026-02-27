"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const galleryImages = [
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
];

export default function ConferenceRegistrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="bg-white text-gray-900">
        {/* ── MOSAIC HERO HEADER ── */}
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
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-2 font-sans">
                Our Services
              </p>
              <h1
                className="text-4xl md:text-5xl font-light tracking-widest text-gray-900 uppercase font-baskervville"
                style={{ letterSpacing: "0.18em" }}
              >
                Conference
                <br />
                Registration
              </h1>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative order-last lg:order-first">
              <Image
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                alt="Conference registration desk"
                width={1200}
                height={800}
                className="w-full h-auto shadow-md"
              />
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
                Our Services
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-baskervville">
                Conference Registration Management
              </h1>
              <p className="text-base leading-relaxed text-gray-700">
                Event registration is more than just accreditation — it's a
                vital opportunity to make a lasting impression on your
                attendees. Done right, it sets a tone of professionalism,
                organization, and process that enhances the entire conference
                experience.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                Experts have posited that registration and accreditation can
                influence up to 40% of attendee favourability. If the
                registration goes well, participants immediately feel the event
                is off to a strong start.
              </p>
            </div>
          </div>
        </section>

        {/* Body Copy */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-gray-700 leading-relaxed space-y-6 text-base">
              <p>
                We have a distinguished profile in planning, coordination and
                management of conference registration projects for international
                NGOs, professional associations, corporate organisations,
                federal government agencies and state governments. We work with
                our clients from conceptualisation through all the planning
                stages to the eventual delivery, managing deliverables and
                outcomes so you can focus on your core responsibilities.
              </p>
              <p>
                Our goal is to offer delegates a first-rate international
                registration experience regardless of event size. With our
                well-trained staff, we provide expertise in every aspect of
                conference registration management and infuse software and
                technology into each touchpoint.
              </p>

              {/* ── THREE FEATURE ROWS ── */}
              <div className="pt-4 space-y-10">
                {/* Row 1 — image left, card right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                  <div className="relative h-64 lg:h-auto min-h-[260px]">
                    <Image src="/3.jpg" alt="Software" fill className="object-cover" />
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-8 flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">Software</p>
                    <p className="text-gray-700 leading-relaxed">
                      Participantlogic &amp; Onsistelogic power pre-event portals and onsite
                      accreditation, keeping every attendee in sync.
                    </p>
                  </div>
                </div>

                {/* Row 2 — card left, image right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                  <div className="bg-gray-50 border border-gray-200 p-8 flex flex-col justify-center lg:order-1 order-2">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">Hardware</p>
                    <p className="text-gray-700 leading-relaxed">
                      Enterprise-grade laptops, scanners and badge printers ensure fast
                      throughput and zero downtime.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto min-h-[260px] lg:order-2 order-1">
                    <Image src="/4.jpg" alt="Hardware" fill className="object-cover" />
                  </div>
                </div>

                {/* Row 3 — image left, card right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
                  <div className="relative h-64 lg:h-auto min-h-[260px]">
                    <Image
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                      alt="Process"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="bg-gray-50 border border-gray-200 p-8 flex flex-col justify-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">Process</p>
                    <p className="text-gray-700 leading-relaxed">
                      Trained onsite personnel, refined workflows and attentive guest care keep
                      the experience warm and organized.
                    </p>
                  </div>
                </div>
              </div>

              <p className="pt-4">
                Whether you need us to configure the technology stack and train
                your team, or to manage the entire registration program
                end-to-end, we are ready and willing. Our registrations have
                been called "seamless" by ThisDay Newspaper (June 2009), and we
                have delivered projects ranging from 200 to 9,000+ participants.
              </p>
              <p>
                We also supply quality plain or branded lanyards. Provide a
                30-day lead time and we will deliver any quantity of branded
                lanyards from source to your doorstep.
              </p>
            </div>
          </div>
        </section>

        {/* Imagery Strip */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-6">
            {galleryImages.map((src) => (
              <div key={src} className="relative h-64">
                <Image
                  src={src}
                  alt="Registration moments"
                  fill
                  className="object-cover shadow-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Highlight Section */}
        <section
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492724441997-5dc865305da6?auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div
            className="absolute inset-0 opacity-90"
            style={{ backgroundColor: "var(--brand-primary)" }}
          ></div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-white">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">
                  Why it matters
                </p>
                <h2 className="text-3xl font-baskervville font-bold mb-4">
                  Registration sets the tone for the entire event
                </h2>
                <p className="text-white/90 leading-relaxed">
                  We create an immediate sense of order and hospitality,
                  combining technology and human touch to welcome every
                  participant. From online pre-event journeys to onsite badge
                  printing, we maintain the same premium standard your attendees
                  expect throughout the conference.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "9,000+ Participants",
                  "40% Experience Impact",
                  "30-day Lanyard Supply",
                  "Seamless Since 2009",
                ].map((stat) => (
                  <div
                    key={stat}
                    className="bg-white/10 border border-white/20 p-6 text-center"
                  >
                    <p className="text-base font-semibold tracking-wide">
                      {stat}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}