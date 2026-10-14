import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { VisitBand } from "@/components/visit-band";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cosmetic dentistry, preventive care, orthodontics, implants, fillings, gum treatment, and teeth whitening at Sunlander Dental Centre.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line py-12 lg:py-16">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet">
            Services
          </p>
          <h1 className="mt-3 max-w-2xl font-display text-5xl font-medium leading-tight">
            Complete family dental care
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-stone">
            From routine check-ups to cosmetic treatment, implants, and clear
            aligners. Ask the team which option fits you.
          </p>
        </Container>
      </section>
      <section className="py-12">
        <Container className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group grid gap-4 border border-line bg-white p-4 sm:grid-cols-[180px_1fr]"
            >
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:min-h-36">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
              <div className="py-2 pr-2">
                <h2 className="font-display text-2xl font-medium">{service.title}</h2>
                <p className="mt-2 text-sm leading-6 text-stone">{service.summary}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-violet">
                  Read more
                </span>
              </div>
            </Link>
          ))}
        </Container>
      </section>
      <VisitBand />
    </>
  );
}
