"use client";

import { useState } from "react";
import Image from "next/image";
import useReveal from "@/hooks/useReveal";

const jobWorkPhotos = [
  {
    src: "/images/2026-01-22 (3).jpg",
    alt: "Precision Job Work: Step-by-step transformation of a solid metal block into a finished custom slotted component",
    title: "Block to Custom Component",
    tag: "Real Job Work Case Study",
    aspect: "col-span-1 row-span-2",
  },
  {
    src: "/images/2025-11-16.jpg",
    alt: "Active Shree Mahalaxmi Engineering machine shop with machinist operating Plano Miller on heavy steel plates",
    title: "Plano Miller in Operation",
    tag: "Live Workshop Machining",
    aspect: "col-span-1 row-span-1",
  },
  {
    src: "/images/2026-01-22 (1).jpg",
    alt: "Precision machined step block with shaped guideway slots and chamfered edges",
    title: "Shaped Guideway Step Block",
    tag: "Finished Component",
    aspect: "col-span-1 row-span-1",
  },
  {
    src: "/images/2026-01-22 (2).jpg",
    alt: "Dimensional verification of custom-machined metal component with inspection markings",
    title: "Dimensional Inspection & Marking",
    tag: "Drawing Verified",
    aspect: "col-span-2 row-span-1",
  },
];

const keyFacts = [
  { label: "9+", detail: "Machining Processes", sub: "Plano, Shaping, CNC, Lathe" },
  { label: "±0.02 mm", detail: "Drawing Tolerance", sub: "Vernier & Dial Inspection" },
  { label: "Raw to Part", detail: "Turnkey Scope", sub: "From Stock to Delivery" },
];

