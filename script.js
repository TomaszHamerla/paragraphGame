import { gameScenario } from "./data.js";
import { characters } from "./data.js";
import { before3OptionsH } from "./data.js";
import { before3OptionsA } from "./data.js";

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
let heroPicked;
function pickCharacter(event) {
  heroPicked = event.target.alt;

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
  img2.src = before3OptionsA[0].img;
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
      let text2 = before3OptionsA[0].introduction;
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
      acceptBtn.addEventListener("click", updateStory);
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

function updateStory() {
  const h1 = document.querySelector("h1");
  h1.innerText = before3OptionsH.title;
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
  divImg2.src = before3OptionsA[1].img;
  const h22 = document.createElement("h2");
  h22.classList.add("introduction");

  typeWriter(h2, before3OptionsH.description)
    .then(() => {
      div2.appendChild(h22);
      div2.appendChild(divImg2);
      mainContainer.appendChild(div2);
      return typeWriter(h22, before3OptionsA[1].introduction);
    })
    .then(() => {
      const btnContainer = document.createElement("div");
      btnContainer.classList.add("button-container");

      const acceptBtn = document.createElement("button");
      acceptBtn.innerText = gameScenario.name;
      acceptBtn.classList.add("button");
      acceptBtn.addEventListener("click", function () {
        updateStory3Options(gameScenario);
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

function updateStory3Options(buttons) {
  const h1 = document.querySelector("h1");
  h1.innerText = buttons.history.title;
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
  img.src = buttons.additionalCharacters.img;

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("button-container");

  const rejectBtn = document.createElement("button");
  rejectBtn.innerText = "Odrzuć wyzwanie";
  rejectBtn.classList.add("button-reject");
  rejectBtn.addEventListener("click", () => {
    gameOver();
  });

  if (buttons.left) {
    const btnLeft = document.createElement("button");
    btnLeft.innerText = buttons.left.name;
    btnLeft.classList.add("button");
    addHoverEffect(btnLeft, buttons.left);
    if (buttons.left.history) {
      btnLeft.addEventListener("click", () => {
        updateStory3Options(buttons.left);
      });
      btnContainer.appendChild(btnLeft);
    } else {
      btnLeft.addEventListener("click", () => {
        showResult();
      });
      btnContainer.appendChild(btnLeft);
    }
  }

  btnContainer.appendChild(rejectBtn);

  if (buttons.right) {
    const btnRight = document.createElement("button");
    btnRight.innerText = buttons.right.name;
    btnRight.classList.add("button");
    addHoverEffect(btnRight, buttons.right);
    if (buttons.right.history) {
      btnRight.addEventListener("click", () => {
        updateStory3Options(buttons.right);
      });
      btnContainer.appendChild(btnRight);
    } else {
      btnRight.addEventListener("click", () => {
        showResult();
      });
      btnContainer.appendChild(btnRight);
    }
  }

  typeWriter(h2, buttons.history.description)
    .then(() => {
      div2.appendChild(h22);
      div2.appendChild(img);
      mainContainer.appendChild(div2);
      return typeWriter(h22, buttons.additionalCharacters.introduction);
    })
    .then(() => {
      mainContainer.appendChild(btnContainer);
    });
}
function showResult() {
  mainContainer.innerHTML = "";
  mainContainer.classList.add("main-container");
  const h1 = document.querySelector("h1");
  h1.innerText = "To już koniec tej historii";
  const hero = characters.find((character) => character.name === heroPicked);
  const div = document.createElement("div");
  div.classList.add("sleceted-container");
  const img = document.createElement("img");
  img.src = hero.img;
  div.appendChild(img);
  const h2 = document.createElement("h2");
  h2.classList.add("introduction");
  div.appendChild(h2);
  mainContainer.appendChild(div);

  const h22 = document.createElement("h2");
  h22.classList.add("introduction");
  const div2 = document.createElement("div");
  div2.classList.add("sleceted-container");
  const img2 = document.createElement("img");
  img2.src = before3OptionsA[0].img;
  typeWriter(h2, hero.closingWords)
    .then(() => {
      div2.appendChild(h22);
      div2.appendChild(img2);
      mainContainer.appendChild(div2);
      return typeWriter(h22, before3OptionsA[0].closingWords);
    })
    .then(() => {
      const btnContainer = document.createElement("div");
      btnContainer.classList.add("button-container");

      const acceptBtn = document.createElement("button");
      acceptBtn.innerText = "Zagraj ponownie";
      acceptBtn.classList.add("button");
      acceptBtn.addEventListener("click", startGame);
      btnContainer.appendChild(acceptBtn);

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

function addHoverEffect(button, btn) {
  button.addEventListener("mouseenter", () => {
    button.innerText = btn.description;
  });
  button.addEventListener("mouseout", () => {
    button.innerText = btn.name;
  });
}
