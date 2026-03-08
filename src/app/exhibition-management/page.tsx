"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const exhibitionOfferings = [
  {
    title: "Booth Software & Floor Plans",
    description:
      "Centralized software for managing booth sales, invoicing, and contract management. Includes an interactive 3D Floor Plan visualization tool for optimal space allocation and exhibitor previews.",
    bullets: [
      "Centralised booth sales, invoicing & contract management",
      "Interactive 3D Floor Plan visualisation tool",
      "Optimal space allocation for any venue layout",
      "Exhibitor preview of booth position before event",
      "Real-time availability & booking status",
      "Supports physical and virtual exhibition formats",
    ],
  },
  {
    title: "Exhibitor Manual",
    description:
      "A secure, digital portal where exhibitors can access deadlines, logistics information, download forms, and manage staff registrations.",
    bullets: [
      "Secure, password-protected exhibitor portal",
      "Access to deadlines and logistics information",
      "Downloadable forms and documentation",
      "Staff registration management for each booth",
      "Real-time updates and exhibitor notifications",
      "Accessible anytime — desktop and mobile friendly",
    ],
  },
  {
    title: "Exhibitor Lead Retrieval",
    description:
      "Dedicated mobile application technology that allows exhibitors to scan attendee badges or wristbands, instantly capturing verified data and rating leads for post-event follow-up.",
    bullets: [
      "Dedicated mobile app for badge & wristband scanning",
      "Instant capture of verified attendee contact data",
      "Lead rating system for post-event prioritisation",
      "Works with QR Codes and NFC Wristbands",
      "Offline scanning capability with automatic sync",
      "Exportable lead reports for exhibitor CRM import",
    ],
  },
  {
    title: "Exhibition Booth Design & Supply",
    description:
      "We supply Shell Scheme and Bespoke Exhibition Booths for your events. Our designs and materials are first class and the best in their class.",
    bullets: [
      "Shell Scheme booths for standard exhibition formats",
      "Bespoke custom-built exhibition stands",
      "First-class materials and professional finishes",
      "Design consultation for brand alignment",
      "Full supply, delivery, installation and teardown",
      "Suitable for conferences, trade shows & summits",
    ],
  },
];

const scanningOfferings = [
  {
    title: "Access Control",
    description:
      "Use scanning devices (e.g., handheld scanners or turnstiles) for swift validation of tickets, badges, or Guest List entries at the main entrance and controlled sessions.",
    bullets: [
      "Handheld scanner & turnstile integration",
      "Swift validation of tickets and badges",
      "Guest list management for VIP access",
      "Real-time entry monitoring and alerts",
      "Session-specific access restrictions",
      "Detailed entry/exit time logging",
    ],
  },
  {
    title: "Attendee Tracking",
    description:
      "Granular data collection on which sessions, workshops, and exhibition zones attendees visit, providing deep insight into content popularity and traffic flow.",
    bullets: [
      "Session attendance tracking by attendee",
      "Workshop and exhibition zone visit logging",
      "Content popularity heatmaps and reports",
      "Traffic flow analysis for floor optimization",
      "Time-spent tracking per session/zone",
      "Behavioral pattern identification",
    ],
  },
  {
    title: "CME/CPD Accreditation",
    description:
      "Essential for compliance, our system automatically tracks the exact time spent by attendees in certified sessions, generating accurate reports and documentation for Continuing Medical Education or Professional Development credits.",
    bullets: [
      "Automatic time tracking in certified sessions",
      "Accurate CME/CPD credit calculation",
      "Compliance-ready attendance certificates",
      "Detailed session duration reports",
      "Integration with accreditation bodies",
      "Secure digital record keeping for audits",
    ],
  },
];

function OfferingBlocks({ items }: { items: typeof exhibitionOfferings }) {
  return (
    <div className="space-y-12">
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="grid lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* First text box */}
          <div className="bg-gray-50 border border-gray-200 p-8 lg:p-10 flex flex-col justify-center h-full">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3 font-sans">
              {item.title}
            </p>
            <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
              {item.description}
            </p>
            <ul className="space-y-2.5">
              {item.bullets.slice(0, 3).map((pt) => (
                <li key={pt} className="flex items-start gap-3 font-sans text-[13px] text-gray-500 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* Second text box */}
          <div className="bg-gray-50 border border-gray-200 p-8 lg:p-10 flex flex-col justify-center h-full">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3 font-sans">
              Key Features
            </p>
            <p className="text-gray-700 leading-relaxed text-[15px] mb-6">
              Additional capabilities to enhance your exhibition experience
            </p>
            <ul className="space-y-2.5">
              {item.bullets.slice(3).map((pt) => (
                <li key={pt} className="flex items-start gap-3 font-sans text-[13px] text-gray-500 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
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

        {/* ── MOSAIC HERO HEADER (IMAGES KEPT) ── */}
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

        {/* ── EXHIBITION MANAGEMENT INTRO (IMAGES REMOVED, TEXT SIDE BY SIDE) ── */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-start">
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
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Key Benefits</p>
              <div className="bg-white border border-gray-200 p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 font-sans text-[14px] text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                    End-to-end exhibitor journey management
                  </li>
                  <li className="flex items-start gap-3 font-sans text-[14px] text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                    Maximize sponsorship ROI with real-time data
                  </li>
                  <li className="flex items-start gap-3 font-sans text-[14px] text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                    Seamless integration with virtual and physical formats
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXHIBITION OFFERINGS (IMAGES REMOVED, SIDE BY SIDE TEXT BOXES) ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <OfferingBlocks items={exhibitionOfferings} />
          </div>
        </section>

        {/* ── DIVIDER BAND (IMAGES REMOVED, TEXT ONLY) ── */}
        <section className="py-20 bg-gray-900">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-white">
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

        {/* ── DELEGATE SCANNING INTRO (IMAGES REMOVED, TEXT SIDE BY SIDE) ── */}
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
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Core Capabilities</p>
              <div className="bg-white border border-gray-200 p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 font-sans text-[14px] text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                    Real-time access control and validation
                  </li>
                  <li className="flex items-start gap-3 font-sans text-[14px] text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                    Comprehensive attendee behavior tracking
                  </li>
                  <li className="flex items-start gap-3 font-sans text-[14px] text-gray-600">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0" />
                    Automated CME/CPD compliance reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SCANNING OFFERINGS (IMAGES REMOVED, SIDE BY SIDE TEXT BOXES) ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <OfferingBlocks items={scanningOfferings} />
          </div>
        </section>

        {/* ── SCANNING HIGHLIGHT (IMAGES REMOVED, TEXT ONLY) ── */}
        <section className="py-20 bg-gray-900">
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-white">
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