function rotateSecondHand() {
	secDegree += 6;
	second.style.transform = `rotate(${secDegree}deg)`;

	minDegree += 0.1;
	minute.style.transform = `rotate(${minDegree}deg)`;

	hourDegree += 0.01;
	hour.style.transform = `rotate(${hourDegree}deg)`;
}

const hour = document.querySelector('div[data-hand="hour"]');
const minute = document.querySelector('div[data-hand="minute"]');
const second = document.querySelector('div[data-hand="second"]');

let date = new Date();
let h = date.getHours() - 12;
let secDegree = date.getSeconds() * 6 + 90;
let minDegree = date.getMinutes() * 6 + 90;
let hourDegree = date.getHours() * 30 + 90;

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

setInterval(rotateSecondHand, 1000);
