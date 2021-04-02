const body = document.querySelector("body");

const IMG_NUMBER = 3;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `https://source.unsplash.com/random?landscape?1920x1080`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genNumber(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genNumber();
    paintImage(randomNumber);
}

init();