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

document.addEventListener("keydown", (event) => {
  if (karakterPosition <= maxMagassag && event.key === "w") {
    repül = true;
  }
});

document.addEventListener("keyup", () => {
  repül = false;
  repülésiSebesség = 0;
});

function startCoinShower() {
    coinShowerActive = true;
    coinSpawnRate = 500; // Adjust the spawn rate during the event
    setTimeout(() => {
      coinShowerActive = false;
      coinSpawnRate = 1000; // Reset the spawn rate after the event
    }, 5000); // The coin shower event lasts for 10 seconds (adjust as needed)
  }

function esés() {
  repülésiSebesség -= 0.5;
  karakterPosition += repülésiSebesség;

  if (karakterPosition <= 401) {
    repülésiSebesség = 0;
    karakterPosition = 400;
  }

  karakter.style.bottom = karakterPosition + "px";
}

setInterval(() => {
  if (repül) {
    if (karakterPosition < maxMagassag) {
      repülésiSebesség += 1.1;
      repülésiSebesség *= 1.05;
    }
  } else {
    esés();
  }

  if (karakterPosition + repülésiSebesség > maxMagassag) {
    karakterPosition = maxMagassag;
    repülésiSebesség = 0;
  } else {
    karakterPosition += repülésiSebesség;
  }

  karakter.style.bottom = karakterPosition + "px";
}, 30);

function kepGeneral(type) {
    var kepek = document.createElement("div");
    kepek.classList.add("item");
    kepek.classList.add(type);
    var randomY = Math.floor(Math.random() * (890 - 410) + 410);
  
    // Adjust spawn rate during the coin shower event
    var spawnRate = coinShowerActive ? coinSpawnRate / 2 : coinSpawnRate;
  
    kepek.style.bottom = randomY + "px";
    kepek.style.left = jatekPalya.clientWidth + "px";
  
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
        balPozicio + item.offsetWidth > karakter.offsetLeft &&
        item.offsetTop < karakterPositionBottom &&
        item.offsetHeight + item.offsetTop > karakterPositionTop
      ) {
        if (item.classList.contains("coin")) {
          pontszam++;
          item.remove();
          ujPontszam();
          if (item.classList.contains("specialCoin")) {
            startCoinShower();
          }
        } else if (item.classList.contains("fireball")) {
          vegetErtJatek();
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

function ujPontszam() {
  document.getElementById("pontszam").innerText = "Coin: " + pontszam;
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

setInterval(function () {
  kepGeneral("coin");
}, 1000);

setInterval(function () {
  kepGeneral("fireball");
}, 2520);

function kepMozgas() {
  var img = document.getElementById('tudos_mozgas');
  var maxX = window.innerWidth - img.clientWidth;
  var maxY = window.innerHeight - img.clientHeight;
  var newX = Math.floor(Math.random() * maxX);
  var newY = Math.floor(Math.random() * maxY);
  img.style.left = newX + 'px';
  img.style.top = newY + 'px';
}

function tudosMozgas() {
  kepMozgas();
  setInterval(kepMozgas, Math.floor(Math.random() * 2000) + 1000);
}

kepMozgas();

mozgatas();
