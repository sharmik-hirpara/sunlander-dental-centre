import Link from "next/link";
import { hours, services, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl">Sunlander Dental</p>
          <p className="mt-3 text-sm leading-6 text-paper/75">
            A family-run general dental clinic in Currambine. New patients are
            welcome.
          </p>
          <div className="mt-5 flex gap-4 text-sm">
            <a href={site.facebook} target="_blank" rel="noreferrer" className="underline decoration-sun underline-offset-4">
              Facebook
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="underline decoration-sun underline-offset-4">
              Instagram
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sun">
            Visit
          </p>
          <address className="mt-3 space-y-2 text-sm not-italic leading-6 text-paper/80">
            <p>{site.address}</p>
            <p>
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </address>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sun">
            Hours
          </p>
          <ul className="mt-3 space-y-1 text-sm text-paper/80">
            {hours.map((slot) => (
              <li key={slot.day} className="flex justify-between gap-4">
                <span>{slot.day}</span>
                <span>{slot.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sun">
            Care
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-paper/80">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-paper">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-paper/50 sm:px-8">
          © {new Date().getFullYear()} Sunlander Dental Centre, Currambine.
        </p>
      </div>
    </footer>
  );
}
