const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue= document.getElementById("final-value");
const rotatitonValues = [
    { minDegree: 0, maxDegree: 9.7, value: 17 },
    { minDegree: 9.71, maxDegree: 19.4, value: 25 },
    { minDegree: 19.5, maxDegree: 29.1, value: 2 },
    { minDegree: 29.2, maxDegree: 38.8, value: 21 },
    { minDegree: 38.9, maxDegree: 48.5, value: 4 },
    { minDegree: 48.6, maxDegree: 58.2, value: 19 },
    { minDegree: 58.3, maxDegree: 67.9, value: 15 },
    { minDegree: 68, maxDegree: 77.6, value: 32 },
    { minDegree: 77.8, maxDegree: 87.3, value: 0 },
    { minDegree: 87.4, maxDegree: 97, value: 26 },
    { minDegree: 97.1, maxDegree: 106.7, value: 3 },
    { minDegree: 106.8, maxDegree: 116.4, value: 35 },
    { minDegree: 116.5, maxDegree: 126.1, value: 12 },
    { minDegree: 126.2, maxDegree: 135.8, value: 28 },
    { minDegree: 135.9, maxDegree: 145.5, value: 7 },
    { minDegree: 145.6, maxDegree: 155.2, value: 29 },
    { minDegree: 155.3, maxDegree: 169.4, value: 18},
    { minDegree: 169.5, maxDegree: 174.6, value: 22 },
    { minDegree: 174.7, maxDegree: 184.3, value: 9 },
    { minDegree: 184.5, maxDegree: 194, value: 31 },
    { minDegree: 194.1, maxDegree: 203.7, value: 14 },
    { minDegree: 203.8, maxDegree: 213.4, value: 20 },
    { minDegree: 213.5, maxDegree: 223.1, value: 1 },
    { minDegree: 223.2, maxDegree: 232.8, value: 33 },
    { minDegree: 232.9, maxDegree: 242.5, value: 16 },
    { minDegree: 242.6, maxDegree: 252.2, value: 24 },
    { minDegree: 252.3, maxDegree: 261.9, value: 5 },
    { minDegree: 262, maxDegree: 271.6, value: 10 },
    { minDegree: 271.7, maxDegree: 281.3, value: 32 },
    { minDegree: 281.4, maxDegree: 291, value: 8 },
    { minDegree: 291.1, maxDegree: 300.7, value: 30 },
    { minDegree: 300.8, maxDegree: 310.4, value: 11},
    { minDegree: 310.5, maxDegree: 320.1, value: 36 },
    { minDegree: 320.2, maxDegree: 329.8, value: 13 },
    { minDegree: 329.9, maxDegree: 339.5, value: 27 },
    { minDegree: 339.6, maxDegree: 349.2, value: 6},
    { minDegree: 349.3, maxDegree: 360, value:34}
];
const data = [16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16];
let pieColors = ["green","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black","red","black"];
let myChart = new Chart (wheel, {
    plugins:[ChartDataLabels],
    type: "pie",
    data:{
        labels: [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,32,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26],
        datasets: [{
            backgroundColor: pieColors,
            data:data,

        },
    ],
    },
    options:{
        resposnive :true,
        animation:{duration: 1},
        plugins:{
            tooltop:false,
            legend:{
                display: false,
            },
            datalabels: {
                color: "#ffffff",
                formatter:(_,context) =>
                context.chart.data.labels[context.dataIndex],
                font: {size:15},
            },
        },
    },
})
const valueGenerator = (angleValue) =>{
    for (let i of rotatitonValues){
        if (angleValue>=i.minDegree && angleValue<=i.maxDegree){
            finalValue.innerHTML = '<p>Number is: ' + i.value + '</p>';
            spinBtn.disabled = false;
            break;
        }
    }
};
let count = 0;
let resultValue = 101;
spinBtn.addEventListener("click", ()=>{
    spinBtn.disabled = true;
    finalValue.innerHTML = "<p>GOOD LUCK!</p>";
    let randomDegree = Math.floor(Math.random() * ((355-0+1)+0));
    let rotationInterval = window.setInterval(()=>{
        myChart.options.rotation = myChart.options.rotation+resultValue;
        myChart.update();
        if (myChart.options.rotation >=360){
            count +=1;
            resultValue -=5;
            myChart.options.rotation=0;
        }
        else if(count>15 && myChart.options.rotation ==randomDegree){
            valueGenerator(randomDegree);
            clearInterval(rotationInterval);
            count= 0;
            resultValue=101;
        }
    },10);
});
document.getElementById("dugme").addEventListener('click', pomeranje);
document.getElementById("prvo_dugme").addEventListener('click', pokazi_prvog);
document.getElementById("drugo_dugme").addEventListener('click',pokazi_drugog);

function pomeranje(){
    let t = document.getElementById("desni_nav");
    t.style.width = '20%';
    let c = '<div class="link"><a href="http://127.0.0.1:5500/games/roullet/index.html">Roullet</a></div><br> <div class="link"><div class="link"><a href="#">Blackjack</a></div> <br><a href="#">Poker</a></div> <br> <div class="link"><a href="#">Slot</a> </div><br> <div class="link"><a href="#">Coin flip</a> </div><br><div class="link"><a href="#">Plinko</a></div>'
    t.innerHTML= '<button id="tranzicija" ></button> <br>d <br>e<br> s<br> n <br>i <br> <br>n <br>a <br>v <br>' + c
    t.style.textAlign = 'center'
    document.getElementById("tranzicija").addEventListener('click', vrati);

}

function vrati(){
    let x = document.getElementById("desni_nav");
    x.style.width = "100%"
    let c = '<div class="link"><a href="http://127.0.0.1:5500/games/roullet/index.html">Roullet</a></div><br> <div class="link"><div class="link"><a href="#">Blackjack</a></div> <div class="link"><a href="#">Poker</a></div> <br> <div class="link"><a href="#">Slot</a> </div><br> <div class="link"><a href="#">Coin flip</a> </div><br><div class="link"><a href="#">Plinko</a></div>'
    x.innerHTML = '<button id="dugme"></button> <p>desni nav</p>' + c
    document.getElementById("dugme").addEventListener('click', pomeranje);
}
