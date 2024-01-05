const characters = [
  {
    name: "Aria Nightrunner",
    img: "/img/aria.jpeg",
    description: "Tajemnicza łowczyni ze złotymi włosami i niebieskimi oczami.",
    introduction:
      "Cześć, jestem Aria Nightrunner. Tajemnicza łowczyni ze złotymi włosami i niebieskimi oczami. Moje strzały są pewne, a zwinność pozwala mi działać niezauważenie.",
  },
  {
    name: "Gideon Ironheart",
    img: "/img/gideon.jpeg",
    description:
      "Weteran wojenny o tajemniczym pochodzeniu. Jego prawa ręka zastąpiona jest mechanicznym ulepszeniem.",
    introduction:
      "Witaj, nazywam się Gideon Ironheart. Weteran wojenny z tajemniczym pochodzeniem. Moja prawa ręka została zastąpiona mechanicznym ulepszeniem, co sprawia, że jestem gotów na każdą walkę.",
  },
  {
    name: "Lyra Shadowdancer",
    img: "/img/lyra.jpeg",
    description:
      "Czarodziejka posługująca się magią cienia. Jej niebieskie tatuaże świecą, gdy używa potężnych zaklęć.",
    introduction:
      "Hej, jestem Lyra Shadowdancer. Czarodziejka posługująca się magią cienia. Moje niebieskie tatuaże świecą, gdy wypowiadam potężne zaklęcia, a moje umiejętności magiczne są niezrównane.",
  },
];

const additionalCharacters = [
  {
    name: "Księgowy Cienia",
    img: "/img/Księgowy Cienia.jpeg",
    introduction:
      "Witaj, podróżniku. Jestem Ksiegowy Cienia. W moich księgach zapisane są losy każdego istnienia w tym świecie. Wiedz, że losy twoje i wybranego bohatera są splecione ze sobą jak nitki na wielkim płótnie.\n\n Czy masz odwagę i mądrość, by pokierować wybranym bohaterem przez zawiłości przygody?",
  },
  {
    name: "Księgowy Cienia",
    img: "/img/Księgowy Cienia.jpeg",
    introduction:
      "Przekroczenie tego portalu otworzy przed wami nowe wyzwania i możliwości. Ale pamiętajcie, losy wasze są nadal splecione. Wybory, które podejmiecie, wpłyną na przyszłość nie tylko waszą, lecz i całego świata.",
  },
  {
    name: "Księgowy Cienia",
    img: "/img/ksiegowyCienia1.jpeg",
    introduction:
      "Witajcie w nowym wymiarze, podróżnicy. Wasza odwaga otworzyła przed wami drzwi do miejsc, gdzie rzeczywistość splata się z magią. Teraz, waszym celem jest odkrycie tajemnic, które skrywają się za każdym zakrętem tego magicznego kompleksu.",
  },
  {
    name: "Księgowy Cienia",
    img: "/img/Księgowy Cienia.jpeg",
    introduction:
      "To miejsce kipi od magii. Fontanna ta jest źródłem tajemnych mocy. Może dostarczyć wam nowych umiejętności lub wskazań na dalszą drogę. Co zdecydujecie?",
  },
  {
    name: "Księgowy Cienia",
    img: "/img/Księgowy Cienia.jpeg",
    introduction:
      "To drzwi do sekretnego pomieszczenia, gdzie skrywają się tajemnice starożytnych wiedz. Możecie spróbować otworzyć je, ale bądźcie gotowi na to, co tam znajdziecie.",
  },
];

const history = [
  {
    title: "Przejście przez portal",
    description:
      "Gracz i wybrany bohater wyruszają w pełną niebezpieczeństw podróż, śladem wskazówek i wskazań Księgowego Cienia. Pierwsze wyzwanie to dotarcie do groźnego lasu, gdzie czekają na nich ukryte pułapki i niebezpieczni przeciwnicy.Po wielu trudach i bojach, bohater i gracz docierają do tajemniczego kompleksu świątynnego. Tam odkrywają zaklęty portal, który prowadzi do innych wymiarów. ",
  },
  {
    title: "Przekroczenie Portalu",
    description:
      "Gracz i bohater przechodzą przez zaklęty portal, wyczulając na skórze energię nieznanego wymiaru. Kiedy przejście zostaje zakończone, znajdują się w miejscu o zupełnie odmiennym krajobrazie. Wokół nich unoszą się dziwne światła, a w powietrzu czuć zapach magii. W oddali widzą długi korytarz, prowadzący do kolejnych komnat i tajemniczych pomieszczeń kompleksu. Księgowy Cienia pojawia się jako duch w świetlistym płaszczu",
  },
  {
    title: "Zbadaj korytarz",
    description:
      "Gracz i bohater postanawiają zbadać długi korytarz, który rozciąga się przed nimi. Podążają ścieżką, a światło ich latarni miga w miarę, jak odkrywają kolejne zakamarki. Nagle, napotykają na skrzyżowanie, gdzie korytarze rozchodzą się w trzy różne strony. Postanawiają skierować się w lewo, kierując się w stronę delikatnego świetlistego blasku dochodzącego z oddali. Po kilku krokach docierają do magicznej fontanny emanującej energią. ",
  },
  {
    title: "Rozglądaj się wokół",
    description:
      "Gracz i bohater postanawiają rozejrzeć się po otaczającym ich miejscu, starając się zebrać jak najwięcej informacji. Zauważają starożytne symbole na ścianach i mistyczne malowidła, które zdają się opowiadać historię tego miejsca.Nagle, ich uwagę przykuwa niewielka drzwi zabezpieczone magicznym symbolem.",
  },
];

