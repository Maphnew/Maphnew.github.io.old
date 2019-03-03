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
2. display : none / block
3. form

- greetings.js

```javascript
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){

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
