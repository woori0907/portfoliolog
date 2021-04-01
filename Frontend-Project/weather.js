const API_KEY = 'e624cfe13d5384545872f83e1779948d';
const COORDS = 'coords'; 
const weather = document.querySelector('.js-weather');

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
    // then : 외부 api참조시 데이터가 들어오는데 시간이 걸릴 수 있음. then은 이러한 경우 이전 함수가 완료된 이후에 실행되도록 함. 만약 이것을 사용하지 않고 바로 함수를 실행시켰을 경우 이전 작업이 완료되지 않은 상태에서 다음 문장이 실행되어 오류가 발생할 수 있음.
}

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
    getWeather(latitude, longitude);
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
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }   
}

function init(){
    loadCoords();
}

init();