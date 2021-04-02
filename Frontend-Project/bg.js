const backGround = document.querySelector(".js-backGround");

const IMG_NUMBER = 3;


function paintImage(imgNumber){
    const image = new Image();
    image.src = `https://source.unsplash.com/1600x900/?landscape`;
    image.classList.add("bgImage");
    backGround.style.backgroundImage = `url('${image.src}')`;
    backGround.style.backgroundPosition = 'center center';
    backGround.style.backgroundSize = 'cover';
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