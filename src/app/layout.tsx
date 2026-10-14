import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { hours, site } from "@/lib/content";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sunlander Dental Centre | Currambine, Perth",
    template: "%s | Sunlander Dental Centre",
  },
  description: site.description,
  openGraph: {
    title: "Sunlander Dental Centre",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
    images: [{ url: "/images/team.jpg", alt: "The Sunlander Dental Centre team" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  url: site.url,
  image: `${site.url}/images/team.jpg`,
  telephone: "+61-8-6200-9060",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 2-10 Sunlander Dr",
    addressLocality: "Currambine",
    addressRegion: "WA",
    postalCode: "6028",
    addressCountry: "AU",
  },
  openingHoursSpecification: hours
    .filter((slot) => slot.time !== "Closed")
    .map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.day,
      opens: slot.time.startsWith("8") ? "08:00" : "08:00",
      closes: slot.time.includes("2:00pm") ? "14:00" : "17:00",
    })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${outfit.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
