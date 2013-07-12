//Random functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRGBColor() {
    return "rgb(" + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ")";
}

//Module
var movingShapesModule = (function () {

    function createDiv() {
        var div = document.createElement("div");
        div.style.width = "20px";
        div.style.height = "20px";
        div.style.color = getRandomRGBColor();
        div.style.border = "1px" + " solid " + getRandomRGBColor();
        div.style.backgroundColor = getRandomRGBColor();
        div.style.position = "absolute";
        div.style.textAlign = "center";
        div.style.borderRadius = "20px";

        return div;
    }

    function addRectangle() {
        var div = createDiv();

        document.body.appendChild(div);

        moveInRectangle(div);
    }

    function addCircle() {
        var div = createDiv();

        document.body.appendChild(div);

        moveInCircle(div);
    }

    function moveInRectangle(element) {
        var top = 50;
        var left = 50;

        setInterval(function () {
            if (top <= 200 && left == 50) {
                top++;
            }
            else if (left <= 200 && top > 199) {
                left++;
            }
            else if (left > 199 && top >= 50) {
                top--;
            }

            else if (top < 51 && left >= 50) {
                left--;
            }
            element.style.top = top + "px";
            element.style.left = left + "px";
        }, 20);
    }

    function moveInCircle(element) {
        element.setAttribute("angleAttr", "0");
        element.style.left = "650px";
        element.style.top = "200px";

        setInterval(function () {
            var angle = (element.getAttribute("angleAttr")) * (Math.PI / 180);
            var left = 150 * Math.cos(angle) + 500;
            var top = 150 * Math.sin(angle) + 200;
            console.log(angle);
            element.style.left = left + "px";
            element.style.top = top + "px";
            element.attributes.angleAttr.nodeValue++;
        }, 20);
    }

    function add(string) {
        if (string == "rect") {
            addRectangle();
        }

        if (string == "ellipse") {
            addCircle();
        }
    }

    return {
        add: add
    }
})();