export default function About() {
  const sectionRef = useReveal();
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <section id="about" className="relative bg-slate-950 py-24 lg:py-32 text-white border-t border-slate-800/80 overflow-hidden" ref={sectionRef}>
        {/* Subtle background ambient glow */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main two-column layout */}
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Content & Credentials (5 cols) */}
            <div className="lg:col-span-5 reveal">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                Workshop Facility & Capability
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-[var(--font-heading)] leading-[1.15]">
                Custom Machining, <br className="hidden sm:inline" />
                <span className="text-amber-500">Built to Your Drawing</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                Shree Mahalaxmi Engineering is a precision job-work workshop based in Chirag Estate, Ahmedabad. We specialize in transforming raw forgings, bar stock, and heavy plates into high-accuracy machine components.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Unlike shops limited to small turned pins, our floor handles heavy plano milling, multi-face shaping, deep slotting, cylindrical grinding, and boring center work. Every cut is executed strictly per client drawings and fitment tolerances.
              </p>

              {/* Key facts row */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
                {keyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-slate-800 bg-slate-900/90 p-3.5 sm:p-4 text-center transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1 shadow-md"
                  >
                    <span className="block text-xl sm:text-2xl font-extrabold text-amber-500 font-[var(--font-heading)]">
                      {fact.label}
                    </span>
                    <span className="mt-1 block text-xs font-semibold text-slate-200">
                      {fact.detail}
                    </span>
                    <span className="mt-0.5 block text-[10px] text-slate-400 hidden sm:block">
                      {fact.sub}
                    </span>
                  </div>
                ))}
              </div>

              {/* Direct callout */}
              <div className="p-4 rounded-xl bg-slate-900/60 border-l-4 border-amber-500 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">Job-Work Inspection:</strong> All components are verified for parallel faces, squareness, and slot concentricity prior to dispatch.
              </div>
            </div>

            {/* Right: Premium Curated Photo Grid of Real Job Works (7 cols) */}
            <div className="lg:col-span-7 reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="relative">
                {/* Floating pill badge */}
                <div className="absolute -top-4 -right-2 z-20 bg-amber-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 border border-amber-400">
                  <span>📸</span> Real Workshop Output
                </div>

                <div className="grid grid-cols-2 grid-rows-[240px_190px_170px] gap-3.5 sm:gap-4">
                  {/* Photo 1: Big vertical feature (Solid Block to Component) */}
                  <div
                    onClick={() => setActiveImage(jobWorkPhotos[0])}
                    className="group relative col-span-1 row-span-2 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 cursor-pointer shadow-2xl transition-all duration-500 hover:border-amber-500/60 hover:shadow-amber-500/10"
                  >
                    <Image
                      src={jobWorkPhotos[0].src}
                      alt={jobWorkPhotos[0].alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 35vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow">
                        {jobWorkPhotos[0].tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-sm sm:text-base font-bold font-[var(--font-heading)] leading-snug">
                        {jobWorkPhotos[0].title}
                      </h3>
                      <p className="text-[11px] text-amber-400 mt-1 flex items-center gap-1">
                        <span>Click to inspect steps</span> →
                      </p>
                    </div>
                  </div>

                  {/* Photo 2: Top-right (Plano Miller in Operation) */}
                  <div
                    onClick={() => setActiveImage(jobWorkPhotos[1])}
                    className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 cursor-pointer shadow-xl transition-all duration-500 hover:border-amber-500/60"
                  >
                    <Image
                      src={jobWorkPhotos[1].src}
                      alt={jobWorkPhotos[1].alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-90" />
                    
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider bg-slate-900/90 text-amber-400 border border-slate-700">
                        {jobWorkPhotos[1].tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white text-xs sm:text-sm font-bold font-[var(--font-heading)]">
                        {jobWorkPhotos[1].title}
                      </h3>
                    </div>
                  </div>

                  {/* Photo 3: Middle-right (Finished Step Block) */}
                  <div
                    onClick={() => setActiveImage(jobWorkPhotos[2])}
                    className="group relative col-span-1 row-span-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 cursor-pointer shadow-xl transition-all duration-500 hover:border-amber-500/60"
                  >
                    <Image
                      src={jobWorkPhotos[2].src}
                      alt={jobWorkPhotos[2].alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-90" />
                    
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider bg-slate-900/90 text-emerald-400 border border-slate-700">
                        {jobWorkPhotos[2].tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white text-xs sm:text-sm font-bold font-[var(--font-heading)]">
                        {jobWorkPhotos[2].title}
                      </h3>
                    </div>
                  </div>

                  {/* Photo 4: Bottom full width (Inspection & Verification) */}
                  <div
                    onClick={() => setActiveImage(jobWorkPhotos[3])}
                    className="group relative col-span-2 row-span-1 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 cursor-pointer shadow-xl transition-all duration-500 hover:border-amber-500/60"
                  >
                    <Image
                      src={jobWorkPhotos[3].src}
                      alt={jobWorkPhotos[3].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-90" />
                    
                    <div className="absolute top-2.5 left-3">
                      <span className="px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider bg-slate-900/90 text-amber-400 border border-slate-700">
                        {jobWorkPhotos[3].tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <h3 className="text-white text-xs sm:text-sm font-bold font-[var(--font-heading)]">
                        {jobWorkPhotos[3].title}
                      </h3>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider hidden sm:inline">
                        Click to enlarge ↗
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Materials strip */}
          <div className="reveal mt-16 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-center backdrop-blur shadow-lg">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300">
              <span className="font-bold text-amber-500 uppercase tracking-wider mr-2">
                Materials Processed:
              </span>
              {["Mild Steel (MS)", "EN8 / EN9", "EN24 / EN31", "SS 304 / 316", "Cast Iron (CI)", "SG Iron", "Aluminium Alloys", "Tool Steel"].map((mat) => (
                <span
                  key={mat}
                  className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700/60 font-medium hover:border-amber-500/40 transition-colors"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enlarged Inspection Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">
                  {activeImage.tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-[var(--font-heading)]">
                  {activeImage.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close image"
              >
                ✕
              </button>
            </div>

            <div className="relative w-full h-[65vh] sm:h-[75vh] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
