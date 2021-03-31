const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude,
        longitude
    };
    // 오브젝트 선언시 key와 값의 이름이 같을 경우 하나만 적어도 됨.
    saveCoords(coordObj);
}

function handleGeoError(){
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);

    if(loadedCords === null){
        askForCoords();
    }
    else{

    }
}

function init(){
    loadCoords();
}

init();