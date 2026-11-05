"use client";
import { useState } from "react";
import Image from "next/image";
import useReveal from "@/hooks/useReveal";

const PROJECTS = [
  {
    id: 1,
    title: "Precision Machined Block",
    category: "CNC Machining",
    material: "Mild Steel",
    process: "CNC Milling & Pocketing",
    description: "Raw solid steel block precision-machined with internal pockets, counterbored holes, and accurate face tolerances.",
    before: "/images/before-after/before-block.jpg",
    after: "/images/before-after/after-block.jpg",
  },
  {
    id: 2,
    title: "Stepped Shaft Assembly",
    category: "Lathe Turning",
    material: "EN8 Steel",
    process: "Cylindrical Turning & Grooving",
    description: "Round bar stock turned to precise concentric stepped diameters with fine surface roughness and keyway slots.",
    before: "/images/before-after/before-shaft.jpg",
    after: "/images/before-after/after-shaft.jpg",
  },
  {
    id: 3,
    title: "Precision Milled Bed Plate",
    category: "Milling Works",
    material: "High-Tensile MS",
    process: "Vertical Milling & Slotting",
    description: "Raw heavy metal plate machined to absolute flatness with parallel side datum edges and mounting slots.",
    before: "/images/before-after/before-plate.jpg",
    after: "/images/before-after/after-plate.jpg",
  },
  {
    id: 4,
    title: "Ground Machine Tool Components",
    category: "Grinding Works",
    material: "Alloy Steel",
    process: "Surface & Cylindrical Grinding",
    description: "Components finish-ground to mirror surface quality and micron-level dimensional accuracy.",
    before: "/images/before-after/before-grind.jpg",
    after: "/images/before-after/after-grind.jpg",
  },
  {
    id: 5,
    title: "Multi-Hole Pattern Mounting Flange",
    category: "Drilling & Tapping",
    material: "Mild Steel",
    process: "Radial Drilling & Thread Tapping",
    description: "Solid plate converted into an engineered flange with precision PCD hole patterns and tapped threads.",
    before: "/images/before-after/before-drilling.jpg",
    after: "/images/before-after/after-drilling.jpg",
  },
];

function BeforeAfterSlider({ before, after, title }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosFromEvent = (clientX, rect) => {
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
    updatePosFromEvent(e.clientX, e.currentTarget.getBoundingClientRect());
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    updatePosFromEvent(e.clientX, e.currentTarget.getBoundingClientRect());
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture?.(e.pointerId);
    } catch {}
  };

  return (
    <div
      className="relative h-72 sm:h-80 cursor-ew-resize select-none overflow-hidden rounded-t-xl touch-none bg-slate-950"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      aria-label={`Interactive transformation slider for ${title}`}
    >
      {/* After Image (full background) */}
      <Image
        src={after}
        alt={`${title} — After precision machining`}
        fill
        className="object-cover pointer-events-none"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Before Image (clipped via clipPath) */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
      >
        <Image
          src={before}
          alt={`${title} — Raw material before machining`}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 h-full w-0.5 bg-amber-500 z-10 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-amber-500 rounded-full border-2 border-white shadow-xl flex items-center justify-center text-white">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/75 backdrop-blur-sm rounded-md text-[11px] font-semibold text-gray-200 pointer-events-none uppercase tracking-wider border border-white/10">
        Raw Stock
      </div>
      <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-amber-600/90 backdrop-blur-sm rounded-md text-[11px] font-semibold text-white pointer-events-none uppercase tracking-wider shadow-md">
        Finished Part
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const sectionRef = useReveal();
  const [showCaseStudyModal, setShowCaseStudyModal] = useState(false);

  return (
    <>
      <section id="portfolio" className="bg-slate-900 py-24 lg:py-32 text-white border-t border-slate-800" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 reveal">
            <span className="inline-block text-amber-500 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              Real Work Transformations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 font-[var(--font-heading)]">
              From Raw Stock to <span className="text-amber-500">Precision Components</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every job begins as raw bar stock, thick plate, or solid steel block. Below, inspect our actual progression and drag the interactive sliders to inspect before and after machining results.
            </p>
            <div className="w-20 h-1 bg-amber-500 rounded-full mt-6" />
          </div>

          {/* Featured Live Case Study Banner (User's real block-to-guideway component) */}
          <div className="reveal mb-16 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                  ★ Featured Workshop Case Study
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-[var(--font-heading)] text-white mb-3">
                  Machining a Solid Metal Block into a Custom Slotted Guideway
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Customer requirement: Convert a solid steel square billet into a dual-slotted guideway bracket with parallel clamping steps, chamfered slide edges, and strict fitment tolerance for an industrial press assembly.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-3">
                    <span className="text-[10px] text-amber-400 uppercase tracking-wider block font-semibold">1. Rough Stock</span>
                    <span className="text-xs text-slate-200 font-bold">Solid Steel Billet</span>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-3">
                    <span className="text-[10px] text-amber-400 uppercase tracking-wider block font-semibold">2. Operations</span>
                    <span className="text-xs text-slate-200 font-bold">Shaping & Milling</span>
                  </div>
                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-3">
                    <span className="text-[10px] text-amber-400 uppercase tracking-wider block font-semibold">3. Verification</span>
                    <span className="text-xs text-slate-200 font-bold">Marked & Inspected</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowCaseStudyModal(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 cursor-pointer"
                >
                  <span>View Step-by-Step Machining Sequence</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

              <div
                className="lg:col-span-5 relative h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl cursor-pointer group"
                onClick={() => setShowCaseStudyModal(true)}
              >
                <Image
                  src="/images/2026-01-22 (3).jpg"
                  alt="Step-by-step custom component machining sequence at Shree Mahalaxmi Engineering"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-amber-400 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-md border border-amber-500/30">
                    Click to enlarge full progression poster ↗
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Sliders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                className={`reveal bg-slate-800/90 rounded-xl border border-slate-700/80 overflow-hidden shadow-lg hover:border-amber-500/40 transition-colors flex flex-col ${
                  i === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <BeforeAfterSlider
                  before={project.before}
                  after={project.after}
                  title={project.title}
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-400 bg-slate-700/60 px-2 py-0.5 rounded">
                        {project.material}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-[var(--font-heading)]">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                    <span><strong>Process:</strong> {project.process}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Full Lightbox */}
      {showCaseStudyModal && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowCaseStudyModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-4xl w-full h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">
                  Shop-Floor Case Study
                </span>
                <h3 className="text-base sm:text-lg font-bold font-[var(--font-heading)]">
                  Machining a Solid Block into a Custom Slotted Component
                </h3>
              </div>
              <button
                onClick={() => setShowCaseStudyModal(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                ✕
              </button>
            </div>

            <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
              <Image
                src="/images/2026-01-22 (3).jpg"
                alt="Detailed step-by-step progression of solid block into custom machined component"
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
