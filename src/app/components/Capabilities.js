"use client";
import useReveal from "../hooks/useReveal";

const CAPABILITIES = [
  {
    title: "Shaping",
    description: "Flat surfaces, keyways, grooves & contour profiles",
    icon: "◻",
    features: ["Flat surface generation", "Keyway cutting", "Contour profiling", "Single-point tool finishing"],
  },
  {
    title: "Milling",
    description: "Slots, pockets, steps & complex 3D geometries",
    icon: "⬡",
    features: ["Vertical & Horizontal milling", "Slot & pocket cutting", "Step milling", "Face milling"],
  },
  {
    title: "Plano Miller",
    description: "Large flat surfaces with high accuracy & flatness",
    icon: "▭",
    features: ["Large workpiece handling", "Heavy-duty face milling", "Superior flatness", "Multiple surface finish"],
  },
  {
    title: "CNC Machining",
    description: "Computer-controlled precision for complex parts",
    icon: "⎔",
    features: ["Tight tolerances", "Complex geometry", "Batch consistency", "Multi-axis capability"],
  },
  {
    title: "BMC Machining",
    description: "Boring, milling & complex component processing",
    icon: "⊞",
    features: ["Precision boring", "Multi-operation setup", "Heavy components", "Complex assemblies"],
  },
  {
    title: "Planning Machine",
    description: "Precision flat surfaces on large workpieces",
    icon: "▬",
    features: ["Large bed capacity", "Parallel surfaces", "Perpendicular faces", "Heavy stock removal"],
  },
  {
    title: "Lathe",
    description: "Shafts, cylinders, threads & turned components",
    icon: "◎",
    features: ["External turning", "Internal boring", "Thread cutting", "Facing & grooving"],
  },
  {
    title: "Grinding",
    description: "Mirror-finish surfaces & tight tolerance parts",
    icon: "✧",
    features: ["Surface grinding", "Cylindrical grinding", "Mirror finish", "Precision tolerances"],
  },
  {
    title: "Drilling",
    description: "Precision holes — drilled, tapped & counterbored",
    icon: "⊕",
    features: ["Multi-hole patterns", "Counter-sinking", "Tapping", "Deep-hole drilling"],
  },
];

export default function Capabilities() {
  const sectionRef = useReveal();

  return (
    <section className="section-gradient-1 py-24 lg:py-32" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="inline-block text-electric-400 text-sm font-semibold tracking-widest uppercase mb-4">
            Manufacturing Capabilities
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our <span className="gradient-text">Job-Work Processes</span>
          </h2>
          <p className="text-steel-400 text-lg leading-relaxed">
            A comprehensive overview of the machining processes available at our
            facility. Each process is tailored to specific component requirements.
          </p>
          <div className="glow-line w-24 mx-auto mt-6" />
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.title}
              className="reveal group glass-card rounded-2xl p-6 hover:border-electric-500/30"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 icon-glow rounded-xl flex items-center justify-center text-electric-400 text-xl font-bold transition-all duration-300 group-hover:shadow-lg group-hover:shadow-electric-500/20">
                  {cap.icon}
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-steel-500 text-xs">{cap.description}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mt-4">
                {cap.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-steel-300"
                  >
                    <svg
                      className="w-4 h-4 text-electric-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
