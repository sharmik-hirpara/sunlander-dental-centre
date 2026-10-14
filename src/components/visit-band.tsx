import { BookLink } from "@/components/book-link";
import { Container } from "@/components/container";
import { site } from "@/lib/content";

export function VisitBand() {
  return (
    <section className="bg-violet-deep text-paper">
      <Container className="flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sun">
            New patients welcome
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium sm:text-4xl">
            Book a visit in Currambine
          </h2>
          <p className="mt-2 max-w-xl text-paper/80">
            Call the team on {site.phoneDisplay}, or book online. Appointments
            run Monday to Saturday.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <BookLink variant="light" />
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center border border-paper/40 px-5 py-3 text-sm font-semibold"
          >
            Call the practice
          </a>
        </div>
      </Container>
    </section>
  );
}
