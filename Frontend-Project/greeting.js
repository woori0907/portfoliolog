const form = document.querySelector(".js-form"),
    input = form.querySelector('input'),
    greeting = document.querySelector(".js-greetings");
//  querySelector : 클래스, 태그, 아이디 등 지정한 인자에 대한 것 중 가장 첫번째 것을 가져옴
// querySelectorAll : 지정한 요소를 모두 가져옴(배열 형식으로 저장)
const toDoFormCheck = document.querySelector(".js-toDoForm");
const USER_LS="currentUser";
const SHOWING_CN = "showing";
 
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    // preventDefalut : event의 기본동작을 막음
    event.preventDefault(); 
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    toDoFormCheck.classList.add(SHOWING_CN);
    greeting.innerText = `Hello, ${text}`
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }   
    else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();