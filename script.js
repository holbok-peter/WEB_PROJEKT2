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

function getRandomSpawnInterval(from, to) {
  // Calculate a random interval between 5 and 15 seconds (in milliseconds)
  return Math.floor(Math.random() * (to - from + 1) + from);
}

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

  kepek.style.bottom = randomY + "px";
  kepek.style.left = jatekPalya.clientWidth + "px";

  // Randomly decide whether it's a regular coin or a special coin
  // Ensure special coins only during the coin shower

  // Specify the correct image paths for coins and black coins
  if (type === "coin") {
    kepek.style.backgroundImage = "url('képek/coin.png')";
  } else if (type === "fireball") {
    kepek.style.backgroundImage = "url('képek/fireball.png')";
  } else if (type === "black_coin") {
    kepek.style.backgroundImage = "url('képek/black_coin.jpg')";
    kepek.classList.add("black_coin"); // Add the coin shower class for styling
    kepek.style.border = "2px solid #ffcc00"; // Add border styling for special coins
    kepek.style.animation = "pulse 1s infinite"; // Add pulsing effect for special coins
  }

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
      balPozicio + item.offsetWidth > karakter.offsetLeft &&
      item.offsetTop < karakterPositionBottom &&
      item.offsetHeight + item.offsetTop > karakterPositionTop
    ) {
      if (item.classList.contains("coin")) {
        pontszam++;
        item.remove();
        ujPontszam();
      } else if (item.classList.contains("fireball")) {
        vegetErtJatek();
        item.remove();
      } else if (item.classList.contains("black_coin")) {
        pontszam += 5;
        ujPontszam();
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
  alert(`A karaktered életet vesztette! Maximális pontszámod: ${pontszam}`)
  window.location.href = "start.html";
}

var normalCoin = setInterval(function () {
  kepGeneral("coin");
}, getRandomSpawnInterval(500, 1500));

var fireballSpawn = setInterval(function () {
  kepGeneral("fireball");
}, getRandomSpawnInterval(2000, 3000));

var blackCoinInterval = setInterval(function () {
  kepGeneral("black_coin");
}, getRandomSpawnInterval(5000, 15000));

function kepMozgas() {
  var img = document.getElementById("tudos_mozgas");
  var maxX = window.innerWidth - img.clientWidth;
  var maxY = window.innerHeight - img.clientHeight;
  var newX = Math.floor(Math.random() * maxX);
  var newY = Math.floor(Math.random() * maxY);
  img.style.left = newX + "px";
  img.style.top = newY + "px";
}

function tudosMozgas() {
  kepMozgas();
  setInterval(kepMozgas, Math.floor(Math.random() * 2000) + 1000);
}

function getRandomPosition(maxWidth) {
  var x = Math.random() * (maxWidth - 100);
  return { x: x};
}

function randomTuske() {
  var img = new Image();
  img.src = 'képek/tuske.png';

  img.onload = function() {
    var maxWidth = window.innerWidth;
    var randomKep = document.getElementById('tuske.png');

    if (!randomKep) {
      randomKep = document.createElement('img');
      randomKep.id = 'tuske.png';
      randomKep.style.position = 'absolute';
      document.body.appendChild(randomKep);
    }

    randomKep.src = img.src;
    var pozicio = getRandomPosition(maxWidth);
    randomKep.style.left = pozicio.x + 'px';

    // Mozgatás időközönként
    setInterval(function() {
      pozicio = getRandomPosition(maxWidth);
      randomKep.style.left = pozicio.x + 'px';
    }, Math.random() * 5000 + 1000);
  };

}

randomTuske();

kepMozgas();

mozgatas();
