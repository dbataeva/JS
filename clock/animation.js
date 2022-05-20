function rotateSecondHand() {
	let date = new Date();
	let secDegree = date.getSeconds() * 6 + howMuchTimesSec + 90; 
	let minDegree = date.getMinutes() * 6 + 90 + 6 / 60 * date.getSeconds();
	let hourDegree = (date.getHours() - 12) * 30 + 90 + 30 / 60 * date.getMinutes();

	second.style.transform = `rotate(${secDegree}deg)`;
	minute.style.transform = `rotate(${minDegree}deg)`;
	hour.style.transform = `rotate(${hourDegree}deg)`;
}

function addHowMuchTimesSec() {
	howMuchTimesSec += 360;
}

function addHowMuchTimesSecOnce() {
	howMuchTimesSec += 360;
	setInterval(addHowMuchTimesSec, 1000 * 60);
}

function addHowMuchTimesMin() {
	howMuchTimesMin += 1;
}

function addHouMuchTimesHour() {
	howMuchTimesHour += 1;
}

const hour = document.querySelector('div[data-hand="hour"]');
const minute = document.querySelector('div[data-hand="minute"]');
const second = document.querySelector('div[data-hand="second"]');

let date = new Date();
let secDegree = date.getSeconds() * 6 + 90;
let minDegree = date.getMinutes() * 6 + 90;
let hourDegree = (date.getHours() - 12) * 30 + 90 + 30 / 60 * date.getMinutes();
let howMuchTimesSec = 0;
let howMuchTimesMin = 1;
let howMuchTimesHour = 1;
let diff;

if (secDegree > 360) {
	diff = secDegree - 360;
} else {
	diff = 360 - secDegree;
}
second.style.transform = `rotate(${secDegree}deg)`;
minute.style.transform = `rotate(${minDegree}deg)`;
hour.style.transform = `rotate(${hourDegree}deg)`;

console.log(diff);

setTimeout(addHowMuchTimesSecOnce, 1000 * diff);
setInterval(rotateSecondHand, 1000);
