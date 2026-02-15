const startBtn =document.getElementById("start-btn");
const stopBtn =document.getElementById("stop-btn");
const resetBtn =document.getElementById("reset-btn");
const timer =document.getElementById("timer");
let interval;
let timeleft = 1500;
function updateTimer(){
    let minutes = Math.floor(timeleft/60);
    let seconds = timeleft%60;
    let formattedtime = ` ${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`;
    timer.innerHTML = formattedtime;
}
function startTimer(){
    interval = setInterval(()=>{
        timeleft--;
        updateTimer();
        if(timeleft  === 0){
        clearInterval(interval);
        alert("Time's Up!");
        timeleft = 1500;
        updateTimer();
    }
    },1000);
    
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeleft = 1500;
    updateTimer();
}



startBtn.addEventListener("click",startTimer);
stopBtn.addEventListener("click",stopTimer);
resetBtn.addEventListener("click",resetTimer);


