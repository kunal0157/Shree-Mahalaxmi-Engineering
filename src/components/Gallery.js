"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import useReveal from "@/hooks/useReveal";

const GALLERY_ITEMS = [
  {
    src: "/images/2026-01-22.png",
    alt: "Finished precision engineering components batch: taper keys, square brackets, threaded blocks, slide rails",
    title: "Precision Job-Work Finished Components",
    category: "Real Workshop Output",
    type: "Finished Batch",
    isRealAsset: true,
    description: "Diverse components machined in our shop: parallel slide rails, 90° square brackets, multi-hole threaded mounting blocks, and beveled keys.",
  },
  {
    src: "/images/2026-01-22.jpg",
    alt: "Heavy steel mounting block with precision reamed through-holes and tapped threads",
    title: "Heavy Tapped & Bored Mounting Block",
    category: "Real Workshop Output",
    type: "Drilling & Tapping",
    isRealAsset: true,
    description: "Multi-face machining with precision reamed locating bores, counterbores, and threaded holes on a heavy steel block.",
  },
  {
    src: "/images/2026-01-22 (3).jpg",
    alt: "Progressive machining sequence: raw solid steel block to custom stepped guideway component",
    title: "Block to Guideway Transformation",
    category: "Milling & Shaping",
    type: "Process Sequence",
    isRealAsset: true,
    description: "Step-by-step custom job work: raw square stock planed, milled with central T-slots, parallel guideways, and mounting flanges.",
  },
  {
    src: "/images/2026-01-22 (1).jpg",
    alt: "Custom-machined step block with precision shaped guideway slots on machine bed",
    title: "Precision Slotted Guide Block",
    category: "Milling & Shaping",
    type: "Shaping Works",
    isRealAsset: true,
    description: "Machined on shaping & milling machines with high dimensional accuracy, parallel datum faces, and tight step depths.",
  },
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Precision CNC turned shafts, bushings and machined flanges",
    title: "CNC Turned Flanges & Shafts",
    category: "CNC & Turning",
    type: "CNC Turning",
    isRealAsset: false,
    description: "Concentric shafts and flanged bushings turned to micron tolerances on CNC machines.",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Lathe turned cylindrical heavy shafts and concentric spindles",
    title: "Heavy Lathe Turned Spindles",
    category: "CNC & Turning",
    type: "Lathe Turning",
    isRealAsset: false,
    description: "Heavy-duty cylindrical turning, stepped shoulders, and precision thread cutting.",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "Precision surface ground plates with tight flatness tolerance",
    title: "Surface Ground Bed Plates",
    category: "Drilling & Grinding",
    type: "Surface Grinding",
    isRealAsset: false,
    description: "Components ground to mirror finish with high parallelism and flatness for precision machine tools.",
  },
  {
    src: "/images/gallery/gallery-6.jpg",
    alt: "Precision radial drilled metal plates with multi-hole pattern",
    title: "PCD Drilled Mounting Plates",
    category: "Drilling & Grinding",
    type: "Radial Drilling",
    isRealAsset: false,
    description: "Accurate pitch-circle diameter (PCD) drilling and tapping on heavy steel plates.",
  },
];

const CATEGORIES = ["All", "Real Workshop Output", "Milling & Shaping", "CNC & Turning", "Drilling & Grinding"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const sectionRef = useReveal();

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleKeyDown = useCallback(
    (e) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((prev) => (prev + 1) % filteredItems.length);
      if (e.key === "ArrowLeft") setLightbox((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    },
    [lightbox, filteredItems]
  );

  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox, handleKeyDown]);

  return (
    <>
      <section id="gallery" className="bg-white py-24 lg:py-32 text-gray-900 border-t border-gray-200" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-10 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              Real Job Work Showcase
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 font-[var(--font-heading)] text-gray-950">
              Completed <span className="text-amber-600">Precision Components</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Explore actual job-work components machined in our Ahmedabad workshop — from custom shaped guide rails and bored housings to heavy plano-milled bed plates.
            </p>
            <div className="w-20 h-1 bg-amber-600 rounded-full mt-6" />
          </div>

          {/* Category Filter Tabs */}
          <div className="reveal flex flex-wrap items-center gap-2 mb-10" style={{ transitionDelay: "0.1s" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightbox(null);
                }}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/25 scale-[1.02]"
                    : "bg-stone-100 hover:bg-stone-200 text-gray-700 border border-gray-200/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredItems.map((item, i) => (
              <div
                key={item.title}
                className={`reveal group relative overflow-hidden rounded-2xl bg-stone-900 text-left border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between ${
                  item.isRealAsset
                    ? "border-amber-500/40 shadow-md ring-1 ring-amber-500/20"
                    : "border-gray-200"
                } ${i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
                onClick={() => setLightbox(i)}
              >
                <div className={`relative w-full overflow-hidden ${i === 0 ? "h-80 sm:h-96 lg:h-[460px]" : "h-64 sm:h-72"}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    {item.isRealAsset ? (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md flex items-center gap-1">
                        ★ Real Workshop Job Work
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-sm text-gray-200 border border-white/10">
                        {item.type}
                      </span>
                    )}

                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom details card */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end">
                    <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-white text-base sm:text-lg lg:text-xl font-bold font-[var(--font-heading)] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    <span className="text-amber-400 text-[11px] font-semibold mt-2 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Click to inspect in high resolution →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal with Full Inspection Details */}
      {lightbox !== null && filteredItems[lightbox] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image inspection modal"
        >
          {/* Header Controls */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-10 text-white">
            <div className="flex items-center gap-3">
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-amber-400">
                {lightbox + 1} / {filteredItems.length}
              </span>
              <span className="text-sm font-semibold text-gray-200 hidden sm:inline">
                {filteredItems[lightbox].title}
              </span>
            </div>

            <button
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors text-white text-lg font-bold"
              onClick={() => setLightbox(null)}
              aria-label="Close dialog"
            >
              ✕
            </button>
          </div>

          {/* Active Image Container */}
          <div
            className="relative w-full max-w-5xl h-[65vh] sm:h-[75vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredItems[lightbox].src}
              alt={filteredItems[lightbox].alt}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
          </div>

          {/* Bottom caption bar */}
          <div
            className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 max-w-2xl mx-auto bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 text-center text-white backdrop-blur z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
              {filteredItems[lightbox].category} • {filteredItems[lightbox].type}
            </div>
            <div className="text-sm sm:text-base font-bold font-[var(--font-heading)] mb-1">
              {filteredItems[lightbox].title}
            </div>
            <p className="text-xs text-gray-300 leading-relaxed">
              {filteredItems[lightbox].description}
            </p>
          </div>

          {/* Navigation Controls */}
          <button
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/15 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all z-20"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + filteredItems.length) % filteredItems.length);
            }}
            aria-label="Previous component"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/15 hover:bg-white/30 text-white rounded-full flex items-center justify-center transition-all z-20"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % filteredItems.length);
            }}
            aria-label="Next component"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
