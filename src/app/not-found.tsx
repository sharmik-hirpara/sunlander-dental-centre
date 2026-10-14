import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet">
        404
      </p>
      <h1 className="mt-3 font-display text-5xl font-medium">Page not found</h1>
      <p className="mt-4 text-stone">That page is not part of the Sunlander site.</p>
      <Link href="/" className="mt-6 inline-block font-semibold text-violet">
        Back to the homepage
      </Link>
    </Container>
  );
}
