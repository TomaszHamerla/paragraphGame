const characters = [
  {
    name: "Aria Nightrunner",
    img: "/img/aria.jpeg",
    description: "Tajemnicza łowczyni ze złotymi włosami i niebieskimi oczami.",
  },
  {
    name: "Gideon Ironheart",
    img: "/img/gideon.jpeg",
    description:
      "Weteran wojenny o tajemniczym pochodzeniu. Jego prawa ręka zastąpiona jest mechanicznym ulepszeniem.",
  },
  {
    name: "Lyra Shadowdancer",
    img: "/img/lyra.jpeg",
    description:
      "Czarodziejka posługująca się magią cienia. Jej niebieskie tatuaże świecą, gdy używa potężnych zaklęć.",
  },
];

function startGame() {
  const h1 = document.querySelector("h1");
  h1.innerText = "Wybierz jedna z 3 postaci";
  const main = document.getElementById("game-container");
  main.innerHTML = "";

  characters.forEach((character) => {
    const div = document.createElement("div");
    div.classList.add("character-container");

    const img = document.createElement("img");
    img.src = character.img;

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
