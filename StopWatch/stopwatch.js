let start=document.querySelector(".start");
let reset=document.querySelector(".reset");
let hr=document.querySelector("#hr");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");
turn0=true;
timer=null;
let [seconds,minutes,hours]=[0,0,0];
function stopWatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h=hours<10? "0"+hours:hours;
    let m=minutes<10? "0"+minutes:minutes;
    let s=seconds<10? "0"+seconds:seconds;
    hr.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;

}

let Startwatch=()=>{
    console.log(hr.innerText,min.innerText,sec.innerText);
    if(turn0){
        turn0=false;
        start.innerText="Stop";
        timer=setInterval(stopWatch,1000);
        
    }
    else{
        turn0=true;
        start.innerText="Start";
        clearInterval(timer);
    }
}
let resetBtn=()=>{
    clearInterval(timer);
    [seconds,minutes,hours]=[0,0,0];
    turn0=true;
    timer=null;
    hr.innerHTML="00";
    min.innerHTML="00";
    sec.innerHTML="00";
    start.innerText="Start";
}
start.addEventListener("click",Startwatch);
reset.addEventListener("click",resetBtn);