const buttons = [
  {
    name: "Zbadaj korytarz",
    description:
      "Skierujcie się wzdłuż korytarza, aby odkryć, co kryje się dalej. To może prowadzić do kolejnych wyzwań i zagadek",
  },
  {
    name: "Rozglądaj się wokół",
    description:
      "Spróbujcie zebrać informacje o otaczającej was przestrzeni. Może to dostarczyć wam istotnych wskazówek na temat tego, co was czeka.",
  },
  {
    name: "Dotknij fontanny",
    description:
      "Postanawiają zanurzyć ręce w fontannie, otwierając się na nowe możliwości.",
  },
  {
    name: "Kontynuuj ścieżką",
    description:
      "Decydują się opuścić fontannę i kontynuować ścieżkę, nie zamierzając zatrzymywać się na dłużej.",
  },
  {
    name: "Otwórz drzwi",
    description:
      " Decydują się otworzyć tajemnicze drzwi, aby odkryć, co skrywa to ukryte pomieszczenie.",
  },
  {
    name: "Kontynuuj ścieżką",
    description:
      "Postanawiają pozostawić drzwi nietknięte i kontynuować eksplorację, unikając potencjalnych niebezpieczeństw ukrytych za nimi.",
  },
];

let statGameFlag = false;

const mainContainer = document.querySelector("main");

const start = document.createElement("button");
start.innerText = "Rozpocznij grę";
start.classList.add("button");
start.addEventListener("click", startGame);
mainContainer.appendChild(start);

function startGame() {
  let main;
  const h1 = document.querySelector("h1");
  h1.innerText = "Wybierz jedna z 3 postaci";
  if (!statGameFlag) {
    main = document.getElementById("start-container");
    main.innerHTML = "";
    mainContainer.removeChild(start);
    statGameFlag = true;
  } else {
    mainContainer.innerHTML = "";
    main = document.createElement("main");
    main.id = "start-container";
    mainContainer.appendChild(main);
  }

  characters.forEach((character) => {
    const div = document.createElement("div");
    div.classList.add("character-container");

    const img = document.createElement("img");
    img.src = character.img;
    img.alt = character.name;

    img.addEventListener("click", pickCharacter);

    const h2 = document.createElement("h2");
    h2.innerText = character.name;

    const p = document.createElement("p");
    p.innerText = character.description;

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);

    main.appendChild(div);
  });
}

function pickCharacter(event) {
  mainContainer.innerHTML = "";
  mainContainer.style.margin = "50px";
  mainContainer.style.display = "flex";
  mainContainer.style.flexDirection = "column";
  mainContainer.style.justifyContent = "center";
  mainContainer.style.alignItems = "center";
  const h1 = document.querySelector("h1");
  h1.innerText = "Spotkanie losów: Bohater i Podróżnik w Świecie Tajemnic";

  const div = document.createElement("div");
  div.classList.add("sleceted-container");
  const img = document.createElement("img");
  img.src = event.target.src;
  img.alt = event.target.alt;
  const h2 = document.createElement("h2");
  h2.classList.add("introduction");

  const div2 = document.createElement("div");
  div2.classList.add("sleceted-container");
  const img2 = document.createElement("img");
  img2.src = additionalCharacters[0].img;
  const h22 = document.createElement("h2");
  h22.classList.add("introduction");

  div.appendChild(img);
  div.appendChild(h2);
  mainContainer.appendChild(div);

  let text = characters.find(
    (character) => character.name === event.target.alt
  ).introduction;

  typeWriter(h2, text)
    .then(() => {
      let text2 = additionalCharacters[0].introduction;
      div2.appendChild(h22);
      div2.appendChild(img2);
      mainContainer.appendChild(div2);
      return typeWriter(h22, text2);
    })
    .then(() => {
      const btnContainer = document.createElement("div");
      btnContainer.classList.add("button-container");

      const acceptBtn = document.createElement("button");
      acceptBtn.innerText = "Zaakceptuj wyzwanie";
      acceptBtn.classList.add("button");
      acceptBtn.addEventListener("click", function () {
        updateStory(history, additionalCharacters);
      });
      btnContainer.appendChild(acceptBtn);

      const rejectBtn = document.createElement("button");
      rejectBtn.innerText = "Odrzuć wyzwanie";
      rejectBtn.classList.add("button-reject");

      rejectBtn.addEventListener("click", startGame);
      btnContainer.appendChild(rejectBtn);

      mainContainer.appendChild(btnContainer);
    });
}

function typeWriter(element, text, delay = 1) {
  return new Promise((resolve) => {
    let i = 0;
    function helper() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(helper, delay);
      } else {
        resolve();
      }
    }
    helper();
  });
}

