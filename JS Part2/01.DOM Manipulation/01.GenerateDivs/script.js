function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRGBColor() {
    return "rgb(" + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ")";
}

function createDivs(count) {
    var contentDiv = document.getElementById("divs");

    var docFragment = document.createDocumentFragment();

    for (var i = 0; i < count; i++) {
        var div = document.createElement("div");
        var style = div.style;

        style.position = "absolute";
        style.top = getRandomInt(0, 400) + "px";
        style.left = getRandomInt(0, 960) + "px";

        style.height = getRandomInt(20, 100) + "px";
        style.width = getRandomInt(20, 100) + "px";

        style.background = getRandomRGBColor();

        style.color = getRandomRGBColor();

        div.innerHTML = "<strong>" + i + "</strong>";

        style.borderRadius = getRandomInt(1, 20) + "px";
        style.borderColor = getRandomRGBColor();
        style.borderWidth = getRandomInt(1, 20) + "px";

        docFragment.appendChild(div);
    }

    contentDiv.appendChild(docFragment);
}

function generateDivs() {
    var numberOfDivsToGenerate = document.getElementById("numberOfDivs").value | 0;

    createDivs(numberOfDivsToGenerate);
}