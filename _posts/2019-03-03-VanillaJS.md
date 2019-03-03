---
title: "VanillaJS"
date: 2019-03-03 18:08:30
categories: javascript
---

### VanillaJS
#### Making a JS Clock
From : https://academy.nomadcoders.co

- index.html
```
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

```
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
