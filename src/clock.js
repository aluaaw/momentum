const clockContainer = document.querySelector(`.js-clock`),
      clockTitle = clockContainer.querySelector(`h2`);

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${calTime(hours)}:${calTime(minutes)}:${calTime(seconds)}`;
}

function calTime(time) {
    const LIMIT = 10;
    if (time < LIMIT) {
        return `0${time}`;
    } else {
        return `${time}`;
    }
}

function init() {
    getTime();
    setInterval(getTime(), 1000);
}

init();