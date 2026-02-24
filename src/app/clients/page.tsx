"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const testimonials = [
  {
    quote:
      "SqlEvents transformed our annual conference into an extraordinary experience. Their attention to detail, innovative approach, and seamless execution exceeded all our expectations. The event was flawless from start to finish.",
    name: "Sarah Johnson",
    role: "Event Director",
    company: "TechCorp International",
    color: "blue",
  },
  {
    quote:
      "Working with SqlEvents was a game-changer for our product launch event. They handled everything from venue selection to technical production with professionalism and creativity. Our attendees were blown away by the experience.",
    name: "Michael Chen",
    role: "Marketing Manager",
    company: "InnovateLab",
    color: "green",
  },
  {
    quote:
      "The team at SqlEvents made our corporate retreat both productive and memorable. Their expertise in team-building activities and event coordination created the perfect balance of work and engagement for our executive team.",
    name: "Dr. Amanda Rodriguez",
    role: "HR Director",
    company: "Global Pharma Solutions",
    color: "purple",
  },
  {
    quote:
      "We've partnered with SqlEvents for three consecutive years for our industry summit. Their reliability, innovation, and commitment to excellence make them our go-to event management partner. Highly recommended!",
    name: "James Thompson",
    role: "Conference Chair",
    company: "National Industry Association",
    color: "orange",
  },
  {
    quote:
      "The virtual event SqlEvents produced for us during the pandemic was outstanding. They seamlessly adapted our in-person conference to a digital format while maintaining the same level of engagement and interaction.",
    name: "Prof. Elena Volkov",
    role: "Academic Conference Organizer",
    company: "International Research Institute",
    color: "teal",
  },
  {
    quote:
      "From concept to execution, SqlEvents delivered perfection. Their understanding of our brand and audience needs resulted in an event that not only met but exceeded our strategic objectives. A true partnership!",
    name: "Robert Kim",
    role: "Brand Director",
    company: "Luxury Lifestyle Group",
    color: "indigo",
  },
];

const clientLogos = [
  { name: "TechCorp International", logo: "TCI" },
  { name: "InnovateLab", logo: "IL" },
  { name: "Global Pharma Solutions", logo: "GPS" },
  { name: "National Industry Association", logo: "NIA" },
  { name: "International Research Institute", logo: "IRI" },
  { name: "Luxury Lifestyle Group", logo: "LLG" },
  { name: "Enterprise Solutions Ltd", logo: "ESL" },
  { name: "Healthcare Innovations", logo: "HI" },
];

export default function Clients() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Clients
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover what our clients say about their experience working with
              SqlEvents. We&apos;re proud to have partnered with leading
              organizations to create unforgettable events.
            </p>
          </div>
        </div>
      </section>

      {/* Client Testimonials Carousel Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Client Testimonials
          </h2>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main carousel container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="text-center">
                      <blockquote className="text-lg text-gray-700 mb-8 italic leading-relaxed">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div
                        className={`text-${testimonial.color}-600 font-semibold text-xl mb-2`}
                      >
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600 mb-2">
                        {testimonial.role}
                      </div>
                      <div className="text-gray-800 font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6"
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
            </button>

            {/* Dot indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 transition-colors ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Trusted By Leading Organizations
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mx-auto mb-3">
                    <span className="text-gray-600 font-bold text-lg">
                      {client.logo}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-gray-600">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how we can bring your vision to life with our
            comprehensive event management solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/corporate-event-management"
              className="border border-white px-8 py-3 font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
