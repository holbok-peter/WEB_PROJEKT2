import { Mozgas, MoveScientist, karakterPosition } from "./Movement.js";
import { coinGeneralas, coinCheck, coinMove } from "./coin.js";
let pontszam = document.querySelector(".goldok");
let jatekVege = false;
let score = 0;
let gold = 0;
let life = 3;

Mozgas();
setInterval(() => {
    
   gold=  coinCheck(karakterPosition, gold);
  coinMove();
 pontszam.innerHTML = gold;
}, 5);

setInterval(() => {
  coinGeneralas();
}, 2000);
