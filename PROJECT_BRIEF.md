# ReviewGuard

## Cel projektu

ReviewGuard to docelowo web app SaaS dla lokalnych firm, ktora pomaga monitorowac opinie Google, szybko reagowac na negatywne lub podejrzane recenzje oraz zbierac wiecej prawdziwych opinii od klientow.

Pierwszy etap nie jest pelnym SaaS. To walidacyjny concierge MVP dla restauracji: landing page, oferta audytu opinii Google wedlug checklisty, formularz leadowy mailto i outbound do 20-50 lokali.

Produkt jest skierowany do wlascicieli malych firm: salonow beauty, gabinetow stomatologicznych, fizjoterapeutow, restauracji, warsztatow, trenerow, korepetytorow i innych lokalnych uslugodawcow.

## Glowny problem

Lokalne firmy sa mocno zalezne od ocen Google. Jedna lub kilka negatywnych opinii moze obnizyc srednia ocene, odstraszyc klientow i realnie zmniejszyc sprzedaz.

Wlasciciele czesto:

- nie zauwazaja zlych opinii wystarczajaco szybko,
- nie wiedza, jak profesjonalnie odpowiedziec,
- nie wiedza, jak zglaszac falszywe lub naruszajace zasady opinie,
- nie maja systemu do regularnego zbierania pozytywnych opinii od realnych klientow.

## Propozycja wartosci

"Chron reputacje swojej firmy w Google. Dostawaj alerty o negatywnych opiniach, generuj profesjonalne odpowiedzi i zbieraj wiecej prawdziwych recenzji od klientow."

## Etap 0: walidacja rynku

Najwazniejszym ryzykiem jest popyt, nie technologia. Przed budowa panelu, bazy danych, logowania i integracji Google nalezy sprawdzic, czy wlasciciele restauracji reaguja na oferte platnego audytu opinii Google.

### Cel walidacji

- zdobyc feedback od 20-50 restauracji,
- sprawdzic, czy ktos pyta o cene, rozmowe lub pilotaz,
- zweryfikowac gotowosc placenia od 49 zl / miesiac,
- nauczyc sie, jak restauratorzy opisuja problem opinii Google wlasnymi slowami.

### Walidacyjne MVP

- landing page kierowany do restauracji,
- jasne CTA: "Sprawdz moja wizytowke" i "Zapisz sie na pilotaz",
- formularz leadowy mailto bez backendu,
- obietnica audytu opinii Google wedlug checklisty,
- przykladowy mini-raport zamiast dashboardu,
- cena pilotazowa od 49 zl / miesiac,
- outbound email/formularze WWW.

### Oferta pilotazu

W pilotazu uzytkownik dostaje recznie przygotowany audyt opinii:

- opinie 1-3 gwiazdki wymagajace reakcji,
- podejrzane lub ryzykowne wzorce opinii,
- propozycje profesjonalnych odpowiedzi,
- plan zbierania prawdziwych opinii od gosci,
- rekomendowane kolejne kroki.

Nie obiecujemy automatycznego usuwania opinii. Nie sugerujemy manipulowania recenzjami. Nie generujemy falszywych opinii.

## Docelowe MVP SaaS

Ponizszy zakres ma sens dopiero po sygnalach popytu z etapu walidacyjnego.

### Landing page

Landing page powinien jasno tlumaczyc produkt i kierowac do zapisu na pilotaz lub zostawienia maila.

Sekcje:

- hero z mocnym komunikatem,
- problem: negatywne i falszywe opinie Google,
- rozwiazanie: monitoring, alerty, odpowiedzi, zbieranie opinii,
- dla kogo: najpierw restauracje, pozniej inne lokalne firmy uslugowe,
- cennik,
- CTA do zalozenia konta lub zostawienia maila.

Ton komunikacji: konkretny, spokojny, biznesowy. Bez przesadnego hype'u.

### Rejestracja i logowanie

Uzytkownik moze:

- zalozyc konto,
- zalogowac sie,
- dodac dane firmy,
- dodac link do wizytowki Google lub identyfikator lokalizacji.

Na MVP integracja z Google Business Profile API moze byc przygotowana architektonicznie, ale nie musi byc w pelni automatyczna od pierwszego dnia. Mozna zaczac od recznego lub polautomatycznego importu opinii.

### Dashboard

Dashboard powinien pokazywac:

- nazwe firmy,
- srednia ocene,
- liczbe opinii,
- liczbe nowych opinii,
- liczbe opinii negatywnych,
- ostatnie opinie,
- status reputacji: OK / wymaga reakcji / krytyczne.

### Monitoring opinii

System powinien przechowywac opinie z polami:

- autor,
- ocena 1-5,
- tresc,
- data,
- link do opinii,
- status: nowa / wymaga odpowiedzi / odpowiedziano / zgloszona / zamknieta,
- flaga: podejrzana lub normalna.

W MVP mozna dodac reczny import opinii przez formularz lub CSV.

Docelowo przygotowac miejsce na integracje z Google Business Profile API.

### Alerty

Gdy pojawi sie opinia 1-3 gwiazdki, system powinien oznaczyc ja jako wymagajaca reakcji.

W MVP wystarczy alert w dashboardzie. Docelowo:

- alert email,
- pozniej SMS lub WhatsApp.

### Generator odpowiedzi

