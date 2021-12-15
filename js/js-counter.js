"use strict";
var nbr = 0;
var loaded = function () {
    var box = document.getElementById("box");
    if (box !== null) {
        box.value = nbr.toString();
        box.style.textAlign = "center";
        box.style.width = "100px";
    }
};
var change = function (num) {
    nbr += num;
    changeFormat();
};
var changeFormat = function () {
    var box = document.getElementById("box");
    if (box !== null) {
        box.value = nbr.toString();
        box.style.textAlign = "center";
        box.style.width = "100px";
        box.style.color = (nbr % 2 == 0) ? "red" : "black";
        box.style.fontWeight = (nbr % 3 == 0) ? "bold" : "normal";
        box.style.fontStyle = (nbr % 5 == 0) ? "italic" : "normal";
    }
};
