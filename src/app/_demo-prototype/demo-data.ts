export type DemoLocale = "pl" | "en";
export type ReviewStatus = "new" | "context" | "ready" | "approved";
export type ReviewCategory = "quick" | "personalize" | "caution";
export type ReplyStyle = "warm" | "concise" | "casual";
export type ReplyLength = "short" | "standard";

type LocalizedText = Record<DemoLocale, string>;

export type DemoReview = {
  id: string;
  rating: number;
  age: LocalizedText;
  category: ReviewCategory;
  initialStatus: ReviewStatus;
  review: LocalizedText;
  detail: LocalizedText;
  replies: Record<ReplyStyle, LocalizedText>;
  managerContext?: LocalizedText;
};

export const demoReviews: DemoReview[] = [
  {
    id: "P1",
    rating: 5,
    age: { pl: "2 dni temu", en: "2 days ago" },
    category: "quick",
    initialStatus: "ready",
    review: {
      pl: "Pizza była bardzo smaczna, a zamówienie na wynos czekało szybciej, niż zakładałem.",
      en: "The pizza was delicious and my takeaway order was ready sooner than expected.",
    },
    detail: { pl: "Smak i szybki odbiór", en: "Taste and quick collection" },
    replies: {
      warm: {
        pl: "Bardzo dziękujemy! Cieszymy się, że pizza smakowała, a odbiór przebiegł sprawnie. Zapraszamy ponownie!",
        en: "Thank you so much! We are delighted that you enjoyed the pizza and that collection went smoothly. We hope to see you again!",
      },
      concise: {
        pl: "Dziękujemy za 5 gwiazdek! Miło nam, że pizza smakowała i była gotowa na czas.",
        en: "Thank you for the five stars. We are glad the pizza was tasty and ready on time.",
      },
      casual: {
        pl: "Super, że smakowało i wszystko czekało na czas! Do zobaczenia przy kolejnej pizzy. 🍕",
        en: "Great to hear you enjoyed it and everything was ready on time! See you for the next pizza. 🍕",
      },
    },
  },
  {
    id: "P2",
    rating: 5,
    age: { pl: "3 dni temu", en: "3 days ago" },
    category: "quick",
    initialStatus: "ready",
    review: {
      pl: "Świetne ciasto, świeże dodatki i szybka realizacja. Duży plus za miejsce do zabawy dla dzieci.",
      en: "Great dough, fresh toppings and quick service. The children’s play area is a big plus.",
    },
    detail: { pl: "Rodzinna wizyta", en: "Family visit" },
    replies: {
      warm: {
        pl: "Dziękujemy za tak miłe słowa! Ogromnie nas cieszy, że docenili Państwo zarówno pizzę, jak i kącik dla najmłodszych. Do zobaczenia przy kolejnej rodzinnej wizycie!",
        en: "Thank you for such kind words! We are delighted that you enjoyed both the pizza and the children’s corner. We hope to welcome the whole family again soon!",
      },
      concise: {
        pl: "Dziękujemy! Cieszymy się, że smakowało, a kącik dla dzieci okazał się przydatny.",
        en: "Thank you! We are glad you enjoyed the food and found the children’s corner useful.",
      },
      casual: {
        pl: "Super, że pizza smakowała, a kącik umilił dzieciom oczekiwanie. Zapraszamy całą ekipę ponownie!",
        en: "Great to hear the pizza hit the spot and the play corner kept the little ones happy. Bring the whole crew back soon!",
      },
    },
  },
  {
    id: "P3",
    rating: 5,
    age: { pl: "tydzień temu", en: "1 week ago" },
    category: "quick",
    initialStatus: "ready",
    review: {
      pl: "Wracamy tu regularnie. Pizza trzyma poziom, obsługa jest zawsze uśmiechnięta, a dzieci mają swoje miejsce.",
      en: "We come back regularly. The pizza is consistently good, the team is always cheerful and the children have their own space.",
    },
    detail: { pl: "Stały gość", en: "Returning guest" },
    replies: {
      warm: {
        pl: "Takie słowa od stałych Gości znaczą dla nas szczególnie dużo. Dziękujemy za zaufanie i docenienie naszej ekipy — koniecznie przekażemy jej pochwałę!",
        en: "Words like these mean even more when they come from returning guests. Thank you for your trust and for recognising our team — we will gladly pass on the praise!",
      },
      concise: {
        pl: "Dziękujemy za regularne wizyty i zaufanie. Pochwałę przekażemy całemu zespołowi.",
        en: "Thank you for returning and for trusting us. We will share your praise with the whole team.",
      },
      casual: {
        pl: "Regularne powroty to najlepszy komplement! Dzięki za zaufanie i do zobaczenia przy następnej pizzy. 🍕",
        en: "Coming back is the best compliment we could get! Thanks for trusting us — see you at the next pizza. 🍕",
      },
    },
  },
  {
    id: "P4",
    rating: 5,
    age: { pl: "tydzień temu", en: "1 week ago" },
    category: "quick",
    initialStatus: "ready",
    review: {
      pl: "Bardzo dobra pizza i sympatyczna obsługa. Dobre miejsce na rodzinny obiad.",
      en: "Very good pizza and friendly service. A lovely place for a family lunch.",
    },
    detail: { pl: "Rodzinny obiad", en: "Family lunch" },
    replies: {
      warm: {
        pl: "Bardzo dziękujemy! Miło nam, że pizza i obsługa umiliły Państwu rodzinny czas. Zapraszamy ponownie.",
        en: "Thank you very much! We are happy that the pizza and service made your family time enjoyable. We look forward to welcoming you again.",
      },
      concise: {
        pl: "Dziękujemy za polecenie. Zapraszamy na kolejne rodzinne spotkanie przy pizzy.",
        en: "Thank you for recommending us. We hope to see you for another family meal.",
      },
      casual: {
        pl: "Rodzinny obiad i dobra pizza — brzmi jak udany zestaw! Dzięki i do zobaczenia. 🍕",
        en: "Family lunch and good pizza — that sounds like a winning combination! Thanks and see you soon. 🍕",
      },
    },
  },
  {
    id: "M1",
    rating: 3,
    age: { pl: "4 dni temu", en: "4 days ago" },
    category: "personalize",
    initialStatus: "new",
    review: {
      pl: "Smak pizzy jak zwykle bardzo dobry, ale mimo niewielkiej odległości dotarła zimna. Zamawiamy często, dlatego tym razem mocno się zawiedliśmy.",
      en: "The pizza tasted as good as usual, but it arrived cold despite the short distance. We order often, so this was particularly disappointing.",
    },
    detail: { pl: "Zimna dostawa", en: "Cold delivery" },
    replies: {
      warm: {
        pl: "Dziękujemy za szczerą opinię i za to, że regularnie wybierają Państwo naszą pizzę. Bardzo przepraszamy — zamówienie zdecydowanie nie powinno dotrzeć zimne. Mamy nadzieję, że kolejna dostawa odzyska Państwa zaufanie.",
        en: "Thank you for your honest feedback and for ordering from us regularly. We are very sorry — your order should not have arrived cold. We hope your next delivery will restore your trust in us.",
      },
      concise: {
        pl: "Przepraszamy za zimną dostawę. Tym bardziej przykro nam, że zawiedliśmy stałych Gości. Sprawdzimy ten etap realizacji zamówień.",
        en: "We are sorry the delivery arrived cold, especially as you are returning guests. We will review this part of our delivery process.",
      },
      casual: {
        pl: "Tym razem zdecydowanie nie dowieźliśmy jakości, do której są Państwo przyzwyczajeni. Przepraszamy za zimną pizzę i liczymy, że następnym razem znów będzie tak, jak powinno.",
        en: "This time we clearly missed the standard you know us for. Sorry about the cold pizza — we hope the next order feels like us again.",
      },
    },
  },
  {
    id: "M2",
    rating: 3,
    age: { pl: "2 miesiące temu", en: "2 months ago" },
    category: "personalize",
    initialStatus: "new",
    review: {
      pl: "Składniki były świeże, a spód przyjemnie chrupiący. Sos wydał mi się jednak zbyt intensywny, a całe ciasto trochę za sztywne.",
      en: "The ingredients were fresh and the base had a nice crunch. The sauce felt too intense, though, and the dough was a little too firm.",
    },
    detail: { pl: "Uwagi do receptury", en: "Recipe feedback" },
    replies: {
      warm: {
        pl: "Dziękujemy za konkretną i wyważoną opinię. Cieszymy się, że świeżość składników została doceniona, a uwagom dotyczącym sosu i ciasta uważnie się przyjrzymy. Mamy nadzieję, że przy kolejnej wizycie zrobimy lepsze wrażenie.",
        en: "Thank you for such specific and balanced feedback. We are glad you noticed the freshness of the ingredients, and we will look carefully at your comments about the sauce and dough. We hope to make a better impression next time.",
      },
      concise: {
        pl: "Dziękujemy za szczegółowe uwagi. Przekażemy zespołowi komentarz dotyczący sosu i struktury ciasta.",
        en: "Thank you for the detailed feedback. We will pass your comments about the sauce and dough texture to the team.",
      },
      casual: {
        pl: "Dzięki za bardzo konkretne wskazówki. Świeżość zapisujemy na plus, a sos i ciasto bierzemy pod lupę przed kolejną wizytą.",
        en: "Thanks for the really useful detail. Fresh ingredients go in the win column; we will take a closer look at the sauce and dough before your next visit.",
      },
    },
  },
  {
    id: "M3",
    rating: 2,
    age: { pl: "tydzień temu", en: "1 week ago" },
    category: "personalize",
    initialStatus: "new",
    review: {
      pl: "Przy tak wysokiej ocenie lokalu spodziewałem się więcej. Pizza była przeciętna, za to sosy naprawdę bardzo dobre.",
      en: "With such a high rating I expected more. The pizza was average, although the sauces were genuinely very good.",
    },
    detail: { pl: "Rozczarowanie i pochwała", en: "Disappointment and praise" },
    replies: {
      warm: {
        pl: "Dziękujemy za szczerość. Przykro nam, że pizza nie sprostała oczekiwaniom, choć cieszymy się, że sosy zostały dobrze odebrane. Mamy nadzieję, że dostaniemy jeszcze szansę na lepsze wrażenie.",
        en: "Thank you for being candid. We are sorry the pizza did not meet your expectations, although we are pleased you enjoyed the sauces. We hope we will have another chance to make a better impression.",
      },
      concise: {
        pl: "Dziękujemy za opinię. Cieszy nas pochwała sosów, ale żałujemy, że sama pizza rozczarowała.",
        en: "Thank you for your feedback. We appreciate the praise for our sauces but regret that the pizza disappointed you.",
      },
      casual: {
        pl: "Sosy obroniły honor, ale pizza też powinna była dać radę. Dzięki za szczerość — chcemy następnym razem trafić znacznie lepiej.",
        en: "The sauces saved the day, but the pizza should have delivered too. Thanks for being honest — we want to do much better next time.",
      },
    },
  },
  {
    id: "N1",
    rating: 2,
    age: { pl: "miesiąc temu", en: "1 month ago" },
    category: "caution",
    initialStatus: "new",
    review: {
      pl: "Jedzenie było poprawne, ale po wejściu długo nikt do nas nie podszedł, chociaż w lokalu nie było tłoku. Musieliśmy sami upominać się o kartę.",
      en: "The food was fine, but nobody approached us for a long time even though the restaurant was quiet. We had to ask for a menu ourselves.",
    },
    detail: { pl: "Brak reakcji obsługi", en: "Service did not respond" },
    replies: {
      warm: {
        pl: "Dziękujemy za zwrócenie nam na to uwagi. Przepraszamy, że nie zostali Państwo odpowiednio przywitani i obsłużeni — tak nie powinien zaczynać się pobyt w naszym lokalu. Omówimy tę sytuację z zespołem.",
        en: "Thank you for bringing this to our attention. We are sorry you were not welcomed and served promptly — that is not how a visit with us should begin. We will discuss this with the team.",
      },
      concise: {
        pl: "Przepraszamy za brak szybkiej reakcji obsługi. To nie jest nasz standard i omówimy ten element z zespołem.",
        en: "We are sorry the team did not respond promptly. This is not our standard and we will address it with them.",
      },
      casual: {
        pl: "Goście nie powinni walczyć o kartę — przepraszamy za taki początek wizyty. Porozmawiamy z zespołem, żeby to się nie powtórzyło.",
        en: "Guests should never have to chase down a menu — sorry for that start to your visit. We will speak with the team so it does not happen again.",
      },
    },
  },
  {
    id: "N2",
    rating: 1,
    age: { pl: "4 miesiące temu", en: "4 months ago" },
    category: "caution",
    initialStatus: "new",
    review: {
      pl: "Zamówienie odebrałem o umówionej porze, ale pizza była już chłodna i przygotowana na innym cieście, niż wybrałem. Miła osoba przy kasie nie uratowała całego doświadczenia.",
      en: "I collected the order at the agreed time, but the pizza was already cool and made with a different dough than requested. The friendly person at the till could not rescue the experience.",
    },
    detail: { pl: "Temperatura i pomyłka", en: "Temperature and wrong item" },
    replies: {
      warm: {
        pl: "Dziękujemy za opisanie sytuacji. Bardzo przepraszamy — pizza przy odbiorze powinna być ciepła i zgodna z zamówieniem. Doceniamy miłe słowo o obsłudze przy kasie, ale rozumiemy, że przy takich pomyłkach to za mało.",
        en: "Thank you for explaining what happened. We are very sorry — a collected pizza should be hot and match the order. We appreciate your kind word about our colleague at the till, but understand that it cannot make up for these mistakes.",
      },
      concise: {
        pl: "Przepraszamy za temperaturę pizzy i pomyłkę w rodzaju ciasta. Zweryfikujemy ten przypadek z zespołem.",
        en: "We are sorry about the pizza temperature and the incorrect dough. We will review this case with the team.",
      },
      casual: {
        pl: "Tu wydarzyły się dwie rzeczy, które nie powinny: chłodna pizza i nie to ciasto. Przepraszamy i sprawdzimy z zespołem, gdzie powstał błąd.",
        en: "Two things went wrong here: a cool pizza and the wrong dough. We are sorry and will check with the team where the order went off track.",
      },
    },
  },
  {
    id: "N3",
    rating: 1,
    age: { pl: "3 miesiące temu", en: "3 months ago" },
    category: "caution",
    initialStatus: "new",
    review: {
      pl: "W zamówieniu na wynos kilka składników nie zgadzało się z ustaleniami, mimo że specjalną prośbę podałam wyraźnie. To było duże rozczarowanie.",
      en: "Several ingredients in my takeaway order did not match what we agreed, even though I stated the special request clearly. It was very disappointing.",
    },
    detail: { pl: "Pomylone składniki", en: "Incorrect ingredients" },
    replies: {
      warm: {
        pl: "Bardzo przepraszamy za niezgodności w zamówieniu. Specjalna prośba powinna zostać dokładnie przekazana i zrealizowana. Prosimy o kontakt z lokalem, abyśmy mogli ustalić szczegóły i właściwie wyjaśnić sprawę.",
        en: "We are very sorry the order did not match your request. A special instruction should be recorded and followed carefully. Please contact the restaurant so we can confirm the details and resolve this properly.",
      },
      concise: {
        pl: "Przepraszamy za pomyłki w składnikach. Taka sytuacja nie powinna mieć miejsca; chcemy sprawdzić realizację zamówienia.",
        en: "We are sorry about the incorrect ingredients. This should not happen and we want to review how the order was prepared.",
      },
      casual: {
        pl: "Specjalna prośba powinna dotrzeć na pizzę dokładnie tak, jak została podana. Przepraszamy za pomyłki — chcemy sprawdzić to zamówienie.",
        en: "A special request should make it onto the pizza exactly as given. Sorry for the mix-ups — we want to look into this order.",
      },
    },
  },
  {
    id: "C1",
    rating: 1,
    age: { pl: "tydzień temu", en: "1 week ago" },
    category: "caution",
    initialStatus: "context",
    review: {
      pl: "Sama pizza zwykle nam smakuje, ale ostatnio dostawa była zimna i spóźniona. Wcześniej mieliśmy też nieprzyjemną sytuację z obsługą, a próba wyjaśnienia sprawy nic nie dała.",
      en: "We usually enjoy the pizza, but our last delivery was cold and late. We also had an unpleasant service issue before, and trying to resolve it led nowhere.",
    },
    detail: { pl: "Kilka połączonych zdarzeń", en: "Several linked incidents" },
    managerContext: {
      pl: "Potwierdzono opóźnienie dostawy. Wcześniejsza wiadomość nie trafiła do osoby prowadzącej zmianę. Manager zaproponuje ponowne przygotowanie zamówienia.",
      en: "The delivery delay was confirmed. The earlier message did not reach the shift manager. The manager will offer to remake the order.",
    },
    replies: {
      warm: {
        pl: "Dziękujemy za ponowny sygnał i przepraszamy za opóźnioną, zimną dostawę oraz brak skutecznego wyjaśnienia. Chcemy najpierw sprawdzić historię kontaktu, aby rzetelnie odnieść się do całej sprawy.",
        en: "Thank you for raising this again. We are sorry about the late, cold delivery and the lack of a proper resolution. We first want to check the contact history so we can address the whole situation fairly.",
      },
      concise: {
        pl: "Przepraszamy za dostawę i brak skutecznego wyjaśnienia. Potrzebujemy sprawdzić wcześniejszy kontakt, zanim odniesiemy się do szczegółów.",
        en: "We are sorry about the delivery and the lack of resolution. We need to review the earlier contact before responding to the details.",
      },
      casual: {
        pl: "To nie wygląda na pojedynczą wpadkę, dlatego nie chcemy odpowiadać ogólnikiem. Przepraszamy i najpierw sprawdzimy całą historię kontaktu.",
        en: "This does not sound like a single slip-up, so we do not want to reply with a stock phrase. We are sorry and will review the full contact history first.",
      },
    },
  },
];
