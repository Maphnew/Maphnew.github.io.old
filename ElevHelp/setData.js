const start = document.querySelector(".js-start"),
    startTime = document.querySelector(".js-startTime"),
    stopTime = document.querySelector(".js-stopTime"),
    upDown = document.querySelector(".js-upDown");

function setDataStart(){
    $(".js-startTime").val(clockTitle.innerText);
}

function setDataStop() {
    $(".js-stopTime").val(clockTitle.innerText);
}

function setDataUp() {
    $(".js-upDown").val("UP");
}
function setDataDown() {
    $(".js-upDown").val("DOWN");
}


function init(){
    $('.js-start').on('click', function () {
        setDataStart();
    });
    $('.js-stop').on('click', function () {
        setDataStop();
    });
    $('.js-up').on('click', function () {
        setDataUp();
    });
    $('.js-down').on('click', function () {
        setDataDown();
    });
}

init();