# ReviewGuard

## Cel projektu

ReviewGuard to web app SaaS dla lokalnych firm, ktora pomaga monitorowac opinie Google, szybko reagowac na negatywne lub podejrzane recenzje oraz zbierac wiecej prawdziwych opinii od klientow.

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

## MVP

### Landing page

Landing page powinien jasno tlumaczyc produkt i kierowac do rejestracji lub zapisu do bety.

Sekcje:

- hero z mocnym komunikatem,
- problem: negatywne i falszywe opinie Google,
- rozwiazanie: monitoring, alerty, odpowiedzi, zbieranie opinii,
- dla kogo: lokalne firmy uslugowe,
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

1. Struktura projektu.
2. Landing page.
3. Auth.
4. Dashboard.
5. CRUD firmy.
6. Reczne dodawanie lub import opinii.
7. Generator odpowiedzi.
8. Oznaczanie podejrzanych opinii.
9. Generowanie linku i tekstu prosby o opinie.
10. Architektura pod pozniejsza integracje z Google API.

## Definicja ukonczenia MVP

MVP jest gotowe, gdy uzytkownik moze:

- zalozyc konto,
- dodac firme,
- dodac kilka opinii recznie,
- zobaczyc dashboard reputacji,
- dostac oznaczenie negatywnych lub podejrzanych opinii,
- wygenerowac odpowiedz na opinie,
- skopiowac odpowiedz,
- wygenerowac tekst prosby o pozytywna opinie,
- zobaczyc prosty cennik i CTA do platnego planu.
