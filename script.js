const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const depart = new Date('August 11, 2021 04:25:00');

function countdown() {
    const departDate = new Date(depart);
    const currentDate = new Date();

    const totalSeconds = new Date(departDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = (Math.floor(totalSeconds / 3600) % 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    //console.log(days, hours, mins, seconds);


    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;

}

// initial call
countdown();

setInterval(countdown, 1000);

