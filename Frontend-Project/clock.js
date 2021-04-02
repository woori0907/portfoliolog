const clockContatiner = document.querySelector(".js-clock"),
    clockTitle = clockContatiner.querySelector('h1');

console.log(clockContatiner);
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    // const seconds = date.getSeconds();
    
    clockTitle.innerText = `${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes}`;
}

function updateTime(){
    
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();