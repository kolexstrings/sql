"use client";

import { useState } from "react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                We provide customised solutions that exceed our customers' expectations by putting them at the centre of everything we do. Our commitment to continuous improvement drives us to constantly enhance our processes and services so that we are always one step ahead in the industry.
              </p>
              <p>
                Our team is made up of professionals from different nationalities and backgrounds who bring a variety of skills and perspectives to the table. This diversity fosters creativity and innovation and allows us to approach challenges from different angles.
              </p>
              <p>
                Strategic thinking and precise execution are firmly anchored in our DNA, whether in the planning of international conferences or the management of associations. We believe that the best results are achieved through collaboration, sharing ideas and utilising our collective expertise in a collaborative environment.
              </p>
              <p>
                Sustainability is of paramount importance to us. We integrate environmentally friendly practices into all aspects of our operations and strive to minimise our impact on the environment while providing first-class services.
              </p>
              <p>
                Our guiding principles enable us to consistently deliver high-quality services that promote the success of our clients. We strive to build lasting relationships based on trust, reliability and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Memberships & Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {/* Partner logos with proper names */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-600 text-xs font-medium text-center">Basel Convention Büro</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-600 text-xs font-medium text-center">ESAE</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-600 text-xs font-medium text-center">Ethical MedTech</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-600 text-xs font-medium text-center">Healthy Venues</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-600 text-xs font-medium text-center">IAPCO</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-600 text-xs font-medium text-center">ICCA</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-600 text-xs font-medium text-center">London & Partners</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-600 text-xs font-medium text-center">Maritz</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-600 text-xs font-medium text-center">PCMA</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-600 text-xs font-medium text-center">Swisstainable</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-600 text-xs font-medium text-center">Zürich Convention Büro</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 w-full h-24 flex items-center justify-center hover:shadow-md transition-shadow">
              <span className="text-gray-600 text-xs font-medium text-center">Glasgow Convention Bureau</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">CUSTOMER SERVICE</h3>
              <p className="text-gray-700">
                We live CUSTOMER SERVICE at its best by being committed to excellence, quality and efficiency.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">CARE</h3>
              <p className="text-gray-700">
                We CARE – our clients, participants, employees and planet deserve our care and attention.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <h3 className="text-2xl font-semibold text-purple-900 mb-4">PROGRESS SPIRIT</h3>
              <p className="text-gray-700">
                PROGRESS SPIRIT – we embrace challenges and create smart solutions out of the box.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
              <h3 className="text-2xl font-semibold text-orange-900 mb-4">TEAM SPIRIT</h3>
              <p className="text-gray-700">
                TEAM SPIRIT – we work hard and with dedication but we never forget the joy and the smile.
              </p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
              <h3 className="text-2xl font-semibold text-teal-900 mb-4">RELIABILITY</h3>
              <p className="text-gray-700">
                RELIABILITY – we aim to be a reliable and trusted partner with all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Purpose</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Advances in knowledge happen quicker when those communities are able to connect and share so that they can develop ideas together. SqlEvents makes it easy by creating powerful connections every day and bringing people together.
          </p>
          <p className="text-2xl font-semibold mb-8">SqlEvents makes it easy.</p>
          <div className="flex justify-center items-center space-x-6 mb-8">
            <span className="text-lg">Connect</span>
            <span className="text-lg">•</span>
            <span className="text-lg">Explore</span>
            <span className="text-lg">•</span>
            <span className="text-lg">Succeed</span>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
