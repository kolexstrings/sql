export default function TaglineTab() {
  return (
    <header className="w-full max-w-7xl mx-auto">
      <div className="flex justify-center items-center py-6 px-4 sm:px-12 bg-white/70 backdrop-blur-md shadow-lg border border-white/40 overflow-hidden">
        <span
          className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] sm:tracking-[0.8em] hover:text-yellow-300 transition-all duration-300 cursor-pointer whitespace-nowrap scale-[0.65] xs:scale-75 sm:scale-100"
          style={{
            color: "var(--brand-primary)",
            fontFamily: "var(--font-baskervville)",
          }}
        >
          Passion | Innovation | Technology
        </span>
      </div>
    </header>
  );
}