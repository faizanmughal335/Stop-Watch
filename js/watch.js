

var min = 0;
var sec = 0;
var msec = 0;
var minheading = document.getElementById("min")
var secheading = document.getElementById("sec")
var msecheading = document.getElementById("msec")
var intervel;
function timer(){
    msec++
    msecheading.innerHTML disabled true = msec;
    if (msec >= 100){
        sec++
        secheading.innerHTML = sec
        msec = 0;
    } else if (sec >= 60){
        min++
        sec= 0;
        minheading.innerHTML = min
    }
}
intervel = setInterval (timer,10)
  
function start(){
    intervel = setInterval(timer,10)    
}
function stop(){
    intervel = setInterval(timer,0)
    
}
function stop(){
    clearInterval(intervel)
    
}
function reset(){
    min=0
    sec=0
    msec=0
    minheading.innerHTML = min
    secheading.innerHTML = sec
    msecheading.innerHTML = msec
    stop()
}
