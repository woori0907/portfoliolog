const backGround = document.querySelector(".js-backGround");

const IMG_NUMBER = 3;


function paintImage(imgNumber){
    const imageURL = "https://source.unsplash.com/1600x900/?nightsky";
    backGround.style.backgroundImage = `url('${imageURL}')`;
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