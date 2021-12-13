
var hikingMan = document.getElementById("hikingMan");
var container = document.getElementById("container");
var layerZero = document.getElementById("layerZero");
var layerOne = document.getElementById("layerOne");
var layerTwo = document.getElementById("layerTwo");
var layerThree = document.getElementById("layerThree");
var layerFour = document.getElementById("layerFour");
var layerFive = document.getElementById("layerFive");
var layerSix = document.getElementById("layerSix");

var mouseX = 0;
var mouseY = 0;

var centerScreen = (1500 / 2) - (1500 / 2);

window.addEventListener("mousemove", onmousemove);

function onmousemove (event) {
    console.log(event.pageX);
    mouseX = event.pageX - container.offsetLeft;
    mouseY = event.pageY;

    hikingMan.style.left = mouseX - 30 + "px";
    hikingMan.style.top = mouseY - 160 + "px";

    layerZero.style.left = -mouseX * 0.01 + centerScreen + "px";
    layerOne.style.left = -mouseX * 0.02 + centerScreen + "px";
    layerTwo.style.left = -mouseX * 0.03 + centerScreen + "px";
    layerThree.style.left = -mouseX * 0.04 + centerScreen + "px";
    layerFour.style.left = -mouseX * 0.05 + centerScreen + "px";
    layerFive.style.left = -mouseX * 0.06 + centerScreen + "px";
    layerSix.style.left = -mouseX * 0.07 + centerScreen + "px";

}

