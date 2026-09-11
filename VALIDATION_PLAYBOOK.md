# ReviewGuard Validation Playbook

## Cel

Sprawdzic, czy operatorzy pojedynczych restauracji o duzym wolumenie lub zaleglosci opinii chca zaplacic za cykliczna obsluge opinii Google, zanim powstanie produkcyjny dashboard, baza danych, platnosci lub integracja Google Business Profile API.

## Lista kontaktow

Docelowo zbierz co najmniej 20 kwalifikowanych operatorow pojedynczych restauracji z calej Polski. Prospecting jest osobnym, pozniejszym etapem; lokali wybranych obecnie jako zrodla opinii do demonstracji nie traktujemy automatycznie jako kontaktow handlowych. Kandydat kwalifikuje sie, gdy:

- restauracja otrzymuje co najmniej 10-15 nowych opinii miesiecznie, albo
- ma co najmniej 20 opinii oczekujacych na odpowiedz.

Dodatkowe sygnaly dobrego dopasowania:

- maja 100+ opinii Google,
- maja srednia ocene 3.8-4.6,
- maja przynajmniej kilka opinii 1-3 gwiazdki,
- ostatnia negatywna opinia ma mniej niz 90 dni,
- wlasciciel lub manager jest osiagalny przez email, formularz WWW albo social media.

## Metryki do sledzenia

Postep sledzimy w arkuszu `outputs/validation/reviewguard-validation-tracker.xlsx`. Jeden wiersz arkusza kontaktow odpowiada jednemu faktycznie wybranemu operatorowi, a nie lokalowi uzytemu tylko jako zrodlo opinii do demo.

Arkusz automatycznie pokazuje liczbe kwalifikowanych kontaktow, odbytych rozmow, demonstracji na opiniach danego operatora i platnych pilotazy. Rejestruje rowniez odpowiedzi, pytania o cene, kolejne kroki i terminy kontaktu.

Brama pozwalajaca rozpoczac budowe produkcyjnego SaaS-u wymaga lacznie:

- co najmniej 20 kwalifikowanych kontaktow, do ktorych wyslano wiadomosc,
- co najmniej 5 odbytych rozmow,
- co najmniej 3 demonstracji przeprowadzonych na opiniach danego operatora,
- co najmniej 2 platnych pilotazy cyklicznej obslugi.

Brama jest spelniona dopiero wtedy, gdy wszystkie cztery progi zostana osiagniete. Pytanie o cene, przeslanie profilu lub ogolne zainteresowanie sa sygnalami pomocniczymi, ale nie zastepuja platnego pilotazu.

## Curated demo

Zespol ReviewGuard sam pobiera i przygotowuje opinie, a nastepnie umieszcza je w klikalnej demonstracji. Operator nie importuje danych i nie konfiguruje konta. Obecnie rozpoznawalne lokale z Lodzi sluza jedynie jako zrodla probki opinii do ogolnego demo; nie sa przez to automatycznie leadami. Zrodlem ostatecznej probki jest jeden profil Pizzerii Kultowej Retkinia, wybrany ze wzgledu na duzy zbior i oczekiwana roznorodnosc przypadkow. Przed pobraniem potwierdzamy, ze profil zawiera wystarczajaco rozne opinie oraz odpowiedzi wlasciciela pozwalajace odtworzyc styl.

Przed zimnym kontaktem przygotowujemy najwyzej 1-2 konkretne obserwacje. Pelne demo na 10-15 opiniach danego operatora przygotowujemy dopiero po wyrazeniu zainteresowania, zeby nie ponosic wysokiego kosztu pracy dla niezweryfikowanego leada.

Demonstracja pokazuje:

- kolejke opinii jednej lokalizacji,
- podzial na szybkie odpowiedzi, odpowiedzi wymagajace personalizacji i przypadki wymagajace ostroznosci,
- propozycje odpowiedzi z mozliwoscia edycji i zatwierdzenia,
- uzasadnienie potencjalnego naruszenia zasad Google.

Ogolna probka zawiera 10-12 opinii: cztery pozytywne do szybkiego zatwierdzenia, trzy mieszane wymagajace personalizacji, trzy negatywne, jedna trudna wymagajaca kontekstu managera oraz najwyzej jedna potencjalnie naruszajaca zasady. Kategorie moga sie nakladac, aby calosc nie przekraczala 12 opinii. Nie kopiujemy opinii slowo w slowo: zachowujemy ocene, problem, emocje i istotne szczegoly, lecz tekst adaptujemy oraz usuwamy nazwiska, daty wizyt, dane pracownikow i inne informacje identyfikujace. W interfejsie autorzy wystepuja jako anonimowi goscie Google, a probka jest opisana jako oparta na zanonimizowanych opiniach publicznych. Prywatne demo operatora moze uzywac pelnych tekstow jego opinii.

