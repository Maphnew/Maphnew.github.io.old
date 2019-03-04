const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds} 
        // .${milliseconds < 10 ? `00${milliseconds}` : milliseconds < 100 ? `0${milliseconds}`: milliseconds}
        `;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
