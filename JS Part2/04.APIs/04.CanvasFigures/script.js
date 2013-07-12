var canvas = document.getElementsByTagName("canvas")[0];
var canvasContext = canvas.getContext('2d');


// Human Head
canvasContext.fillStyle = '#90CAD7';
canvasContext.strokeStyle = '#275A65';
canvasContext.lineWidth = 4;   

// Head
drawEllipse(100, 100, 100, 90);

// Hat
drawEllipse(90, 88, 120, 20);
drawRect(125, 30, 50, 60);
drawEllipse(125, 88, 50, 10);
canvasContext.strokeStyle = '#90CAD7';
drawRect(128, 88, 44, 5);
canvasContext.strokeStyle = '#275A65';
drawEllipse(125, 20, 50, 15);

// Eyes
drawEllipse(120, 120, 20, 10);
canvasContext.fillStyle = '#20525D';
drawEllipse(125, 120, 4, 10);
canvasContext.fill();
canvasContext.fillStyle = '#90CAD7';
drawEllipse(160, 120, 20, 10);
canvasContext.fillStyle = '#20525D';
drawEllipse(165, 120, 4, 10);
canvasContext.fill();

// Nouse
canvasContext.moveTo(150, 135);
canvasContext.lineTo(135, 160);
canvasContext.moveTo(135, 160);
canvasContext.lineTo(150, 160);
canvasContext.stroke();

// Mouth
canvasContext.fillStyle = '#90CAD7';
drawEllipse(130, 170, 30, 10);




// Bike
canvasContext.lineWidth = 3;
// Tires
drawEllipse(40, 350, 100, 100);
drawEllipse(240, 350, 100, 100);
// Frames
canvasContext.moveTo(90, 400);
canvasContext.lineTo(150, 330);
canvasContext.lineTo(275, 330);
canvasContext.lineTo(175, 400);
canvasContext.lineTo(90, 400);
// Chain wheel
canvasContext.moveTo(190, 400);
canvasContext.arc(178, 400, 10, 0, Math.PI * 2, true);
// Pedals
canvasContext.moveTo(175, 393);
canvasContext.lineTo(160, 380);
canvasContext.moveTo(183, 408);
canvasContext.lineTo(195, 417);
// Seat
canvasContext.moveTo(180, 400);
canvasContext.lineTo(140, 300);
canvasContext.moveTo(120, 300);
canvasContext.lineTo(160, 300);
// Steering wheel
canvasContext.moveTo(290, 400);
canvasContext.lineTo(270, 290);
canvasContext.lineTo(230, 300);
canvasContext.moveTo(270, 290);
canvasContext.lineTo(300, 260);
canvasContext.stroke();
canvasContext.closePath();



// House
canvasContext.fillStyle = "#975B5B";
canvasContext.strokeStyle = "#000";
drawRect(400, 150, 200, 200);

// Roof
canvasContext.beginPath();
canvasContext.moveTo(600,150);
canvasContext.lineTo(500,50);
canvasContext.lineTo(400,150);
canvasContext.closePath();
canvasContext.fill();
canvasContext.stroke();

// Chimney
canvasContext.beginPath();
canvasContext.moveTo(560, 120);
canvasContext.lineTo(560, 70);
canvasContext.lineTo(540, 70);
canvasContext.lineTo(540, 120);
canvasContext.stroke();
canvasContext.fill();
canvasContext.closePath();

canvasContext.strokeStyle = "#000";
canvasContext.lineWidth = 1;
drawEllipse(540, 65, 20, 7);

// Windows
canvasContext.strokeStyle = "#975B5B";
canvasContext.fillStyle = "#000";
drawWindow(415, 170, 70, 50);
drawWindow(515, 170, 70, 50);
drawWindow(515, 240, 70, 50);

// Door
canvasContext.strokeStyle = "#000";
canvasContext.fillStyle = "#975B5B";
drawRect(415, 270, 70, 80);
canvasContext.moveTo(415,270);
canvasContext.arc(450, 270, 35, 0, Math.PI, true);
canvasContext.moveTo(450, 270);
canvasContext.lineTo(450, 350);
canvasContext.moveTo(440, 310);
canvasContext.arc(440, 310, 4, 0, Math.PI * 2, true);
canvasContext.moveTo(460, 310);
canvasContext.arc(460, 310, 4, 0, Math.PI * 2, true);
canvasContext.stroke();
canvasContext.fill();



//Draw functions
function drawLine(from, to) {
    canvasContext.moveTo(from.left, from.top);
    canvasContext.lineTo(to.left, to.top);
}

function drawEllipse(x, y, w, h) {
    var kappa = .5522848,
      ox = (w / 2) * kappa, // control point offset horizontal
      oy = (h / 2) * kappa, // control point offset vertical
      xe = x + w,           // x-end
      ye = y + h,           // y-end
      xm = x + w / 2,       // x-middle
      ym = y + h / 2;       // y-middle

    canvasContext.beginPath();
    canvasContext.moveTo(x, ym);
    canvasContext.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    canvasContext.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    canvasContext.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    canvasContext.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    canvasContext.stroke();
    canvasContext.fill();
    canvasContext.closePath();
}

function drawWindow(left, top, width, height) {
    drawRect(left, top, width, height);
    canvasContext.moveTo(left, top + height / 2);
    canvasContext.lineTo(left + width, top + height / 2);
    canvasContext.moveTo(left + width / 2, top);
    canvasContext.lineTo(left + width / 2, top + height);
    canvasContext.stroke();
}

function drawRect(left, top, width, height) {
    canvasContext.strokeRect(left,top,width, height);
    canvasContext.fillRect(left + 1, top + 1, width - 2, height - 2);
}