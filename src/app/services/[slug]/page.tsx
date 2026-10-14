import type { Metadata } from "next";
import { SiteImage as Image } from "@/components/site-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ServiceSections } from "@/components/service-sections";
import { VisitBand } from "@/components/visit-band";
import { getService, services } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="border-b border-line">
        <Container className="grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet">
              <Link href="/services">Services</Link>
            </p>
            <h1 className="mt-3 font-display text-5xl font-medium leading-tight">
              {service.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-stone">{service.summary}</p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </Container>
      </section>
      <section className="py-14 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-medium">{service.introHeading}</h2>
            <div className="mt-4 space-y-4 text-lg leading-8 text-stone">
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="mt-14">
            <ServiceSections sections={service.sections} />
          </div>
        </Container>
      </section>
      <VisitBand />
    </>
  );
}