function updateStory(history, additionalCharacters) {
  const h1 = document.querySelector("h1");
  h1.innerText = history[0].title;
  mainContainer.innerHTML = "";
  mainContainer.classList.add("main-container");

  const divStory = document.createElement("div");
  divStory.classList.add("sleceted-container");
  const h2 = document.createElement("h2");
  h2.classList.add("introduction");
  divStory.appendChild(h2);
  mainContainer.appendChild(divStory);

  const div2 = document.createElement("div");
  div2.classList.add("sleceted-container");
  const divImg2 = document.createElement("img");
  divImg2.src = additionalCharacters[1].img;
  const h22 = document.createElement("h2");
  h22.classList.add("introduction");

  typeWriter(h2, history[0].description)
    .then(() => {
      div2.appendChild(h22);
      div2.appendChild(divImg2);
      mainContainer.appendChild(div2);
      return typeWriter(h22, additionalCharacters[1].introduction);
    })
    .then(() => {
      const btnContainer = document.createElement("div");
      btnContainer.classList.add("button-container");

      const acceptBtn = document.createElement("button");
      acceptBtn.innerText = "Przejdz przez portal";
      acceptBtn.classList.add("button");
      acceptBtn.addEventListener("click", function () {
        updateStory3Options(history, additionalCharacters);
      });
      btnContainer.appendChild(acceptBtn);

      const rejectBtn = document.createElement("button");
      rejectBtn.innerText = "Odrzuć wyzwanie";
      rejectBtn.classList.add("button-reject");

      rejectBtn.addEventListener("click", gameOver);
      btnContainer.appendChild(rejectBtn);

      mainContainer.appendChild(btnContainer);
    });
}

let iStory = 1;
let iAdditional = 2;
let iButton = 0;

function updateStory3Options(history, additionalCharacters) {
  const h1 = document.querySelector("h1");
  h1.innerText = history[iStory].title;
  mainContainer.innerHTML = "";
  mainContainer.classList.add("main-container");

  const div = document.createElement("div");
  div.classList.add("sleceted-container");
  const h2 = document.createElement("h2");
  h2.classList.add("introduction");
  div.appendChild(h2);
  mainContainer.appendChild(div);

  const div2 = document.createElement("div");
  div2.classList.add("sleceted-container");
  const h22 = document.createElement("h2");
  h22.classList.add("introduction");
  const img = document.createElement("img");
  img.src = additionalCharacters[iAdditional].img;

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("button-container");

  const rejectBtn = document.createElement("button");
  rejectBtn.innerText = "Odrzuć wyzwanie";
  rejectBtn.classList.add("button-reject");
  rejectBtn.addEventListener("click", gameOver);

  const sotry1Btn = document.createElement("button");
  sotry1Btn.innerText = buttons[iButton].name;
  sotry1Btn.classList.add("button");
  addHoverEffect(sotry1Btn, iButton);
  sotry1Btn.addEventListener("click", () => {
    iButton += 2;
    iAdditional++;
    iStory++;
    updateStory3Options(history, additionalCharacters);
  });

  const sotry2Btn = document.createElement("button");
  sotry2Btn.innerText = buttons[iButton + 1].name;
  sotry2Btn.classList.add("button");
  addHoverEffect(sotry2Btn, iButton + 1);
  sotry2Btn.addEventListener("click", () => {
    iButton += 4;
    iAdditional++;
    iStory++;
    updateStory3Options(history, additionalCharacters);
  });

  btnContainer.appendChild(sotry1Btn);
  btnContainer.appendChild(rejectBtn);
  btnContainer.appendChild(sotry2Btn);

  typeWriter(h2, history[iStory].description)
    .then(() => {
      div2.appendChild(h22);
      div2.appendChild(img);
      mainContainer.appendChild(div2);
      return typeWriter(h22, additionalCharacters[iAdditional].introduction);
    })
    .then(() => {
      mainContainer.appendChild(btnContainer);
    });
}

function gameOver() {
  mainContainer.innerHTML = "";
  mainContainer.classList.add("main-container");
  const h1 = document.querySelector("h1");
  h1.innerText = "Koniec gry";

  const div = document.createElement("div");
  div.classList.add("sleceted-container");
  const img = document.createElement("img");
  img.src = "/img/Księgowy Cienia.jpeg";
  const h2 = document.createElement("h2");
  h2.classList.add("introduction");

  div.appendChild(img);
  div.appendChild(h2);
  mainContainer.appendChild(div);

  typeWriter(h2, "Koniec gry").then(() => {
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("button-container");

    const acceptBtn = document.createElement("button");
    acceptBtn.innerText = "Rozpocznij ponownie";
    acceptBtn.classList.add("button");
    acceptBtn.addEventListener("click", startGame);
    btnContainer.appendChild(acceptBtn);

    mainContainer.appendChild(btnContainer);
  });
}

function addHoverEffect(button, index) {
  button.addEventListener("mouseenter", () => {
    button.innerText = buttons[index].description;
  });
  button.addEventListener("mouseout", () => {
    button.innerText = buttons[index].name;
  });
}
