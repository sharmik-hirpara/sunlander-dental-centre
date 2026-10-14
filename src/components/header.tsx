import Image from "next/image";
import Link from "next/link";
import { BookLink } from "@/components/book-link";
import { MobileNav } from "@/components/mobile-nav";
import { services, site } from "@/lib/content";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="shrink-0" aria-label="Sunlander Dental Centre, home">
          <Image
            src="/images/logo.png"
            alt="Sunlander Dental Centre"
            width={280}
            height={96}
            priority
            className="h-14 w-auto sm:h-16"
          />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.slice(0, 2).map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold">
              {link.label}
            </Link>
          ))}
          <div className="group relative">
            <Link href="/services" className="text-sm font-semibold">
              Services
            </Link>
            <div className="pointer-events-none absolute left-1/2 top-full z-20 w-64 -translate-x-1/2 pt-3 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
              <ul className="border border-line bg-paper py-2 shadow-lg">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-mist"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link href="/contact" className="text-sm font-semibold">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="hidden text-sm font-semibold xl:inline"
          >
            {site.phoneDisplay}
          </a>
          <BookLink className="hidden sm:inline-flex" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
