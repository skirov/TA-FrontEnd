var ball = document.getElementById("ball");
var directionTop = 1;
var directionLeft = 1;
var leftPos = 52;
var topPos = 200;

setInterval(function () {
    topPos += directionTop;
    leftPos += directionLeft;
    if (topPos == 290) {
        directionTop *= -1;
    }
    if (leftPos==290) {
        directionLeft *= -1;
    }
    if (topPos==10) {
        directionTop *= -1;
    }
    if (leftPos==10) {
        directionLeft *= -1;
    }

    ball.style.left = leftPos + "px";
    ball.style.top = topPos + "px";
}, 10);