W pierwszym demo rzeczywiscie dzialaja: kolejka i filtry, podglad sugestii, zmiana stylu, edycja odpowiedzi, dodanie kontekstu managera, ponowne wygenerowanie propozycji, zatwierdzenie oraz skopiowanie tekstu. Publikacja do Google jest widoczna jako przyszla funkcja, ale pozostaje nieaktywna i jasno opisana.

Dla kazdej opinii przygotowujemy z gory 2-3 dobre warianty odpowiedzi. Akcja ponownego generowania wybiera kolejny wariant w aktualnie wybranym stylu i nigdy sama nie zmienia stylu. Nie wywoluje modelu AI, API ani backendu.

Interfejs jest przeznaczony dla osoby odpowiedzialnej za opinie, niezaleznie od tego, czy jest wlascicielem, managerem czy specjalista marketingu. Nie uzalezniamy jezyka ani funkcji od nazwy stanowiska.

Statusy przeplywu to: `Nowa`, `Wymaga kontekstu`, `Gotowa do zatwierdzenia` i `Zatwierdzona`. Skopiowanie odpowiedzi jest zdarzeniem w podsumowaniu sesji, a nie kolejnym statusem. Niezaleznie od statusu opinia moze miec oznaczenie szybkiej odpowiedzi, personalizacji albo ostroznosci.

Dla ogolnego demo styl odpowiedzi wyprowadzamy z dotychczasowych publicznych odpowiedzi restauracji bedacej zrodlem probki. Dostepne ustawienia to `Cieply i profesjonalny` jako domyslne, `Krotki i rzeczowy` oraz `Swobodny i goscinny`, a takze dlugosc krotka lub standardowa. Przed platnym pilotazem osoba odpowiedzialna za opinie wybiera ustawienia oraz podaje zwroty preferowane i zakazane.

Przy trudnej opinii osoba odpowiedzialna za opinie moze dodac krotka notatke z faktami od managera i wygenerowac druga wersje odpowiedzi. Bez tej notatki propozycja pozostaje neutralna i nie dopowiada faktow.

Na etapie walidacji demonstracja nie publikuje odpowiedzi w Google.

Pierwsza wersja obejmuje jedno ogolne demo dostepne publicznie bez konta w dwoch wersjach jezykowych. Uzywa fikcyjnej marki `Pizzeria Sasiedzka` po polsku oraz `Neighbourhood Pizza` po angielsku, bez prawdziwego logo i adresu, aby nie sugerowac wspolpracy z restauracja zrodlowa. Obie wersje korzystaja z tej samej kolejki, stanow i znaczeniowo rownowaznych adaptacji opinii oraz odpowiedzi.

Glowny uklad demonstracji pokazuje `Dyspozytornie` na desktopie i automatycznie przechodzi w `Tryb skupienia` na ekranie mobilnym. Nie udostepnia wyboru alternatywnych ukladow ani parametru wariantu w adresie. Polska oferta pilotazowa i oferta dla rynku anglojezycznego sa walidowane osobno; angielska demonstracja nie pokazuje polskiej ceny 80 zl.

Prywatnego demo nie budujemy teraz. Dopiero po zainteresowaniu konkretnego operatora ReviewGuard moze przygotowac osobny zestaw jego opinii i udostepnic go pod niepublicznym linkiem z losowym identyfikatorem. Taki link dziala 14 dni, moze zostac recznie przedluzony lub wylaczony, nie jest indeksowany i nie staje sie publicznym przykladem.

Edycje, zatwierdzenia i wybor stylu sa zapisywane tylko lokalnie w przegladarce oraz przezywaja odswiezenie strony. Akcja resetu przywraca poczatkowy stan demonstracji. Demo nie wymaga konta ani bazy danych.

Bez zdalnej analityki panel pokazuje lokalne podsumowanie sesji: liczbe opinii przejrzanych, edytowanych, zatwierdzonych i skopiowanych oraz jasno oznaczony szacunek zaoszczedzonego czasu. Szacunek zaklada 6 minut samodzielnego pisania i 1 minute sprawdzenia sugestii, czyli 5 minut oszczednosci na kazdej zatwierdzonej odpowiedzi. Konczy sie jednym CTA: "Chce takie odpowiedzi dla mojego lokalu".

CTA zbiera zainteresowanie i nie uruchamia platnosci. Najpierw ReviewGuard potwierdza zakres oraz dostepnosc jednego z dwoch miejsc pilotazowych, a potem wysyla link do platnosci lub dane do przelewu. Osadzony checkout, automatyczne faktury, zwroty i subskrypcje czekaja na potwierdzenie popytu.

Filtr potencjalnych naruszen pokazuje w ogolnej probce wynik `0` oraz wyjasnia, ze zwykla krytyka nie stanowi naruszenia zasad. Nie dodajemy sztucznego przypadku tylko po to, aby funkcja wygladala na aktywna.

