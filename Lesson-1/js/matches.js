"use strict"

function computerMove(matches) {
    if (matches % 4 === 0) {
        return 3;
    } else {
        return Math.floor(Math.random() * 3) + 1;
    }
}

function getMatchesString(matches){
    return '|'.repeat(matches);
}

function matchGame() {
    let matches = +prompt("Введіть початкову кількість сірників:");

    if (!isNaN(matches) && matches > 0) {
        while (matches > 0) {
            alert("Залишилось сірників: " + getMatchesString(matches));
            
            let playerMove = +prompt("Ваш хід (введіть від 1 до 3):");
            if (playerMove >= 1 && playerMove <= 3 && playerMove <= matches) {
                matches -= playerMove;
            } else {
                alert("Некоректний ввід. Введіть від 1 до 3 та не більше, ніж залишилося сірників.");
                continue;
            }
            if (matches === 0) {
                alert("Ви виграли! Залишилася остання спичка.");
                return;
            }

            let computerMoveCount = computerMove(matches);
            matches -= computerMoveCount;
            alert(`Хід комп'ютера: комп'ютер взяв ${computerMoveCount} сірників.`);
            if (matches === 0) {
                alert("Комп'ютер виграв! Залишилася остання спичка.");
                return;
            }
        }
    } else {
        alert("Введено некоректну кількість сірників. Будь ласка, введіть додатне число.");
    }
}

let playButton = document.querySelector(".btn-play");
playButton.addEventListener("click", matchGame);
// matchGame();
