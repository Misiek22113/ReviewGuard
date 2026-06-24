export default function Home() {
  const stats = [
    { label: "nowe opinie", value: "12" },
    { label: "wymagają reakcji", value: "3" },
    { label: "średnia ocena", value: "4.7" },
  ];

  const reviews = [
    {
      name: "Anna K.",
      rating: "1.0",
      text: "Brak kontaktu, nie polecam.",
      status: "wymaga odpowiedzi",
    },
    {
      name: "Marek S.",
      rating: "5.0",
      text: "Szybka obsługa i świetny kontakt.",
      status: "zamknięta",
    },
    {
      name: "konto bez nazwy",
      rating: "1.0",
      text: "",
      status: "podejrzana",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f3ec] text-[#18211c]">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-[#18211c]/15 pb-5">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-sm bg-[#18211c] text-sm font-bold text-[#c8f560]">
              RG
            </div>
            <div>
              <p className="text-base font-bold leading-none">ReviewGuard</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#607064]">
                reputation desk
              </p>
            </div>
          </div>
          <a
            className="rounded-sm border border-[#18211c] px-4 py-2 text-sm font-semibold transition hover:bg-[#18211c] hover:text-[#f6f3ec]"
            href="mailto:hello@reviewguard.local"
          >
            Dołącz do bety
          </a>
        </nav>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
          <div>
            <p className="mb-5 inline-flex rounded-sm bg-[#c8f560] px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.16em]">
              monitoring opinii Google
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
              Reaguj, zanim jedna opinia popsuje miesiąc sprzedaży.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#526157]">
              ReviewGuard pomaga lokalnym firmom wykrywać negatywne i podejrzane
              recenzje, generować spokojne odpowiedzi oraz zbierać więcej
              prawdziwych opinii od klientów po usłudze.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-sm bg-[#18211c] px-6 py-4 text-center text-sm font-bold text-[#f6f3ec] transition hover:bg-[#2d3b33]"
                href="#pricing"
              >
                Zobacz plany
              </a>
              <a
                className="rounded-sm border border-[#18211c]/25 px-6 py-4 text-center text-sm font-bold transition hover:border-[#18211c]"
                href="#dashboard-preview"
              >
                Podejrzyj dashboard
              </a>
            </div>
          </div>

          <div
            id="dashboard-preview"
            className="relative rounded-sm border border-[#18211c] bg-[#fffdf6] p-4 shadow-[14px_14px_0_#18211c]"
          >
            <div className="mb-5 flex items-center justify-between border-b border-[#18211c]/15 pb-4">
              <div>
                <p className="text-sm font-semibold text-[#607064]">
                  Salon Nova, Kraków
                </p>
                <h2 className="text-2xl font-bold">Status reputacji</h2>
              </div>
              <span className="rounded-sm bg-[#ffe072] px-3 py-1 font-mono text-xs font-semibold">
                wymaga reakcji
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  className="rounded-sm border border-[#18211c]/10 bg-[#f6f3ec] p-4"
                  key={stat.label}
                >
                  <p className="font-mono text-2xl font-semibold">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase text-[#607064]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-3">
              {reviews.map((review) => (
                <article
                  className="rounded-sm border border-[#18211c]/10 bg-white p-4"
                  key={`${review.name}-${review.status}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="mt-1 text-sm text-[#607064]">
                        {review.text || "Brak treści opinii"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono font-semibold">{review.rating}</p>
                      <p className="mt-1 text-xs text-[#607064]">
                        {review.status}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div
          id="pricing"
          className="grid gap-3 border-t border-[#18211c]/15 pt-5 md:grid-cols-3"
        >
          {[
            ["Starter", "49 zł/mies.", "Monitoring jednej wizytówki i alerty."],
            ["Pro", "99 zł/mies.", "Generator odpowiedzi i case file."],
            ["Rescue", "299 zł", "Jednorazowa pomoc przy ataku opiniami."],
          ].map(([name, price, description]) => (
            <div className="rounded-sm bg-[#18211c] p-5 text-[#f6f3ec]" key={name}>
              <p className="text-sm font-semibold text-[#c8f560]">{name}</p>
              <p className="mt-3 text-3xl font-bold">{price}</p>
              <p className="mt-3 text-sm leading-6 text-[#d7ded4]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
