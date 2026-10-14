import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { hours, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Call Sunlander Dental Centre on (08) 6200 9060 or visit Unit 2-10 Sunlander Dr, Currambine WA 6028.",
};

export default function ContactPage() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet">
          Contact
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-5xl font-medium leading-tight">
          To make an appointment
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-stone">
          Call our friendly staff, or send a note and we will help you find a
          time. New patients are welcome.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div className="border border-line bg-white p-6">
              <p className="text-sm text-stone">Call the practice</p>
              <a href={site.phoneHref} className="mt-1 block font-display text-4xl text-violet">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="mt-4 block font-semibold">
                {site.email}
              </a>
              <p className="mt-4 leading-7">
                {site.address}
              </p>
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-semibold text-violet"
              >
                Open in Google Maps
              </a>
            </div>
            <div>
              <h2 className="font-display text-3xl font-medium">Working hours</h2>
              <dl className="mt-4 divide-y divide-line border-y border-line">
                {hours.map((slot) => (
                  <div key={slot.day} className="flex justify-between gap-4 py-3">
                    <dt>{slot.day}</dt>
                    <dd className={slot.time === "Closed" ? "text-stone" : "font-semibold"}>
                      {slot.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <ContactForm />
        </div>

        <div className="mt-10 overflow-hidden border border-line">
          <iframe
            title="Map showing Sunlander Dental Centre in Currambine"
            src={site.mapEmbed}
            className="h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