## Platny pilotaz

Pilotaz trwa 30 dni. Na poczatku zespol ReviewGuard porzadkuje uzgodniona czesc zaleglosci, a pozniej sprawdza profil w kazdy dzien roboczy i przygotowuje propozycje odpowiedzi najpozniej do konca nastepnego dnia roboczego. Klient zatwierdza odpowiedzi i publikuje je w Google. Rzeczywisty czas od publikacji opinii do przygotowania odpowiedzi zapisujemy jako metryke pilotazu.

Cena pierwszego pilotazu wynosi 80 zl za jedna lokalizacje i maksymalnie 20 przetworzonych opinii. Przetworzona opinia obejmuje analize i priorytetyzacje oraz propozycje odpowiedzi, jesli reakcja jest wskazana. Niewykorzystany limit przechodzi na kolejne miesiace, ale laczne saldo nie moze przekroczyc 40 opinii.

Pierwsze dwa pilotaze sa swiadomie subsydiowane jako koszt walidacji. Dla kazdego nalezy zapisac rzeczywisty czas pracy ReviewGuard; cena nie jest jeszcze dowodem rentownosci recznej uslugi.

Sukces pilotazu mierzymy przez:

- odsetek opinii, dla ktorych przygotowano odpowiedz,
- sredni czas od pojawienia sie opinii do przygotowania odpowiedzi,
- odsetek sugestii zaakceptowanych bez zmian lub po malej edycji,
- zmniejszenie liczby zaleglych odpowiedzi,
- deklarowany czas oszczedzony przez osobe odpowiedzialna za opinie,
- decyzje klienta o kontynuowaniu platnej obslugi.

Mocnym sygnalem jakosci jest zaakceptowanie co najmniej 70% sugestii bez duzego przepisywania oraz chec kontynuowania platnej obslugi po 30 dniach.

## Wiadomosc 1: problem po weekendzie

Temat: Szybki audyt opinii Google dla {nazwa restauracji}

```text
Czesc,

zauwazylem, ze restauracje czesto dostaja najtrudniejsze opinie po weekendzie, kiedy zespol i tak ma pelne rece pracy.

Buduje ReviewGuard - prosty pilotaz dla restauracji: sprawdzam opinie Google wedlug checklisty, wskazuje wpisy wymagajace reakcji i przygotowuje propozycje spokojnych odpowiedzi.

Nie obiecuje usuwania opinii ani zadnych sztuczek. Chodzi o szybka, profesjonalna reakcje i wiecej prawdziwych opinii od zadowolonych gosci.

Pilotaz kosztuje 80 zl za 30 dni, jeden profil Google i maksymalnie 20 przetworzonych opinii.

Czy chcesz, zebym przygotowal audyt opinii dla {nazwa restauracji} i odeslal 2-3 najwazniejsze ryzyka?
```

## Wiadomosc 2: konkretna obserwacja

Temat: Opinie Google - mala rzecz do poprawy?

```text
Dzien dobry,

testuje usluge dla restauracji, ktora pomaga ogarnac opinie Google bez wdrazania kolejnego systemu.

Na start robie audyt opinii wedlug checklisty: przeglad negatywnych opinii, propozycje odpowiedzi i prosty plan zbierania prawdziwych recenzji od gosci.

Koszt pilotazu: 80 zl za 30 dni, jeden profil Google i maksymalnie 20 przetworzonych opinii.

Jesli podeslecie link do profilu Google, moge sprawdzic opinie i pokazac, jak wygladalby pilotaz.
```

## Wiadomosc 3: krotka wersja przez formularz WWW

```text
Czesc, buduje ReviewGuard - audyt opinii Google dla restauracji.

Sprawdzam opinie, przygotowuje propozycje odpowiedzi i wskazuje wpisy, ktore moga wymagac ostroznosci. Pilotaz kosztuje 80 zl za 30 dni i obejmuje maksymalnie 20 przetworzonych opinii dla jednego profilu Google. Nie obiecuje usuwania opinii.

Czy moge wyslac mini-audyt opinii dla Waszego profilu Google?
```

## Follow-up po 3-5 dniach

```text
Czesc,

wracam tylko raz w sprawie audytu opinii Google dla {nazwa restauracji}.

Jesli temat nie jest teraz wazny, jasne. Jesli macie kilka opinii, na ktore trudno odpowiedziec, moge przygotowac krotki plan reakcji i pokazac, jak wygladalby pilotaz.
```

## Kryteria decyzji

Klikalna demonstracja jest narzedziem walidacji i moze powstac przed spelnieniem bramy. Produkcyjny panel, konta, baza danych, platnosci i integracja Google powstaja dopiero po spelnieniu wszystkich czterech progow.

Nie traktowac odpowiedzi grzecznych, ogolnych ani typu "fajny pomysl" jako dowodu popytu.
