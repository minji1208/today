'use strict';
var ddaytimer = setInterval (dayGap, 1000)
function dayGap () {
    var dday = new Date("November 24, 2017 00:00:00").getTime();//디데이
    var nowday = new Date();//현재
    nowday = nowday.getTime();//밀리세컨드 단위변환
    var distance = dday - nowday;//디데이에서 현재까지 뺀다.

    var d = Math.floor(distance / (1000 * 60 * 60 * 24));//일

    var h = Math.floor((distance / (1000*60*60)) % 24);//시간
    var m = Math.floor((distance / (1000*60)) % 60);//분
    var s = Math.floor((distance / 1000) % 60);//초

    if (distance <= 0) {//당일넘어섰을때, dday로 변경
        document.getElementById("dday-timer").innerHTML = "D-day";
    } else {
        document.getElementById("time-day").innerHTML = d;
        document.getElementById("time-hour").innerHTML = h;
        document.getElementById("time-minute").innerHTML = m;
        document.getElementById("time-second").innerHTML = s;
    }
}
