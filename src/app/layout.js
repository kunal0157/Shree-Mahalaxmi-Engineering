import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Shree Mahalaxmi Engineering | Precision Job Work & Custom Machine Parts – Ahmedabad",
  description:
    "Shree Mahalaxmi Engineering, Ahmedabad – Specialists in precision engineering job work and custom machine-parts manufacturing. Services include Shaping, Milling, Plano Miller, CNC Machining, VMC Machining, Planning, Lathe, Grinding & Drilling works.",
  keywords:
    "engineering job work Ahmedabad, custom machine parts manufacturer, CNC machining Ahmedabad, milling job work, lathe works, shaping works, grinding works, plano miller Ahmedabad, VMC machining, drilling works, Chirag Estate CTM Amraiwadi machine shop, precision manufacturing Gujarat India",
  metadataBase: new URL("https://shreemahalaxmiengineering.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/icon.png", type: "image/png", sizes: "64x64" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Shree Mahalaxmi Engineering | Precision Job Work & Custom Machine Parts",
    description:
      "Transform raw materials into precision-engineered components. Specialising in Shaping, Milling, CNC, Lathe, Grinding, Plano Miller & more in Ahmedabad.",
    type: "website",
    locale: "en_IN",
    siteName: "Shree Mahalaxmi Engineering",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shree Mahalaxmi Engineering - Precision Job Work Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Mahalaxmi Engineering | Precision Job Work & Custom Machine Parts",
    description: "Transform raw materials into precision-engineered components in Ahmedabad.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Shree Mahalaxmi Engineering",
  "image": "https://shreemahalaxmiengineering.com/images/og-image.jpg",
  "telephone": "+919998789544",
  "email": "shreemahalaxmiengineering04@gmail.com",
  "priceRange": "$$",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Cheque, Bank Transfer, UPI",
  "areaServed": ["Ahmedabad", "Gujarat", "India"],
  "sameAs": [
    "https://www.instagram.com/shree_mahalaxmi_eng04?dlrf=MWtlbDJwdnI2aXE1ZQ==",
    "https://www.facebook.com/shambhusharan.dangi?mibextid=ZbWKwL"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "78, 70/3 Chirag Estate, CTM, Amraiwadi",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380026",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "22.9934",
    "longitude": "72.6318"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "20:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Engineering Job Work Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CNC Machining" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Milling Works" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lathe Works" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shaping Works" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Grinding Works" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plano Miller Works" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "VMC Machining" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Planning Machine Works" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drilling Works" } }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-gray-900 antialiased selection:bg-amber-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
