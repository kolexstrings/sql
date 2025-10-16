"use client";

import Link from "next/link";
import CoreValuesCarousel from "@/components/CoreValuesCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutUs() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Content */}
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About Us
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At SqlEvents, our commitment to excellence, innovation and collaboration defines our approach to work.
              </p>
            </div>
          </div>
        </section>

        {/* First Section: Image + Text Layout */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image on the left */}
              <div className="relative">
                <div className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                    alt="Professional corporate conference with engaged business audience and keynote speaker"
                    className="w-full h-96 object-cover"
                  />
                </div>
                {/* Optional overlay or decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-10"></div>
              </div>

              {/* Text content on the right */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Creating Unforgettable Experiences
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We are passionate about transforming visions into extraordinary realities. With years of experience in the event management industry, our team brings together creativity, precision, and innovation to deliver exceptional results.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From intimate corporate gatherings to large-scale international conferences, we handle every detail with meticulous care, ensuring that each event not only meets but exceeds expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/services"
                    className="bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-colors text-center"
                  >
                    Explore Our Services
                  </Link>
                  <Link
                    href="/contact"
                    className="border border-gray-300 text-gray-700 px-6 py-3 font-semibold hover:bg-gray-50 transition-colors text-center"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second Section: Text Body + Membership Cards */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Left-aligned text body */}
            <div className="max-w-4xl mb-16">
              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Our journey began with a simple vision: to revolutionize the event management industry by combining cutting-edge technology with personalized service. Founded in 2010, SqlEvents emerged from the recognition that traditional event planning methods were no longer sufficient for the digital age.
                </p>
                <p>
                  From our modest beginnings as a small team of passionate event coordinators, we have grown into a comprehensive event management powerhouse. Our commitment to innovation has led us to develop proprietary technologies that streamline every aspect of event planning, from initial concept to final execution.
                </p>
                <p>
                  Throughout our evolution, we've maintained our core values of excellence, integrity, and client-centric service. Every team member brings unique expertise and cultural perspectives, creating a dynamic environment where creativity flourishes and challenges are met with innovative solutions.
                </p>
                <p>
                  Today, we stand as a trusted partner to organizations worldwide, delivering exceptional events that not only meet objectives but exceed expectations. Our track record speaks for itself, with hundreds of successful events across diverse industries and continents.
                </p>
                <p>
                  As we look to the future, we remain committed to pushing boundaries, embracing new technologies, and maintaining the personal touch that has always set us apart. Every event we manage is an opportunity to create lasting memories and meaningful connections.
                </p>
                <p>
                  Our success is measured not just by the events we produce, but by the lasting relationships we build and the positive impact we make in the communities we serve. We believe that great events have the power to inspire, educate, and transform.
                </p>
                <p>
                  Looking ahead, we continue to invest in our people, our technology, and our processes to ensure we remain at the forefront of the event management industry. Our vision extends beyond individual events to creating platforms for meaningful engagement and lasting change.
                </p>
                <p>
                  We are proud of our journey and excited about what the future holds. Every challenge we face is an opportunity to innovate, every success a testament to our dedication, and every client relationship a cherished partnership in our shared pursuit of excellence.
                </p>
              </div>
            </div>

            {/* Membership subtitle and cards */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Membership</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {/* Membership/Partner logos */}
                <div className="bg-white p-6 shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold text-lg">IAPCO</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600">IAPCO Member</span>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold text-lg">ICCA</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600">ICCA Member</span>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-purple-600 font-bold text-lg">PCMA</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600">PCMA Partner</span>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-orange-600 font-bold text-lg">MPI</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600">MPI Member</span>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold text-lg">SITE</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600">SITE Member</span>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-teal-600 font-bold text-lg">ESAE</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600">ESAE Member</span>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-indigo-600 font-bold text-lg">DMAI</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600">DMAI Partner</span>
                  </div>
                </div>

                <div className="bg-white p-6 shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-pink-600 font-bold text-lg">ASAE</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600">ASAE Member</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section: Background Image with Carousel and Mission/Vision Cards */}
        <section
          className="relative py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=80')"
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Core Values Carousel */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>

              <CoreValuesCarousel />
            </div>

            {/* Mission and Vision Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To revolutionize the event management industry by delivering exceptional, innovative, and sustainable solutions that create unforgettable experiences. We are committed to exceeding client expectations through cutting-edge technology, personalized service, and strategic partnerships that drive meaningful connections and lasting impact.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-4 text-green-300">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To be the world's most trusted and innovative event management partner, setting the industry standard for excellence, sustainability, and client satisfaction. We envision a future where every event becomes a catalyst for positive change, fostering global connections and creating memories that inspire generations to come.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}