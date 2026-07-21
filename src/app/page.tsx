import { LeadForm } from "./LeadForm";

const auditItems = [
  "Opinie 1-3 gwiazdki, ktore wymagaja spokojnej odpowiedzi",
  "Podejrzane wzorce: puste opinie, serie negatywnych wpisow, agresywny ton",
  "Gotowe propozycje odpowiedzi do wklejenia w Google",
  "Materialy pomocnicze do zgloszenia opinii naruszajacej zasady Google",
];

const sampleFindings = [
  {
    label: "Ryzyko",
    value: "3 opinie bez odpowiedzi",
    detail: "Dwie z nich sa widoczne wysoko w profilu i moga zniechecac nowych gosci.",
  },
  {
    label: "Szybka reakcja",
    value: "24-48 h",
    detail: "Najpierw odpowiadamy na najnowsze negatywne wpisy, bez eskalowania konfliktu.",
  },
  {
    label: "Do weryfikacji",
    value: "2 podejrzane wpisy",
    detail: "Sprawdzamy wzorce i wskazujemy, czy sa podstawy do zgloszenia ich do Google.",
  },
];

const outreachSteps = [
  "Zostawiasz link do profilu Google.",
  "Sprawdzam opinie wedlug checklisty i przygotowuje mini-audyt.",
  "Dostajesz plan reakcji, propozycje odpowiedzi i nastepne kroki.",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f2e8] text-[#17211c]">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-5 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-[#17211c]/15 pb-5">
          <a className="flex items-center gap-3" href="#top" aria-label="ReviewGuard">
            <div className="grid size-10 place-items-center rounded-sm bg-[#17211c] text-sm font-bold text-[#d6f36a]">
              RG
            </div>
            <div>
              <p className="text-base font-bold leading-none">ReviewGuard</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#657068]">
                audyt opinii Google
              </p>
            </div>
          </a>
          <a
            className="rounded-sm border border-[#17211c] px-4 py-2 text-sm font-semibold transition hover:bg-[#17211c] hover:text-[#f7f2e8]"
            href="#pilot"
          >
            Zapisz sie na pilotaz
          </a>
        </nav>

        <div
          id="top"
          className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16"
        >
          <div>
            <p className="mb-5 inline-flex rounded-sm bg-[#d6f36a] px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.16em]">
              dla restauracji i lokali gastronomicznych
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
              Sprawdz, czy opinie Google nie zabieraja Ci rezerwacji.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#526157]">
              Audyt opinii Google dla restauracji: wskazuje recenzje wymagajace
              reakcji, podejrzane wpisy i podpowiada, na co odpowiedziec w
              pierwszej kolejnosci.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-sm bg-[#17211c] px-6 py-4 text-center text-sm font-bold text-[#f7f2e8] transition hover:bg-[#2e3b34]"
                href="#pilot"
              >
                Sprawdz moja wizytowke
              </a>
              <a
                className="rounded-sm border border-[#17211c]/25 px-6 py-4 text-center text-sm font-bold transition hover:border-[#17211c]"
                href="#offer"
              >
                Zapisz sie na pilotaz
              </a>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[#657068]">
              Pilotaz dla pierwszych restauracji. Bez obietnic usuwania opinii
              — dostajesz konkretna analize i plan reakcji.
            </p>
          </div>

          <aside className="border border-[#17211c] bg-[#fffdf7] p-5 shadow-[14px_14px_0_#17211c]">
            <div className="border-b border-[#17211c]/15 pb-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#657068]">
                przykladowy mini-audyt
              </p>
              <h2 className="mt-3 text-3xl font-bold">Restauracja po weekendzie</h2>
              <p className="mt-3 text-sm leading-6 text-[#526157]">
                Zamiast panelu SaaS na start dostajesz konkretna analize opinii
                wedlug checklisty i gotowa liste dzialan.
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {sampleFindings.map((finding) => (
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
              problem
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight">
              Jedna zla opinia moze wisiec wyzej niz menu dnia.
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              "Nie widzisz nowych negatywnych opinii wystarczajaco szybko.",
              "Nie wiesz, jak odpowiedziec profesjonalnie, bez przyznawania winy.",
              "Nie wiesz, ktore podejrzane wpisy warto zglosic do Google.",
            ].map((item) => (
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
            co dostajesz
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight">
            Audyt opinii, ktory da sie wdrozyc bez nowego systemu.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#526157]">
            W pilotazu nie podlaczamy jeszcze API Google. Sprawdzamy opinie
            wedlug checklisty i odsylamy konkret: co odpowiedziec, co obserwowac
            i ktore wpisy warto zweryfikowac lub zglosic.
          </p>
        </div>
        <div className="grid gap-3">
          {auditItems.map((item, index) => (
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
              pilotaz
            </p>
            <h2 className="mt-3 text-4xl font-bold leading-tight">
              Sprawdzamy, czy taki audyt ma sens dla restauracji.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#dbe4d8]">
              To wczesny pilotaz. Chcemy poznac realne problemy restauratorow i
              sprawdzic, czy analiza opinii oraz gotowy plan reakcji sa dla nich
              pomocne.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {outreachSteps.map((step, index) => (
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
            formularz
          </p>
          <h2 className="mt-3 text-4xl font-bold leading-tight">
            Chcesz audyt opinii dla swojej restauracji?
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#526157]">
            Wyslij link do profilu Google. Odpowiem z informacja, czy widac opinie
            wymagajace reakcji i czy pilotaz ma sens dla Twojego lokalu.
          </p>
        </div>
        <LeadForm />
      </section>
    </main>
  );
}
