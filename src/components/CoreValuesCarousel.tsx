"use client";

import { useState } from "react";

interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

const coreValues: CoreValue[] = [
  {
    title: "Excellence",
    description: "We strive for perfection in every detail, delivering exceptional results that exceed expectations.",
    icon: "⭐"
  },
  {
    title: "Innovation",
    description: "We embrace cutting-edge technology and creative solutions to revolutionize event management.",
    icon: "💡"
  },
  {
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices in all our relationships.",
    icon: "🤝"
  },
  {
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnerships to achieve extraordinary outcomes.",
    icon: "👥"
  },
  {
    title: "Sustainability",
    description: "We are committed to environmentally responsible practices that benefit our planet and communities.",
    icon: "🌱"
  },
  {
    title: "Client-Centric",
    description: "Our clients' success is our priority, and we tailor every solution to their unique needs.",
    icon: "🎯"
  }
];

export default function CoreValuesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % coreValues.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + coreValues.length) % coreValues.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main carousel container */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {coreValues.map((value, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center text-white">
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">{value.title}</h3>
                <p className="text-lg leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center space-x-2 mt-6">
        {coreValues.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
