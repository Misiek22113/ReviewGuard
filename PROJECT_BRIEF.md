# ReviewGuard

## Cel projektu

ReviewGuard to docelowo web app SaaS dla lokalnych firm, ktora pomaga monitorowac opinie Google, szybko reagowac na negatywne lub podejrzane recenzje oraz zbierac wiecej prawdziwych opinii od klientow.

Pierwszy etap nie jest pelnym SaaS. To walidacyjny concierge MVP dla operatorow pojedynczych restauracji w Polsce o duzym wolumenie lub zaleglosci opinii: landing page, klikalna demonstracja, reczna obsluga wedlug checklisty i pozniejszy outbound do kwalifikowanych operatorow z calego kraju. Obecna probka lokali z Lodzi sluzy do zebrania opinii do demo, a nie jako gotowa lista kontaktow handlowych.

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

- skontaktowac sie z co najmniej 20 kwalifikowanymi operatorami,
- odbyc co najmniej 5 rozmow,
- przeprowadzic co najmniej 3 demonstracje na opiniach danego operatora,
- pozyskac co najmniej 2 platne pilotaze cyklicznej obslugi,
- nauczyc sie, jak operatorzy opisuja problem opinii Google wlasnymi slowami.

### Walidacyjne MVP

- landing page kierowany do restauracji,
- jasne CTA: "Sprawdz moja wizytowke" i "Zapisz sie na pilotaz",
- formularz leadowy mailto bez backendu,
- obietnica audytu opinii Google wedlug checklisty,
- przykladowy mini-raport zamiast dashboardu,
- cena pilotazowa 80 zl za 30 dni, jedna lokalizacje i maksymalnie 20 przetworzonych opinii,
- outbound email/formularze WWW.

Klikalne demo ogolne korzysta z 10-12 zanonimizowanych, wiernie adaptowanych opinii jednego profilu Pizzerii Kultowej Retkinia, aby zachowac spojny styl, lecz publicznie wystepuje pod fikcyjna marka `Pizzeria Sasiedzka`. Obejmuje kolejke i filtrowanie, podglad oraz edycje sugestii, wybor stylu, kontekst managera, ponowne wygenerowanie z przygotowanych wariantow, zatwierdzenie i kopiowanie odpowiedzi. Nie laczy sie z modelem AI ani backendem; stan zapisuje lokalnie w przegladarce i pozwala go zresetowac. Integracja publikujaca do Google jest tylko nieaktywna zapowiedzia. Podsumowanie sesji pokazuje wykonane dzialania i jawnie opisany szacunek oszczedzonego czasu, bez zdalnej analityki. Filtr mozliwych naruszen pokazuje `0` zamiast sztucznego przypadku.

Pierwszy prototyp to jedno publiczne demo w wersji polskiej i angielskiej, z ta sama reaktywna kolejka i stanem. Polska wersja znajduje sie pod `/pl/demo-prototype`, a angielska pod `/demo-prototype`. Wybrany uklad pokazuje `Dyspozytornie` na desktopie i automatycznie przechodzi w `Tryb skupienia` na ekranach mobilnych. Adres nie zawiera parametru wyboru ukladu, a odrzucone warianty i przelacznik nie sa czescia glownego kodu. Prywatny wariant powstaje pozniej, na prosbe zainteresowanego operatora, z jego opiniami i niepublicznym linkiem waznym 14 dni. Nie jest czescia pierwszej implementacji.

Panel jest przeznaczony dla osoby odpowiedzialnej za opinie, bez wzgledu na jej stanowisko. Obsluguje statusy `Nowa`, `Wymaga kontekstu`, `Gotowa do zatwierdzenia` i `Zatwierdzona`; kopiowanie jest tylko zdarzeniem sesji. Style to `Cieply i profesjonalny`, `Krotki i rzeczowy` oraz `Swobodny i goscinny`, z wyborem krotkiej albo standardowej dlugosci. Szacunek demonstracyjny przyjmuje 6 minut na samodzielne napisanie oraz 1 minute na sprawdzenie sugestii, czyli 5 minut oszczednosci na zatwierdzonej odpowiedzi.

### Oferta pilotazu

Pilotaz trwa 30 dni. Uzytkownik dostaje recznie przygotowana obsluge opinii:

- opinie 1-3 gwiazdki wymagajace reakcji,
- podejrzane lub ryzykowne wzorce opinii,
- propozycje profesjonalnych odpowiedzi,
- plan zbierania prawdziwych opinii od gosci,
- rekomendowane kolejne kroki.

Klient zatwierdza odpowiedzi i sam publikuje je w Google. Jakosc pilotazu mierzymy odsetkiem przygotowanych odpowiedzi, czasem przygotowania, odsetkiem sugestii zaakceptowanych bez duzych zmian, zmniejszeniem zaleglosci, oszczedzonym czasem i checia kontynuacji po 30 dniach.

ReviewGuard sprawdza profil w kazdy dzien roboczy i przygotowuje odpowiedz najpozniej do konca nastepnego dnia roboczego. Styl odpowiedzi jest konfigurowalny: w demo wynika z dotychczasowych odpowiedzi lokalu, a w pilotazu osoba odpowiedzialna za opinie wybiera ton oraz preferowane i zakazane zwroty. Przy trudnym zdarzeniu moze dodac krotka notatke z faktami od managera; bez niej odpowiedz pozostaje neutralna i nie wymysla szczegolow.

Pierwsza oferta pilotazowa kosztuje 80 zl za jedna lokalizacje i maksymalnie 20 przetworzonych opinii. Niewykorzystany limit przechodzi na kolejne miesiace do maksymalnego salda 40 opinii. Pierwsze dwa pilotaze sa swiadomie subsydiowane; mierzymy rzeczywisty czas pracy ReviewGuard.

Cena 80 zl dotyczy wylacznie walidacji oferty na rynku polskim. Wersja angielska produktu nie pokazuje tej ceny; zakres i cena oferty dla rynku anglojezycznego beda walidowane osobno.

Publiczne demo nie przyjmuje platnosci. Po zgloszeniu zainteresowania ReviewGuard potwierdza zakres i wolne miejsce, a nastepnie wysyla link do platnosci lub dane do przelewu. Pelny checkout i automatyczna obsluga subskrypcji sa poza etapem walidacyjnym.

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

### Pilot: 80 zl za 30 dni

- 1 lokalizacja,
- maksymalnie 20 przetworzonych opinii,
- niewykorzystany limit przechodzi dalej do maksymalnego salda 40 opinii,
- recznie przygotowywane propozycje odpowiedzi do zatwierdzenia,
- pierwsze dwa pilotaze sa subsydiowanym kosztem walidacji.

Pakiety dla wielu lokalizacji sa pozniejsza hipoteza, a nie obecna oferta. Wariant 100 zl za 2 lokalizacje oraz wariant 200 zl za nieograniczona liczbe lokalizacji wymagaja osobnej walidacji kosztu, limitu opinii i gotowosci do zaplaty.

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
- cena pilotazu 80 zl jest widoczna,
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
