"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function AboutPage() {
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
                SQL Events Nigeria
              </p>
              <h1
                className="text-4xl md:text-5xl font-light tracking-widest text-gray-900 uppercase"
                style={{ letterSpacing: "0.18em" }}
              >
                About
                <br />
                Us
              </h1>
            </div>
          </div>
        </section>

        {/* ── WHO WE ARE (TEXT SIDE BY SIDE) ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-['Cormorant_Garamond',Georgia,serif]">
                Who We Are
              </h2>
              <div className="space-y-5 text-[15px] leading-relaxed text-gray-600 font-sans">
                <p>
                  We are a Corporate Events &amp; Conference Management Company. We operate primarily
                  in the Meeting, Incentives, Conferences and Events Industry (MICE). We also engage
                  in media and marketing consultancy services.
                </p>
                <p>
                  We work with our clients from conceptualisation through all the planning stages to
                  the eventual delivery of their events and projects. Our goal is to offer our clients
                  a first-rate international event experience, no matter the size.
                </p>
              </div>
            </div>

            <div>
              <div className="space-y-5 text-[15px] leading-relaxed text-gray-600 font-sans">
                <p>
                  With our well-trained and experienced staff, we provide expertise in every aspect
                  of the Event Process. We incorporate software and technology in every aspect of our
                  events. Our clientele spans the Public Sector, Organised Private Sector,
                  International NGOs as well as Professional Associations.
                </p>
                <p className="italic text-gray-800 border-l-2 border-gray-300 pl-4">
                  In all our projects, we are driven by{" "}
                  <span className="font-semibold not-italic">Passion, Innovation and Technology</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION (SIDE BY SIDE) ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12">
            <div className="border border-gray-200 bg-white p-8 rounded-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3 font-sans">Our Vision</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Cormorant_Garamond',Georgia,serif]">
                Leading Events &amp; Conference Management in Africa
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600 font-sans">
                To be a leading Events &amp; Conference Management company in Africa, marshalling the
                best in knowledge, human capital and technology to innovatively provide the best
                possible business solution to our clients, creating value and growth for ourselves
                and our business partners.
              </p>
            </div>

            <div className="border border-gray-200 bg-white p-8 rounded-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3 font-sans">Our Mission</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-['Cormorant_Garamond',Georgia,serif]">
                Delivering Excellence Through Innovation
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600 font-sans">
                Marshalling the best in knowledge, human capital and technology to help our clients
                achieve their strategic goals through the provision of excellent, unique value-added
                services and products specific to their profile.
              </p>
            </div>
          </div>

          {/* Supporting images (REMOVED) */}
        </section>

        {/* ── WHAT WE DO (TEXT SIDE BY SIDE) ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 font-['Cormorant_Garamond',Georgia,serif]">
                What We Do
              </h2>
              <div className="space-y-5 text-[15px] leading-relaxed text-gray-600 font-sans">
                <p>
                  SQL Events Nigeria provides Management, Support Services and Consultancy to the
                  MICE Industry with special emphasis on a wide spectrum of events and activations.
                </p>
                <p>
                  Our services include Conferences, Corporate Events, Annual General Meetings,
                  Exhibitions, Seminars, Workshops, Festivals, Entertainment Shows, Product
                  Launches, Award Nights, and much more.
                </p>
              </div>
            </div>

            <div>
              <div className="space-y-5 text-[15px] leading-relaxed text-gray-600 font-sans">
                <p>
                  Whether you are an international organisation, a Federal Government Agency, a
                  State Government, or a private sector company, we bring the same level of
                  dedication, precision and creativity to every engagement.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Conferences",
                  "Corporate Events",
                  "AGMs",
                  "Exhibitions",
                  "Seminars & Workshops",
                  "Festivals",
                  "Entertainment Shows",
                  "Product Launches",
                  "Award Nights",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs uppercase tracking-widest border border-gray-300 text-gray-600 px-3 py-1 font-sans hover:border-gray-600 hover:text-gray-900 transition-colors duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          
        </section>
        
      </main>
      
              {/* ── CTA ── */}
              <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-4 font-sans">Work With Us</p>
                    <h2 className="text-3xl md:text-4xl font-light leading-tight">
                      Ready to join our<br />
                      <span className="italic">success stories?</span>
                    </h2>
                  </div>
                  <div className="space-y-4 font-sans">
                    <p className="text-white/70 leading-relaxed text-[15px]">
                      Let&apos;s discuss how we can bring your vision to life with our comprehensive
                      event management solutions.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <Link
                        href="/contact-us"
                        className="bg-white text-gray-900 px-8 py-3 text-sm uppercase tracking-widest font-medium hover:bg-gray-100 transition-colors duration-200"
                      >
                        Start Your Project
                      </Link>
                      <Link
                        href="/corporate-event-management"
                        className="border border-white/30 text-white px-8 py-3 text-sm uppercase tracking-widest font-medium hover:border-white transition-colors duration-200"
                      >
                        Our Services
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

      <Footer />
    </div>
  );
}