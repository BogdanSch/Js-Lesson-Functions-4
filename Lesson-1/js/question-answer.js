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

function getRandomArrayValue(arr, numAnswers = 1) {
  const randomAnswers = [];

  for (let i = 0; i < numAnswers; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    randomAnswers.push(arr[randomIndex]);
  }
  
  return randomAnswers.join(", ");
}

function createRandomQuestionAndAnswers(numAnswers = 1) {
  const randomQuestion = getRandomArrayValue(questions);
  const randomAnswers = getRandomArrayValue(answers, numAnswers);
  return `${randomQuestion}: ${randomAnswers}`;
}

const questionAndAnswers = createRandomQuestionAndAnswers(3);
console.log(questionAndAnswers);
