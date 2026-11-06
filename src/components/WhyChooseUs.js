"use client";
import useReveal from "@/hooks/useReveal";

const REASONS = [
  {
    title: "Strict Drawing Tolerance",
    description: "Every part is machined strictly against customer 2D/3D CAD drawings with rigorous vernier, micrometer, and dial indicator inspection.",
    tag: "Quality Control",
  },
  {
    title: "Raw to Finished Scope",
    description: "From unmachined forgings, flame-cut plates, and bar stock to finished sub-assemblies with turnkey machining under one roof.",
    tag: "Single Source",
  },
  {
    title: "9+ In-House Machine Operations",
    description: "Shaping, Plano Milling, Heavy VMC Milling, CNC, Lathe Turning, Precision Grinding and Radial Drilling eliminating multi-vendor delays.",
    tag: "Capability",
  },
  {
    title: "Diverse Industrial Metallurgies",
    description: "Proven experience machining Mild Steel, EN8, EN24, EN31, Stainless Steel (304/316), Cast Iron (CI), and SG Iron blocks.",
    tag: "Materials",
  },
  {
    title: "Direct Engineering Communication",
    description: "Technical review directly with seasoned machinists — discuss tolerances, clamping allowances, and tool accessibility before cuts begin.",
    tag: "Expertise",
  },
  {
    title: "Reliable Dispatch Timelines",
    description: "Committed turnaround schedules to keep your factory assembly lines and client delivery promises on track without downtime.",
    tag: "Reliability",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useReveal();

  return (
    <section id="why-us" className="bg-slate-900 py-24 lg:py-32 text-white border-t border-slate-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 reveal">
            <span className="inline-block text-amber-500 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              Why Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-[var(--font-heading)] leading-tight">
              Built on Precision, <span className="text-amber-500">Verified by Measurement</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              At Shree Mahalaxmi Engineering, we understand that a machine component is only as good as its dimensional fidelity. We treat every job-work drawing with production discipline and craftsmanship.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Full Dimensional Verification</h3>
                  <p className="text-xs text-slate-400">Inspected before handover to ensure flawless fitment on your equipment.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Flexible Batch & Prototype Work</h3>
                  <p className="text-xs text-slate-400">From single replacement machine parts to regular production volume runs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Structured Reason Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 reveal" style={{ transitionDelay: "0.15s" }}>
            {REASONS.map((reason, i) => (
              <div
                key={reason.title}
                className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 hover:border-amber-500/40 transition-colors shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-2.5 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                    {reason.tag}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5 font-[var(--font-heading)]">
                    {reason.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center text-xs text-slate-400">
                  <span className="text-amber-500 mr-2">0{i + 1}</span>
                  <span>Workshop Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
