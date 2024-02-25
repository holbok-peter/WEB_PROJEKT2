import { Mozgas, MoveScientist, karakterPosition } from "./Movement.js";
import { coinGeneralas, coinCheck, coinMove } from "./coin.js";
let pontszam = document.querySelector(".goldok");
let jatekVege = false;
let score = 0;
let gold = 0;
let life = 3;

Mozgas();
setInterval(() => {
<<<<<<< HEAD
  let karakterr = document.querySelector(".karakter").getBoundingClientRect();
  gold = coinCheck(karakterPosition, gold);
  Mozgas();
  MoveScientist();
  coinMove();
  pontszam.innerHTML = gold;
}, 5);
=======
    
   gold=  coinCheck(karakterPosition, gold);
  coinMove();
 pontszam.innerHTML = gold;
}, 5);
>>>>>>> bee583aa69a049e12e383ee00e838984c7ae50f9

setInterval(() => {
  coinGeneralas();
}, 2000);
