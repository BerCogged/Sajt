document.getElementById("dugme").addEventListener('click', pomeranje);
document.getElementById("prvo_dugme").addEventListener('click', pokazi_prvog);
document.getElementById("drugo_dugme").addEventListener('click',pokazi_drugog);

function pomeranje(){
    let t = document.getElementById("desni_nav");
    t.style.width = '20%';
    let c = '<div class="link"><a href="http://127.0.0.1:5500/games/roullet/index.html">Roullet</a></div><br> <div class="link"> <div class="link"><a href="#">Blackjack</a></div><a href="#">Poker</a></div> <br> <div class="link"><a href="#">Slot</a> </div><br> <div class="link"><a href="#">Coin flip</a> </div><br><div class="link"><a href="#">Plinko</a></div>'
    t.innerHTML= '<button id="tranzicija" ></button> <br>d <br>e<br> s<br> n <br>i <br> <br>n <br>a <br>v <br>' + c
    t.style.textAlign = 'center'
    document.getElementById("tranzicija").addEventListener('click', vrati);

}

function vrati(){
    let x = document.getElementById("desni_nav");
    x.style.width = "100%"
    let c = '<div class="link"><a href="http://127.0.0.1:5500/games/roullet/index.html">Roullet</a></div><br> <div class="link"><a href="#">Blackjack</a></div> <br> <div class="link"><a href="#">Poker</a></div> <br> <div class="link"><a href="#">Slot</a> </div><br> <div class="link"><a href="#">Coin flip</a> </div><br><div class="link"><a href="#">Plinko</a></div>'
    x.innerHTML = '<button id="dugme"></button> <p>desni nav</p>' + c
    document.getElementById("dugme").addEventListener('click', pomeranje);
}

function pokazi_prvog(){
    let x = document.getElementById("prvi");
    x.style.opacity = 1;
    x.style.display = "block"

    let y = document.getElementById("drugi");
    y.style.opacity = 0;
    y.style.display = "none"
}

function pokazi_drugog(){
    let x = document.getElementById("prvi");
    x.style.opacity = 0;
    x.style.display = "none"

    let y = document.getElementById("drugi");
    y.style.display = "block"
    y.style.opacity = 1;
}