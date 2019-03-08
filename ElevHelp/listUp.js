const upDownForm = document.querySelector(".js-upDownForm"),
    upDownInput = upDownForm.querySelector("input"),
    upDownList = document.querySelector(".js-upDownList"),
    slider = document.querySelector(".js-slider");

const DATA_LS = 'data';

let data = [];

function deleteOne(){
    const btn = event.target;
    const li = btn.parentNode;
    upDownList.removeChild(li);
    const cleanList = data.filter(function (list) {
        return list.id !== parseInt(li.id);
    });
    data = cleanList;
    saveData();
}

function saveData(){
    localStorage.setItem(DATA_LS, JSON.stringify(data));
}

function paintList(currentValue){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = data.length + 1;
    delBtn.innerText = "x";
    delBtn.addEventListener("click", deleteOne);
    span.innerText = currentValue;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    upDownList.appendChild(li);
    const ListObj = {
        text: currentValue,
        id: newId
    };
    data.push(ListObj);
    saveData();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = startTime.value + " ~ " + stopTime.value+ " - " + upDown.value + ", "+ slider.value +"층";
    paintList(currentValue);
    startTime.value = "";
    stopTime.value = "";
    upDown.value = "";
    slider.value ="";
}

function loadDataList(){
    const loadedList = localStorage.getItem(DATA_LS);
    if(loadedList !== null){
        const parsedList = JSON.parse(loadedList);
    }
}

function init(){
    loadDataList();
    upDownForm.addEventListener("click", handleSubmit);
}

init();