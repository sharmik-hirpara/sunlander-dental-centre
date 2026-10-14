"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const body = [`Name: ${name}`, `Phone: ${phone}`, `Email: ${email}`, "", message].join("\n");
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      "Appointment enquiry from the website",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 border border-line bg-white p-6 sm:p-8">
      <div>
        <h2 className="font-display text-3xl font-medium">Send a message</h2>
        <p className="mt-2 text-sm leading-6 text-stone">
          This opens an email to {site.email} in your mail app, with your
          message ready to send.
        </p>
      </div>
      <label className="block text-sm font-semibold">
        Name
        <input
          name="name"
          required
          autoComplete="name"
          className="mt-1 w-full border border-line bg-paper px-3 py-2 font-normal"
        />
      </label>
      <label className="block text-sm font-semibold">
        Phone
        <input
          name="phone"
          required
          type="tel"
          autoComplete="tel"
          className="mt-1 w-full border border-line bg-paper px-3 py-2 font-normal"
        />
      </label>
      <label className="block text-sm font-semibold">
        Email
        <input
          name="email"
          required
          type="email"
          autoComplete="email"
          className="mt-1 w-full border border-line bg-paper px-3 py-2 font-normal"
        />
      </label>
      <label className="block text-sm font-semibold">
        How can we help?
        <textarea
          name="message"
          required
          rows={5}
          className="mt-1 w-full border border-line bg-paper px-3 py-2 font-normal"
        />
      </label>
      <button
        type="submit"
        className="bg-violet px-5 py-3 text-sm font-semibold text-paper hover:bg-violet-deep"
      >
        Write email
      </button>
      {sent ? (
        <p className="text-sm text-stone" role="status">
          Your email app should open with this message. If it does not, call{" "}
          {site.phoneDisplay}.
        </p>
      ) : null}
    </form>
  );
}