Dla negatywnej opinii aplikacja powinna generowac profesjonalna propozycje odpowiedzi.

Odpowiedz ma byc:

- spokojna,
- uprzejma,
- konkretna,
- bez przyznawania sie do winy, jesli sytuacja jest niejasna,
- zgodna z dobrymi praktykami obslugi klienta.

Uzytkownik powinien moc:

- wygenerowac odpowiedz,
- edytowac ja,
- skopiowac do schowka,
- oznaczyc opinie jako "odpowiedziano".

### Wykrywanie podejrzanych opinii

Prosta heurystyka MVP oznacza opinie jako podejrzana, jesli:

- ocena to 1 gwiazdka i brak tresci,
- tresc jest bardzo krotka,
- kilka negatywnych opinii pojawilo sie w krotkim czasie,
- tresc zawiera agresywne slowa,
- autor ma podejrzany wzorzec nazwy, jesli takie dane sa dostepne.

Nie obiecujemy automatycznego usuwania opinii. Produkt pomaga w ocenie i reakcji, ale nie gwarantuje usuniecia recenzji.

### Case file do zgloszenia opinii

Dla podejrzanej opinii aplikacja powinna tworzyc prosty case file:

- dane opinii,
- powody podejrzenia,
- sugerowana kategoria zgloszenia,
- gotowy tekst do uzycia przy zglaszaniu opinii do Google,
- checklist krokow, co wlasciciel ma zrobic.

### Zbieranie pozytywnych opinii

Aplikacja powinna generowac:

- link do zostawienia opinii Google,
- prosta strone lub QR do wyslania klientom,
- gotowy tekst wiadomosci z prosba o opinie.

Przykladowy tekst:

> Dziekujemy za skorzystanie z naszych uslug. Jesli jestes zadowolony/a, bedzie nam bardzo milo, jesli zostawisz krotka opinie w Google: [link]

## Cennik

### Starter: 49 zl/mies.

- 1 lokalizacja,
- monitoring opinii,
- alerty w dashboardzie,
- reczny import opinii.

### Pro: 99 zl/mies.

- wszystko ze Starter,
- generator odpowiedzi,
- case file do zgloszen,
- miesieczny raport reputacji.

### Rescue: 299 zl jednorazowo

- pakiet awaryjny dla firm, ktore dostaly serie negatywnych opinii,
- analiza opinii,
- gotowe odpowiedzi,
- instrukcja zgloszen.

## Stack techniczny

Preferowany stack:

- Next.js App Router,
- TypeScript,
- Tailwind CSS,
- Neon Postgres,
- Prisma,
- Auth.js lub Clerk,
- Resend do maili,
- Stripe do platnosci,
- OpenAI API lub inny LLM do generowania odpowiedzi,
- docelowo Google Business Profile API.

## Model danych

### User

- id
- email
- name
- createdAt

### Company

- id
- userId
- name
- industry
- googleBusinessUrl
- googleReviewUrl
- averageRating
- totalReviews
- createdAt

### Review

- id
- companyId
- authorName
- rating
- content
- reviewUrl
- reviewedAt
- status
- isSuspicious
- suspiciousReasons
- generatedReply
- createdAt

### Alert

- id
- companyId
- reviewId
- type
- message
- status
- createdAt

### ReviewRequest

- id
- companyId
- customerName
- customerEmail
- status
- sentAt
- createdAt

## Design

Aplikacja powinna wygladac profesjonalnie, nowoczesnie i spokojnie.

UI powinien byc:

- czytelny,
- zaufany,
- lekko premium,
- prosty w obsludze,
- zoptymalizowany pod desktop i mobile.

Dashboard powinien byc najwazniejszym ekranem po zalogowaniu.

## Ograniczenia

- Nie obiecujemy automatycznego usuwania opinii z Google.
- Nie sugerujemy manipulowania opiniami.
- Nie tworzymy funkcji masowego generowania falszywych opinii.
- Produkt pomaga zbierac prawdziwe opinie od realnych klientow.
- Komunikacja ma byc etyczna i zgodna z zasadami Google.

## Pierwszy etap implementacji

1. Dopolerowac landing pod walidacje restauracji.
2. Dodac formularz leadowy mailto bez backendu.
3. Przygotowac playbook outbound do 20-50 restauracji.
4. Recznie zebrac sygnaly popytu.
5. Dopiero po potwierdzeniu popytu budowac panel, baze danych, platnosci i integracje.

## Definicja ukonczenia walidacyjnego MVP

Walidacyjne MVP jest gotowe, gdy:

- landing mowi konkretnie do restauracji,
- CTA prowadza do formularza pilotazu,
- formularz tworzy gotowa wiadomosc mailto,
- cena od 49 zl / miesiac jest widoczna,
- playbook pozwala wyslac 20-50 wiadomosci outbound,
- komunikacja nie obiecuje usuwania opinii ani manipulowania recenzjami.

## Kolejny etap po potwierdzeniu popytu

Po realnych sygnalach popytu mozna wrocic do docelowego SaaS MVP:

1. Auth.
2. Dashboard.
3. CRUD firmy.
4. Reczne dodawanie lub import opinii.
5. Generator odpowiedzi.
6. Oznaczanie podejrzanych opinii.
7. Generowanie linku i tekstu prosby o opinie.
8. Architektura pod pozniejsza integracje z Google API.
