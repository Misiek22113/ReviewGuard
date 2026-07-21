"use client";

import { FormEvent, useState } from "react";

const CONTACT_EMAIL = "REVIEWGUARD_CONTACT_EMAIL";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const restaurant = String(formData.get("restaurant") || "").trim();
    const googleUrl = String(formData.get("googleUrl") || "").trim();
    const problem = String(formData.get("problem") || "").trim();

    const subject = `Pilotaz ReviewGuard - ${restaurant || "restauracja"}`;
    const body = [
      "Czesc,",
      "",
      "chce sprawdzic, czy ReviewGuard ma sens dla mojej restauracji.",
      "",
      `Imie: ${name}`,
      `Email: ${email}`,
      `Restauracja: ${restaurant}`,
      `Link do profilu Google: ${googleUrl}`,
      "",
      "Najwiekszy problem z opiniami:",
      problem,
      "",
      "Interesuje mnie udzial w pilotazu audytu opinii Google.",
    ].join("\n");

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setStatus("ready");
    window.location.href = mailtoUrl;
  }

  return (
    <form
      className="border border-[#17211c] bg-[#fffdf7] p-5 shadow-[10px_10px_0_#17211c]"
      onSubmit={handleSubmit}
    >
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
        className="mt-5 w-full rounded-sm bg-[#17211c] px-6 py-4 text-sm font-bold text-[#f7f2e8] transition hover:bg-[#2e3b34]"
        type="submit"
      >
        Przygotuj maila z prosba o audyt
      </button>

      <p className="mt-4 text-sm leading-6 text-[#657068]">
        Formularz otworzy Twoj program pocztowy z gotowa wiadomoscia. Na tym
        etapie dane nie sa zapisywane w aplikacji.
      </p>
      {status === "ready" ? (
        <p className="mt-3 text-sm font-semibold text-[#17211c]">
          Jesli program pocztowy sie nie otworzyl, sprawdz konfiguracje mailto w
          przegladarce.
        </p>
      ) : null}
    </form>
  );
}
