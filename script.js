"use strict";

let btnPlayer1 = document.getElementById("btnPlayer1");
let btnPlayer2 = document.getElementById("btnPlayer2");
let p1Display = document.getElementById("player1");
let p2Display = document.getElementById("player2");
let clearBtn = document.getElementById("clear");
let target = 5;
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let numVal = document.getElementById("newValue");
let winningScore = document.getElementById('winningScore');

init();

function init() {
  Player1();
  Player2();
}

function Player1() {
  btnPlayer1.addEventListener("click", function () {
    if (!gameOver) {
      p1Display.textContent = ++p1Score;
      if (p1Score == target) {
        p1Display.style.backgroundColor = "green";
        gameOver = true;
      }
    }

    console.log("p1: ", p1Score);
  });
}

function Player2() {
  btnPlayer2.addEventListener("click", function () {
    if (!gameOver) {
      p2Display.textContent = ++p2Score;
      if (p2Score == target) {
        p2Display.style.backgroundColor = "green";
        gameOver = true;
      }
    }

    console.log("p2: ", p2Score);
  });
}

clearBtn.addEventListener("click", function () {
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  gameOver = false;
  p2Display.style.backgroundColor = "white";
  p1Display.style.backgroundColor = "white";
  document.getElementById('newValue').value='';
  
}

numVal.addEventListener("keyup", function (e) {
  target = e.target.value;
  winningScore.textContent=target;
  reset();
});
