---
title: "VanillaJS"
date: 2019-03-03 18:08:30
categories: javascript
---

### VanillaJS
#### Making a JS Clock
From : https://academy.nomadcoders.co

- index.html
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Something</title>
        <link rel="stylesheet" href="index.css"/>
    </head>
    <body>
        <div class="js-clock">
            <h1>00:00</h1>
        </div>
        <script src="clock.js"></script>
    </body>
</html>
```

- clock.js

```javascript
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
```

1. Backtick and Interpolation
2. querySelector();
3. innerText

4. setInterval(func, 3000);
5. div.js-Tile enter(vscode)
6. mini if


#### Saving the User Name
1. LocalStorage
2. form css {display : none / block};
3. form -> send somewhere (refreshed)
4. event.preventDefault();
5. input.value
6. form.classList.remove("showing"); .showing - display : block
7. greeting.classList.add("showing"); .showing - display : block
8. localStorage.setItem(USER_LS, text);


- greetings.js

```javascript
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
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
    greeting.innerText = `Hello ${text}!`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
```

- index.css

```css
.form,
.greetings{
    display: none;
}

.showing{
    display: block;
}
```

- index.html

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Something</title>
        <link rel="stylesheet" href="index.css"/>
    </head>
    <body>
        <div class="js-clock">
            <h1>00:00</h1>
        </div>
        <form class="js-form form">
            <input type="text" placeholder="What is your name?" />
        </form>
        <h4 class="js-greetings greetings"></h4>
        <script src="clock.js"></script>
        <script src="greeting.js"></script>
    </body>
</html>
```


#### Making a To Do List

1. document.createElement("li"); or "button"
2. addEventListener("submit", fucn)
3. toDoList.appendChild(li); // toDoList: ul class="js-toDoList"
4. JavaScript Object Notation - JSON.stringify(json);
5. forEach(fucntion(each){ function(each.text); });
6. filter(function(each){ return each.id !== parseInt(li.id); });
7. toDoList.removeChild(event.target.parentNode);


- todo.js

```javascript
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerHTML = "x";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
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
```

- index.html
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Something</title>
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="index.css"/>
    </head>
    <body>
        <div class="js-clock">
            <h1>00:00</h1>
        </div>
        <form class="js-form form">
            <input type="text" placeholder="What is your name?" />
        </form>
        <h4 class="js-greetings greetings"></h4>
        <form class="js-toDoForm">
            <input type="text" placeholder="Write a to do" />
        </form>
        <ul class="js-toDoList">
            
        </ul>
        <script src="clock.js"></script>
        <script src="greeting.js"></script>
        <script src="todo.js"></script>
    </body>
</html>
```
