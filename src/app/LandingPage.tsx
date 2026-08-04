import { LeadForm } from "./LeadForm";
import { landingCopy, type Locale } from "./landing-copy";

export function LandingPage({ locale }: { locale: Locale }) {
  const copy = landingCopy[locale];

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f2e8] text-[#17211c]">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <nav
          aria-label={locale === "en" ? "Main navigation" : "Glowna nawigacja"}
          className="flex items-center justify-between gap-4 border-b border-[#17211c]/15 pb-5"
        >
          <a className="flex min-w-0 items-center gap-3" href="#top" aria-label="ReviewGuard">
            <div className="grid size-10 shrink-0 place-items-center rounded-sm bg-[#17211c] text-sm font-bold text-[#d6f36a]">
              RG
            </div>
            <div className="min-w-0">
              <p className="text-base font-bold leading-none">ReviewGuard</p>
              <p className="mt-1 truncate text-xs uppercase tracking-[0.18em] text-[#657068]">
                {copy.brandTagline}
              </p>
            </div>
          </a>
          <div className="flex shrink-0 items-center gap-2">
            <a
              aria-label={`${locale === "en" ? "Switch to" : "Przelacz na"} ${copy.languageName}`}
              className="grid min-h-10 min-w-10 place-items-center rounded-sm border border-[#17211c]/25 px-2 font-mono text-xs font-semibold transition hover:border-[#17211c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17211c]"
              href={copy.languageHref}
              hrefLang={copy.language === "en" ? "pl" : "en"}
              lang={copy.language === "en" ? "pl" : "en"}
            >
              {copy.languageCode}
            </a>
            <a
              className="hidden rounded-sm border border-[#17211c] px-4 py-2 text-sm font-semibold transition hover:bg-[#17211c] hover:text-[#f7f2e8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17211c] sm:block"
              href="#pilot"
            >
              {copy.navCta}
            </a>
          </div>
        </nav>

        <div
          id="top"
          className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16"
        >
          <div>
            <p className="mb-5 inline-flex rounded-sm bg-[#d6f36a] px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.16em]">
              {copy.audience}
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
              {copy.heroTitle}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#526157]">
              {copy.heroDescription}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-sm bg-[#17211c] px-6 py-4 text-center text-sm font-bold text-[#f7f2e8] transition hover:bg-[#2e3b34] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17211c]"
                href="#pilot"
              >
                {copy.primaryCta}
              </a>
              <a
                className="rounded-sm border border-[#17211c]/25 px-6 py-4 text-center text-sm font-bold transition hover:border-[#17211c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17211c]"
                href="#offer"
              >
                {copy.secondaryCta}
              </a>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#657068]">
              {copy.heroNote}
            </p>
          </div>

          <aside className="border border-[#17211c] bg-[#fffdf7] p-5 shadow-[14px_14px_0_#17211c]">
            <div className="border-b border-[#17211c]/15 pb-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#657068]">
                {copy.sampleLabel}
              </p>
              <h2 className="mt-3 text-3xl font-bold">{copy.sampleTitle}</h2>
              <p className="mt-3 text-sm leading-6 text-[#526157]">
                {copy.sampleDescription}
              </p>
            </div>
            <div className="mt-5 space-y-3">
              {copy.sampleFindings.map((finding) => (
                <article
                  className="border border-[#17211c]/10 bg-[#f7f2e8] p-4"
                  key={finding.label}
                >
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#657068]">
                    {finding.label}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{finding.value}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#526157]">
                    {finding.detail}
                  </p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#17211c]/15 bg-[#fffdf7]" id="offer">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#657068]">
              {copy.problemLabel}
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight">{copy.problemTitle}</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {copy.problems.map((item) => (
              <div className="border border-[#17211c]/10 bg-[#f7f2e8] p-5" key={item}>
                <p className="text-base font-semibold leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#657068]">
            {copy.deliverablesLabel}
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight">{copy.deliverablesTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-[#526157]">
            {copy.deliverablesDescription}
          </p>
        </div>
        <div className="grid gap-3">
          {copy.auditItems.map((item, index) => (
            <div
              className="flex gap-4 border border-[#17211c]/10 bg-[#fffdf7] p-5"
              key={item}
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-sm bg-[#17211c] font-mono text-sm font-semibold text-[#d6f36a]">
                {index + 1}
              </span>
              <p className="pt-1 text-base font-semibold leading-7">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#17211c] text-[#f7f2e8]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#d6f36a]">
              {copy.pilotLabel}
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight">{copy.pilotTitle}</h2>
            <p className="mt-5 text-base leading-7 text-[#dbe4d8]">
              {copy.pilotDescription}
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {copy.outreachSteps.map((step, index) => (
              <article className="border border-[#f7f2e8]/15 p-5" key={step}>
                <p className="font-mono text-sm font-semibold text-[#d6f36a]">
                  0{index + 1}
                </p>
                <p className="mt-4 text-base font-semibold leading-7">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10"
        id="pilot"
      >
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#657068]">
            {copy.formLabel}
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight">{copy.formTitle}</h2>
          <p className="mt-5 text-lg leading-8 text-[#526157]">{copy.formDescription}</p>
        </div>
        <LeadForm copy={copy.form} locale={locale} />
      </section>
    </main>
  );
}
