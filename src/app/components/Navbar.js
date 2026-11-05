"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const MOBILE_NAV_HEIGHT = 80;
const DESKTOP_NAV_HEIGHT = 96;

function getNavOffset() {
  return window.innerWidth >= 1024 ? DESKTOP_NAV_HEIGHT : MOBILE_NAV_HEIGHT;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  /* ── scroll shadow ─────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── active section via IntersectionObserver ────────── */
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Small delay to let DOM settle on mount
    const timer = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const observer = new IntersectionObserver(handleIntersect, {
          rootMargin: `-${DESKTOP_NAV_HEIGHT}px 0px -40% 0px`,
          threshold: 0.1,
        });
        observer.observe(el);
        observers.push(observer);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  /* ── body overflow lock when mobile menu open ──────── */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ── scroll-to handler with offset ─────────────────── */
  const scrollToSection = useCallback((e, href) => {
    e.preventDefault();
    setMobileOpen(false);

    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("hero");
      return;
    }

    const el = document.querySelector(href);
    if (el) {
      const offset = getNavOffset();
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  /* ── logo click → scroll to top ────────────────────── */
  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("hero");
  };

  const isActive = (href) => activeSection === href.replace("#", "");

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center group py-1.5 focus:outline-none"
              aria-label="Shree Mahalaxmi Engineering Home"
            >
              <Logo
                className="h-[52px] sm:h-[60px] md:h-[68px] w-auto group-hover:scale-105 transition-transform duration-300"
                scrolled={scrolled}
                showText={true}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(link.href)
                      ? scrolled
                        ? "text-amber-600"
                        : "text-amber-400"
                      : scrolled
                        ? "text-gray-600 hover:text-gray-900"
                        : "text-gray-200 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-amber-500 rounded-full transition-all duration-300 ${
                      isActive(link.href) ? "w-3/4" : "w-0"
                    }`}
                  />
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="ml-4 px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/25"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-btn"
              aria-label="Toggle navigation menu"
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span
                className={`block w-6 h-0.5 rounded-full transition-all duration-300 origin-center ${
                  scrolled ? "bg-gray-800" : "bg-white"
                } ${mobileOpen ? "rotate-45 translate-y-[3px]" : "-translate-y-[5px]"}`}
              />
              <span
                className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                  scrolled ? "bg-gray-800" : "bg-white"
                } ${mobileOpen ? "opacity-0 scale-0" : "opacity-100"}`}
              />
              <span
                className={`block w-6 h-0.5 rounded-full transition-all duration-300 origin-center ${
                  scrolled ? "bg-gray-800" : "bg-white"
                } ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : "translate-y-[5px]"}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between h-20 px-6 border-b border-gray-100">
            <Logo className="h-10 w-auto" scrolled={true} showText={true} />
            <button
              aria-label="Close menu"
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`py-3 px-4 rounded-lg transition-all duration-200 text-lg font-medium ${
                  isActive(link.href)
                    ? "text-amber-600 bg-amber-50 border-l-4 border-amber-500"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="mt-4 py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white text-center rounded-lg font-semibold transition-all duration-300"
            >
              Get a Quote
            </a>

            {/* Mobile Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a
                href="https://wa.me/919998789544"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-2 text-gray-700 hover:text-emerald-600 transition-colors"
              >
                <svg className="w-5 h-5 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-sm font-semibold">+91 99987 89544 (WhatsApp)</span>
              </a>
              <a
                href="tel:+919898250090"
                className="flex items-center gap-3 py-1.5 text-gray-500 hover:text-amber-600 transition-colors"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">+91 98982 50090</span>
              </a>
              <a
                href="mailto:shreemahalaxmiengineering04@gmail.com"
                className="flex items-center gap-3 py-2 text-gray-500 hover:text-amber-600 transition-colors"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm break-all">shreemahalaxmiengineering04@gmail.com</span>
              </a>
              <a
                href="https://www.instagram.com/shree_mahalaxmi_eng04?dlrf=MWtlbDJwdnI2aXE1ZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-2 text-gray-500 hover:text-pink-600 transition-colors"
              >
                <svg className="w-5 h-5 flex-shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="text-sm">@shree_mahalaxmi_eng04</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
