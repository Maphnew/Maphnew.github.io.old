const upDownForm = document.querySelector(".js-upDownForm"),
    upDownInput = upDownForm.querySelector("input"),
    upDownList = document.querySelector(".js-upDownList");

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
    const currentValue = startTime.value + " ~ " + stopTime.value+ " - " + upDown.value;
    paintList(currentValue);
    startTime.value = "";
    stopTime.value = "";
    upDown.value = "";
}

function loadDataList(){
    const loadedList = localStorage.getItem(DATA_LS);
    console.log(typeof(loadedList));
    if(loadedList !== null){
        const parsedList = JSON.parse(loadedList);
        console.log(parsedList);
        // parsedList.forEach(function(list){
        //     paintList(list.text);
        // });
    }
}

function init(){
    loadDataList();
    upDownForm.addEventListener("click", handleSubmit);
}

init();