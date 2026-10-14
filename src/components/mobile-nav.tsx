"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { services, site } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex items-center gap-2 border border-line px-3 py-2 text-sm font-semibold"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-b border-line bg-paper px-5 py-4 shadow-lg"
        >
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-lg"
                  onClick={(event) => {
                    event.preventDefault();
                    go(link.href);
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-stone">
            Treatments
          </p>
          <ul className="mt-2 space-y-1">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block py-1.5 text-stone"
                  onClick={(event) => {
                    event.preventDefault();
                    go(`/services/${service.slug}`);
                  }}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.phoneHref}
            className="mt-4 block font-semibold text-violet"
          >
            {site.phoneDisplay}
          </a>
        </div>
      ) : null}
    </div>
  );
}
