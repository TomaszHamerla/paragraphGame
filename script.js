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
];

const mainContainer = document.querySelector("main");

const start = document.createElement("button");
start.innerText = "Rozpocznij grę";
start.classList.add("button");
start.addEventListener("click", startGame);
mainContainer.appendChild(start);

function startGame() {
  const h1 = document.querySelector("h1");
  h1.innerText = "Wybierz jedna z 3 postaci";
  const main = document.getElementById("start-container");
  // main.innerHTML = "";
  mainContainer.removeChild(start);

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
      acceptBtn.addEventListener("click", startGame);
      btnContainer.appendChild(acceptBtn);

      const rejectBtn = document.createElement("button");
      rejectBtn.innerText = "Odrzuć wyzwanie";
      rejectBtn.classList.add("button-reject");

      rejectBtn.addEventListener("click", startGame);
      btnContainer.appendChild(rejectBtn);

      mainContainer.appendChild(btnContainer);
    });
}

function typeWriter(element, text, delay = 5) {
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
