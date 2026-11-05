"use client";
import Image from "next/image";
import useReveal from "@/hooks/useReveal";

const SERVICES = [
  {
    title: "Shaping Works",
    description:
      "Precision flat surfaces, keyways, slots, and contoured profiles machined on shaping machines for accurate component geometry.",
    image: "/images/2026-01-22 (1).jpg",
    isRealAsset: true,
    capabilities: [
      "Flat surface generation",
      "Keyway cutting",
      "Contour profiling",
      "Single-point tool finishing",
    ],
  },
  {
    title: "Milling Works",
    description:
      "Complex slots, pockets, stepped surfaces, and precision geometries milled to exact dimensions using horizontal and vertical milling.",
    image: "/images/services/milling.jpg",
    capabilities: [
      "Vertical & Horizontal milling",
      "Slot & pocket cutting",
      "Step milling",
      "Face milling",
    ],
  },
  {
    title: "Plano Miller Works",
    description:
      "Large flat surfaces machined with high accuracy. Ideal for heavy components requiring superior flatness and surface quality.",
    image: "/images/services/plano.jpg",
    capabilities: [
      "Large workpiece handling",
      "Heavy-duty face milling",
      "Superior flatness",
      "Multiple surface finish",
    ],
  },
  {
    title: "CNC Machining",
    description:
      "Computer-controlled precision manufacturing of shafts, bushings, flanges, and complex components with tight tolerances.",
    image: "/images/services/cnc.jpg",
    capabilities: [
      "Tight tolerances",
      "Complex geometry",
      "Batch consistency",
      "Multi-axis capability",
    ],
  },
  {
    title: "BMC Machining",
    description:
      "Heavy-duty machining of blocks, mounting plates, and complex industrial components on boring-milling-centre machines.",
    image: "/images/services/bmc.jpg",
    capabilities: [
      "Precision boring",
      "Multi-operation setup",
      "Heavy components",
      "Complex assemblies",
    ],
  },
  {
    title: "Planning Machine Works",
    description:
      "High-precision flat surfaces produced on planning machines. Suited for large workpieces requiring parallel and perpendicular faces.",
    image: "/images/services/planning.jpg",
    capabilities: [
      "Large bed capacity",
      "Parallel surfaces",
      "Perpendicular faces",
      "Heavy stock removal",
    ],
  },
  {
    title: "Lathe Works",
    description:
      "Cylindrical components, shafts, bushings, and stepped parts turned on precision lathes to achieve smooth finishes and accurate diameters.",
    image: "/images/services/lathe.jpg",
    capabilities: [
      "External turning",
      "Internal boring",
      "Thread cutting",
      "Facing & grooving",
    ],
  },
  {
    title: "Grinding Works",
    description:
      "Mirror-smooth precision surfaces and tight-tolerance cylindrical grinding for components requiring superior surface finish quality.",
    image: "/images/services/grinding.jpg",
    capabilities: [
      "Surface grinding",
      "Cylindrical grinding",
      "Mirror finish",
      "Precision tolerances",
    ],
  },
  {
    title: "Drilling Works",
    description:
      "Precision holes in any pattern — drilled, countersunk, counterbored, and tapped to specification on metal components of all sizes.",
    image: "/images/2026-01-22.jpg",
    isRealAsset: true,
    capabilities: [
      "Multi-hole patterns",
      "Counter-sinking",
      "Tapping",
      "Deep-hole drilling",
    ],
  },
];

/* ─── Reusable service card ─── */
function ServiceCard({ service, featured = false, delay = 0 }) {
  return (
    <div
      className={`reveal group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg ${
        featured ? "h-full" : "h-full"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          featured ? "h-64 sm:h-72 lg:h-full lg:min-h-[280px]" : "h-48"
        }`}
      >
        <Image
          src={service.image}
          alt={`${service.title} at Shree Mahalaxmi Engineering workshop`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={
            featured
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {service.isRealAsset && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md">
              Real Job Work
            </span>
          </div>
        )}

        {/* Title overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3
            className="text-xl font-bold text-white drop-shadow-md"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {service.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-4 text-sm leading-relaxed text-gray-600">
          {service.description}
        </p>

        {/* Capability tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {service.capabilities.map((cap) => (
            <span
              key={cap}
              className="inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const sectionRef = useReveal();

  /* Split services into layout rows:
     Row 1: 1 featured (left) + 2 stacked (right)
     Row 2: 3 equal medium cards
     Row 3: 2 stacked (left) + 1 featured (right) */
  const row1Featured = SERVICES[0];
  const row1Stacked = [SERVICES[1], SERVICES[2]];
  const row2Cards = [SERVICES[3], SERVICES[4], SERVICES[5]];
  const row3Stacked = [SERVICES[6], SERVICES[7]];
  const row3Featured = SERVICES[8];

  return (
    <section
      id="services"
      className="bg-stone-50 py-24 lg:py-32"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ─── Section Header ─── */}
        <div className="reveal mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            Our Services
          </span>
          <h2
            className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Precision Job Work{" "}
            <span className="text-amber-600">Capabilities</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            From raw material to finished components — we offer a comprehensive
            range of machining processes to deliver parts built to your exact
            specifications.
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-amber-500" />
        </div>

        {/* ─── Row 1: Featured left + 2 stacked right ─── */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Featured card — spans full height of the two stacked cards */}
          <div className="lg:row-span-1">
            <ServiceCard service={row1Featured} featured delay={0} />
          </div>

          {/* 2 stacked cards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {row1Stacked.map((svc, i) => (
              <ServiceCard key={svc.title} service={svc} delay={0.08 + i * 0.08} />
            ))}
          </div>
        </div>

        {/* ─── Row 2: 3 equal cards ─── */}
        <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {row2Cards.map((svc, i) => (
            <ServiceCard
              key={svc.title}
              service={svc}
              delay={0.24 + i * 0.08}
            />
          ))}
        </div>

        {/* ─── Row 3: 2 stacked left + Featured right ─── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* 2 stacked cards */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {row3Stacked.map((svc, i) => (
              <ServiceCard
                key={svc.title}
                service={svc}
                delay={0.48 + i * 0.08}
              />
            ))}
          </div>

          {/* Featured card */}
          <div className="lg:row-span-1">
            <ServiceCard service={row3Featured} featured delay={0.64} />
          </div>
        </div>
      </div>
    </section>
  );
}
