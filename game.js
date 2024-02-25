import { Mozgas, MoveScientist, karakterPosition } from "./Movement.js";
import { coinGeneralas, coinCheck, coinMove } from "./coin.js";
let pontszam = document.querySelector(".goldok");
let jatekVege = false;
let score = 0;
let gold = 0;
let life = 3;

setInterval(() => {
  let karakterr = document.querySelector(".karakter").getBoundingClientRect();
  gold = coinCheck(karakterPosition, gold);
  Mozgas();
  MoveScientist();
  coinMove();
  pontszam.innerHTML = gold;
}, 20);

setInterval(() => {
  coinGeneralas();
}, 2000);
