let timer = document.querySelector('.timerOfGame');

let maxCount = 13;
function startGame() {

    let timerF;
    maxCount--;

    timer.innerHTML =  maxCount;
    timerF = setTimeout("startGame()", 1000);
    if(maxCount == 0){
        clearInterval(timerF);
    }
}
