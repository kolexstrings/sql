"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const exhibitionOfferings = [
  {
    title: "Booth Software & Floor Plans",
    description:
      "Centralized software for managing booth sales, invoicing, and contract management. Includes an interactive 3D Floor Plan visualization tool for optimal space allocation and exhibitor previews.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Exhibitor Manual",
    description:
      "A secure, digital portal where exhibitors can access deadlines, logistics information, download forms, and manage staff registrations.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Exhibitor Lead Retrieval",
    description:
      "Dedicated mobile application technology that allows exhibitors to scan attendee badges or wristbands, instantly capturing verified data and rating leads for post-event follow-up.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Exhibition Booth Design & Supply",
    description:
      "We supply Shell Scheme and Bespoke Exhibition Booths for your events. Our designs and materials are first class and the best in their class.",
    image:
      "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=1200&q=80",
  },
];

const scanningOfferings = [
  {
    title: "Access Control",
    description:
      "Use scanning devices (e.g., handheld scanners or turnstiles) for swift validation of tickets, badges, or Guest List entries at the main entrance and controlled sessions.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Attendee Tracking",
    description:
      "Granular data collection on which sessions, workshops, and exhibition zones attendees visit, providing deep insight into content popularity and traffic flow.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "CME/CPD Accreditation",
    description:
      "Essential for compliance, our system automatically tracks the exact time spent by attendees in certified sessions, generating accurate reports and documentation for Continuing Medical Education or Professional Development credits.",
    image:
      "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=1200&q=80",
  },
];

function OfferingBlocks({ items }: { items: typeof exhibitionOfferings }) {
  return (
    <div className="space-y-8">
      {items.map((item, idx) => (
        <div
          key={item.title}
          className={`grid gap-6 lg:gap-10 items-center ${
            idx % 2 === 1
              ? "lg:grid-cols-[1.1fr,0.9fr]"
              : "lg:grid-cols-[0.9fr,1.1fr]"
          }`}
        >
          <div className={`relative h-64 w-full ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover shadow-md"
            />
          </div>
          <div
            className={`bg-gray-50 border border-gray-200 p-6 lg:p-8 ${
              idx % 2 === 1 ? "lg:order-1" : ""
            }`}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
              {item.title}
            </p>
            <p className="text-gray-700 leading-relaxed text-[15px]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ExhibitionScanningPage() {
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
              <Image src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop" alt="Exhibition" fill className="object-cover" />
            </div>
            <div className="col-span-1 row-span-1 relative overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&auto=format&fit=crop" alt="Event gathering" fill className="object-cover" />
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
                Exhibition &<br />Scanning
              </h1>
            </div>
          </div>
        </section>

        {/* ── EXHIBITION MANAGEMENT INTRO ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative order-last lg:order-first">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                alt="Exhibition management"
                width={1200}
                height={800}
                className="w-full h-auto shadow-md"
              />
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Our Services</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-baskervville">
                Exhibition Management
              </h2>
              <p className="text-base leading-relaxed text-gray-700">
                We provide robust software solutions designed to manage the entire exhibitor
                booking process, empower exhibitors, maximise sponsorship returns, and ensure
                efficient floor plan utilization for both physical and virtual exhibitions.
              </p>
            </div>
          </div>
        </section>

        {/* ── EXHIBITION OFFERINGS ── */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <OfferingBlocks items={exhibitionOfferings} />
          </div>
        </section>

        {/* ── DIVIDER BAND ── */}
        <section
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 opacity-90" style={{ backgroundColor: "var(--brand-primary)" }} />
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-white">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">Why it matters</p>
                <h2 className="text-3xl font-baskervville font-bold mb-4">
                  A complete ecosystem for exhibitors and sponsors
                </h2>
                <p className="text-white/90 leading-relaxed">
                  From interactive floor plans to lead retrieval apps, we give your exhibitors
                  the tools they need to succeed — and give you the data to prove ROI.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {["3D Floor Plans", "Digital Exhibitor Portal", "Lead Retrieval App", "Bespoke Booth Supply"].map((stat) => (
                  <div key={stat} className="bg-white/10 border border-white/20 p-6 text-center">
                    <p className="text-base font-semibold tracking-wide">{stat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DELEGATE SCANNING INTRO ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Our Services</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-baskervville">
                Delegate Scanning & Tracking
              </h2>
              <p className="text-base leading-relaxed text-gray-700">
                Deploy our precision technology to manage access control, accurately track
                attendee presence for compliance, and provide invaluable security and behavioural
                data for event analysis.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80"
                alt="Delegate scanning technology"
                width={1200}
                height={800}
                className="w-full h-auto shadow-md"
              />
            </div>
          </div>
        </section>

        {/* ── SCANNING OFFERINGS ── */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <OfferingBlocks items={scanningOfferings} />
          </div>
        </section>

        {/* ── SCANNING HIGHLIGHT ── */}
        <section
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 opacity-90" style={{ backgroundColor: "var(--brand-primary)" }} />
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-white">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">Why it matters</p>
                <h2 className="text-3xl font-baskervville font-bold mb-4">
                  Precision data from every touchpoint
                </h2>
                <p className="text-white/90 leading-relaxed">
                  Know exactly who attended, which sessions they visited, and how long they
                  stayed. Our scanning technology delivers compliance-ready CME/CPD reports and
                  real-time security visibility across your entire event.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {["Access Control", "Session Tracking", "CME/CPD Reports", "Real-time Security"].map((stat) => (
                  <div key={stat} className="bg-white/10 border border-white/20 p-6 text-center">
                    <p className="text-base font-semibold tracking-wide">{stat}</p>
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