"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive event management solutions tailored to bring your
              vision to life through excellence, innovation, and strategic
              execution.
            </p>
          </div>
        </div>
      </section>

      {/* Service Groups Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Service Groups
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Conference Organisation */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                Conference Organisation
              </h3>
              <p className="text-gray-700 mb-6">
                As premier event management specialists, we specialize in
                organizing conferences for corporate clients, associations, and
                organizations across various industries.
              </p>
              <Link
                href="/services/conference-organisation"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Event Management */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">
                Event Management
              </h3>
              <p className="text-gray-700 mb-6">
                Complete event planning and execution services, from concept
                development to post-event analysis, ensuring memorable and
                successful events.
              </p>
              <Link
                href="/services/event-management"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Marketing & Communication */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-semibold text-purple-900 mb-4">
                Marketing & Communication
              </h3>
              <p className="text-gray-700 mb-6">
                Strategic marketing and communication services to amplify your
                event's reach and impact through digital and traditional
                channels.
              </p>
              <Link
                href="/services/marketing-communication"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Service Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Management Services */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Project Management Services
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                End-to-end project management ensuring seamless execution from
                planning to completion.
              </p>
              <Link
                href="/services/project-management"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Registration Services */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Registration Services
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Streamlined online and onsite registration processes with
                real-time tracking and reporting.
              </p>
              <Link
                href="/services/registration"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Hotel Accommodation */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Hotel Accommodation
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive accommodation services with preferred rates and
                block management.
              </p>
              <Link
                href="/services/hotel-accommodation"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Exhibition and Sponsorship Planning */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Exhibition and Sponsorship Planning
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Strategic exhibition layout and sponsorship acquisition to
                maximize revenue and engagement.
              </p>
              <Link
                href="/services/exhibition-sponsorship"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Abstract Management Services */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Abstract Management
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional abstract submission, review, and management using
                advanced technology platforms.
              </p>
              <Link
                href="/services/abstract-management"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Networking Events Planning */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Networking Events
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Creative networking opportunities designed to foster meaningful
                connections and engagement.
              </p>
              <Link
                href="/services/networking-events"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Destination Management */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Destination Management
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Local expertise for transportation, VIP services, and unique
                experiences in host destinations.
              </p>
              <Link
                href="/services/destination-management"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Online Conference & Event Services */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Virtual Events
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional virtual and hybrid event solutions with secure,
                engaging platforms.
              </p>
              <Link
                href="/services/virtual-events"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Event Software Solutions */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Event Software
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Custom event management software solutions for registration,
                engagement, and analytics.
              </p>
              <Link
                href="/services/event-software"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Event Rentals */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Event Rentals
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete equipment rental services including AV, staging, and
                technical support.
              </p>
              <Link
                href="/services/event-rentals"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Lanyards Supply */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Branding Materials
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Custom badges, lanyards, and promotional materials that reflect
                your brand identity.
              </p>
              <Link
                href="/services/branding-materials"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Graphic Design */}
            <div className="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Graphic Design
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Professional design services for event materials, branding, and
                marketing collateral.
              </p>
              <Link
                href="/services/graphic-design"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can bring your vision to life with our
            comprehensive event management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/portfolio"
              className="border border-white px-8 py-3 font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
