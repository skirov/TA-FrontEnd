function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRGBColor() {
    return "rgb(" + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ")";
}
function createDivs() {
    var contentDiv = document.getElementsByTagName("body")[0];

    var docFragment = document.createDocumentFragment();

    for (var i = 0; i < 5; i++) {
        var width = 100;
        var height = 100;

        var leftPos = 50;
        var topPos = 50;

        var borderRadius = 100;
        var borderWidth = 2;

        var div = document.createElement('div');
        var style = div.style;

        style.position = 'absolute';
        style.left = leftPos + 'px';
        style.top = topPos + 'px';

        style.backgroundColor = getRandomRGBColor();

        style.border = borderWidth + 'px solid ' + getRandomRGBColor();
        style.borderRadius = borderRadius + 'px';

        style.margin = 250 + 'px';

        style.width = width + 'px';
        style.height = height + 'px';

        document.body.appendChild(div);

        docFragment.appendChild(div);
    }

    contentDiv.appendChild(docFragment);
}

createDivs();

var allDivs = document.querySelectorAll('div');
var angle = 0;
var radius = 50;
var maxAngle = false;

function animateDivs() {
    for (i = 0; i < 5; i++) {
        allDivs[i].style.left = Math.cos(angle + 2 * Math.PI / allDivs.length * i) / radius * 10000 + 'px';
        allDivs[i].style.top = Math.sin(angle + 2 * Math.PI / allDivs.length * i) / radius * 10000 + 'px';
    }

    angle = angle + 0.1;

    setTimeout(animateDivs, 100);
}

animateDivs();
