

class Coin{

    constructor(value, classimg ,posx, posy){
        this.value = value;
        this.class = classimg;
        this.x = posx;
        this.y = posy;
    }

   

}

class CoinGeneral{

    
    
    //pattern: 1-tomb 2-csík 3-csúcs 4-egy
    constructor(pattern, posy){
        this.type = pattern;
        this.position = posy;
        
        
        if(this.type == 1){
            let x = 0;
            for(let i = 0; i < 9; i++){
                let coin = new Coin(1, gold,1800+x,this.position );
                x += 30;
                

                coins.push(coin);
            }
        }
        else if(this.type == 2){
            let y = 0
            for(let i = 0; i < 3; i++){
                let x = 0;
                for(let j = 0; i < 3; j++){
                    let coin = new Coin(1, "gold",1800+x,this.position+y );
                    coins.push(coin);
                    x += 30;

                }y += 30
            }
        }
        else if(this.type == 3){
            let x = 0;
            let y = 0;
            for(let i = 0; i < 4; i++){
                let coin = new Coin(1, "gold",1800+x,this.position+y );
                    coins.push(coin);
                x += 30;
                y += 30
            }
            for(let i = 0; i < 4; i++){
                let coin = new Coin(1, "gold",1800+x,this.position+y );
                    coins.push(coin);
                x += 30;
                y -= 30
            }
        }
        else{
            let coin = new Coin(20, "diamond",1800,this.position );
                    coins.push(coin);
        }
    }
    
    
}

let coins = [];


let coindivs = [];

function coinDivMake(){
    coins.forEach(function (c) {
        let coindiv = document.createElement("div");
        coindiv.classList.add(c.class);
        coindiv.style.position = "absolute";
        coindiv.style.left = c.posx + "px";
        coindiv.style.bottom = c.posy + "px";
        document.querySelector(".objects").appendChild(coindiv);
        coindivs.push(coindiv);

        

    })
}
