let key_space = false; //32
let key_up = false; //38
let key_down = false; //40
let canvas;
let ctx;
let backgroundImage = new Image();

let rocket = {
    x: 100,
    y: 200,
    width: 200,
    height: 80,
    scr: 'img/rocket.png'
};

let ufo = {
    x: 500,
    y: 200,
    width: 100,
    height: 40,
    scr: 'img/ufo.png'
};
let background = {
    width: 720,
    height: 480,
    scr: 'img/background.jpg'
};

document.onkeydown = function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 32) {
        key_space = true;
    }
    if (e.keyCode == 38) {
        key_up = true;
    }
    if (e.keyCode == 40) {
        key_down = true;
    }
}

document.onkeyup = function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 32) { //leertaste gedrueckt
        key_space = false;
    }
    if (e.keyCode == 38) { 
        key_up = false;
    }
    if (e.keyCode == 40) { 
        key_down = false;
    }
}
function startGame() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    loadImages();
    draw();
    //calculate
}

function loadImages() { //bilder werden aufgerufen sobald das spiel startet
    backgroundImage.scr = 'img/background.jpg';
    
    rocket.img = new Image();
    rocket.img.scr = rocket.scr;

    ufo.img = new Image();
    ufo.img.src = ufo.scr;
}

function draw() { //Hier die Bilder hinzufügen(sichtbar machen)
    ctx.drawImage(backgroundImage, 0, 0); //0, 0 sind x und y Achse. 
    ctx.drawImage(rocket.img, rocket.x, rocket.y, rocket.width, rocket.height); //rocket.img greift auf den (container, rocket), 


    requestAnimationFrame(draw);
}
