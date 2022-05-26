var seconds = document.querySelector(".seconds");
var tens = document.querySelector(".tens");
var btnStart = document.querySelector("#btn-start");
var btnStop = document.querySelector("#btn-stop");
var btnReset = document.querySelector("#btn-reset");
var second = 00, ten = 00, interval;

btnStart.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

btnStop.addEventListener("click", () => {
    clearInterval(interval);
})

btnReset.addEventListener("click", () => {
    clearInterval(interval);
    second = "00";
    ten = "00";
    seconds.innerHTML = second;
    tens.innerHTML = ten;
})

const startTimer = () => {
    ten++;
    if(ten<=9){
        tens.innerHTML= "0" + ten;
    }
    if(ten>9){
        tens.innerHTML = ten;
    }
    if(ten>99){
        second++;
        if(second<=9){
            seconds.innerHTML = "0" + second;
        }
        if(second>9){
            seconds.innerHTML = second;
        }
        ten = 00;
        tens.innerHTML = ten;
    }
}