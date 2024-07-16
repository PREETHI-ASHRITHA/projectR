function fun(){
    var x = new Date();
    document.getElementsByClassName("hours")[0].innerHTML=x.getHours();
    document.getElementsByClassName("minutes")[0].innerHTML=x.getMinutes();
    document.getElementsByClassName("seconds")[0].innerHTML=x.getSeconds();
    document.getElementsByClassName("milli seconds")[0].innerHTML=x.getMilliseconds();
    if(x.getSeconds() == 40){
        clearInterval(address);
    }
}
var address=setInterval(fun,1);

function start_time(){
        var x = document.getElementsById("start")[0];
        x.style.start_time=0
}

function stop_time(){
    var x = document.getElementsById("stop")[0];
    x.style.stop_time=0
}

function reset_time(){
    var x = document.getElementsById("reset")[0];
    x.style.reset_time=0
}