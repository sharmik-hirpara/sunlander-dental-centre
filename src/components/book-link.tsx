import { site } from "@/lib/content";

export function BookLink({
  href = site.bookingUrl,
  children = "Book appointment",
  variant = "solid",
  className = "",
}: {
  href?: string;
  children?: string;
  variant?: "solid" | "light" | "ghost";
  className?: string;
}) {
  const styles = {
    solid: "bg-violet text-paper hover:bg-violet-deep",
    light: "bg-sun text-ink hover:bg-[#c98d12]",
    ghost: "border border-current bg-transparent hover:bg-ink hover:text-paper",
  };

  const display = className.includes("hidden") ? "" : "inline-flex";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${display} items-center justify-center px-5 py-3 text-sm font-semibold tracking-wide transition ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
