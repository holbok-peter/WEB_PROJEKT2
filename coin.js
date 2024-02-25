class Coin {
    constructor(value, classimg, posx, posy) {
      this.value = value;
      this.class = classimg;
      this.x = posx;
      this.y = posy;
      this.div = document.createElement("div");
      this.div.style.position = "absolute";
      this.div.style.left = posx + "px";
      this.div.style.bottom = posy + "px";
      this.div.classList.add(this.class);
    }
  }
  
  class CoinGeneral {
    //pattern: 1-tomb 2-csík 3-csúcs 4-egy
    constructor(pattern, posy) {
      this.type = pattern;
      this.position = posy;
  
      console.log("general");
      console.log(coins.length);
      if (this.type == 1) {
        let x = 0;
        for (let i = 0; i < 9; i++) {
          let coin = new Coin(1, "gold", 1800 + x, this.position);
          x += 50;
  
          coins.push(coin);
        }
      } else if (this.type == 2) {
        let y = 0;
        for (let i = 0; i < 3; i++) {
          let x = 0;
          for (let j = 0; j < 3; j++) {
            let coin = new Coin(1, "gold", 1800 + x, this.position + y);
            coins.push(coin);
            x += 50;
          }
          y += 50;
        }
      } else if (this.type == 3) {
        let x = 0;
        let y = 0;
        for (let i = 0; i < 4; i++) {
          let coin = new Coin(1, "gold", 1800 + x, this.position + y);
          coins.push(coin);
          x += 50;
          y += 50;
        }
        for (let i = 0; i < 4; i++) {
          let coin = new Coin(1, "gold", 1800 + x, this.position + y);
          coins.push(coin);
          x += 50;
          y -= 50;
        }
      } else {
        let coin = new Coin(20, "diamond", 1800, this.position);
        coins.push(coin);
      }
    }
  }
  
  let coins = [];
  let objects = document.querySelector(".objects");
  
  function coinDivAdd() {
    coins.forEach(function (c) {
      objects.appendChild(c.div);
    });
  }
  
  function coinMove() {
    coins.forEach(function (c) {
      c.x -= 5;
      c.div.style.left = c.x + "px";
    });
  }
  
  function coinDivDel() {
    let coinsToRemove = [];
  
    coins.forEach(function (c) {
      if (c.x < -10) {
        objects.removeChild(c.div);
        coinsToRemove.push(c);
      }
    });
  
    coinsToRemove.forEach(function (c) {
      coins.splice(coins.indexOf(c), 1);
    });
  }
  
  function coinPickup(karaktery, péz) {
    coins.forEach(function (c, index) {
      if (
        c.x < 200 &&
        c.x > 120 &&
        karaktery > c.y - 40 &&
        karaktery < c.y + 600 &&
        coins.indexOf(c) !== -1
      ) {
        péz++;
        objects.removeChild(c.div);
        coins.splice(index, 1);
      }
    });
    return péz;
  }
  
  function coinGeneralas() {
    let typernd = Math.round(Math.random() * 4);
    let posrnd = Math.round(Math.random() * 600);
    +300;
    new CoinGeneral(typernd, posrnd);
  }
  function coinCheck(kry, péz) {
    coinDivAdd();
    coinDivDel();
    return coinPickup(kry, péz);
  }
  
  export { coinGeneralas, coinCheck, coinMove };
  