const screens = document.querySelectorAll(".screen");
const choose_insect_btns = document.querySelectorAll(".choose-insect-btn");
const start_btn = document.getElementById("start-btn");
const timeEL = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");
const game_container = document.getElementById("game-container");
let seconds = 0;
let score = 0;
let selected_insect = {};

start_btn.addEventListener("click", () => screens[0].classList.add("up"));


