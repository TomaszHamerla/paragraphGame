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

const mainContainer = document.querySelector("main");

const btnStartGame = document.createElement("button");
btnStartGame.innerText = "Start Game";
btnStartGame.classList.add("button");
btnStartGame.addEventListener("click", startGame);
mainContainer.appendChild(btnStartGame);

function startGame() {
  const h1 = document.querySelector("h1");
  h1.innerText = "Wybierz jedna z 3 postaci";
  const main = document.getElementById("start-container");
  main.innerHTML = "";
  mainContainer.removeChild(btnStartGame);

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

  const div = document.createElement("div");
  div.classList.add("sleceted-container");
  const img = document.createElement("img");
  img.src = event.target.src;
  img.alt = event.target.alt;
  const h2 = document.createElement("h2");
  h2.classList.add("introduction");

  //chcialbym aby ten text wypisywal sie po kolei, ale nie wiem jak to zrobic
  let i = 0;
  let text = characters.find(
    (character) => character.name === event.target.alt
  ).introduction;
  function typeWriter() {
    if (i < text.length) {
      h2.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();

  // h2.innerText = characters.find(
  //   (character) => character.name === event.target.alt
  // ).introduction;

  div.appendChild(img);
  div.appendChild(h2);
  mainContainer.appendChild(div);
  console.log(event.target.alt);
}
