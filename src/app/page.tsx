import Image from "next/image";
import Link from "next/link";
import { BookLink } from "@/components/book-link";
import { Container } from "@/components/container";
import { VisitBand } from "@/components/visit-band";
import { doctors, homeServices, site } from "@/lib/content";

const facts = [
  { title: "HICAPS rebates", text: "Instant health insurance claims at the practice." },
  { title: "Saturday appointments", text: "Open Monday to Saturday, including a Saturday morning." },
  { title: "Obligation-free quotes", text: "Talk through treatment at your first visit." },
  { title: "Children welcome", text: "Bring the family. New patients are always welcome." },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet">
              Currambine, Perth
            </p>
            <h1 className="mt-4 max-w-xl font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              Family dental care, close to home.
            </h1>
            <span className="mt-6 block h-1 w-16 bg-sun" />
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone">
              Sunlander Dental Centre is a family-run general practice. We look
              after cracked, missing, discoloured, and wisdom teeth, and we are
              not happy until you are.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookLink />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-ink px-5 py-3 text-sm font-semibold hover:bg-ink hover:text-paper"
              >
                Contact the team
              </Link>
            </div>
            <p className="mt-6 flex flex-col gap-1 text-sm text-stone sm:flex-row sm:items-center">
              <span>{site.address}</span>
              <span className="hidden sm:inline" aria-hidden="true">
                /
              </span>
              <a href={site.phoneHref} className="font-semibold text-ink">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="relative">
            <div className="absolute -bottom-3 -right-3 hidden h-full w-full bg-sun sm:block" />
            <div className="relative aspect-[4/3] overflow-hidden bg-mist">
              <Image
                src="/images/team.jpg"
                alt="The Sunlander Dental Centre team in Currambine"
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 1024px) 540px, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.title} className="bg-white px-1 py-8 sm:px-6">
              <h2 className="font-display text-2xl font-medium">{fact.title}</h2>
              <p className="mt-2 text-sm leading-6 text-stone">{fact.text}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image
              src="/images/smile.jpg"
              alt="A patient smiling after dental care"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 540px, 100vw"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl font-medium leading-tight">
              Sunlander Dental, Currambine Perth
            </h2>
            <div className="mt-5 space-y-4 leading-7 text-stone">
              <p>
                As one of Perth&apos;s general dental clinics, Sunlander Dental
                Centre provides an extensive range of dental services, led by
                our dedicated team of dental surgeons and assistants. Coupled
                with quality equipment, resources, and training, we pride
                ourselves as a quality, affordable clinic. As a family-run
                practice, we aim to provide all our patients with the level of
                care we would offer to our own family and friends.
              </p>
              <p>Here at Sunlander Dental Centre, we are not happy until you are.</p>
              <p>
                Whether it be cracked teeth, missing teeth, discoloured teeth,
                or wisdom teeth, we offer a full range of dental treatments to
                cover general oral health needs. We love children, so please
                feel free to bring your little ones along. For your convenience,
                we offer instant health insurance claim rebates using HICAPS. We
                also offer Saturday appointment times and obligation-free quotes
                during your initial appointment. We take a holistic approach to
                your oral health.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-mist/60 py-16 lg:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet">
                Treatments
              </p>
              <h2 className="mt-2 font-display text-4xl font-medium">
                Complete family dental care
              </h2>
            </div>
            <Link href="/services" className="text-sm font-semibold text-violet">
              All services
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homeServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col bg-paper"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col border border-t-0 border-line p-5">
                  <h3 className="font-display text-2xl font-medium">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-stone">{service.summary}</p>
                  <span className="mt-4 text-sm font-semibold text-violet">Read more</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet">
              Your local team
            </p>
            <h2 className="mt-2 font-display text-4xl font-medium leading-tight">
              A practice you will want to come back to.
            </h2>
            <div className="mt-5 space-y-4 leading-7 text-stone">
              <p>
                Located in Currambine, Sunlander Dental Centre is a family
                friendly practice where new patients are always welcome.
              </p>
              <p>
                Many people don&apos;t see a dentist on a regular basis. They go
                only when they feel they have a problem. While that may feel
                like saving money, it usually costs more in both dollars and
                time, because most dental problems don&apos;t have symptoms until
                they reach the advanced stages.
              </p>
              <p>
                We want to help you maintain your oral health, and we strive to
                provide a comfortable and reassuring atmosphere so that you will
                want to return on a regular basis. If you are new to the area,
                or haven&apos;t been to a dentist for a while, contact the team
                and book your appointment.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-semibold text-violet underline decoration-sun decoration-2 underline-offset-4"
            >
              Meet the dentists
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/family.jpg"
              alt="A family visiting the dentist"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-16 lg:py-24">
        <Container>
          <h2 className="font-display text-4xl font-medium">The dentists</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {doctors.map((doctor) => (
              <article key={doctor.name} className="grid gap-5 sm:grid-cols-[180px_1fr]">
                <div className="relative aspect-[3/4] overflow-hidden bg-mist">
                  <Image
                    src={doctor.image}
                    alt={doctor.alt}
                    fill
                    className="object-cover object-top"
                    sizes="180px"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium">{doctor.name}</h3>
                  <p className="mt-1 text-sm text-stone">{doctor.credentials}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {doctor.interests.map((interest) => (
                      <li key={interest} className="bg-mist px-2 py-1 text-xs font-semibold text-violet">
                        {interest}
                      </li>
                    ))}
                  </ul>
                  <BookLink href={doctor.bookingUrl} className="mt-5">
                    {`Book ${doctor.name}`}
                  </BookLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet">
              The practice
            </p>
            <h2 className="mt-2 font-display text-4xl font-medium">
              Come and see the clinic.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-stone">
              A short look at the practice, then call or book when you are ready.
            </p>
          </div>
          <video
            className="aspect-video w-full bg-ink"
            controls
            playsInline
            preload="metadata"
            poster="/images/clinic.jpg"
          >
            <source src="/media/home.mp4" type="video/mp4" />
          </video>
        </Container>
      </section>
      <VisitBand />
    </>
  );
}
