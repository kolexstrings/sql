"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AbstractManagementPage() {
  return (
    <div className="min-h-screen bg-white font-['Cormorant_Garamond',Georgia,serif]">
      <Header />

      <main className="bg-white text-gray-900">

        {/* ── MOSAIC HERO HEADER ── (kept unchanged) */}
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
              <Image src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop" alt="Abstract documents" fill className="object-cover" />
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
                Online Abstract
                <br />
                Management
              </h1>
            </div>
          </div>
        </section>

        {/* Intro Section – kept the image */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative order-last lg:order-first">
              <Image
                src="/slider/photo4.jpg"
                alt="African professionals in meeting"
                width={1200}
                height={800}
                className="w-full h-auto shadow-md"
              />
            </div>
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-sans">Our Services</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-baskervville">
                Abstracts Management
              </h2>
              <p className="text-base leading-relaxed text-gray-700">
                Our abstract management system is a complete Online Abstract Management Software
                that handles Submission, Reviewing, Sessioning and all the way to Publishing. Our
                solution streamlines the often-complex workflow of managing Abstract submissions,
                Reviewing &amp; Reviewers, Scheduling, and digital publishing for academic and
                educational events.
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                Your book of Abstracts or Journal now becomes easy to publish. With our
                Abstractlogic, no more gmail.com mailboxes clogged with mails and abstracts from
                submitters. We have eliminated all the paper processes entirely.
              </p>
            </div>
          </div>
        </section>

        {/* Body Copy + Key Offerings – images removed from here downward */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
            <div className="space-y-6 text-base text-gray-700 leading-relaxed">
              <p>
                Your Reviewers get and review abstracts online. They can review anytime and from
                anywhere they are in the world. It is stress free and easy for both submitters and
                administrators.
              </p>
              <p>
                We will manage the entire Abstract process for you. The Presentation Schedules for
                Oral Abstracts designed by our Software can be inserted into the Conference Bags of
                Participants or shown in the Mobile App and uploaded on the Conference Website.
              </p>
              <p>
                With our system, you can extend the Abstract submission process to any timeframe
                you want and still meet conference timelines comfortably. We have a unique and
                exclusive way of presenting Poster Abstracts.
              </p>
            </div>

            {/* Key Offerings – text cards side by side */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-baskervville mb-10">
                Key Offerings
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Card 1 */}
                <div className="bg-gray-50 border border-gray-200 p-8 lg:p-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 font-sans">
                    Abstract Software &amp; Services
                  </p>
                  <p className="text-gray-700 leading-relaxed text-[15px]">
                    A dedicated online portal designed to fit your brand and website for submitting
                    and scoring abstracts, ensuring a fair and anonymous peer-review process.
                    Includes professional Abstract Services support for authors and reviewers.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-gray-50 border border-gray-200 p-8 lg:p-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 font-sans">
                    Programme &amp; Agenda Management
                  </p>
                  <p className="text-gray-700 leading-relaxed text-[15px]">
                    Tools to build, schedule, and organise the entire event programme, handling
                    track assignments, room logistics, and speaker confirmations.
                  </p>
                </div>

                {/* Card 3 – full width for longer content */}
                <div className="bg-gray-50 border border-gray-200 p-8 lg:p-10 lg:col-span-2">
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4 font-sans">
                    Digital Content Publication
                  </p>
                  <p className="text-gray-700 leading-relaxed text-[15px]">
                    Creation of the official Abstract Book in both print and digital formats.
                    Development of an Interactive Library for post-event browsing and searching of
                    accepted content. Advanced digital presentation options via ePosters/iPosters
                    and Poster Services for high-impact visual delivery. Management of Awards
                    Software for reviewing and honouring outstanding contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Highlight Section – removed background image, kept solid color */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-4 font-sans">
                  Why it matters
                </p>
                <h2 className="text-3xl md:text-4xl font-baskervville font-bold mb-6">
                  A smarter, fully digital abstract workflow
                </h2>
                <p className="text-white/90 leading-relaxed text-lg">
                  From first submission to final publication, Abstractlogic removes friction at
                  every step — for organisers, reviewers, and authors alike. One platform, every
                  touchpoint, zero paper.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "100% Online Submission",
                  "Anonymous Peer Review",
                  "ePosters & iPosters",
                  "Digital Abstract Book",
                ].map((stat) => (
                  <div
                    key={stat}
                    className="bg-white/10 border border-white/20 p-6 text-center rounded-sm"
                  >
                    <p className="text-base font-medium tracking-wide">{stat}</p>
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