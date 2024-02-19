let karakter = document.querySelector(".karakter");
let ellenseg = document.querySelector(".ellenseg");
let tudos = document.querySelector(".tudos");
let karakterPosition = karakter.style.bottom = 400;
let maxMagassag = 800;
let repülésiSebesség = 0;
let repül = false;
var jatekPalya = document.getElementById("jatekPalya");
var pontszam = 0;
var jatekVege = false;



document.addEventListener("keypress", (event)=>{
    if(karakterPosition <= 810 && event.key == "w"){
        repülésiSebesség += 1.2;
        repülésiSebesség *= 1.1;
        karakterPosition += repülésiSebesség;
        karakter.style.bottom = karakterPosition + "px";
        if(karakterPosition == maxMagassag){
            
        }
    }
});



function esés(){
    repülésiSebesség -= 1;
    karakterPosition += repülésiSebesség
    if(karakterPosition <= 400){
        repülésiSebesség = 0;
        karakterPosition = 400;
    }
    karakter.style.bottom = karakterPosition + "px";
}



setInterval(()=>{
    if(repül = true){
        esés()
    }
    console.log(repülésiSebesség)
} , 30)


function kepGeneral(type) {
    var kepek = document.createElement("div");
    kepek.classList.add("item");
    kepek.classList.add(type);

    var random = Math.floor(Math.random() * (jatekPalya.clientHeight - 50));
    kepek.style.top = random + "px";
    kepek.style.left = jatekPalya.clientWidth + "px";

    jatekPalya.appendChild(kepek);

    return kepek;
}

function mozgatas() {
    var karakter = document.querySelectorAll(".item");

    karakter.forEach(function (item) {
        var balPozicio = parseInt(item.style.left);
        item.style.left = balPozicio - 5 + "px";

        if (
            balPozicio < karakter.offsetLeft + karakter.offsetWidth &&
            balPozicio + item.offsetWidth > karakter.offsetLeft &&
            item.offsetTop < karakterww.offsetTop + karakter.offsetHeight &&
            item.offsetHeight + item.offsetTop > karakter.offsetTop
        ) {
            if (item.classList.contains("coin")) {
                pontszam++;
                item.remove();
                ujPontszam();
            } else if (item.classList.contains("fireball")) {
                vegetErtJatek();
            }
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
    document.getElementById("pontszam").innerText = "Pontszám: " + pontszam;
}

function vegetErtJatek() {
    jatekVege = true;
    alert("A játéknak vége! Maximális pontszámod: " + pontszam);
    ujJatek();
}

function ujJatek() {
    jatekVege = false;
    pontszam = 0;
    ujPontszam();
}

setInterval(function () {
    kepGeneral("coin");
}, 1000);

setInterval(function () {
    kepGeneral("fireball");
}, 2520);

mozgatas();