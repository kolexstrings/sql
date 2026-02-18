"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="bg-white text-gray-900">
        {/* Hero Section - Image + Text */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Team Photo */}
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="SQL Events Team"
                  width={1200}
                  height={800}
                  className="w-full h-auto shadow-md"
                />
              </div>

              {/* Text Block */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2">
                    Our Foundation
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-baskervville mb-6">
                    ABOUT US
                  </h1>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-base leading-relaxed text-gray-700">
                    We are a Corporate Events & Conference Management Company.
                    We operate primarily in the Meeting, Incentives, Conferences
                    and Events Industry (MICE). We also engage in media and
                    marketing consultancy services. We work with our clients
                    from conceptualisation through all the planning stages to
                    the eventual delivery of their events and projects.
                  </p>
                  <p className="text-base leading-relaxed text-gray-700">
                    Our goal is to offer our clients a first rate international
                    event experience, no matter the size. With our well trained
                    and experienced staff, we provide expertise in every aspect
                    of the Event Process. We incorporate software and technology
                    in every aspect of our events. Our clientele spans the
                    Public Sector, Organized Private Sector, International NGOs
                    as well as Professional Associations.
                  </p>
                  <p className="text-base leading-relaxed text-gray-700 font-semibold">
                    In all our projects, we are driven by Passion, Innovation
                    and Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Body Text Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What We Do
              </h2>
              <p className="text-base leading-relaxed text-gray-700 mb-4">
                SQL Events Nigeria provides Management, Support Services and
                Consultancy to the MICE Industry with special emphasis on
                Conferences, Corporate events, Annual General Meetings,
                Exhibitions, Seminars, Workshops, Festivals, Entertainment
                Shows, Product Launches, Award Nights, etc.
              </p>
            </div>
          </div>
        </section>

        {/* Membership Logos */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
              Memberships
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {[
                { name: "IAPCO", color: "bg-purple-100 text-purple-700" },
                { name: "ICCA", color: "bg-green-100 text-green-700" },
                { name: "PCMA", color: "bg-blue-100 text-blue-700" },
                { name: "MPI", color: "bg-orange-100 text-orange-700" },
                { name: "SITE", color: "bg-red-100 text-red-700" },
                { name: "ESAE", color: "bg-teal-100 text-teal-700" },
                { name: "DMAI", color: "bg-indigo-100 text-indigo-700" },
                { name: "ASAE", color: "bg-pink-100 text-pink-700" },
              ].map((org) => (
                <div
                  key={org.name}
                  className="bg-white shadow-sm border border-gray-200 p-6 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 ${org.color} flex items-center justify-center mx-auto mb-2`}
                    >
                      <span className="font-bold text-sm">{org.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section with Background */}
        <section
          className="relative py-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div
            className="absolute inset-0 opacity-90"
            style={{ backgroundColor: "var(--brand-primary)" }}
          ></div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-2">
                Which mindset can you expect from us?
              </p>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  title: "OUR VISION",
                  body: "To be a leading Events & Conference Management company in Africa, marshalling the best in knowledge, human capital and technology to innovatively provide the best possible business solution to our clients, creating value and growth for ourselves and business partners",
                },
                {
                  title: "OUR MISSION",
                  body: "Marshalling the best in knowledge, human capital and technology to help our clients achieve their strategic goals through the provision of excellent, unique value-added services and products specific to their profile",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 text-white"
                >
                  <h3 className="text-lg font-bold uppercase tracking-wide mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed">{value.body}</p>
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
