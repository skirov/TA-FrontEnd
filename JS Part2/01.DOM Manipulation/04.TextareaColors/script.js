function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRGBColor() {
    return "rgb(" + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ")";
}

function changeTextarea() {
    var fontColor = document.getElementById("fontColor").value;
    var backgroundColor = document.getElementById("backgroundColor").value;

    var getTextarea = document.getElementsByTagName("textarea")[0];

    getTextarea.style.background = backgroundColor;

    getTextarea.style.color = fontColor;
}