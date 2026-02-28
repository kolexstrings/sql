"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, organisation, subject, message } = formData;
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AOrganisation: ${organisation}%0ASubject: ${subject}%0A%0AMessage:%0A${message}`;
    window.location.href = `mailto:info@sqlevents.ng?subject=${encodeURIComponent(subject || "Contact Form Enquiry")}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white font-['Cormorant_Garamond',Georgia,serif]">
      <Header />

      <main className="bg-white text-gray-900">

        {/* ── MOSAIC HERO ── */}
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
              <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-2 font-sans">SQL Events Nigeria</p>
              <h1
                className="text-4xl md:text-5xl font-light tracking-widest text-gray-900 uppercase"
                style={{ letterSpacing: "0.18em" }}
              >
                Contact
                <br />
                Us
              </h1>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr,1.4fr] gap-16 items-start">

            {/* ── LEFT: Contact Info ── */}
            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
                <p className="font-sans text-[15px] text-gray-600 leading-relaxed">
                  We would love to hear from you. Whether you have a project in mind, need a
                  quote, or simply want to learn more about our services — our team is ready
                  to assist.
                </p>
              </div>

              {/* Address */}
              <div className="border-l-2 border-gray-200 pl-5 space-y-1">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-sans mb-2">Office Address</p>
                <p className="font-sans text-[15px] text-gray-700 leading-relaxed">
                  22 Almond Court<br />
                  VON Garden City Estate<br />
                  Airport Road<br />
                  Abuja, Nigeria
                </p>
              </div>

              {/* Phone */}
              <div className="border-l-2 border-gray-200 pl-5 space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-sans mb-2">Phone</p>
                <a href="tel:+2348050501927" className="block font-sans text-[15px] text-gray-700 hover:text-gray-900 transition-colors">
                  +234 80 5050 1927
                </a>
                <a href="tel:+2347038302791" className="block font-sans text-[15px] text-gray-700 hover:text-gray-900 transition-colors">
                  +234 70 3830 2791
                </a>
              </div>

              {/* Email */}
              <div className="border-l-2 border-gray-200 pl-5">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400 font-sans mb-2">Email</p>
                <a href="mailto:info@sqlevents.ng" className="font-sans text-[15px] text-gray-700 hover:text-gray-900 transition-colors">
                  info@sqlevents.ng
                </a>
              </div>

              {/* Map placeholder */}
              <div className="relative w-full h-56 bg-gray-100 overflow-hidden rounded-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1!2d7.2!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDfCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SQL Events Nigeria Location"
                />
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <div className="bg-gray-50 border border-gray-200 p-8 lg:p-10">
              <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-6 font-sans">Send Us a Message</p>

              {sent ? (
                <div className="py-16 text-center">
                  <p className="text-2xl font-light text-gray-900 mb-3">Message Sent</p>
                  <p className="font-sans text-[15px] text-gray-500">
                    Your default mail app has been opened. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 font-sans text-sm uppercase tracking-widest border border-gray-300 px-6 py-3 text-gray-600 hover:border-gray-900 hover:text-gray-900 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.25em] text-gray-400 mb-2 font-sans">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-200 bg-white px-4 py-3 font-sans text-[14px] text-gray-800 focus:outline-none focus:border-gray-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.25em] text-gray-400 mb-2 font-sans">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-200 bg-white px-4 py-3 font-sans text-[14px] text-gray-800 focus:outline-none focus:border-gray-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-[0.25em] text-gray-400 mb-2 font-sans">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-200 bg-white px-4 py-3 font-sans text-[14px] text-gray-800 focus:outline-none focus:border-gray-500 transition-colors"
                        placeholder="+234 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.25em] text-gray-400 mb-2 font-sans">Organisation</label>
                      <input
                        type="text"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        className="w-full border border-gray-200 bg-white px-4 py-3 font-sans text-[14px] text-gray-800 focus:outline-none focus:border-gray-500 transition-colors"
                        placeholder="Your organisation"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.25em] text-gray-400 mb-2 font-sans">Subject *</label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white px-4 py-3 font-sans text-[14px] text-gray-800 focus:outline-none focus:border-gray-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option>Corporate Event Management</option>
                      <option>Conference Registration</option>
                      <option>Online Abstract Management</option>
                      <option>Online Exhibition Software</option>
                      <option>Virtual Event Platforms</option>
                      <option>Membership Management</option>
                      <option>Lanyards Supply</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.25em] text-gray-400 mb-2 font-sans">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-white px-4 py-3 font-sans text-[14px] text-gray-800 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                      placeholder="Tell us about your event or enquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white font-sans text-sm uppercase tracking-widest py-4 hover:bg-gray-700 transition-colors duration-200"
                  >
                    Submit Message
                  </button>

                  <p className="font-sans text-xs text-gray-400 text-center">
                    This will open your mail app addressed to{" "}
                    <span className="text-gray-600">info@sqlevents.ng</span>
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}