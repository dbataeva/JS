function rotateHands() {
	secDegree += 6;
	second.style.transform = `rotate(${secDegree}deg)`;

	minDegree += 0.1;
	minute.style.transform = `rotate(${minDegree}deg)`;

	hourDegree += 0.008333333;
	hour.style.transform = `rotate(${hourDegree}deg)`;
}

const hour = document.querySelector('div[data-hand="hour"]');
const minute = document.querySelector('div[data-hand="minute"]');
const second = document.querySelector('div[data-hand="second"]');

let date = new Date();
let sec = date.getSeconds();
let secDegree = sec * 6 + 90;
let min = date.getMinutes();
let minDegree = min * 6 + 90 + 6 / 60 * sec;
let hourDegree = (date.getHours() - 12) * 30 + 90 + 30 / 60 * min;

if (secDegree > 360) {
	secDegree -= 360;
}
if (minDegree > 360) {
	minDegree -= 360;
}
if (hourDegree > 360) {
	hourDegree -= 360;
}
second.style.transform = `rotate(${secDegree}deg)`;
minute.style.transform = `rotate(${minDegree}deg)`;
hour.style.transform = `rotate(${hourDegree}deg)`;

setInterval(rotateHands, 1000);
