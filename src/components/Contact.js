"use client";
import { useState } from "react";
import useReveal from "@/hooks/useReveal";

export default function Contact() {
  const sectionRef = useReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    component: "",
    quantity: "",
    material: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'warning' | 'error' | null
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.phone.trim() && !formData.email.trim()) {
      return "Please provide at least a phone number or email address so we can reply with a quote.";
    }
    if (formData.phone.trim() && !/^[+0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      return "Please enter a valid phone number (8–15 digits).";
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }
    if (!formData.component.trim()) {
      return "Please describe the component you need machined.";
    }
    return null;
  };

  const handleSend = async () => {
    const error = validateForm();
    if (error) {
      setSubmitStatus("error");
      setStatusMessage(error);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage("");

    const whatsappText = `*New Machine Part Quote Request*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone || "N/A")}%0A*Email:* ${encodeURIComponent(formData.email || "N/A")}%0A*Company:* ${encodeURIComponent(formData.company || "N/A")}%0A*Component:* ${encodeURIComponent(formData.component)}%0A*Quantity:* ${encodeURIComponent(formData.quantity || "N/A")}%0A*Material:* ${encodeURIComponent(formData.material || "N/A")}%0A*Details:* ${encodeURIComponent(formData.message || "N/A")}`;

    try {
      // Record inquiry in background
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch((e) => console.warn("Background inquiry logging:", e));

      setSubmitStatus("success");
      setStatusMessage("Opening WhatsApp with your component specifications...");
      window.open(`https://wa.me/919998789544?text=${whatsappText}`, "_blank");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        component: "",
        quantity: "",
        material: "",
        message: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      window.open(`https://wa.me/919998789544?text=${whatsappText}`, "_blank");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-stone-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all text-sm";

  return (
    <section id="contact" className="bg-white py-24 lg:py-32 text-gray-900 border-t border-gray-200" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Workshop Information & Contacts */}
          <div className="lg:col-span-5 reveal">
            <span className="inline-block text-amber-600 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              Direct Workshop Inquiries
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 font-[var(--font-heading)] text-gray-950">
              Request an <span className="text-amber-600">Engineering Quote</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Send your part drawings, material specifications, and batch quantities. Our machine shop engineers will inspect the machining operations and provide competitive pricing and lead times.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              <div className="bg-stone-50 border border-gray-200 rounded-xl p-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">WhatsApp & Direct Phone</div>
                  <div className="flex flex-col gap-0.5">
                    <a href="https://wa.me/919998789544" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-gray-900 hover:text-emerald-600 transition-colors flex items-center gap-1.5">
                      <span>+91 99987 89544</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">WhatsApp</span>
                    </a>
                    <a href="tel:+919898250090" className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors">
                      +91 98982 50090
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 border border-gray-200 rounded-xl p-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Workshop Email</div>
                  <a href="mailto:shreemahalaxmiengineering04@gmail.com" className="text-sm sm:text-base font-bold text-gray-900 hover:text-amber-600 transition-colors break-all">
                    shreemahalaxmiengineering04@gmail.com
                  </a>
                </div>
              </div>

              <div className="bg-stone-50 border border-gray-200 rounded-xl p-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Workshop Facility</div>
                  <address className="not-italic text-sm text-gray-700 leading-relaxed">
                    78, 70/3 Chirag Estate, CTM, Amraiwadi,<br />
                    Ahmedabad – 380026, Gujarat, India
                  </address>
                  <a
                    href="https://maps.google.com/?q=78,+70/3+Chirag+Estate,+CTM,+Amraiwadi,+Ahmedabad+380026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:underline mt-1.5"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>

              <div className="bg-stone-50 border border-gray-200 rounded-xl p-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Instagram Official</div>
                  <a
                    href="https://www.instagram.com/shree_mahalaxmi_eng04?dlrf=MWtlbDJwdnI2aXE1ZQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-gray-900 hover:text-pink-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>@shree_mahalaxmi_eng04</span>
                    <span className="text-[11px] bg-pink-100 text-pink-700 font-semibold px-2 py-0.5 rounded-full">↗ Follow Us</span>
                  </a>
                </div>
              </div>

              <div className="bg-stone-50 border border-gray-200 rounded-xl p-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Operating Hours</div>
                  <p className="text-sm text-gray-800 font-medium">Monday to Saturday: 09:00 AM – 08:00 PM</p>
                  <p className="text-xs text-gray-500">Sunday Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Specification Form */}
          <div className="lg:col-span-7 reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="border-b border-gray-100 pb-5 mb-6">
                <h3 className="text-2xl font-bold font-[var(--font-heading)] text-gray-950 mb-1">
                  Component Job-Work Inquiry
                </h3>
                <p className="text-sm text-gray-500">
                  Specify your machining needs below. Submit directly to our workshop on WhatsApp (+91 99987 89544) with drawings or specifications.
                </p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Contact Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-company" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      placeholder="e.g. Apex Engineering Works"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98982 50090"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="e.g. ramesh@apexeng.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-component" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Component Name & Operation Required *
                  </label>
                  <input
                    id="contact-component"
                    type="text"
                    name="component"
                    required
                    placeholder="e.g. 500mm Plano-milled bed plate with slots / EN8 Stepped shaft"
                    value={formData.component}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-quantity" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Estimated Quantity / Batch Size
                    </label>
                    <input
                      id="contact-quantity"
                      type="text"
                      name="quantity"
                      placeholder="e.g. 5 pcs / Prototype / 50 pcs monthly"
                      value={formData.quantity}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-material" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                      Raw Material Grade
                    </label>
                    <select
                      id="contact-material"
                      name="material"
                      value={formData.material}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select Material</option>
                      <option value="Mild Steel (MS)">Mild Steel (MS)</option>
                      <option value="EN8 Steel">EN8 Steel</option>
                      <option value="EN24 Steel">EN24 Steel</option>
                      <option value="EN31 Steel">EN31 Steel</option>
                      <option value="Stainless Steel (304 / 316)">Stainless Steel (304 / 316)</option>
                      <option value="Cast Iron (CI) / SG Iron">Cast Iron (CI) / SG Iron</option>
                      <option value="Aluminium Alloy">Aluminium Alloy</option>
                      <option value="Brass / Bronze">Brass / Bronze</option>
                      <option value="Other / Client Supplied Material">Other / Client Supplied</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                    Additional Specifications & Tolerances
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Provide critical tolerances, surface finish requirements, drawing revision numbers, or delivery deadlines..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-y`}
                  />
                </div>

                {/* Status Message Container */}
                {statusMessage && (
                  <div
                    className={`p-4 rounded-xl text-sm border flex items-start gap-3 ${
                      submitStatus === "success"
                        ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                        : submitStatus === "warning"
                        ? "bg-amber-50 border-amber-200 text-amber-800"
                        : "bg-rose-50 border-rose-200 text-rose-800"
                    }`}
                  >
                    <span className="text-lg">
                      {submitStatus === "success" ? "✓" : submitStatus === "warning" ? "ℹ" : "⚠"}
                    </span>
                    <div className="flex-1 font-medium">{statusMessage}</div>
                  </div>
                )}

                {/* Drawing Attachment Notice */}
                <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-900 flex items-center gap-2.5">
                  <span className="text-base shrink-0">📎</span>
                  <span>
                    <strong>Drawing Formats:</strong> We work directly with PDF 2D dimension prints, DXF, DWG, STEP files, or dimensioned hand sketches. Attach files in WhatsApp after clicking below.
                  </span>
                </div>

                {/* Submit Action Button (WhatsApp Direct) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-emerald-600/30 flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer group"
                  >
                    <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>{isSubmitting ? "Connecting to WhatsApp..." : "Send Quote Request on WhatsApp"}</span>
                    <span className="text-xs font-normal text-emerald-100 hidden sm:inline">(Direct to Workshop)</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
