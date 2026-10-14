import type { Metadata } from "next";
import Image from "next/image";
import { BookLink } from "@/components/book-link";
import { Container } from "@/components/container";
import { VisitBand } from "@/components/visit-band";
import { doctors, staff } from "@/lib/content";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Meet the dentists and team at Sunlander Dental Centre, a family-run practice in Currambine, Perth.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="grid items-end gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet">
              About us
            </p>
            <h1 className="mt-3 font-display text-5xl font-medium leading-tight">
              Your local dental team
            </h1>
            <p className="mt-4 text-lg leading-8 text-stone">
              Family-run care in Currambine, for patients of every age.
            </p>
          </div>
          <div className="relative aspect-[16/8] overflow-hidden">
            <Image
              src="/images/team.jpg"
              alt="Sunlander Dental Centre team"
              fill
              priority
              className="object-cover object-top"
              sizes="(min-width: 1024px) 700px, 100vw"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="max-w-3xl space-y-4 text-lg leading-8 text-stone">
          <h2 className="font-display text-3xl font-medium text-ink">
            Sunlander Dental, Currambine Perth
          </h2>
          <p>
            As one of Perth&apos;s general dental clinics, Sunlander Dental Centre
            provides an extensive range of dental services, led by our dedicated
            team of dental surgeons and assistants. Coupled with quality
            equipment, resources, and training, we pride ourselves as a quality,
            affordable clinic. As a family-run practice, we aim to provide all
            our patients with the level of care we would offer to our own family
            and friends.
          </p>
          <p>Here at Sunlander Dental Centre, we are not happy until you are.</p>
          <p>
            Whether it be cracked teeth, missing teeth, discoloured teeth, or
            wisdom teeth, we offer a full range of dental treatments to cover
            general oral health needs. We love children, so please feel free to
            bring your little ones along. For your convenience, we offer instant
            health insurance claim rebates using HICAPS. We also offer Saturday
            appointment times and obligation-free quotes during your initial
            appointment. We are also part of a busy medical centre, and take a
            holistic approach to your oral health.
          </p>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-16">
        <Container>
          <h2 className="font-display text-4xl font-medium">Dentists</h2>
          <div className="mt-10 space-y-16">
            {doctors.map((doctor) => (
              <article key={doctor.name} className="grid gap-8 lg:grid-cols-[280px_1fr]">
                <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                  <Image
                    src={doctor.image}
                    alt={doctor.alt}
                    fill
                    className="object-cover object-top"
                    sizes="280px"
                  />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-medium">{doctor.name}</h3>
                  <p className="mt-2 text-stone">{doctor.credentials}</p>
                  <p className="mt-5 leading-7 text-stone">{doctor.bio}</p>
                  <p className="mt-4 text-sm">
                    <span className="font-semibold">Languages: </span>
                    {doctor.languages}
                  </p>
                  <p className="mt-2 text-sm font-semibold">Areas of interest</p>
                  <ul className="mt-2 list-disc pl-5 text-sm text-stone">
                    {doctor.interests.map((interest) => (
                      <li key={interest}>{interest}</li>
                    ))}
                  </ul>
                  <BookLink href={doctor.bookingUrl} className="mt-6">
                    {`Book with ${doctor.name}`}
                  </BookLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="font-display text-4xl font-medium">The team</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {staff.map((member) => (
              <figure key={member.name}>
                <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 320px, 50vw"
                  />
                </div>
                <figcaption className="mt-3 font-display text-2xl">{member.name}</figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
      <VisitBand />
    </>
  );
}
