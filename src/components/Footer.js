"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";

const SERVICES = [
  "Shaping Works",
  "Milling Works",
  "Plano Miller Works",
  "CNC Machining",
  "VMC Machining",
  "Planning Machine Works",
  "Lathe Works",
  "Grinding Works",
  "Radial Drilling Works",
];

const QUICK_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Machining Services", href: "#services" },
  { label: "Before & After Work", href: "#portfolio" },
  { label: "Components Gallery", href: "#gallery" },
  { label: "Workshop & Facility", href: "#about" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Request a Quote", href: "#contact" },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  const scrollTo = (e, id) => {
    e.preventDefault();
    if (id === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(id);
    if (el) {
      const offset = window.innerWidth >= 1024 ? 96 : 80;
      window.scrollTo({ top: el.offsetTop - offset, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Logo
                className="h-[54px] sm:h-[62px] w-auto"
                scrolled={false}
                showText={true}
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Precision engineering job work and custom machine-parts manufacturing in Ahmedabad. Machining raw materials into tight-tolerance components strictly as per customer drawings.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919998789544"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-emerald-600 border border-slate-700 hover:border-emerald-500 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/shambhusharan.dangi?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                aria-label="Facebook Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/shree_mahalaxmi_eng04?dlrf=MWtlbDJwdnI2aXE1ZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-pink-600 border border-slate-700 hover:border-pink-500 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider font-[var(--font-heading)]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-slate-400 hover:text-amber-400 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider font-[var(--font-heading)]">
              Machining Operations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {SERVICES.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Workshop Location (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider font-[var(--font-heading)]">
              Workshop Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Location</span>
                <a
                  href="https://maps.google.com/?q=78,+70/3+Chirag+Estate,+CTM,+Amraiwadi,+Ahmedabad+380026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-amber-400 transition-colors block leading-relaxed"
                >
                  78, 70/3 Chirag Estate,<br />
                  CTM, Amraiwadi,<br />
                  Ahmedabad – 380026, Gujarat ↗
                </a>
              </div>

              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">WhatsApp & Direct Phone</span>
                <div className="flex flex-col gap-1">
                  <a href="https://wa.me/919998789544" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-emerald-400 font-bold transition-colors flex items-center gap-1.5">
                    <span>+91 99987 89544</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.2 rounded">WhatsApp</span>
                  </a>
                  <a href="tel:+919898250090" className="text-slate-400 hover:text-amber-400 transition-colors text-xs">
                    +91 98982 50090
                  </a>
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Email Inquiries</span>
                <a
                  href="mailto:shreemahalaxmiengineering04@gmail.com"
                  className="text-slate-300 hover:text-amber-400 transition-colors break-all text-xs"
                >
                  shreemahalaxmiengineering04@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Dynamic Year */}
      <div className="border-t border-slate-900 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {currentYear} Shree Mahalaxmi Engineering. All rights reserved.
          </p>
          <p>
            Precision Job Work & Custom Machine Parts • Ahmedabad, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
}
