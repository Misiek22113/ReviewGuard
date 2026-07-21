"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="border border-[#17211c] bg-[#fffdf7] p-5 shadow-[10px_10px_0_#17211c]"
      onSubmit={handleSubmit}
    >
      <label className="absolute -left-[9999px]" aria-hidden="true">
        Strona internetowa
        <input autoComplete="off" name="website" tabIndex={-1} type="text" />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold">
          Imie
          <input
            className="border border-[#17211c]/20 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#17211c]"
            name="name"
            placeholder="np. Jakub"
            required
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold">
          Email
          <input
            className="border border-[#17211c]/20 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#17211c]"
            name="email"
            placeholder="kontakt@restauracja.pl"
            required
            type="email"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-semibold">
        Nazwa restauracji
        <input
          className="border border-[#17211c]/20 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#17211c]"
          name="restaurant"
          placeholder="np. Restauracja Rynek 12"
          required
          type="text"
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm font-semibold">
        Link do profilu Google
        <input
          className="border border-[#17211c]/20 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#17211c]"
          name="googleUrl"
          placeholder="https://maps.google.com/..."
          required
          type="url"
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm font-semibold">
        Najwiekszy problem z opiniami
        <textarea
          className="min-h-32 resize-y border border-[#17211c]/20 bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#17211c]"
          name="problem"
          placeholder="np. Mamy kilka opinii 1-2 gwiazdki bez odpowiedzi albo podejrzany wpis, ktory chcemy zweryfikowac."
          required
        />
      </label>

      <button
        className="mt-5 w-full rounded-sm bg-[#17211c] px-6 py-4 text-sm font-bold text-[#f7f2e8] transition hover:bg-[#2e3b34] disabled:cursor-wait disabled:opacity-60"
        disabled={status === "submitting"}
        type="submit"
      >
        {status === "submitting" ? "Wysylamy zgloszenie..." : "Wyslij prosbe o audyt"}
      </button>

      <p className="mt-4 text-sm leading-6 text-[#657068]">
        Po wyslaniu dane trafia bezposrednio do ReviewGuard. Odpowiemy na podany
        adres e-mail.
      </p>
      <div aria-live="polite">
        {status === "success" ? (
          <p className="mt-3 text-sm font-semibold text-[#17211c]">
            Zgloszenie zostalo wyslane. Dziekujemy — odezwiemy sie na podany adres.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="mt-3 text-sm font-semibold text-[#9f2d20]">
            Nie udalo sie wyslac zgloszenia. Sprobuj ponownie za chwile.
          </p>
        ) : null}
      </div>
    </form>
  );
}
