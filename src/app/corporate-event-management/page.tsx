"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CorporateEventsPage() {

  return (
    <div className="min-h-screen bg-white font-['Cormorant_Garamond',Georgia,serif]">
      <Header />

      <main className="bg-white text-gray-900">
        {/* ── MOSAIC HERO ── */}
        <section className="relative w-full overflow-hidden" style={{ height: "520px" }}>
          {/* Mosaic grid */}
          <div
            className="absolute inset-0 grid gap-1"
            style={{
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
              gridTemplateRows: "1fr 1fr 1fr",
              transform: "skewY(-1deg) scale(1.05)",
              transformOrigin: "top center",
            }}
          >
            {/* Cell 1 – tall left */}
            <div className="col-span-2 row-span-3 relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop" alt="Conference audience" fill className="object-cover" />
            </div>
            {/* Cell 2 */}
            <div className="col-span-2 row-span-2 relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop" alt="Event setup" fill className="object-cover" />
            </div>
            {/* Cell 3 – tall right */}
            <div className="col-span-1 row-span-3 relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&auto=format&fit=crop" alt="Speaker at podium" fill className="object-cover" />
            </div>
            {/* Cell 4 */}
            <div className="col-span-1 row-span-1 relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&auto=format&fit=crop" alt="Business meeting" fill className="object-cover" />
            </div>
            {/* Cell 5 */}
            <div className="col-span-1 row-span-1 relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&auto=format&fit=crop" alt="Gala dinner" fill className="object-cover" />
            </div>
          </div>

          {/* Centered title overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-white/70 backdrop-blur-[2px] px-10 py-6 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-2 font-sans">
                Our Services
              </p>
              <h1
                className="text-4xl md:text-5xl font-light tracking-widest text-gray-900 uppercase"
                style={{ letterSpacing: "0.18em" }}
              >
                Corporate
                <br />
                Events
              </h1>
            </div>
          </div>
        </section>

        {/* ── CONTENT + ACCORDION ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: prose */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-['Cormorant_Garamond',Georgia,serif]">
                Corporate Event Management Services
              </h2>
              <div className="space-y-5 text-[15px] leading-relaxed text-gray-600 font-sans">
                <p>
                  We have a distinguished profile in planning, coordination and management of
                  Corporate Events and Conferences, Exhibitions, Annual General Meetings, Seminars,
                  Workshops, Opening/Closing Ceremonies, Entertainment Shows, Product Launches,
                  Award Nights and Weddings.
                </p>
                <p>
                  With SQL Events Nigeria, you will find us a one-stop shop for all your event and
                  project management needs. We always infuse Passion, Innovation and Technology into
                  all our processes — managing every deliverable so you can focus on what matters.
                </p>
                <p>
                  Our goal is to offer clients a first-rate international conference experience, no
                  matter the size. With well-trained staff, we provide expertise in every aspect of
                  Conference and Corporate Event Management, incorporating software and technology
                  throughout.
                </p>
                <p>
                  We are very experienced managing high-profile events nationwide — from
                  international NGOs and professional associations to Federal Government Agencies,
                  Ministries, and State Governments.
                </p>
              </div>
            </div>

            {/* Right: image */}
            <div className="relative w-full h-80 lg:h-full min-h-[400px] overflow-hidden rounded-sm">
              <Image
                src="/1.jpg"
                alt="SQL Events corporate event"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}