let karakter = document.querySelector(".karakter");
let ellenseg = document.querySelector(".ellenseg");
let tudos = document.querySelector(".tudos");
let karakterPosition = (karakter.style.bottom = 160);
let maxMagassag = 900;
let repülésiSebesség = 0;
let repul = false;
var jatekPalya = document.getElementById("jatekPalya");
var pontszam = 0;
var jatekVege = false;

function jetpackRepules() {
  if (karakterPosition < maxMagassag && karakterPosition >= 160) {
    repülésiSebesség += 0.6;
    if (repülésiSebesség > 0) {
      repülésiSebesség *= 1.03;
    }
    karakterPosition += repülésiSebesség;
    karakter.style.bottom = karakterPosition + "px";
  }
}

function eses() {
  repülésiSebesség -= 0.6;
  karakterPosition += repülésiSebesség;
  if (karakterPosition <= 160) {
    repülésiSebesség = 0;
    karakterPosition = 160;
  }
  karakter.style.bottom = karakterPosition + "px";
}

document.addEventListener("keypress", (event) => {
  repul = true;

});
document.addEventListener("keyup", () => {
  repul = false;
});

function Mozgas(){
    if (!repul) {
        eses();
      } else {
        jetpackRepules();
      }
      if(karakterPosition <160){
        karakterPosition = 160;
      }
      if(karakterPosition > maxMagassag){
        repülésiSebesség =0;
        karakterPosition = maxMagassag;
      }
      requestAnimationFrame(Mozgas)
}




export {Mozgas, karakterPosition};

