let karakter = document.querySelector(".karakter");
let ellenseg = document.querySelector(".ellenseg");
let tudos = document.querySelector(".tudos");
let karakterPosition = karakter.style.bottom || 400;
let repülésiSebesség = 0;
let repül = false;


document.addEventListener("keypress", ()=>{
    repülésiSebesség += 30;
    karakter.style.bottom = (karakterPosition + repülésiSebesség) + "px";
    repül = true;
});


setInterval(()=>{
    if(repülésiSebesség > 0){
        repülésiSebesség -= 1;
        karakter.style.bottom = (karakterPosition + repülésiSebesség) + "px";
    }
} , 1)