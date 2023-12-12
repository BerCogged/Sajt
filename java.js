document.getElementById("dugme").addEventListener('click', pomeranje);
function pomeranje(){
    let t = document.getElementById("desni_nav");
    t.style.width = '20%';
    t.innerHTML= '<button id="tranzicija" ></button> <br>d <br>e<br> s<br> n <br>i <br> <br>n <br>a <br>v'
    t.style.textAlign = 'center'
    document.getElementById("tranzicija").addEventListener('click', vrati);

}
function vrati(){
    let x = document.getElementById("desni_nav");
    x.style.width = "100%"
    x.innerHTML = '<button id="dugme"></button> <p>desni nav</p>'
    document.getElementById("dugme").addEventListener('click', pomeranje);
}