var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var selected = document.getElementsByClassName("selected");
var c = canvas.getContext("2d");

var BG = new Image();
var stars1 = new Image();
BG.src = "Assets/background.jpg";
stars1.src = "Assets/scanlines.png";
var opacity = 0;

var Mx = canvas.width / 2;
var My = canvas.height / 2;

function mouse(e) {
    Mx = e.clientX;
    My = e.clientY;
}

if (selected[0].innerText == "Projects") {
    BG.src = "Assets/background2.jpg";
} else if (selected[0].innerText == "Contact") {
    BG.src = "Assets/background3.jpg";
}

BG.onload = function() {
    for (var i = 0; i < 100; i++) {
        window.setTimeout(function() {
            c.globalAlpha = opacity;
            console.log(opacity);
            opacity++;
        }, 10 * i);
    }
};

main();

document.body.addEventListener("mousemove", mouse);

c.imageSmoothingEnabled = false;

function main() {
    window.requestAnimationFrame(main);
    c.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    c.globalAlpha = opacity / 100;
    c.drawImage(BG, -canvas.width / 30 + Mx / 30, -canvas.height / 30 + My / 30, canvas.width + canvas.width / 30, canvas.height + canvas.height / 30);
    c.drawImage(stars1, 0, 0, 1980, 1080);
}
