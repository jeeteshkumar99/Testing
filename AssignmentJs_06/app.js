var minutes = 0
var seconds = 0
var miliseconds = 0
var hours = 0
var getmili = document.querySelector('#msec')
var getsec = document.querySelector('#sec')
var getmin = document.querySelector('#min')
var gethour = document.querySelector('#hour')

var interval;

function start(){
interval = setInterval(function(){
    miliseconds++
    getmili.innerHTML = miliseconds
    if(miliseconds >= 100){
        seconds++
        getsec.innerHTML = seconds
        miliseconds = 0
    }else if(seconds >= 60){
        minutes++
        getmin.innerHTML = minutes
        seconds = 0
    }else if(minutes >=60){
        hours ++
        gethour.innerHTML = hours
        minutes = 0
    }else if(hours >=24){
        hours = 0
    }
},10)
}

function pause(){
    clearInterval(interval)
}

function reset(){
    minutes = 0
    seconds = 0
    miliseconds = 0
    getmili.innerHTML = miliseconds
    getmin.innerHTML = minutes
    getsec.innerHTML = seconds
}

