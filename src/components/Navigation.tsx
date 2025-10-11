export default function Navigation() {
  return (
    <nav className="w-full max-w-7xl mx-auto">
      <div className="flex justify-center items-center gap-10 md:gap-16 py-6 px-12 bg-white/20 backdrop-blur-md shadow-lg border border-white/10">
        <a
          href="#services"
          className="text-sm font-medium uppercase tracking-[0.2em] hover:text-white hover:scale-105 transition-all duration-300 relative group"
        >
          <span className="relative z-10">Services</span>
          <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#events"
          className="text-sm font-medium uppercase tracking-[0.2em] hover:text-white hover:scale-105 transition-all duration-300 relative group"
        >
          <span className="relative z-10">Events</span>
          <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#gallery"
          className="text-sm font-medium uppercase tracking-[0.2em] hover:text-white hover:scale-105 transition-all duration-300 relative group"
        >
          <span className="relative z-10">Gallery</span>
          <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="#about"
          className="text-sm font-medium uppercase tracking-[0.2em] hover:text-white hover:scale-105 transition-all duration-300 relative group"
        >
          <span className="relative z-10">About</span>
          <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  );
}
