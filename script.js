let karakter = document.querySelector(".karakter");
let karakterPosition = 400;
let maxMagassag = 934;
let repülésiSebesség = 0;
let coinShowerActive = false;
let coinSpawnRate = 1000;
let repül = false;
var jatekPalya = document.getElementById("jatekPalya");
var pontszam = 0;
var jatekVege = false;
let life = 3;
let lkiir = document.querySelector(".lf");
lkiir.innerHTML = life

function getRandomSpawnInterval(from, to) {
  return Math.floor(Math.random() * (to - from) + from);
}

function kepGeneral(type) {
  var kepek = document.createElement("div");
  kepek.classList.add("item");
  kepek.classList.add(type);
  var randomY = Math.floor(Math.random() * (900 - 150) + 150);

  kepek.style.bottom = randomY + "px";
  kepek.style.left = jatekPalya.clientWidth + "px";

  if (type === "fireball") {
    kepek.style.backgroundImage = "url('képek/fireball.png')";
  }

  kepek.style.backgroundSize = "cover";

  jatekPalya.appendChild(kepek);
}

function tuskeGeneral() {
  var kepek = document.createElement("div");
  kepek.classList.add("item");
  kepek.classList.add("tüske");
  var randomY = Math.floor(Math.random() * (160 - 160) + 160);

  kepek.style.bottom = randomY + "px";
  kepek.style.left = jatekPalya.clientWidth + "px";

  kepek.style.backgroundImage = "url('képek/tuske.png')";

  kepek.style.backgroundSize = "cover";

  jatekPalya.appendChild(kepek);
}

function mozgatas() {
  var karakter = document.querySelector(".karakter");
  var karakterPositionTop = karakter.getBoundingClientRect().top;
  var karakterPositionBottom = karakterPositionTop + karakter.offsetHeight;

  var items = document.querySelectorAll(".item");

  items.forEach(function (item) {
    var balPozicio = parseInt(item.style.left);

    if (
      balPozicio < karakter.offsetLeft + karakter.offsetWidth &&
      balPozicio > karakter.offsetLeft &&
      item.offsetTop < karakterPositionBottom &&
      item.offsetTop + item.offsetHeight > karakterPositionTop
    ) {
      if (item.classList.contains("fireball")) {
        life--;
        lkiir.innerhtml = life;
        if(life<=0){
          vegetErtJatek()
        }
        
        item.remove();
      } else if (item.classList.contains("tüske")) {
        life--;
        lkiir.innerhtml = life;
        if(life<=0){
          vegetErtJatek()
        }
        
        item.remove();
      }
    } else {
      item.style.left = balPozicio - 5 + "px";
    }

    if (balPozicio < 0) {
      item.remove();
    }
  });

  if (!jatekVege) {
    requestAnimationFrame(mozgatas);
  }
}

function vegetErtJatek() {
  jatekVege = true;
  var restartButton = document.createElement("button");
  restartButton.innerText = "Restart Game";
  restartButton.style.position = "fixed";
  restartButton.style.top = "50%";
  restartButton.style.left = "50%";
  restartButton.style.transform = "translate(-50%, -50%)";
  restartButton.style.padding = "15px 30px";
  restartButton.style.fontSize = "16px";
  restartButton.style.border = "2px solid #3498db";
  restartButton.style.borderRadius = "5px";
  restartButton.style.background = "#3498db";
  restartButton.style.color = "#fff";
  restartButton.style.cursor = "pointer";

  localStorage.setItem("finalScore", pontszam);

  window.location.href = "fejlesztesek.html";
}

function ujPontszam() {
  document.getElementById("pontszam").innerText = "Coin: " + pontszam;
}

var fireballSpawn = setInterval(function () {
  kepGeneral("fireball");
}, getRandomSpawnInterval(2000, 3000));

var tüskeSpawn = setInterval(function () {
  tuskeGeneral();
  tuskeGeneral();
}, getRandomSpawnInterval(2000, 3000));

function kepMozgas() {
  var img = document.getElementById("tudos_mozgas");
  var maxX = window.innerWidth - img.clientWidth;
  var maxY = window.innerHeight - img.clientHeight;
  var newX = Math.floor(Math.random() * maxX);
  var newY = Math.floor(Math.random() * maxY);
  img.style.left = newX + "px";
  img.style.top = newY + "px";
}

kepMozgas();

mozgatas();

export { fireballSpawn };
