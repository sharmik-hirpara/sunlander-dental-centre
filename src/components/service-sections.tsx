import { SiteImage as Image } from "@/components/site-image";
import Link from "next/link";
import type { ServiceSection } from "@/lib/content";

export function ServiceSections({ sections }: { sections: ServiceSection[] }) {
  return (
    <div className="space-y-16">
      {sections.map((section) => {
        if (section.kind === "prose") {
          return (
            <section key={section.heading} className="max-w-3xl">
              <h2 className="font-display text-3xl font-medium">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-lg leading-8 text-stone">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          );
        }

        if (section.kind === "split") {
          return (
            <section
              key={section.heading}
              className="grid items-center gap-8 border-t border-line pt-10 md:grid-cols-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <Image
                  src={section.image}
                  alt={section.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl font-medium">{section.heading}</h2>
                <div className="mt-4 space-y-4 leading-7 text-stone">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.href ? (
                  <Link
                    href={section.href}
                    className="mt-6 inline-block text-sm font-semibold text-violet underline decoration-sun decoration-2 underline-offset-4"
                  >
                    {section.hrefLabel}
                  </Link>
                ) : null}
              </div>
            </section>
          );
        }

        return (
          <section key={section.heading} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-mist p-6 sm:p-10">
              <h2 className="font-display text-3xl font-medium">{section.heading}</h2>
              <div className="mt-4 space-y-4 leading-7 text-stone">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.items.length > 0 ? (
                <>
                  {section.itemsHeading ? (
                    <p className="mt-6 font-semibold text-ink">{section.itemsHeading}</p>
                  ) : null}
                  {section.ordered ? (
                    <ol className="mt-3 list-decimal space-y-3 pl-5 leading-7 text-stone">
                      {section.items.map((item) => (
                        <li key={item.title ?? item.text}>
                          {item.title ? (
                            <span className="font-semibold text-ink">{item.title}. </span>
                          ) : null}
                          {item.text}
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-stone">
                      {section.items.map((item) => (
                        <li key={item.text}>{item.text}</li>
                      ))}
                    </ul>
                  )}
                </>
              ) : null}
              {section.closing?.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-7 text-stone">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative min-h-72 overflow-hidden">
              <Image
                src={section.image}
                alt={section.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </section>
        );
      })}
    </div>
  );
}
