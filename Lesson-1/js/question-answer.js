"use strict";

const questions = [
  "Що мені взяти з собою на ковзанку?",
  "Що мені покласти в холодильник?",
  "Що мені взяти із собою до школи?",
  "Що мені взяти із собою в басейн?",
  "Що мені взяти із собою на футбол?",
];

const answers = [
  "ковзани",
  "яблука",
  "підручники",
  "рушник",
  "купальник",
  "полуниці",
  "кросівки",
  "воду",
];

function getRandomArrayValue(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function createRandomQuestionAndAnswers(numAnswers) {
  const randomQuestion = getRandomArrayValue(questions);
  const randomAnswers = [];

  for (let i = 0; i < numAnswers; i++) {
    const randomAnswer = getRandomArrayValue(answers);
    randomAnswers.push(randomAnswer);
  }

  return `${randomQuestion}: ${randomAnswers.join(", ")}`;
}

const questionAndAnswers = createRandomQuestionAndAnswers(3);
console.log(questionAndAnswers);
