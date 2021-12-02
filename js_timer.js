var myMessage = document.getElementById("message");

function showMessage(){

    myMessage.className = "show";
}

setTimeout(showMessage, 2500);

var colourChanger = document.getElementById("colour-changer");
var colours = ["white", "green", "black", "pink"];
var counter = 0;

function changeColour(){

    if (counter >=  colours.lenght){
        counter = 0;
    }
    colourChanger.style.background = colours[counter];
    counter++;
}

setInterval(changeColour, 2500);
