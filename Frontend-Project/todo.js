const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];


function filterFn(toDo){
    return 
}

function resetToDo(toDo){

}  

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function checkToDo(event){
    const square = event.target;
    const li = square.parentNode;
    let clicked = true;

    const loadedToDos = localStorage.getItem(TODOS_LS);
    const parsedToDos = JSON.parse(loadedToDos);

    parsedToDos.filter

    if(clicked === true){
        square.classList.remove("fa-square");
        square.classList.add("fa-check-square");
    }
    else{
        square.classList.remove("fa-check-square");
        square.classList.add("fa-square");
    }
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // localStorage는 js의 오브젝트를 무조건 string으로 저장하려고 함.
    // 따라서 object인 toDos의 데이터가 제대로 저장되지 않음.
    // object 형태인 toDos의 데이터를 제대로 저장하기 위해 JSON.stringify사용
    // JSON.stringify는 자바스크립트 object를 string으로 바꿔주는 역할을 함.
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = 0;
    const sqare = document.createElement("i");
    sqare.classList.add("far", "fa-square");
    sqare.addEventListener("click", checkToDo);
    const isComplete = false;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;

    li.appendChild(sqare);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    newId++;

    toDoList.append(li);

    const toDoObj = {
        text: text,
        id: newId,
        isComplete
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault(); 
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);

    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        // string 형태로 불러온 toDos를 다시 object로 변환.
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();