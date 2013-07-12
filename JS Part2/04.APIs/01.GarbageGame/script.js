//Random functions
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRGBColor() {
    return "rgb(" + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ")";
}

function addEvent(element, eventType, eventHandler){
    element = document.getElementById(element);

    if (element.addEventListener){
     element.addEventListener (eventType, eventHandler, false);
     } else if (element.attachEvent) {
         element.attachEvent ('on' + eventType, eventHandler); //IE
     }
}

addEvent("startGame", "click", startGame);

function startGame(){

    document.getElementById("startGame").disabled = true;
    
    function binAllowDrop(ev)
    {
    	ev.preventDefault();
    }

    function binDrop(ev)
    {
    	ev.preventDefault();
    	var data=ev.dataTransfer.getData("garbage");
    	document.getElementById(data).parentNode.removeChild(document.getElementById(data));
    }

    function garbageDrag(ev)
    {
    	ev.dataTransfer.setData("garbage", ev.target.id);
    }

    addEvent("bin", "dragover", binAllowDrop);
    addEvent("bin", "drop", binDrop);

    function createGarbage(imgID) {

        var newGarbage = document.createElement("img");

        newGarbage.setAttribute("src", "images/paper.png");
        newGarbage.setAttribute("draggable", "true");
        newGarbage.setAttribute("id", ""+imgID+"");

        newGarbage.style.position = "absolute";
        newGarbage.style.top = getRandomInt(50,500) + "px";
        newGarbage.style.left = getRandomInt(300, 700) + "px";

        var parentElement = document.getElementById("garbage");

        parentElement.appendChild(newGarbage);

        addEvent(""+imgID+"", "dragstart", garbageDrag);
    }

    //localStorage.clear();

    //create 10 garbage elements
    for (var i = 0; i < 1; i++) {
    	createGarbage(i);
    };

    var gameDuration = new Date();

    function isGarbageCollected(){
        var collected = !(document.getElementById("garbage").hasChildNodes());

        if (collected) {
            gameDuration = (new Date() - gameDuration) / 1000;

            document.getElementById("scoreBoard").style.display="block";
        }
    }

    addEvent("submitScore", "click", saveAndPrintScore);

    function saveAndPrintScore(){
        var playerName = document.getElementById("playerName").value;
        localStorage.setItem(playerName, gameDuration);
        document.getElementById("playerName").disabled = true;
        document.getElementById("submitScore").disabled = true;

        var allPlayers = [];

        for (var key in localStorage){
            allPlayers.push({
                name: key,
                points: localStorage.getItem(key)
            });
        }   

        allPlayers.sort(function(a, b){
            return a.points-b.points
        });

        for (var i = 0; i < 5; i++) {
            document.getElementById("topScorers").innerHTML += "<li>" + allPlayers[i].name + ": " + allPlayers[i].points + "</li>";
        };
            
    }

    addEvent("bin", "mouseover", isGarbageCollected);
}