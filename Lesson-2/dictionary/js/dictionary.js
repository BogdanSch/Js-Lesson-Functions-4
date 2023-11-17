"use strict";

import { Word } from "./word.js";

function dictionaryService(words, translationMode = "enUa") {
  const dictionary = words;
  let correctCount = 0;
  let mistakenCount = 0;

  function viewDictionary() {
    alert(`Словник: ${translationMode}`);
    for (const key in dictionary) {
      alert(`${key}: [UA] ${dictionary[key].ua} [EN] ${dictionary[key].en}`);
    }
  }

  function containsSearchedWord(word) {
    return dictionary.find((entry) => {
      const searchValue = translationMode === "enUa" ? entry.ua : entry.en;
      return searchValue.toLowerCase() === word;
    });
  }
  function translateWord(word) {
    const formattedWord = word.toLowerCase();
    const foundWord = containsSearchedWord(formattedWord);

    if (translationMode === "enUa") {
      if (foundWord) {
        correctCount++;
        return `Переклад: [EN] ${foundWord.en} = [UA] ${foundWord.ua}`;
      } else {
        mistakenCount++;
        return "Переклад не знайдено";
      }
    } else {
      if (foundWord) {
        correctCount++;
        return `Переклад: [UA] ${foundWord.ua} = [EN] ${foundWord.en}`;
      } else {
        mistakenCount++;
        return "Переклад не знайдено";
      }
    }
  }

  viewDictionary();

  for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i];

    let askedWord = translationMode === "enUa" ? word.en : word.ua;

    const userWord = prompt(`Введіть переклад слова ${askedWord}:`);
    if (userWord) {
      alert(translateWord(userWord));
    }
  }

  alert(`Вірно: ${correctCount}, Невірно: ${mistakenCount}`);
}

const wordsArray = [
  new Word("яблуко", "apple"),
  new Word("груша", "pear"),
  new Word("сонце", "sun"),
];

try {
  const translationMode =
    prompt("Enter translation mode (enUa or uaEn):") || "enUa";

  if (translationMode !== "enUa" && translationMode !== "uaEn") {
    throw new Error("Please enter a correct translation mode!");
  }
  dictionaryService(wordsArray, translationMode);
} catch (error) {
  alert("Error: " + error.message);
}
