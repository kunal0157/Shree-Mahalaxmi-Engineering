"use client";
import useReveal from "@/hooks/useReveal";

const INDUSTRIES = [
  {
    name: "General Engineering & Machinery",
    description: "Shafts, gears blanks, bearing housings, and custom fabrication parts for equipment builders.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.658-5.66a1.508 1.508 0 010-2.134l.006-.006a1.508 1.508 0 012.134 0L13.56 13.03a1.508 1.508 0 010 2.134l-.006.006a1.508 1.508 0 01-2.134 0zm3.66-3.66L18.24 8.35a1.508 1.508 0 000-2.134l-.006-.006a1.508 1.508 0 00-2.134 0l-3.16 3.16M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: "Textile & Processing Machinery",
    description: "Rollers, guide blocks, brackets, and precision slotted guides for spinning and weaving machinery.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zm0 9.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
      </svg>
    ),
  },
  {
    name: "Automotive & Heavy Vehicles",
    description: "Hubs, stub axles, turned pins, bushings, and specialized jigs for sub-tier automotive suppliers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 00-.879-2.122l-3.21-3.21a3 3 0 00-2.122-.879H5.25a3 3 0 00-3 3v7.362" />
      </svg>
    ),
  },
  {
    name: "Construction & Earthmoving",
    description: "Heavy pivot pins, hydraulic cylinder mountings, bucket linkages, and heavy wear plates.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    name: "Industrial Valves & Pumps",
    description: "Valve bodies, bonnet covers, pump shafts, impellers, and companion flanges machined to pressure seal tolerances.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
      </svg>
    ),
  },
  {
    name: "Fabrication & Structural Works",
    description: "Plano-milled machine bases, planed guide rails, and heavy squared weldments for structural projects.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
];

export default function Industries() {
  const sectionRef = useReveal();

  return (
    <section className="bg-stone-50 py-24 lg:py-32 text-gray-900 border-t border-gray-200" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 reveal">
          <span className="inline-block text-amber-600 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Sectors We Support
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 font-[var(--font-heading)] text-gray-950">
            Precision Machining for <span className="text-amber-600">Industrial Applications</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Supplying custom machine parts, sub-contract job work, and prototype components across key manufacturing clusters in Gujarat and across India.
          </p>
          <div className="w-20 h-1 bg-amber-600 rounded-full mt-6" />
        </div>

        {/* 6 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, i) => (
            <div
              key={industry.name}
              className="reveal bg-white border border-gray-200/90 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-amber-500/50 transition-all flex flex-col justify-between"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-950 mb-2 font-[var(--font-heading)]">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center text-xs text-amber-700 font-medium">
                <span>Job Work Available →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
