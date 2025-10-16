export default function TaglineTab() {
  return (
    <header className="w-full max-w-7xl mx-auto">
      <div className="flex justify-center items-center py-6 px-12 bg-white/70 backdrop-blur-md shadow-lg border border-white/40">
        <span
          className="text-sm font-semibold uppercase tracking-[0.8em] hover:text-yellow-300 hover:scale-105 transition-all duration-300 cursor-pointer font-baskervville"
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
