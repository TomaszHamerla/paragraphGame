// Definicje postaci
const characters = {
    aria: { name: "Aria Nightrunner", description: "Tajemnicza łowczyni ze złotymi włosami i niebieskimi oczami." },
    gideon: { name: "Gideon Ironheart", description: "Weteran wojenny o tajemniczym pochodzeniu. Jego prawa ręka zastąpiona jest mechanicznym ulepszeniem." },
    lyra: { name: "Lyra Shadowdancer", description: "Czarodziejka posługująca się magią cienia. Jej niebieskie tatuaże świecą, gdy używa potężnych zaklęć." }
  };
  
  // Definicje paragrafów
  const paragraphs = {
    1: {
      text: "Jesteś podróżnikiem wędrującym przez ciemny las w poszukiwaniu zaginionego skarbu.",
      options: [
        { text: "Przyjmij propozycję ekspedycji", nextParagraph: 2 },
        { text: "Odmów i kontynuuj własną drogę", nextParagraph: 3 }
      ]
    },
    2: {
      text: "Napadasz na grupę postaci: Aria Nightrunner, Gideon Ironheart i Lyra Shadowdancer. Oferują ci udział w ekspedycji do Starożytnego Miasta.",
      options: [
        { text: "Zgodź się na udział w ekspedycji", nextParagraph: 4 },
        { text: "Odmów i rozstań się z grupą", nextParagraph: 5 }
      ]
    },
    3: {
      text: "Decydujesz się odrzucić propozycję grupy postaci i kontynuować swoją własną podróż przez las.",
      options: [
        { text: "Poszukaj innej drogi", nextParagraph: 6 },
        { text: "Powróć i dołącz do ekspedycji", nextParagraph: 4 }
      ]
    },
    // Dodaj więcej paragrafów według potrzeb
  };
  
  // Funkcja do aktualizacji treści opowiadania
  function updateStory(newStory) {
    const storyElement = document.getElementById('story');
    storyElement.textContent = newStory;
  }
  
  // Funkcja do dodawania opcji wyboru
  function addOption(optionText, nextParagraph) {
    const optionsContainer = document.getElementById('options-container');
    const button = document.createElement('button');
    button.textContent = optionText;
    button.addEventListener('click', () => {
      updateStory(paragraphs[nextParagraph].text);
      optionsContainer.innerHTML = ''; // Wyczyść poprzednie opcje
      paragraphs[nextParagraph].options.forEach((option, index) => {
        addOption(option.text, option.nextParagraph);
      });
    });
    optionsContainer.appendChild(button);
  }
  
  // Inicjalizacja gry
  updateStory(paragraphs[1].text);
  paragraphs[1].options.forEach((option, index) => {
    addOption(option.text, option.nextParagraph);
  });
  // ... (wcześniejszy kod) ...

// Zmienna globalna do śledzenia wyboru postaci
let selectedCharacter = '';

// Funkcja do wyboru postaci
function selectCharacter(characterName) {
  selectedCharacter = characterName;
  updateStory(`Wybrano postać: ${selectedCharacter}`);
}

// ... (wcześniejszy kod) ...

// Funkcja rozpoczynająca grę
function startGame() {
  if (selectedCharacter === '') {
    updateStory('Musisz wybrać postać przed rozpoczęciem gry!');
  } else {
    // Ukrywamy pierwszą kartę, a następną pokazujemy
    document.getElementById('options-container').style.display = 'none';
    document.getElementById('next-card').style.display = 'block';
    // Rozpoczęcie gry z wybraną postacią
    updateStory(`Rozpoczynamy grę z postacią: ${selectedCharacter}`);
    // Rozpocznij nową historię
    updateNextStory('Jesteś teraz w innej części lasu...');
  }
}

// Funkcja do kontynuacji gry
function continueGame() {
  // Tutaj możesz dodać więcej logiki lub przenieść do kolejnej części gry
  updateNextStory('To jest kolejna część historii...');
}

// Funkcja do aktualizacji treści kolejnej historii
function updateNextStory(newNextStory) {
  const nextStoryElement = document.getElementById('next-story');
  nextStoryElement.textContent = newNextStory;
}

// Wywołanie funkcji inicjalizującej grę
initializeGame();