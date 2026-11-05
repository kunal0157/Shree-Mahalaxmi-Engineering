"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const SERVICES = [
  "CNC Machining",
  "Milling",
  "Lathe",
  "Shaping",
  "Plano Miller",
  "BMC Machining",
  "Grinding",
  "Drilling",
  "Planning Machine",
];

// High-definition generated machine works showcase images
const HERO_SLIDES = [
  {
    src: "/images/before-after/after-block.jpg",
    alt: "Precision CNC milled steel block with internal pockets and counterbored mounting holes",
    label: "Precision CNC Milled Blocks",
    sub: "Internal milled pockets, stepped datum faces & counterbores",
  },
  {
    src: "/images/before-after/after-shaft.jpg",
    alt: "Precision lathe turned stepped shafts, spindles, knurled bushings and threaded parts",
    label: "Lathe Turned Stepped Shafts & Spindles",
    sub: "Concentric diameters, keyways, and precision thread turning",
  },
  {
    src: "/images/before-after/after-plate.jpg",
    alt: "Precision vertical milled machine bed plate on workshop table",
    label: "Precision Milled Bed Plates",
    sub: "Deep pocketing, parallel datum edges & mounting faces",
  },
  {
    src: "/images/before-after/after-drilling.jpg",
    alt: "Precision radial drilled multi-hole PCD mounting flange with tapped threads",
    label: "Multi-Hole PCD Flange Drilling",
    sub: "Radial drilling, counterboring & precision thread tapping",
  },
  {
    src: "/images/before-after/after-grind.jpg",
    alt: "Precision cylindrical ground steel shaft with mirror surface finish",
    label: "Cylindrical & Surface Grinding",
    sub: "Micron-level dimensional tolerances & mirror finish",
  },
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Precision CNC turned flanges and bushing components",
    label: "CNC Turned Flanges & Components",
    sub: "High-precision circular turning & fine surface finish",
  },
];

const SLIDE_DURATION = 3000; // Auto-scrolls every 3 seconds

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide progression every 3 seconds (no manual icons)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = window.innerWidth >= 1024 ? 96 : 80;
      window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Engineering Works Showcase"
      className="relative min-h-[calc(100vh-5rem)] lg:min-h-screen flex flex-col justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-0 select-none"
    >
      {/* ── Background Image Slider (Auto-scrolls every 3s with smooth crossfade) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.src}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-0" : "opacity-0 -z-10"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                quality={92}
                className={`object-cover transition-transform duration-[4000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          );
        })}

        {/* Cinematic Dual Industrial Overlay for crisp legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/78 to-slate-950/50 z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* ── Main Content — Left-aligned ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center z-20">
        <div className="max-w-2xl xl:max-w-3xl py-10 sm:py-14 lg:py-16">
          {/* Label with Live Auto-Slide Indicator */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <p className="text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Precision Engineering • Ahmedabad
            </p>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-amber-400/60" />
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px] font-medium backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Machine Works Showcase</span>
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.25rem] font-bold leading-[1.15] tracking-tight text-white mb-5 font-[var(--font-heading)]">
            Engineering Job Work &{" "}
            <span className="text-amber-400">Custom Machine Parts</span>{" "}
            Manufacturing
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed mb-8">
            We transform raw materials into precision-engineered components —
            machined to your exact drawings, dimensions, and tolerances at our Chirag Estate machine shop.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8 lg:mb-10">
            <button
              onClick={() => scrollTo("#contact")}
              className="group px-7 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl transition-all duration-200 flex items-center gap-2 text-sm sm:text-base cursor-pointer shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40"
            >
              Request a Quote
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="px-7 py-3.5 border border-white/30 hover:border-white/70 hover:bg-white/10 text-white rounded-xl transition-all duration-200 font-medium text-sm sm:text-base cursor-pointer backdrop-blur-sm"
            >
              Explore Services
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-5 sm:gap-8 max-w-md pt-2 border-t border-white/10">
            {[
              { value: "9+", label: "Machining Processes" },
              { value: "100%", label: "As Per Drawing" },
              { value: "Custom", label: "Precision Finish" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-3xl font-bold text-amber-400 leading-none mb-1 font-[var(--font-heading)]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Slide Progress Bar (Automatic 3s Cycle, No Icons) ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/70 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5">
          {/* Current Slide Info */}
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-xs font-mono font-bold text-amber-400 shrink-0">
              0{currentSlide + 1} / 0{HERO_SLIDES.length}
            </span>
            <span className="w-px h-3.5 bg-white/20 shrink-0" />
            <div className="truncate">
              <span className="text-xs font-semibold text-white truncate block">
                {HERO_SLIDES[currentSlide].label}
              </span>
              <span className="text-[10px] text-slate-400 truncate hidden sm:block">
                {HERO_SLIDES[currentSlide].sub}
              </span>
            </div>
          </div>

          {/* Minimal Auto-Scroll Progress Dots (No Icons) */}
          <div className="flex items-center gap-1.5 shrink-0">
            {HERO_SLIDES.map((_, idx) => (
              <span
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentSlide
                    ? "w-6 bg-amber-500 shadow-sm shadow-amber-500/50"
                    : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Services Strip — Bottom ── */}
      <div className="relative z-20 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 py-3 overflow-x-auto scrollbar-hide">
            <span className="text-xs text-amber-400 font-bold uppercase tracking-wider whitespace-nowrap shrink-0">
              Machining Capabilities:
            </span>
            <span className="w-px h-4 bg-white/15 shrink-0" />
            {SERVICES.map((service) => (
              <span
                key={service}
                className="px-3 py-1 text-xs text-slate-300 bg-white/5 border border-white/10 rounded-md whitespace-nowrap shrink-0 hover:border-amber-500/50 hover:text-amber-300 transition-colors cursor-default"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
