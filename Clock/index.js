// implemented outside of function to make the degree count + 6 indefinitely, so there isn't a looping animation every 60 seconds
const now = new Date();
const seconds = now.getSeconds();
var secondsDeg = ((seconds / 60) * 360) + 90;

function setSeconds() {
    const secondHand = document.querySelector('.second-hand');
    secondsDeg += 6;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
}

function setMinutes() {
    const minuteHand = document.querySelector('.min-hand');
    const now = new Date();
    const minutes = now.getMinutes();
    const minDeg = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minDeg}deg`;
}

function setHours() {
    const hourHand = document.querySelector('.hour-hand');
    const now = new Date();
    const hours = now.getHours();
    const hourDeg = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg`;
    console.log(hours);
}

function setDate() {
    setSeconds();
    setMinutes();
    setHours();
}

setInterval(setDate, 1000);

// display current time
/*const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();*/




