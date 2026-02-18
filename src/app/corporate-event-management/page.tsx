"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CorporateEventsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="bg-white text-gray-900">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1503424886303-4de2b9049a4b?auto=format&fit=crop&w=1200&q=80"
                alt="Corporate conference managed by SQL Events"
                width={1200}
                height={800}
                className="w-full h-auto shadow-md"
              />
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Our Services</p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-baskervville">
                Corporate Events & Conference Management
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p>
                We have a distinguished profile in planning, coordination and management of Corporate Events and Conferences, Exhibitions, Annual General Meetings, Seminars, Workshops, Opening/Closing Ceremonies, Entertainment Shows, Product Launches, Award Night and Weddings. With SQL Events Nigeria, you will find us a one stop shop for your event and project management needs. We always infuse Passion, Innovation and Technology into all our project management processes. We will manage the deliverables and outcomes for you leaving you with valuable time to do your day job and oversee our work.
              </p>
              <p>We work with our clients from conceptualisation through all the planning stages to the eventual delivery.</p>
              <p>
                Our goal is to offer our clients a first rate international conference/event experience, no matter the size. With our well trained and experienced staff, we provide expertise in every aspect of Conference and Corporate Event Management. We incorporate software and technology in every aspect of our events.
              </p>
              <p>
                We are very experienced with managing high profile events nationwide. We have planned, managed and executed event projects for international NGOs, professional associations, corporate organisations, Federal Government Agencies and Ministries and State Governments.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
