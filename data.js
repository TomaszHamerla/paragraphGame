export const gameScenario = {
  name: "Przejdz przez portal",
  description: "Przejdz przez portal",
  history: {
    title: "Przekroczenie Portalu",
    description:
      "Gracz i bohater przechodzą przez zaklęty portal, wyczulając na skórze energię nieznanego wymiaru. Kiedy przejście zostaje zakończone, znajdują się w miejscu o zupełnie odmiennym krajobrazie. Wokół nich unoszą się dziwne światła, a w powietrzu czuć zapach magii. W oddali widzą długi korytarz, prowadzący do kolejnych komnat i tajemniczych pomieszczeń kompleksu. Księgowy Cienia pojawia się jako duch w świetlistym płaszczu",
  },
  additionalCharacters: {
    name: "Księgowy Cienia",
    img: "/img/ksiegowyCienia1.jpeg",
    introduction:
      "Witajcie w nowym wymiarze, podróżnicy. Wasza odwaga otworzyła przed wami drzwi do miejsc, gdzie rzeczywistość splata się z magią. Teraz, waszym celem jest odkrycie tajemnic, które skrywają się za każdym zakrętem tego magicznego kompleksu.",
  },
  left: {
    history: {
      title: "Zbadaj korytarz",
      description:
        "Gracz i bohater postanawiają zbadać długi korytarz, który rozciąga się przed nimi. Podążają ścieżką, a światło ich latarni miga w miarę, jak odkrywają kolejne zakamarki. Nagle, napotykają na skrzyżowanie, gdzie korytarze rozchodzą się w trzy różne strony. Postanawiają skierować się w lewo, kierując się w stronę delikatnego świetlistego blasku dochodzącego z oddali. Po kilku krokach docierają do magicznej fontanny emanującej energią. ",
    },
    additionalCharacters: {
      name: "Księgowy Cienia",
      img: "/img/Księgowy Cienia.jpeg",
      introduction:
        "To miejsce kipi od magii. Fontanna ta jest źródłem tajemnych mocy. Może dostarczyć wam nowych umiejętności lub wskazań na dalszą drogę. Co zdecydujecie?",
    },

    name: "Zbadaj korytarz",
    description:
      "Skierujcie się wzdłuż korytarza, aby odkryć, co kryje się dalej. To może prowadzić do kolejnych wyzwań i zagadek",
    left: {
      history: {
        title: "Dotknij fontanny",
        description:
          "Gracz i bohater decydują się dotknąć fontanny, zanurzając ręce w magicznym źródle. Nagle, fontanna reaguje na ich obecność, wydzielając błyszczące iskry i niebieskie płomienie.",
      },
      additionalCharacters: {
        name: "Księgowy Cienia",
        img: "/img/Księgowy Cienia.jpeg",
        introduction:
          "Wasza odwaga jest nagrodą. Teraz otrzymacie dar, który wzmocni waszą moc. Wybierzcie, co chcecie otrzymać.",
      },
      name: "Dotknij fontanny",
      description:
        "Postanawiają zanurzyć ręce w fontannie, otwierając się na nowe możliwości.",
      left: {
        history: {
          title: "Moc Ochrony",
          description:
            "Gracz i bohater, wzmocnieni nową mocą, kontynuują swoją podróż przez magiczny kompleks. Korytarz prowadzi ich do coraz bardziej mistycznych i skomplikowanych miejsc, gdzie spotykają na swojej drodze potężne istoty i rozwiązują skomplikowane łamigłówki. W końcu, po wielu trudach, dochodzą do centralnej komnaty, gdzie znajduje się magiczny artefakt, o którym wspominał Księgowy Cienia. Ten artefakt posiada potężne moce, zdolne wpłynąć na losy całego świata.",
        },
        additionalCharacters: {
          name: "Księgowy Cienia",
          img: "/img/Księgowy Cienia.jpeg",
          introduction:
            "Wasza odwaga i mądrość doprowadziły was tutaj. Teraz, przed wami stoi wybór, jak wykorzystacie moc tego artefaktu. Pamiętajcie, wasze decyzje kształtują nie tylko waszą historię, lecz i losy świata.",
        },
        name: "Moc Ochrony",
        description:
          "Fontanna oferuje ochronę, zwiększając zdolność bohatera do unikania pułapek i ataków wroga",
        left: {
          name: "Użyj mocy dla dobra",
          description:
            "Postanów użyć zdobytego artefaktu, aby pomóc ludziom i ochronić świat przed zagrożeniem.",
        },
        right: {
          name: "Użyj mocy dla siebie",
          description:
            "Zdecyduj się wykorzystać moce artefaktu w celach osobistych, zyskując potężne umiejętności dla siebie.",
        },
      },
      right: {
        history: {
          title: "Moc Mądrości",
          description:
            "Gracz i bohater, wzbogacony mocą mądrości, kontynuują swoją podróż przez zaklęty kompleks. Znajdują się przed wielkimi drzwiami, ozdobionymi starożytnymi znakami i zaklęciami. Dzięki nowej zdolności do rozszyfrowywania tajemniczych znaków, bohater odczytuje starożytne inskrypcje na drzwiach.Drzwi otwierają się, ukazując tajemniczy pokój, w którym skoncentrowane są wszystkie moce magicznego kompleksu. Światło magicznych źródeł oświetla pomieszczenie, a na środku stoi magiczny artefakt – Kula Przeznaczenia.",
        },
        additionalCharacters: {
          name: "Księgowy Cienia",
          img: "/img/Księgowy Cienia.jpeg",
          introduction:
            "Osiągnęliście koniec waszej niezwykłej podróży. Kula Przeznaczenia posiada moc kształtowania losów, zarówno waszych, jak i całego świata. Teraz macie ostatnią decyzję do podjęcia.",
        },
        name: "Moc Mądrości",
        description:
          "Fontanna obdarowuje bohatera wiedzą magiczną, umożliwiającą rozszyfrowanie tajemnych znaków i zagadek na ich drodze.",
        left: {
          name: "Użyj mocy dla dobra",
          description:
            "Zdecydujcie się użyć mocy Kuli Przeznaczenia, aby wprowadzić pozytywne zmiany i ochronić świat przed złem.",
        },
        right: {
          name: "Zachowaj moc dla pokoju",
          description:
            "Postanówcie zatrzymać moc Kuli Przeznaczenia, aby uniknąć jej potencjalnego nadużycia i pozwolić światu rozwijać się zgodnie z naturalnym rytmem.",
        },
      },
    },
    right: {
      history: {
        title: "Kontynuuj ścieżką",
        description:
          "Gracz i bohater decydują się opuścić fontannę, kontynuując ścieżkę przez magiczny kompleks. Korytarz prowadzi ich do kolejnej komnaty, gdzie znajdują się starożytne malowidła opowiadające historię zaklętego miejsca.W oddali słyszą tajemnicze szmery, sugerujące, że coś się dzieje. ",
      },
      additionalCharacters: {
        name: "Księgowy Cienia",
        img: "/img/Księgowy Cienia.jpeg",
        introduction:
          "Wasza decyzja o pominięciu fontanny oznacza, że musicie polegać na swoich podstawowych umiejętnościach. Musicie jednak pamiętać, że każda droga w tym miejscu skrywa zarówno niebezpieczeństwo, jak i nagrodę. Kontynuujcie uważnie.",
      },
      name: "Kontynuuj ścieżką",
      description:
        "Decydują się opuścić fontannę i kontynuować ścieżkę, nie zamierzając zatrzymywać się na dłużej.",
      left: {
        history: {
          title: "Badaj malowidła",
          description:
            "Gracz i bohater decydują się zatrzymać i skupić na starożytnych malowidłach, które zdobią ściany kolejnej komnaty. Starają się odczytać przesłanie ukryte w barwnych scenach, które opowiadają historię tego zaklętego miejsca.Podczas badania malowideł, bohater dostrzega szczegóły dotyczące starożytnych rytuałów i magicznych praktyk. Księgowy Cienia, obserwując ich starania, podchodzi bliżej i komentuje",
        },
        additionalCharacters: {
          name: "Księgowy Cienia",
          img: "/img/Księgowy Cienia.jpeg",
          introduction:
            "To malowidło opowiada o potędze magii, jaką to miejsce kiedyś posiadało. Odkrywając te tajemnice, może to dostarczyć wam wskazówek dotyczących waszej misji.",
        },
        name: "Badaj malowidła",
        description:
          "Postanawiają przyjrzeć się starożytnym malowidłom, aby dowiedzieć się więcej o historii tego magicznego kompleksu.",
        left: {
          name: "Odkryj tajemnice",
          description:
            "Decydują się skupić na odkrywaniu tajemnic, starając się odczytać ukryte przesłanie.",
        },
        right: {
          name: "Zbadaj rytuały",
          description:
            "Postanawiają skupić się na badaniu starożytnych rytuałów, aby odkryć ich znaczenie.",
        },
      },
      right: {
        history: {
          title: "Zwiększ tempo",
          description:
            "Gracz i bohater, zdecydowani na przyspieszenie tempa, ignorują malowidła i kierują się głębiej do wnętrza kompleksu. Szmery w oddali stają się coraz bardziej donośne, sugerując, że coś niezwykłego może ich tam czekać.Nagle, przed nimi otwiera się magiczny portal, prowadzący do przestworów innej rzeczywistości. Księgowy Cienia, pojawiając się przy portalu, mówi:",
        },
        additionalCharacters: {
          name: "Księgowy Cienia",
          img: "/img/Księgowy Cienia.jpeg",
          introduction:
            "Wasza zdecydowana postawa przyniosła was do miejsca, gdzie magia splata się z rzeczywistością. Musicie jednak być gotowi na to, co was tam czeka.",
        },
        name: "Zwiększ tempo",
        description:
          "Decydują się przyspieszyć kroki, ignorując malowidła i posuwając się naprzód, aby szybko dotrzeć do kolejnych tajemniczych miejsc.",
        left: {
          name: "Przejdź przez portal",
          description:
            "Postanawiają przejść przez portal, aby odkryć, co skrywa ten magiczny kompleks.",
        },
        right: {
          name: "Zbadaj malowidła",
          description:
            "Decydują się zatrzymać i skupić na starożytnych malowidłach, które zdobią ściany kolejnej komnaty. Starają się odczytać przesłanie ukryte w barwnych scenach, które opowiadają historię tego zaklętego miejsca.Podczas badania malowideł, bohater dostrzega szczegóły dotyczące starożytnych rytuałów i magicznych praktyk. Księgowy Cienia, obserwując ich starania, podchodzi bliżej i komentuje",
        },
      },
    },
  },

  right: {
    history: {
      title: "Rozglądaj się wokół",
      description:
        "Gracz i bohater postanawiają rozejrzeć się po otaczającym ich miejscu, starając się zebrać jak najwięcej informacji. Zauważają starożytne symbole na ścianach i mistyczne malowidła, które zdają się opowiadać historię tego miejsca.Nagle, ich uwagę przykuwa niewielka drzwi zabezpieczone magicznym symbolem.",
    },
    additionalCharacters: {
      name: "Księgowy Cienia",
      img: "/img/Księgowy Cienia.jpeg",
      introduction:
        "To drzwi do sekretnego pomieszczenia, gdzie skrywają się tajemnice starożytnych wiedz. Możecie spróbować otworzyć je, ale bądźcie gotowi na to, co tam znajdziecie.",
    },
    name: "Rozglądaj się wokół",
    description:
      "Spróbujcie zebrać informacje o otaczającej was przestrzeni. Może to dostarczyć wam istotnych wskazówek na temat tego, co was czeka.",
    left: {
      history: {
        title: "Otwórz drzwi",
        description:
          "Gracz i bohater, pełni ciekawości, postanawiają otworzyć tajemnicze drzwi. Gdy przekraczają próg, znajdują się w małym pomieszczeniu wypełnionym starożytnymi zwojami, księgami i magicznymi artefaktami. Księgowy Cienia pojawia się, wskazując na jedną z tajemniczych ksiąg.",
      },
      additionalCharacters: {
        name: "Księgowy Cienia",
        img: "/img/Księgowy Cienia.jpeg",
        introduction:
          "To miejsce jest skarbnicą wiedzy, która może wam pomóc w dalszych wyzwaniach. Badajcie zwoje, uczcie się tajemnic magii, może nawet odkryjecie jakieś potężne zaklęcie.",
      },
      name: "Otwórz drzwi",
      description:
        " Decydują się otworzyć tajemnicze drzwi, aby odkryć, co skrywa to ukryte pomieszczenie.",
      left: {
        history: {
          title: "Studiuj zwoje",
          description:
            "Gracz i bohater postanawiają skupić się na badaniu starożytnych zwojów, które wypełniają małe pomieszczenie. Zwoje zawierają zaklęcia, pradawne mapy oraz tajemnicze rytuały. Bohater zanurza się w lekturze, próbując zrozumieć głęboką wiedzę ukrytą w tych starożytnych tekstach.Księgowy Cienia uśmiecha się, zadowolony z ich decyzji, i mówii",
        },
        additionalCharacters: {
          name: "Księgowy Cienia",
          img: "/img/Księgowy Cienia.jpeg",
          introduction:
            "Wiedza zawarta w tych zwojach jest jak klucz do magicznych sekretów tego miejsca. Im więcej zrozumiecie, tym większa będzie wasza siła w obliczu nadchodzących wyzwań.",
        },
        name: "Studiuj zwoje",
        description:
          "Skupiają się na badaniu zwojów, wchłaniając starożytną wiedzę, która może okazać się kluczowa w dalszej podróży.",
        left: {
          name: "Odkryj zaklęcia",
          description:
            "Postanawiają skupić się na odkrywaniu zaklęć, które mogą pomóc im w dalszej podróży.",
        },
        right: {
          name: "Zbadaj rytuały",
          description:
            "Decydują się skupić na badaniu starożytnych rytuałów, aby odkryć ich znaczenie.",
        },
      },
      right: {
        history: {
          title: "Szukaj artefaktów",
          description:
            "Gracz i bohater skierowują swoją uwagę na poszukiwanie magicznych artefaktów w pomieszczeniu. Starają się znaleźć przedmioty o potężnych właściwościach, które mogą zwiększyć ich siłę i zdolności.Księgowy Cienia przygląda się ich poszukiwaniom i wskazuje na jeden z magicznych artefaktów. Mówi:",
        },
        additionalCharacters: {
          name: "Księgowy Cienia",
          img: "/img/Księgowy Cienia.jpeg",
          introduction:
            "Te artefakty są źródłem niezwykłej mocy. Wybierając je, zwiększycie swoje umiejętności i przygotujecie się lepiej na przyszłość.",
        },
        name: "Szukaj artefaktów",
        description:
          "Skierowują swoją uwagę na poszukiwanie magicznych artefaktów, które mogą zwiększyć ich umiejętności.",
        left: {
          name: "Znajdź artefakt",
          description:
            "Postanawiają skupić się na poszukiwaniu magicznego artefaktu, który może zwiększyć ich siłę.",
        },
        right: {
          name: "Zbadaj rytuały",
          description:
            "Decydują się skupić na badaniu starożytnych rytuałów, aby odkryć ich znaczenie.",
        },
      },
    },
    right: {
      history: {
        title: "Kontynuuj ścieżką",
        description:
          "Gracz i bohater decydują się pozostawić drzwi nietknięte i kontynuować eksplorację kompleksu. Korytarz prowadzi ich do kolejnych zagadek, gdzie natrafiają na magiczne iluzje i ukryte przeszkody. Księgowy Cienia pojawia się i mówi:",
      },
      additionalCharacters: {
        name: "Księgowy Cienia",
        img: "/img/Księgowy Cienia.jpeg",
        introduction:
          "Kontynuacja ścieżki oznacza unikanie pewnych tajemnic, ale musicie być gotowi na inne niebezpieczeństwa. Każda decyzja wpływa na waszą historię.",
      },
      name: "Kontynuuj ścieżką",
      description:
        "Postanawiają pozostawić drzwi nietknięte i kontynuować eksplorację, unikając potencjalnych niebezpieczeństw ukrytych za nimi.",
      left: {
        history: {
          title: "Przezwycięż iluzje",
          description:
            "Gracz i bohater postanawiają zmierzyć się z magicznymi iluzjami, które zaczynają otaczać ich na ścieżce. Korytarz staje się pełen złudzeń optycznych, zakłóceń percepcji i zmyłek. Bohater, z determinacją, stara się odczytać prawdziwe obrazy i odkryć, co naprawdę kryje się za iluzją.Księgowy Cienia, obserwując ich wysiłki, uśmiecha się i mówi",
        },
        additionalCharacters: {
          name: "Księgowy Cienia",
          img: "/img/Księgowy Cienia.jpeg",
          introduction:
            "Rozszyfrowanie iluzji to sztuka, która może was przydać w wielu sytuacjach. Tym razem wasza spostrzegawczość będzie kluczowa.",
        },
        name: "Przezwycięż iluzje",
        description:
          " Postanawiają zmierzyć się z magicznymi iluzjami, próbując odkryć prawdziwą drogę.",
        left: {
          name: "Odkryj prawdę",
          description:
            "Decydują się skupić na odkrywaniu prawdziwych obrazów, aby przezwyciężyć iluzje.",
        },
        right: {
          name: "Użyj intuicji",
          description:
            "Postanawiają skupić się na swojej intuicji, aby przezwyciężyć iluzje.",
        },
      },
      right: {
        history: {
          title: "Unikaj przeszkód",
          description:
            "Gracz i bohater postanawiają skoncentrować się na omijaniu trudności, starając się bezpiecznie pokonać kolejne przeszkody. Korytarz, choć pozornie prosty, staje się pełen ukrytych pułapek i zaskakujących przeciwności. Bohater, posługując się swoją zwinnością, udaje się uniknąć większości zagrożeń.Księgowy Cienia, obserwując ich umiejętności unikania przeszkód, komentuje",
        },
        additionalCharacters: {
          name: "Księgowy Cienia",
          img: "/img/Księgowy Cienia.jpeg",
          introduction:
            "Unikanie trudności to też sztuka. Wasza zręczność może okazać się równie ważna, co zdolność rozszyfrowywania tajemnic.",
        },
        name: "Unikaj przeszkód",
        description:
          "Decydują się skoncentrować na omijaniu trudności, starając się bezpiecznie dotrzeć do kolejnego obszaru kompleksu.",
        left: {
          name: "Użyj zwinności",
          description:
            "Postanawiają skupić się na swojej zwinności, aby unikać przeszkód.",
        },
        right: {
          name: "Użyj intuicji",
          description:
            "Decydują się skupić na swojej intuicji, aby unikać przeszkód.",
        },
      },
    },
  },
};
export const characters = [
  {
    name: "Aria Nightrunner",
    img: "/img/aria.jpeg",
    description: "Tajemnicza łowczyni ze złotymi włosami i niebieskimi oczami.",
    introduction:
      "Cześć, jestem Aria Nightrunner. Tajemnicza łowczyni ze złotymi włosami i niebieskimi oczami. Moje strzały są pewne, a zwinność pozwala mi działać niezauważenie.",
    closingWords:
      "Dziękuję za wspólną przygodę! Moje strzały zawsze znajdują swój cel, a twoja obecność sprawiła, że każda walka była jeszcze bardziej ekscytująca. Do zobaczenia!",
  },
  {
    name: "Gideon Ironheart",
    img: "/img/gideon.jpeg",
    description:
      "Weteran wojenny o tajemniczym pochodzeniu. Jego prawa ręka zastąpiona jest mechanicznym ulepszeniem.",
    introduction:
      "Witaj, nazywam się Gideon Ironheart. Weteran wojenny z tajemniczym pochodzeniem. Moja prawa ręka została zastąpiona mechanicznym ulepszeniem, co sprawia, że jestem gotów na każdą walkę.",
    closingWords:
      "Dzięki za towarzystwo podczas walki! Moje mechaniczne wzmocnienie zawsze było gotowe do akcji, a twoja odwaga sprawiła, że wspólne starcia były niezapomniane. Do zobaczenia na polu bitwy!",
  },
  {
    name: "Lyra Shadowdancer",
    img: "/img/lyra.jpeg",
    description:
      "Czarodziejka posługująca się magią cienia. Jej niebieskie tatuaże świecą, gdy używa potężnych zaklęć.",
    introduction:
      "Hej, jestem Lyra Shadowdancer. Czarodziejka posługująca się magią cienia. Moje niebieskie tatuaże świecą, gdy wypowiadam potężne zaklęcia, a moje umiejętności magiczne są niezrównane.",
    closingWords:
      "Dzięki za podróż przez świat magii! Moje zaklęcia zawsze były potężne, a twój spryt sprawił, że każda przygoda była pełna niespodzianek. Do zobaczenia w innym wymiarze!",
  },
];
export const before3OptionsA = [
  {
    name: "Księgowy Cienia",
    img: "/img/Księgowy Cienia.jpeg",
    introduction:
      "Witaj, zmęczony wędrowcze. Jestem Księgowym Cienia. W moich księgach zapisane są losy każdego istnienia w tym świecie. Wiedz, że losy twoje i wybranego bohatera są splecione ze sobą jak nitki na wielkim płótnie. Czy masz odwagę i mądrość, by pokierować wybranym bohaterem przez zawiłości przygody?",
    closingWords:
      "Dziękuję, odważny podrożniku, za śmiałość, jaką wykazałeś się podczas tej niezwykłej podróży. Wasze losy były jak otwarta księga, a wasza odwaga jak jasne światło w mroku. Niech teraz wasza droga prowadzi do nowych przygód i niezapomnianych chwil. Pamiętajcie, że losy wasze pozostaną zapisane na kartach moich ksiąg. Do zobaczenia w kolejnej opowieści!",
  },
  {
    name: "Księgowy Cienia",
    img: "/img/Księgowy Cienia.jpeg",
    introduction:
      "Przekroczenie tego portalu otworzy przed wami nowe wyzwania i możliwości. Ale pamiętajcie, losy wasze są nadal splecione. Wybory, które podejmiecie, wpłyną na przyszłość nie tylko waszą, lecz i całego świata.",
  },
];
export const before3OptionsH = {
  title: "Przejście przez portal",
  description:
    "Gracz i wybrany bohater wyruszają w pełną niebezpieczeństw podróż, śladem wskazówek i wskazań Księgowego Cienia. Pierwsze wyzwanie to dotarcie do groźnego lasu, gdzie czekają na nich ukryte pułapki i niebezpieczni przeciwnicy. Po wielu trudach i bojach, bohater i gracz docierają do tajemniczego kompleksu świątynnego. Tam odkrywają zaklęty portal, który prowadzi do innych wymiarów. ",
};
